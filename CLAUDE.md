# Topgony Portfolio — CLAUDE.md

## 프로젝트 구조
```
videograph_portfolio/
├── design_handoff_topgony_portfolio/
│   ├── site/             ← 실제 HTML/CSS/JS 소스
│   │   ├── index.html
│   │   ├── about.html
│   │   ├── work.html
│   │   ├── contact.html
│   │   ├── project.html
│   │   ├── site.css      ← 공용 스타일 (모든 페이지)
│   │   ├── components.js ← tplHeader, tplFooter, tplCard 등 템플릿
│   │   └── data.js       ← TG.works, TG.timeline 등 데이터
│   └── design-system/
│       └── tokens.css    ← CSS 변수 전부 여기 (폰트, 컬러, 간격)
└── .claude/
    └── launch.json       ← 프리뷰 서버 설정
```

## 디자인 시스템
- `tokens.css`에 모든 CSS 변수 정의
- `site.css`가 `@import url("../design-system/tokens.css")`로 로드
- 폰트: `--font-display: Space Grotesk` / `--font-body: Inter Tight` / `--font-mono: JetBrains Mono`
- 컬러: `--text`, `--text-muted`, `--text-dim`, `--border`, `--border-subtle` 등

## 프리뷰 서버 주의사항
- 서버 루트는 반드시 `design_handoff_topgony_portfolio/` (site/ 하위만 서빙하면 `../design-system/tokens.css` 404)
- launch.json: `"runtimeArgs": ["serve", "videograph_portfolio/design_handoff_topgony_portfolio", "-p", "3456"]`
- 접근 URL: `http://localhost:3456/site/` (트레일링 슬래시 필수, 없으면 상대경로 깨짐)

## 스택
- 정적 HTML/CSS/JS (프레임워크 없음)
- JS 템플릿 함수로 헤더/푸터/카드 동적 렌더링
- CSS는 site.css(공용) + 각 HTML 파일 내 인라인 `<style>` 구조

## 모바일 대응 현황 (완료)
- 전 페이지 `viewport` 메타 태그 추가됨
- `site.css` — 640px/480px 미디어 쿼리 추가 (헤더, 푸터, hero, 필터바 등)
- 각 HTML 인라인 `<style>` — 640px 미디어 쿼리 추가
  - index: hero·intro·cta 1컬럼
  - about: pb·timeline·svc·press·cta 모바일 스택
  - contact: 폼 1컬럼, proc 2컬럼, faq 1컬럼
  - project: player 반응형(`min(360px,90vw)`), pmeta 2컬럼, 전체 스택
