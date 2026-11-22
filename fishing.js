(function () {
  'use strict';
  var coords = [25.19649, 121.68895];
  var storageKey = 'fishfull-fishing-checklist-v1';
  var map = null;
  var marker = null;
  var translations = {
    zh: {
      eyebrow:'FISHFULL · 北海岸釣行指南',heading:'一起去釣魚',lead:'看懂海況、查清釣區，再帶上釣竿出發。從龜吼漁港認識北海岸，享受更安全、更友善的釣魚旅程。',
      seeMap:'探索港口地圖 ↗',prepare:'檢查出發裝備',place:'📍 新北市萬里區 · 龜吼漁港',base:'🗺 OpenStreetMap 開放地圖',
      alertHeading:'先查釣區是否合法，再決定下竿地點',
      alertBody:'新北市公開的 12 處漁港開放垂釣區名單未列出「龜吼漁港」。此頁只標示港口位置，絕不代表港內碼頭、防波堤或周邊海岸可以垂釣。請依最新主管機關公告、保育區範圍及現場告示判斷；若無法確認，請不要下竿。',
      noticeLink:'查閱新北市漁港垂釣區官方公告 ↗',mapEyebrow:'LOCATION EXPLORER',mapTitle:'龜吼漁港地圖',mapHelp:'縮放、拖曳地圖探索周邊道路與海岸；地圖標記僅供定位。',
      pinType:'📍 港區位置',mapUnavailable:'互動地圖目前無法載入',openOSM:'前往 OpenStreetMap 檢視位置 ↗',pinWarning:'● 港口中心點，非核准垂釣點',
      recenter:'◎ 置中龜吼漁港',navigate:'↗ 開啟導航',copy:'⧉ 複製座標',copied:'✓ 已複製座標',copyFailed:'座標：25.19649, 121.68895',
      mapFootnote:'地圖來源：© OpenStreetMap 貢獻者。請勿將一般道路、消波塊或保育區誤認為可垂釣區域。',
      planEyebrow:'BEFORE YOU CAST',planTitle:'釣客出發前的 3 件事',step1Title:'確認合法釣區',step1Body:'先看開放區域、釣向與保育限制；龜吼港區不可直接視為釣場。',
      step2Title:'比對風浪與潮汐',step2Body:'注意長浪、陣風、潮位與天氣警特報；海況不佳就取消。',
      step3Title:'裝備與同行安排',step3Body:'穿救生衣、防滑鞋，帶照明、手機及飲水，告知親友回程時間。',legalFirst:'先看官方開放釣區 →',
      resourcesEyebrow:'REAL-WORLD CONDITIONS',resourcesTitle:'出海邊前，這些資訊一定要看',resourcesNote:'以下連到官方網站查閱最新資料；本頁不顯示未經驗證的即時風速、浪高或潮汐數字。',
      windTag:'海象與警戒',windTitle:'風力 · 浪高 · 長浪',windBody:'查看海象預報、風浪與警戒資訊。遇颱風、長浪或海況不穩，請勿冒險。',seaLink:'中央氣象署海象平台 ↗',
      tideTag:'潮汐規劃',tideTitle:'滿潮 · 乾潮 · 潮高',tideBody:'查詢鄰近預報地點的潮汐時間與潮高；注意實際海況可能不同。',tideLink:'中央氣象署潮汐預報 ↗',
      lawTag:'規定與保育',lawTitle:'開放釣區 · 釣向 · 禁釣',lawBody:'以公告和現場牌示為準，避開保育區，勿影響船舶航行與漁民作業。',lawLink:'新北漁港垂釣公告 ↗',
      emergencyTag:'緊急應變',emergencyTitle:'海巡 118 · 救護 119',emergencyBody:'遇到海上落水、意外或危急情況，立即求援並提供明確定位，不要貿然入水。',emergencyLink:'海洋委員會海巡署 ↗',
      checklistEyebrow:'YOUR TRIP CHECKLIST',checklistTitle:'出發前裝備檢查',checklistNote:'勾選準備完成的事項，這台裝置會記住你的選擇。',complete:'項已準備',resetList:'重新檢查 ↻',
      check1:'已確認合法開放釣區與保育限制',check2:'已查風浪、潮汐、警特報與退場路線',check3:'救生衣（建議 100N 以上）、防滑鞋和照明',
      check4:'釣竿、捲線器、線組、魚鉤、鉗子與飲水',check5:'手機已充電、告知親友行程，備好垃圾袋',
      ethicsEyebrow:'FISH RESPONSIBLY',ethicsTitle:'讓海更有魚，也讓每次出發更安心',ethicsBody:'使用無倒鉤或適當鉤具減少傷害，遇到保育類或禁捕物種依規定處理；帶走魚線、魚鉤與垃圾，不佔用漁民工作區。切勿踏上消波塊或跨越封閉護欄。',buyFish:'去附近買魚 ↗',
      popupTitle:'龜吼漁港',popupBody:'這是港區定位標記，不是核准垂釣點。請先查官方公告。',popupLink:'查看垂釣規定 ↗'
    },
    en: {
      eyebrow:'FISHFULL · NORTH COAST FISHING GUIDE',heading:'Go Fishing Together',lead:'Check the sea conditions and fishing rules before you pack your rod. Discover Guihou Fishing Harbor and plan a safer, more ocean-friendly trip.',
      seeMap:'Explore the harbor map ↗',prepare:'Check your gear',place:'📍 Wanli, New Taipei · Guihou Harbor',base:'🗺 OpenStreetMap basemap',
      alertHeading:'Check legal access before casting a line',
      alertBody:'Guihou Fishing Harbor is not listed among the 12 fishing-harbor areas officially opened for angling by New Taipei City. This pin locates the harbor only: it does not authorize fishing at any pier, breakwater or nearby shoreline. Check current official notices, protected-area boundaries and on-site signs. If unsure, do not fish.',
      noticeLink:'View New Taipei fishing-area notices ↗',mapEyebrow:'LOCATION EXPLORER',mapTitle:'Guihou Fishing Harbor',mapHelp:'Zoom and pan to explore nearby streets and shoreline. The marker is for orientation only.',
      pinType:'📍 Harbor location',mapUnavailable:'Interactive map unavailable',openOSM:'Open location in OpenStreetMap ↗',pinWarning:'● Harbor location — NOT a designated fishing spot',
      recenter:'◎ Center harbor',navigate:'↗ Get directions',copy:'⧉ Copy coordinates',copied:'✓ Coordinates copied',copyFailed:'Coordinates: 25.19649, 121.68895',
      mapFootnote:'Map data © OpenStreetMap contributors. Roads, wave breakers and protected waters are not automatically fishing areas.',
      planEyebrow:'BEFORE YOU CAST',planTitle:'3 things to check first',step1Title:'Find a legal fishing area',step1Body:'Verify the permitted zone, casting direction and protected-area rules. Guihou is not automatically an angling spot.',
      step2Title:'Check sea and tides',step2Body:'Watch for swell alerts, gusts, tide changes and weather warnings. Cancel when conditions are unsafe.',
      step3Title:'Pack for safety',step3Body:'Wear a life jacket and nonslip shoes, bring light and water, and tell someone your return time.',legalFirst:'View official fishing areas →',
      resourcesEyebrow:'REAL-WORLD CONDITIONS',resourcesTitle:'Essential information before your trip',resourcesNote:'These links open official sources for current information. This site does not invent live wind, wave or tide figures.',
      windTag:'Sea conditions',windTitle:'Wind · Waves · Swell',windBody:'Check marine forecasts and alerts. Stay away during typhoons, dangerous swell or unstable conditions.',seaLink:'CWA Ocean Information ↗',
      tideTag:'Tide planning',tideTitle:'High tide · Low tide',tideBody:'Check predicted tide times and heights at the nearest available station; actual conditions vary.',tideLink:'CWA Tide Forecast ↗',
      lawTag:'Rules & conservation',lawTitle:'Approved areas · Restrictions',lawBody:'Follow official maps and local notices, avoid protected zones, and never interfere with fishing vessels.',lawLink:'New Taipei Official Notices ↗',
      emergencyTag:'Emergency response',emergencyTitle:'Coast Guard 118 · EMS 119',emergencyBody:'In an emergency, call for help and give a precise location. Never jump into dangerous water to attempt a rescue.',emergencyLink:'Taiwan Coast Guard ↗',
      checklistEyebrow:'YOUR TRIP CHECKLIST',checklistTitle:'Ready-to-go checklist',checklistNote:'Check off each step. Your choices are saved on this device.',complete:'ready',resetList:'Reset checklist ↻',
      check1:'Confirmed legal fishing access and conservation rules',check2:'Checked wind, waves, tides, warnings and exit route',check3:'Life jacket (100N+ recommended), nonslip shoes and light',
      check4:'Rod, reel, fishing line, hooks, pliers and water',check5:'Charged phone, shared itinerary and a trash bag',
      ethicsEyebrow:'FISH RESPONSIBLY',ethicsTitle:'More fish in the sea, safer trips for everyone',ethicsBody:'Use suitable hooks to reduce harm. Follow protected-species and catch restrictions. Take home your fishing line, hooks and litter. Keep fishing operations clear, and never climb wave breakers or cross closed barriers.',buyFish:'Buy seafood nearby ↗',
      popupTitle:'Guihou Fishing Harbor',popupBody:'Harbor location only, NOT a designated fishing site. Check the rules first.',popupLink:'Read fishing notices ↗'
    }
  };
  function lang() {
    try { return window.SCMLanguage && window.SCMLanguage.current && window.SCMLanguage.current() === 'en' ? 'en' : 'zh'; }
    catch (_error) { return 'zh'; }
  }
  function translate() {
    var tr = translations[lang()];
    document.querySelectorAll('[data-fishing-i18n]').forEach(function (node) {
      var key = node.getAttribute('data-fishing-i18n');
      if (!Object.prototype.hasOwnProperty.call(tr, key)) return;
      if (key === 'heading') {
        node.textContent = tr[key];
        var dot = document.createElement('span');
        dot.className = 'heading-dot';
        dot.textContent = '.';
        node.appendChild(dot);
      } else { node.textContent = tr[key]; }
    });
    document.getElementById('fishing-map').setAttribute('aria-label', tr.mapTitle + ' OpenStreetMap');
    if (marker) marker.setPopupContent(popupHTML(tr));
  }
  function popupHTML(tr) {
    return '<div style="line-height:1.5;max-width:210px"><strong>' + tr.popupTitle + '</strong><p style="margin:6px 0">' +
      tr.popupBody + '</p><a href="https://fishery.ntpc.gov.tw/cht/index.php?code=list&amp;ids=159" target="_blank" rel="noopener noreferrer">' +
      tr.popupLink + '</a></div>';
  }
  function initializeMap() {
    var el = document.getElementById('fishing-map');
    if (!el) return;
    if (!window.L || !window.L.map) {
      document.getElementById('fishing-map-fallback').hidden = false;
      return;
    }
    try {
      map = window.L.map(el, { center:coords, zoom:16, scrollWheelZoom:false, maxZoom:18, minZoom:6 });
      window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        maxZoom:18
      }).addTo(map);
      var markerIcon = window.L.divIcon({className:'',html:'<div class="fish-harbor-marker" aria-hidden="true">📍</div>',iconSize:[42,42],iconAnchor:[21,42]});
      marker = window.L.marker(coords,{icon:markerIcon}).addTo(map).bindPopup(popupHTML(translations[lang()]));
      marker.openPopup();
      window.requestAnimationFrame(function () { map.invalidateSize(); });
    } catch (_error) {
      document.getElementById('fishing-map-fallback').hidden = false;
    }
  }
  function checklistItems() { return Array.prototype.slice.call(document.querySelectorAll('[data-fishing-check]')); }
  function updateChecklist() {
    var inputs = checklistItems();
    var checked = inputs.filter(function (el) { return el.checked; }).length;
    document.getElementById('checklist-count').textContent = checked + ' / ' + inputs.length;
    document.getElementById('checklist-bar').style.width = (100 * checked / (inputs.length || 1)) + '%';
    try {
      var state = {};
      inputs.forEach(function (el) { state[el.dataset.fishingCheck] = el.checked; });
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (_error) { /* storage is optional */ }
  }
  function initializeChecklist() {
    try {
      var saved = JSON.parse(window.localStorage.getItem(storageKey) || '{}');
      checklistItems().forEach(function (el) { el.checked = saved[el.dataset.fishingCheck] === true; });
    } catch (_error) { /* private browsing may disable storage */ }
    checklistItems().forEach(function (el) { el.addEventListener('change', updateChecklist); });
    document.getElementById('fishing-reset-checklist').addEventListener('click', function () {
      checklistItems().forEach(function (el) { el.checked = false; });
      updateChecklist();
    });
    updateChecklist();
  }
  function initializeButtons() {
    document.getElementById('fishing-reset-map').addEventListener('click', function () {
      if (map) { map.setView(coords,16); if (marker) marker.openPopup(); }
      else window.open('https://www.openstreetmap.org/?mlat=25.19649&mlon=121.68895#map=16/25.19649/121.68895','_blank','noopener,noreferrer');
    });
    document.getElementById('fishing-copy-coordinates').addEventListener('click', function () {
      var btn = this;
      var message = lang() === 'en' ? translations.en : translations.zh;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(coords.join(', ')).then(function () {
          btn.textContent = message.copied;
          window.setTimeout(function () { btn.textContent = translations[lang()].copy; }, 2200);
        }).catch(function () { btn.textContent = message.copyFailed; });
      } else { btn.textContent = message.copyFailed; }
    });
  }
  function init() {
    translate();
    initializeMap();
    initializeChecklist();
    initializeButtons();
  }
  document.addEventListener('scm-language-change', function () { if (document.getElementById('fishing-map')) translate(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
