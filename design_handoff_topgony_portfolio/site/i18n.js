// Topgony 포트폴리오 — 언어 설정 (i18n)
const _urlParam = new URLSearchParams(location.search).get('lang');
const _saved    = localStorage.getItem('tg-lang');
const _browser  = navigator.language?.toLowerCase().startsWith('ko') ? 'ko' : 'en';
window.TG_LANG  = _urlParam || _saved || _browser;
if (_urlParam) localStorage.setItem('tg-lang', _urlParam);

window.t = (ko, en) => (TG_LANG === 'en' && en) ? en : ko;

window.setLang = (lang) => {
  localStorage.setItem('tg-lang', lang);
  location.reload();
};

window.I18N = {
  // index.html
  'index.intro.heading': {
    ko: '짧게 자르고,<br/>오래 기다립니다.',
    en: 'Cut short,<br/>wait long.'
  },
  'index.intro.body': {
    ko: '서울을 기반으로 활동하는 비디오그래퍼 Topgony. 뮤직비디오와 브랜드 필름을 중심으로, 빛과 움직임이 만드는 영화적 순간을 기록합니다. 영상 한 컷은 시간의 조각입니다 — 속도와 호흡, 침묵이 교차하는 자리에서 프레임은 관객의 시선을 이끌고 그 안에 감정을 담습니다.',
    en: 'Seoul-based videographer Topgony. Specializing in music videos and brand films — capturing cinematic moments where light meets movement. Every frame is a slice of time: where pace, breath, and silence converge, guiding the viewer\'s gaze and holding emotion inside the cut.'
  },

  // about.html bio
  'about.bio.1': {
    ko: '서울을 기반으로 활동하는 비디오그래퍼 Topgony. 뮤직비디오와 브랜드 필름을 중심으로, 빛과 움직임이 만드는 영화적 순간을 기록합니다.',
    en: 'Seoul-based videographer Topgony. Specializing in music videos and brand films — capturing cinematic moments where light meets movement.'
  },
  'about.bio.2': {
    ko: '영상 한 컷은 시간의 조각입니다. 속도와 호흡, 침묵이 교차하는 자리에서 프레임은 관객의 시선을 이끌고 그 안에 감정을 담습니다. Topgony의 작업은 기술적 완성도를 바탕으로 하되, 그 순간의 공기를 잃지 않는 것을 우선합니다.',
    en: 'Every frame is a slice of time. Where pace, breath, and silence converge, the frame guides the viewer\'s gaze and holds emotion within. Topgony\'s work is grounded in technical precision — but never at the expense of the atmosphere of the moment.'
  },
  'about.bio.3': {
    ko: '2019년부터 독립적으로 활동을 시작, ARC, Hyundai, Naver, Atelier Noir 등 국내외 브랜드와 협업해 왔습니다. 16:9 랜드스케이프부터 9:16 버티컬까지 다양한 포맷에 대응합니다.',
    en: 'Operating independently since 2019, collaborating with domestic and international brands including ARC, Hyundai, Naver, and Atelier Noir. Fluent in all formats — 16:9 landscape to 9:16 vertical.'
  },
  'about.bio.4': {
    ko: '— 오래 붙잡고, 짧게 자르고, 가만히 기다립니다.',
    en: '— Hold long. Cut short. Wait quietly.'
  },

  // contact.html
  'contact.email.sub': {
    ko: '업무 문의 · 평균 48시간 회신',
    en: 'Business inquiries · Avg. 48h response'
  },
  'contact.phone.sub': {
    ko: '평일 10:00 — 19:00 KST',
    en: 'Weekdays 10:00 — 19:00 KST'
  },
  'contact.avail.sub': {
    ko: '급한 프로젝트는 별도 문의',
    en: 'Rush projects: please inquire separately'
  },
  'contact.form.note': {
    ko: '응답까지 평균 48시간',
    en: 'Avg. response time 48h'
  },
  'contact.faq.subhead': {
    ko: '5 · 자주 묻는 질문',
    en: '5 · FREQUENTLY ASKED QUESTIONS'
  },

  // contact.html form fields
  'contact.form.name': { ko: '홍길동', en: 'Full Name' },
  'contact.form.timeline': {
    ko: '예: 2026년 6월 중순, 납품까지 4주',
    en: 'e.g. Mid-June 2026, 4 weeks to delivery'
  },
  'contact.form.brief': {
    ko: '레퍼런스, 무드, 톤, 메시지 — 자유롭게.',
    en: 'References, mood, tone, message — feel free.'
  },
  'contact.scope.shoot':     { ko: '촬영만',        en: 'Shoot only' },
  'contact.scope.shootedit': { ko: '촬영 + 편집',   en: 'Shoot + Edit' },
  'contact.scope.full':      { ko: '전 프로세스',   en: 'Full Production' },
  'contact.budget.select': { ko: '— 선택',          en: '— Select' },
  'contact.budget.1': { ko: '~ 500만',              en: '~ ₩5M' },
  'contact.budget.2': { ko: '500 — 1,500만',        en: '₩5M — ₩15M' },
  'contact.budget.3': { ko: '1,500 — 3,000만',      en: '₩15M — ₩30M' },
  'contact.budget.4': { ko: '3,000 — 7,000만',      en: '₩30M — ₩70M' },
  'contact.budget.5': { ko: '7,000만 +',            en: '₩70M+' },
};

window.applyI18n = () => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = I18N[el.dataset.i18n]?.[TG_LANG];
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = I18N[el.dataset.i18nPlaceholder]?.[TG_LANG];
    if (val) el.placeholder = val;
  });
};
