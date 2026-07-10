#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const OFFICIAL_LOGO = '/fishfull.jpg';
const COPYRIGHT = 'Copyright © 2026Fishfull漁有料版權所有';
const LEGACY_BRAND_CLASS = ['brand', 'logo', 'img'].join('-');
const GLOBAL_FOOTER_CLASS = 'fishfull-global-footer';
const TEXT_EXTENSIONS = new Set(['.html', '.js', '.css', '.json']);
const SKIP_DIRS = new Set(['.git', 'node_modules', '.vercel', 'public']);

function normalizeRelative(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function fullPath(relativePath) {
  return path.join(ROOT, relativePath);
}

function assertExists(relativePath) {
  if (!fs.existsSync(fullPath(relativePath))) {
    throw new Error(`Missing required file: ${relativePath}`);
  }
}

function readText(relativePath) {
  assertExists(relativePath);
  return fs.readFileSync(fullPath(relativePath), 'utf8');
}

function assertContains(relativePath, needle, reason) {
  if (!readText(relativePath).includes(needle)) {
    throw new Error(`${relativePath}: missing ${reason}: ${needle}`);
  }
}

function assertNotContains(relativePath, needle, reason) {
  if (readText(relativePath).includes(needle)) {
    throw new Error(`${relativePath}: contains ${reason}: ${needle}`);
  }
}

function walkFiles(dir = ROOT, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const target = path.join(dir, entry.name);
    const parts = normalizeRelative(target).split('/');
    if (parts.some((part) => SKIP_DIRS.has(part))) continue;

    if (entry.isDirectory()) {
      walkFiles(target, results);
      continue;
    }

    if (entry.isFile()) results.push(target);
  }
  return results;
}

function textFiles() {
  return walkFiles().filter((filePath) => TEXT_EXTENSIONS.has(path.extname(filePath))).sort();
}

function htmlFiles() {
  return textFiles().filter((filePath) => filePath.endsWith('.html'));
}

function assertRequiredFiles() {
  for (const requiredPath of [
    'index.html',
    'ar.html',
    'catch.html',
    'map.html',
    'home.js',
    'home-ocean-theme.css',
    'fishfull.jpg',
    'fishfull-brand.css',
    'fishfull-site-shell.js',
    'fishfull-iteration.js',
    'site-i18n.js',
    'vercel.json',
    'assets/fishfull-demo-qr.svg',
    'assets/models/crimson-sea-bream.gltf',
    'assets/models/pacific-mackerel.gltf',
    'assets/models/mahi-mahi.gltf',
    'pages/about.html',
    'pages/catch.html',
    'pages/map.html',
    'pages/map-vr-demo.css',
    'pages/map-vr-demo.js',
    'pages/sustainability.html'
  ]) {
    assertExists(requiredPath);
  }
}

function hasRewrite(rewrites, source, destination) {
  return rewrites.some((rewrite) => rewrite.source === source && rewrite.destination === destination);
}

function assertValidVercelConfig() {
  const config = JSON.parse(readText('vercel.json'));
  const rewrites = Array.isArray(config.rewrites) ? config.rewrites : [];
  for (const [source, destination] of [
    ['/ar', '/ar.html'],
    ['/pages/ar', '/ar.html']
  ]) {
    if (!hasRewrite(rewrites, source, destination)) {
      throw new Error(`vercel.json: missing rewrite ${source} -> ${destination}`);
    }
  }

  for (const source of ['/catch', '/map']) {
    if (rewrites.some((rewrite) => rewrite.source === source)) {
      throw new Error(`vercel.json: ${source} must be served by its root HTML single source, not rewritten`);
    }
  }
}

