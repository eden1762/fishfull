(function () {
  'use strict';

  var COPY = {
    bream: {
      zhTitle: 'AR 距離尺',
      enTitle: 'AR distance cue',
      zhLead: '手機離魚約 30 公分，先讓魚眼與魚鰓進入框內。',
      enLead: 'Keep your phone about 30 cm from the fish, then frame the eye and gill first.',
      zhChips: ['30cm', '魚眼清楚', '鰓色可看'],
      enChips: ['30 cm', 'Clear eye', 'Gill color'],
      zhFoot: '赤鯮適合拍整尾側面，紅亮魚身會更好判斷。',
      enFoot: 'For sea bream, shoot the full side profile so the red sheen is easier to read.'
    },
    mackerel: {
      zhTitle: 'AR 距離尺',
      enTitle: 'AR distance cue',
      zhLead: '手機離魚約 25 公分，對準藍背銀腹與條紋。',
      enLead: 'Hold about 25 cm away and frame the blue back, silver belly, and stripes.',
      zhChips: ['25cm', '條紋清楚', '魚腹銀亮'],
      enChips: ['25 cm', 'Sharp stripes', 'Silver belly'],
      zhFoot: '花腹鯖拍近一點，條紋與魚腹亮度會更準。',
      enFoot: 'Mackerel works better a little closer, so the stripe pattern and belly shine stay readable.'
    },
    mahi: {
      zhTitle: 'AR 距離尺',
      enTitle: 'AR distance cue',
      zhLead: '手機離切片約 20 公分，讓切面與厚度填滿橢圓框。',
      enLead: 'Keep about 20 cm from the fillet and fill the oval with the cut surface and thickness.',
      zhChips: ['20cm', '切面乾淨', '厚度可看'],
      enChips: ['20 cm', 'Clean cut', 'Thickness'],
      zhFoot: '鬼頭刀常見切片販售，拍切面比拍整尾更有用。',
      enFoot: 'Mahi-mahi is often sold as cuts, so the cut surface matters more than the whole fish.'
    }
  };

  function lang() {
    return localStorage.getItem('scm-language') === 'en' || document.documentElement.lang === 'en' ? 'en' : 'zh';
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function get(item, key) {
    return lang() === 'en' ? item['en' + key] : item['zh' + key];
  }

  function render(stage) {
    if (!stage) return;
    var tone = stage.dataset.fishTone || 'bream';
    var item = COPY[tone] || COPY.bream;
    var ruler = stage.querySelector('[data-ar-distance-ruler]');
    if (!ruler) {
      ruler = document.createElement('aside');
      ruler.className = 'ar-distance-ruler';
      ruler.setAttribute('data-ar-distance-ruler', '');
      ruler.setAttribute('aria-live', 'polite');
      var hint = stage.querySelector('[data-ar-hint]');
      stage.insertBefore(ruler, hint || null);
    }

    ruler.innerHTML = [
      '<div class="ar-distance-ruler__bar" aria-hidden="true"><span></span><span></span><span></span></div>',
      '<div class="ar-distance-ruler__copy">',
      '  <strong>' + esc(get(item, 'Title')) + '</strong>',
      '  <p>' + esc(get(item, 'Lead')) + '</p>',
      '  <div class="ar-distance-ruler__chips">' + get(item, 'Chips').map(function (chip) { return '<span>' + esc(chip) + '</span>'; }).join('') + '</div>',
      '  <em>' + esc(get(item, 'Foot')) + '</em>',
      '</div>'
    ].join('');
  }

  function boot() {
    var stage = document.querySelector('.ar-stage');
    if (!stage) {
      window.setTimeout(boot, 140);
      return;
    }
    render(stage);
    new MutationObserver(function (mutations) {
      if (mutations.some(function (mutation) { return mutation.attributeName === 'data-fish-tone'; })) render(stage);
    }).observe(stage, { attributes: true });
    document.addEventListener('click', function (event) {
      if (event.target.closest && event.target.closest('.language-toggle')) {
        window.setTimeout(function () { render(stage); }, 120);
        window.setTimeout(function () { render(stage); }, 320);
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
