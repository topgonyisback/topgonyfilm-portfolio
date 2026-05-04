// Topgony 포트폴리오 — 공용 컴포넌트 / 템플릿 함수
const T = window.TG;
const h = (tag, attrs = {}, children = '') => {
  const a = Object.entries(attrs).map(([k, v]) => v != null ? ` ${k}="${v}"` : '').join('');
  const c = Array.isArray(children) ? children.join('') : children;
  return `<${tag}${a}>${c}</${tag}>`;
};

// 헤더
window.tplHeader = (active = '') => `
<header class="hd">
  <a href="index.html" class="hd__b">${T.brand.name}</a>
  <nav class="hd__r">
    <a href="index.html" class="${active==='index'?'is-active':''}">Index</a>
    <a href="work.html" class="${active==='work'?'is-active':''}">Work</a>
    <a href="about.html" class="${active==='about'?'is-active':''}">About</a>
    <a href="contact.html" class="${active==='contact'?'is-active':''}">Contact</a>
  </nav>
</header>`;

// 푸터
window.tplFooter = () => `
<footer class="ft">
  <div><div class="ft__b">${T.brand.name}<small>${T.brand.tag}</small></div></div>
  <div class="ft__c"><h5>— Navigate</h5><ul>
    <li><a href="index.html">Index</a></li><li><a href="work.html">Work</a></li>
    <li><a href="about.html">About</a></li><li><a href="contact.html">Contact</a></li>
  </ul></div>
  <div class="ft__c"><h5>— Contact</h5><ul>
    <li><a href="mailto:${T.brand.email}">${T.brand.email}</a></li><li><a>${T.brand.phone}</a></li>
  </ul></div>
  <div class="ft__c"><h5>— Social</h5><ul>
    <li><a href="https://www.instagram.com/topgony/" target="_blank" rel="noopener">Instagram ↗</a></li>
  </ul></div>
  <div class="ft__m"><span>© 2026 — TOPGONY · ALL RIGHTS RESERVED</span><span>SEOUL · SINCE 2019</span><button class="lang-btn" onclick="setLang(TG_LANG==='ko'?'en':'ko')">${TG_LANG==='ko' ? 'EN' : 'KO'}</button></div>
</footer>`;

// 카드 (매거진 그리드)
window.tplCard = (w) => `
<a class="card" data-cat="${w.cat}" href="project.html#no=${w.no}">
  <div class="ph" data-r="${w.thumb ? '' : '[ 3:4 ]'}" ${w.thumb ? `style="background-image:url('${w.thumb}');background-size:cover;background-position:center;"` : ''}>
    ${w.preview ? `<video class="card__vid" muted loop playsinline preload="none" data-src="${w.preview}"></video>` : ''}
    <span class="ph__tag">${w.catLabel}</span><span class="ph__dur">${w.dur}</span>
  </div>
  <div class="card__m">
    <h4 class="card__t">${t(w.title, w.title_en)}</h4>
    <span class="card__cat">${w.catLabel}</span>
    <span class="card__cl">${w.client} · ${w.year}</span>
  </div>
</a>`;

// 카드 비디오 호버 재생
window.bindVideos = () => {
  document.querySelectorAll('.card').forEach(card => {
    const vid = card.querySelector('.card__vid');
    if (!vid) return;
    card.addEventListener('mouseenter', () => {
      if (!vid.src && vid.dataset.src) vid.src = vid.dataset.src;
      vid.play().catch(() => {});
      vid.style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
      vid.pause();
      vid.currentTime = 0;
      vid.style.opacity = '0';
    });
  });
};

// 인덱스 행 (리스트 뷰)
window.tplIdx = (w) => `
<a class="idx" data-cat="${w.cat}" href="project.html#no=${w.no}">
  <span class="idx__no">— ${w.no}</span>
  <span class="idx__t">${t(w.title, w.title_en)}</span>
  <span class="idx__c">${w.client} — ${w.catLabel}</span>
  <span class="idx__r">${w.role}</span>
  <span class="idx__y">${w.year}.${String(w.month).padStart(2,'0')}</span>
  <span class="idx__d">${w.dur}</span>
</a>`;

// 카테고리 칩
window.tplChips = (active = 'all') => `
<div class="chips" id="chips">
  ${T.cats.map(c => {
    const cnt = c.id === 'all' ? T.works.length : T.works.filter(w => w.cat === c.id).length;
    return `<button class="chip ${c.id===active?'is-active':''}" data-cat="${c.id}">${c.label} · ${cnt}</button>`;
  }).join('')}
</div>`;

// 카테고리 필터 활성화
window.bindFilter = () => {
  const chips = document.querySelectorAll('#chips .chip');
  chips.forEach(b => b.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    b.classList.add('is-active');
    const cat = b.dataset.cat;
    document.querySelectorAll('.card, .idx').forEach(el => {
      el.style.display = (cat === 'all' || el.dataset.cat === cat) ? '' : 'none';
    });
  }));
};