function assertNoLegacyGeneratedMarkup() {
  const offenders = [];
  const legacySvgClass = new RegExp(`<svg\\b[^>]*class=["'][^"']*\\b${LEGACY_BRAND_CLASS}\\b`, 'i');
  const footerMarkup = new RegExp(`<footer\\b[^>]*class=["'][^"']*\\b${GLOBAL_FOOTER_CLASS}\\b`, 'i');

  for (const filePath of htmlFiles()) {
    const rel = normalizeRelative(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    if (legacySvgClass.test(content)) offenders.push(`${rel}: generated logo SVG`);
    if (footerMarkup.test(content)) offenders.push(`${rel}: legacy global footer markup`);
  }

  if (offenders.length) {
    throw new Error(`Generated logo/footer markup must be removed:\n${offenders.join('\n')}`);
  }
}

function assertOfficialLogoGuard() {
  const shell = readText('fishfull-site-shell.js');
  for (const term of [
    `var logoSrc = '${OFFICIAL_LOGO}'`,
    'legacyBrandClass',
    'generatedTrademarkSelector',
    'function removeGeneratedTrademarkVisuals',
    'function removeAlternateTrademarkVisuals',
    'function dedupeBrandLogos',
    'function removeDuplicateCopyrightText',
    'footer.site-footer.fishfull-global-footer::before',
    COPYRIGHT
  ]) {
    if (!shell.includes(term)) {
      throw new Error(`fishfull-site-shell.js missing official-logo guard term: ${term}`);
    }
  }

  if (shell.includes("src.indexOf('fishfull') !== -1")) {
    throw new Error('fishfull-site-shell.js must not mistake the catch QR asset for a brand logo');
  }

  for (const filePath of htmlFiles()) {
    const content = fs.readFileSync(filePath, 'utf8');
    const rel = normalizeRelative(filePath);
    const logoTags = content.match(/<img[^>]+(?:brand|logo|商標)[^>]*>/gi) || [];
    for (const tag of logoTags) {
      if (!tag.includes(OFFICIAL_LOGO)) {
        throw new Error(`${rel}: brand/logo image must use ${OFFICIAL_LOGO}: ${tag}`);
      }
    }
    const copyrightCount = content.split(COPYRIGHT).length - 1;
    if (copyrightCount > 1) {
      throw new Error(`${rel}: static copyright statement appears ${copyrightCount} times`);
    }
  }
}

function assertCopyrightFooterSource() {
  const shell = readText('fishfull-site-shell.js');
  for (const term of [
    'function ensureCopyrightFooter',
    'data-fishfull-copyright',
    'footer.textContent',
    'ensureCopyrightFooter();'
  ]) {
    if (!shell.includes(term)) {
      throw new Error(`fishfull-site-shell.js missing copyright footer source term: ${term}`);
    }
  }
}

function assertLocalPageAssetsExist() {
  const offenders = [];
  const attrPattern = /\b(?:href|src)=["']([^"'#?]+)(?:[?#][^"']*)?["']/gi;
  const staticPageExtensions = new Set(['.css', '.js', '.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif', '.ico', '.json', '.gltf', '.glb', '.bin', '.webmanifest']);

  for (const filePath of htmlFiles()) {
    const rel = normalizeRelative(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    let match;
    while ((match = attrPattern.exec(content))) {
      const rawTarget = match[1];
      if (!rawTarget || rawTarget.startsWith('http:') || rawTarget.startsWith('https:') || rawTarget.startsWith('mailto:') || rawTarget.startsWith('tel:') || rawTarget.startsWith('data:')) continue;
      if (!staticPageExtensions.has(path.extname(rawTarget).toLowerCase())) continue;
      const normalized = rawTarget.startsWith('/') ? rawTarget.slice(1) : path.posix.normalize(path.posix.join(path.posix.dirname(rel), rawTarget));
      if (!fs.existsSync(fullPath(normalized))) offenders.push(`${rel}: missing referenced asset ${rawTarget} -> ${normalized}`);
    }
  }

  if (offenders.length) {
    throw new Error(`Missing local page assets:\n${offenders.join('\n')}`);
  }
}

function assertSingleSourceRoutes() {
  assertContains('pages/catch.html', "window.location.replace('/catch'", 'legacy catch redirect');
  assertContains('pages/map.html', "window.location.replace('/map'", 'legacy map redirect');
  assertNotContains('pages/catch.html', 'TRACEABILITY', 'duplicate catch page implementation');
  assertNotContains('pages/map.html', 'pages.js', 'duplicate map page implementation');
}

function assertCatchQrFlow() {
  assertContains('home.js', 'src="/assets/fishfull-demo-qr.svg?v=20260710"', 'visible catch QR asset');
  assertContains('home.js', "qrHref: '/catch'", 'catch profile QR destination');
  assertContains('home.js', 'oceanSceneTemplate', 'clear ocean scene source');
  assertContains('home.js', 'sea-plants', 'seaweed illustration');
  assertContains('home.js', 'scene-creature', 'fish illustration');
  assertContains('catch.html', 'TRACEABILITY', 'catch traceability section');
  assertContains('catch.html', '/ar?fish=bream#fishfull-ar-stage', 'catch-to-AR route');
  assertContains('assets/fishfull-demo-qr.svg', 'viewBox="0 0 37 37"', 'stable QR viewBox');
}

function assertArEntryIsPrimary() {
  assertContains('ar.html', 'data-page="ar-game"', 'root-level AR page marker');
  assertContains('ar.html', 'id="fishfull-ar-stage"', 'AR stage');
  assertContains('ar.html', 'id="camera"', 'camera AR view');
  assertContains('ar.html', '/assets/models/crimson-sea-bream.gltf', 'crimson sea bream model');
  assertContains('ar.html', '/assets/models/pacific-mackerel.gltf', 'Pacific mackerel model');
  assertContains('ar.html', '/assets/models/mahi-mahi.gltf', 'mahi-mahi model');
  assertContains('ar.html', 'No info cards blocking the view', 'clean English AR message');
  assertContains('home.js', '/ar#fishfull-ar-stage', 'clean root-level AR entry');
  assertNotContains('ar.html', 'ar-species-panel', 'legacy AR information panel');
  assertNotContains('ar.html', 'ar-fish-coach', 'legacy AR coach cards');
}

function assertMapVrDemo() {
  assertContains('map.html', '/pages/map-vr-demo.css', 'VR demo styles');
  assertContains('map.html', '/pages/map-vr-demo.js', 'VR demo behavior');
  assertContains('pages/map-vr-demo.js', '360° STORE WALK-THROUGH DEMO', 'VR demo scene');
  assertContains('pages/map-vr-demo.js', 'location-card', 'VR button injection for every location card');
  assertContains('pages/map-vr-demo.css', 'touch-action: pan-y', 'mobile drag behavior');
}

function assertJavaScriptSyntax() {
  for (const filePath of textFiles().filter((target) => target.endsWith('.js'))) {
    execFileSync(process.execPath, ['--check', filePath], { stdio: 'pipe' });
  }
}

function main() {
  assertRequiredFiles();
  assertValidVercelConfig();
  assertNoLegacyGeneratedMarkup();
  assertOfficialLogoGuard();
  assertCopyrightFooterSource();
  assertLocalPageAssetsExist();
  assertSingleSourceRoutes();
  assertCatchQrFlow();
  assertArEntryIsPrimary();
  assertMapVrDemo();
  assertJavaScriptSyntax();
  console.log('FishFull static check passed.');
}

try {
  main();
} catch (error) {
  console.error(`FishFull static check failed: ${error.message}`);
  process.exit(1);
}
