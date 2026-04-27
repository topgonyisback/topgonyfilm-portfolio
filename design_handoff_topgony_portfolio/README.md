# Handoff: Topgony — Videographer Portfolio

> **For your AI coding assistant:** Read this file in full before writing any code. The HTML/CSS/JS in `site/` and `design-system/` are **design references** — not production code. Recreate this portfolio in the target codebase using its existing framework, conventions, and tooling.

---

## 1. Overview

A cinematic, magazine-style portfolio site for **Topgony** — a Seoul-based videographer / director / DP. The site has 5 routes:

| Route | File | Purpose |
|---|---|---|
| `/` | `site/index.html` | Hero + featured film + 8-card magazine grid + about teaser + CTA |
| `/work` | `site/work.html` | Filterable archive of all 12 works (grid + list views) |
| `/work/:slug` | `site/project.html` | Single project detail page |
| `/about` | `site/about.html` | Bio, timeline, services, gear, press |
| `/contact` | `site/contact.html` | Inquiry form + contact info + process + FAQ |

Visual direction: **pure-black cinematic dark theme**, oversized display type (Space Grotesk), monospace meta labels (JetBrains Mono), 12-col magazine grid with variable-span thumbnails, mix-blend header, film-grain overlay, slow cinematic easing.

## 2. About the Design Files

The files in `site/` and `design-system/` are **HTML/CSS prototypes** built to communicate look, structure, and behavior. They are intentionally framework-free vanilla HTML so they render anywhere.

**Your job is NOT to ship this HTML.** Your job is to **recreate these designs in the target project's environment** — React/Next.js, Vue/Nuxt, SvelteKit, Astro, native iOS/Android, whatever the target codebase uses — following its existing patterns (component structure, routing, styling system, state management, build tooling).

If no target codebase exists yet, **Next.js 14+ (App Router) with CSS Modules or Tailwind** is the recommended choice for this design — the static-content + image-heavy + typography-first nature of a video portfolio is a great fit.

## 3. Fidelity

**High-fidelity (hi-fi).** All colors, type scales, spacing, easing curves, and layout rules are final and tokenized in `design-system/tokens.css`. Recreate pixel-perfectly. Where the prototype uses placeholder thumbnails (the diagonal-stripe `.ph` blocks), substitute real video poster frames or Vimeo/YouTube/Mux embeds — the placeholder treatment itself is **not** part of the final design.

## 4. File Map

```
design_handoff_topgony_portfolio/
├── README.md                          ← you are here
├── design-system/
│   ├── tokens.css                     ← SOURCE OF TRUTH for all design tokens
│   ├── shared.css                     ← shared utilities used by token preview pages
│   ├── index.html                     ← design system index/overview
│   ├── colors.html                    ← color palette reference
│   ├── typography.html                ← type scale reference
│   ├── spacing-grid.html              ← spacing + 12-col grid reference
│   ├── buttons-forms.html             ← button + form component reference
│   ├── icons.html                     ← icon set reference
│   ├── logo.html                      ← logo / wordmark reference
│   ├── motion.html                    ← motion / easing reference
│   ├── navigation.html                ← header/nav reference
│   ├── project-items.html             ← work card variants
│   └── video-cards.html               ← video card variants
└── site/
    ├── index.html                     ← home
    ├── work.html                      ← archive
    ├── project.html                   ← project detail
    ├── about.html                     ← about
    ├── contact.html                   ← contact
    ├── site.css                       ← page-specific styles (imports tokens.css)
    ├── data.js                        ← all content (works, services, FAQ, etc.)
    └── components.js                  ← template fns (header, footer, card, idx, chips)
```

**Read order for fastest understanding:**
1. `design-system/tokens.css` — all design tokens
2. `site/site.css` — component classes + page styles
3. `site/data.js` — content model
4. `site/components.js` — template functions (translate to React/Vue/Svelte components)
5. `site/index.html` → `work.html` → `project.html` → `about.html` → `contact.html`

---

## 5. Design Tokens

All tokens are defined in `design-system/tokens.css` as CSS custom properties. Mirror them into your target system (Tailwind theme, CSS Modules :root, design-token JSON, SwiftUI Color extension, etc.).

### 5.1 Colors

Pure-black base with **cool-shifted grays** in oklch (hue 250). Saturation is intentionally near-zero (chroma 0.002–0.005) — never warm, never neutral, always slightly cool.

| Token | Value | Usage |
|---|---|---|
| `--ink-000` | `#000000` | Page background |
| `--ink-050` | `oklch(0.08 0.003 250)` | Elevated surface 1 |
| `--ink-100` | `oklch(0.12 0.003 250)` | Elevated surface 2 |
| `--ink-200` | `oklch(0.17 0.003 250)` | Card surface, subtle border |
| `--ink-300` | `oklch(0.24 0.004 250)` | Strong border |
| `--ink-400` | `oklch(0.36 0.005 250)` | Disabled / faintest border |
| `--ink-500` | `oklch(0.52 0.005 250)` | Tertiary text (`--text-dim`) |
| `--ink-600` | `oklch(0.68 0.005 250)` | Secondary text (`--text-muted`) |
| `--ink-700` | `oklch(0.82 0.004 250)` | Body text |
| `--ink-800` | `oklch(0.93 0.003 250)` | Primary text alt |
| `--ink-900` | `oklch(0.99 0.002 250)` | Primary text (`--text`) |

**Functional accents (use sparingly, indicator-only):**
- `--rec: #ff2b2b` — recording dot
- `--live: #00ff88` — live/streaming dot in header

### 5.2 Typography

Three families. Load from Google Fonts:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
```

| Role | Family | Token |
|---|---|---|
| Display (headings, oversized type) | Space Grotesk | `--font-display` |
| Body | Inter Tight | `--font-body` |
| Mono (meta labels, timecodes, captions) | JetBrains Mono | `--font-mono` |

**Type scale** (modular ~1.25, display-weighted):

| Token | px | Use |
|---|---|---|
| `--fs-micro` | 10 | Tiniest meta caps |
| `--fs-caption` | 11 | Header / caption mono |
| `--fs-meta` | 12 | Filter chips |
| `--fs-small` | 13 | Small UI |
| `--fs-body` | 15 | Body |
| `--fs-lead` | 18 | Lead paragraph |
| `--fs-h5` | 22 | – |
| `--fs-h4` | 28 | – |
| `--fs-h3` | 38 | Section heads |
| `--fs-h2` | 54 | – |
| `--fs-h1` | 76 | – |
| `--fs-display` | 120 | – |
| `--fs-mega` | 180 | Hero |

Hero/section hero/CTA headings use `clamp()` for fluid sizing — see `site.css` `.hero h1`, `.sh h2`, `.cta h2`, `.mq h2`, `.ft__b`.

**Letter spacing** is critical to the look:
- Display headings: `-0.045em` to `-0.03em` (tight)
- Mono caps: `0.06em` (`--ls-wide`) to `0.12em` (`--ls-meta`) to `0.2em` (`--ls-micro`)

**All mono labels are UPPERCASE.** Every meta string in the design uses `text-transform: uppercase` + a mono letter-spacing token.

### 5.3 Spacing (8pt base, dense)

`--s-0: 0`, `--s-1: 2px`, `--s-2: 4px`, `--s-3: 8px`, `--s-4: 12px`, `--s-5: 16px`, `--s-6: 24px`, `--s-7: 32px`, `--s-8: 48px`, `--s-9: 64px`, `--s-10: 96px`, `--s-11: 128px`, `--s-12: 192px`.

Page horizontal padding is **32px** (`--grid-margin`). Grid gutter is **16px** (`--grid-gap`).

### 5.4 Grid

12-column grid, 16px gap, 32px page margin, max container 1600px. Magazine cards declare span explicitly per work (see `data.js` `span` field — values 4 / 5 / 6 / 7 / 12).

### 5.5 Radii / Borders / Shadows

- Radii: `--r-0: 0`, `--r-1: 2px`, `--r-2: 4px`, `--r-3: 8px`, `--r-full: 999px`. The design is largely **squared** — only chips use `--r-full`. Cards have **no radius**.
- Borders: hairlines (`0.5px`) and 1px. Border colors are `--ink-200` (subtle) or `--ink-300` (strong).
- Shadows: minimal. `--shadow-card: 0 1px 0 rgba(255,255,255,0.04), 0 20px 40px -20px rgba(0,0,0,0.8)` and `--shadow-float`. Most surfaces use **no shadow** — separation comes from hairline borders.

### 5.6 Motion

| Token | Duration |
|---|---|
| `--d-instant` | 80ms |
| `--d-fast` | 180ms |
| `--d-base` | 320ms |
| `--d-slow` | 560ms |
| `--d-cine` | 900ms |

| Easing | Curve | Use |
|---|---|---|
| `--e-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Default UI |
| `--e-in` | `cubic-bezier(0.64, 0, 0.78, 0)` | Exits |
| `--e-inout` | `cubic-bezier(0.65, 0, 0.35, 1)` | Symmetric |
| `--e-dramatic` | `cubic-bezier(0.85, 0, 0.15, 1)` | Curtain reveals |
| `--e-overshoot` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Pop-in |

Respect `prefers-reduced-motion: reduce` (see `site.css` last rule) — kill animations to ~0.01ms.

---

## 6. Global Components

### 6.1 Header (`.hd`)

- **Fixed top**, full-width, 3-column grid: `1fr auto 1fr`, gap 32px, padding 20px 32px, `z-index: 100`.
- **`mix-blend-mode: difference`** with `color: #fff` — header inverts against whatever scrolls behind it. Critical effect, do not drop.
- Left cell: a "LIVE · SEOUL" indicator (pulsing 6×6 green dot, `--live`, 1.4s pulse animation) + active page label (uppercase mono).
- Center: wordmark `topgony.` in display font, 20px, weight 500, `-0.02em`.
- Right: nav links (Index / Work / About / Contact) — uppercase mono caption, opacity 0.7 default, 1.0 on hover/active, 180ms ease-out.

### 6.2 Footer (`.ft`)

- 4-column grid `1.4fr 1fr 1fr 1fr`, gap 40px, padding `64px 32px 24px`, `margin-top: 120px`, hairline top border.
- Cell 1: huge wordmark `topgony.` at 96px display + small mono tagline beneath.
- Cells 2–4: link columns — `<h5>` mono uppercase 10px caption header + `<ul>` of links at 14px body.
- Bottom meta row spans all columns: copyright + "SEOUL · SINCE 2019" in mono micro.

### 6.3 Buttons (`.btn`)

- Default: 1px outline, transparent bg, 14px 22px padding, mono 11px caps, `--ls-meta`.
- Hover: bg flips to `--text` (white-ish), text to `#000`. 180ms ease-out.
- `.btn--p` (primary): inverted by default — white bg, black text. Hover swaps back.
- `.btn--lg`: larger padding (20×32) + 12px font.
- All buttons end with ` →` arrow in their copy. This is part of the system, keep it.

### 6.4 Placeholder thumb (`.ph`)

```css
background: repeating-linear-gradient(45deg, #0c0c0c 0 8px, #131313 8px 16px);
```

Diagonal stripes + centered mono label like `[ 16:9 ]` via `data-r` attribute. Two overlay chips:
- `.ph__tag` — top-left, 4×8 padding, 1px white border @ 40% opacity, `backdrop-filter: blur(6px)`, e.g. "MUSIC VIDEO"
- `.ph__dur` — bottom-right, mono 10px, `rgba(0,0,0,0.55)` bg, e.g. "04:21"

In the real app, replace `.ph` with `<video>` poster / Mux thumb / etc. — keep the two overlay chips.

### 6.5 Magazine grid card (`.card`)

- 12-col grid item with explicit `grid-column: span N` per work.
- `.ph` thumb at top with the work's `aspect-ratio` (one of `16/9`, `4/5`, `3/4`, `21/7`).
- `.card__m` meta strip beneath the thumb: 3-col grid `auto 1fr auto`, baseline-aligned.
  - Left: `— 001` (mono 11, dim color, wide spacing)
  - Center: title in display 18 weight 500, `-0.018em`
  - Right: `CLIENT · YEAR` (mono 10 caps, muted, right-aligned)

### 6.6 Filter chips (`.chips` / `.chip`)

- Pill chips, `--r-full` radius, 1px border, 8×14 padding, mono 10 caps, `--ls-meta`.
- Default: muted text, subtle border. Hover: text→white, border→white.
- `.is-active`: white bg, black text, white border.
- Format: `LABEL · COUNT` (e.g. "MUSIC VIDEO · 4").
- Sticky filter bar (`.fb`) is `position: sticky; top: 56px; z-index: 10` with backdrop-blur and `rgba(0,0,0,0.92)` bg.

### 6.7 Index list row (`.idx`)

Alternative to `.card` for list view on `/work`:

- 6-col grid: `60px 1fr 1fr 160px 100px 80px` — number / title / client·cat / role / year.month / duration.
- Padding `20px 32px`, hairline bottom border.
- Hover: bg → `--ink-050`.
- Title in display 24 weight 500. Everything else mono caps.

### 6.8 Section head (`.sh`)

- Flex space-between, baseline-aligned, padding `80px 32px 24px`, hairline bottom border, `margin-bottom: 32px`.
- Left: `<h2>` display, fluid `clamp(40px, 5vw, 64px)`, weight 500, `-0.03em`.
- Right: small mono caps caption like "12 SELECT · GO TO ARCHIVE →".

### 6.9 Marquee (`.mq`)

Oversized display headline section, `clamp(64px, 10vw, 160px)`, weight 500, `-0.045em`, line-height 0.92. `<em>` is non-italic and uses `--text-dim` (a dimmed gray) for emphasis-by-contrast. Pattern repeats in hero, CTA, footer wordmark.

---

## 7. Page-by-Page Specs

### 7.1 Home (`index.html`)

1. **Header** (fixed, mix-blend)
2. **Hero** (`.hero`, padding `140px 32px 48px`, 2-col grid `1fr 1fr`, gap 64, baseline-aligned at end):
   - Left: kicker `— Topgony / Director · DP` (mono caps) + h1 `Frames\nthat <em>breathe</em>\nbetween cuts.` (display, `clamp(80px, 12vw, 200px)`, line-height 0.88, `-0.045em`)
   - Right (`.hero__s`): mono caps stack — "SEOUL — SINCE 2019 / 42 FILMS · 30+ CLIENTS / MV · BRAND · FASHION · CF / 16:9 / 9:16 · 4K"
3. **Featured film** (`.feature`, full-width 21:9 placeholder, links to project page)
4. **Section head** "Selected work, 2024 → 2026." + caption "12 SELECT · GO TO ARCHIVE →"
5. **Magazine grid** — first 8 works from `TG.works`, rendered with `tplCard()`. Each card declares its own column span (4–12).
6. **Intro** (`.intro`, padding `80px 32px`, 2-col `1fr 2fr`, gap 64, hairline top):
   - Left: `— About` kicker + h3 "짧게 자르고,\n오래 기다립니다." (display, `clamp(40px, 5vw, 72px)`, line-height 1, `-0.03em`)
   - Right: 1 paragraph body 18px line-height 1.6, max-width 60ch, color `--text-muted` + `READ FULL BIO →` button.
7. **CTA** (`.cta`, padding `120px 32px`, hairline top, 2-col `1fr auto`, gap 48, baseline-aligned at end):
   - h2 "Let's make\nsomething <em>loud.</em>" (display, `clamp(64px, 9vw, 140px)`, `-0.045em`, line-height 0.88)
   - Right column: email mono + `START A PROJECT →` primary lg button.
8. **Footer**

### 7.2 Work archive (`work.html`)

- Hero (page-top variant): kicker, oversized `Archive\n2019 → 2026.` headline, side meta.
- **Filter bar** (`.fb`, sticky) with chips for ALL / MV / BRAND FILM / FASHION / COMMERCIAL / EVENT (with counts).
- **Toggle** between magazine grid and index list. Default: grid (12 cards via `tplCard`). List view uses `tplIdx`.
- Filter behavior in `bindFilter()`: hide cards/rows whose `data-cat` doesn't match active chip.

### 7.3 Project detail (`project.html`)

Single project deep-dive. Inspect the file for the exact section order, but the standard pattern is: oversized title + meta strip (client / role / year / duration / format / cats) → full-bleed hero placeholder → 2-col write-up (left: brief mono labels, right: long-form body) → still gallery (mix of 16/9, 4/5, 21/7 placeholders on the 12-col grid) → credits list → "next project" link.

### 7.4 About (`about.html`)

Reads from `TG.timeline`, `TG.services`, `TG.gear`, `TG.press`. Patterns:
- Bio hero
- Timeline: year + role + description + tag rows
- Services grid: 6 numbered services, each with `no / t / d / m`
- Gear: object keyed by category (Cameras, Lenses, etc.), values are arrays
- Press: year / title / description / status (WINNER / FEATURED / SHORTLIST / PRESS / SELECT)

### 7.5 Contact (`contact.html`)

Reads from `TG.process`, `TG.faq`. Patterns:
- Inquiry form (name / email / company / project type / budget / timeline / message). Style inputs to match the dark theme — transparent bg, hairline 1px border, mono caps labels above each field.
- Contact info block: email, phone, social links.
- Process: 5 numbered stages with duration tag.
- FAQ: accordion or static Q/A list.

---

## 8. Content Model

All copy lives in `site/data.js` as `window.TG`. Move it into your target system however it makes sense (TS const, MDX front-matter, Sanity/Contentful CMS, JSON file). The shape:

```ts
type Work = {
  no: string;          // "001"
  title: string;
  client: string;      // "ARC"
  cat: 'mv' | 'brand' | 'fashion' | 'cf' | 'event';
  catLabel: string;    // "MUSIC VIDEO"
  year: number;
  month: number;
  dur: string;         // "04:21"
  role: string;        // "DIR · DP · EDIT"
  ratio: string;       // "16/9" | "4/5" | "3/4" | "21/7"
  span: number;        // 4 | 5 | 6 | 7 | 12 — magazine grid column span
};

type TG = {
  brand: { name: string; tag: string; email: string; phone: string };
  works: Work[];        // 12 items
  cats: { id: string; label: string }[];
  timeline: { y: number; role: string; desc: string; tag: string }[];
  services: { no: string; t: string; d: string; m: string }[];
  press: { y: number; t: string; d: string; s: string }[];
  process: { n: string; t: string; d: string; dur: string }[];
  faq: { q: string; a: string }[];
  gear: Record<string, string[]>;
};
```

A real implementation should add: `slug`, `posterUrl`, `videoUrl` (Vimeo/YouTube/Mux ID), `gallery` (still images), `credits` (cast/crew array), and long-form `body` (MDX recommended) to each Work.

---

## 9. Behavior & Interactions

- **Header**: fixed, mix-blend-difference. Active link gets full opacity + `is-active` class.
- **Card / row hover**: subtle. Cards have no transform — only the `.idx` rows tint their bg on hover. The .ph thumb itself can scale ~1.02 on hover with 560ms ease-out if you want to add cinematic life — match the `--d-slow` token.
- **Filter chips**: click swaps `is-active` class and filters DOM by `data-cat`. In the real app, prefer URL state (`?cat=mv`) so it's shareable.
- **Live dot**: `pulse` keyframe (1.4s infinite, opacity 1 → 0.4 → 1) — purely cosmetic.
- **Reduced motion**: kill all animations + transitions to ~0.01ms (already in `site.css`, port it).
- **Scroll behavior**: page is long, no scroll-jacking. If you add reveal-on-scroll, use `IntersectionObserver` with `--e-out` 560ms — never a heavy library, never `scrollIntoView`.

## 10. Assets

- **No images shipped** with this design. All thumbs are CSS placeholders. The user will provide real video posters / video files / Vimeo or Mux IDs separately. Wire each `Work` item to a real `posterUrl` + `videoUrl`.
- **Profile image** referenced in the project at `uploads/프로필1.jpeg` is the only real photo asset and is intended for the About page bio block. Copy it into `public/` (or equivalent) in the target codebase if the about page is in scope.
- **No icons** are used in the prototype — all UI labeling is type-only. If your target framework expects an icon set, only add icons for the social links footer (Instagram / Vimeo / YouTube), and pick a minimal stroke set (Lucide, Phosphor) — keep them at 1px stroke to match the hairline aesthetic.
- **Fonts**: load Space Grotesk + Inter Tight + JetBrains Mono from Google Fonts (link tag above), or self-host via `next/font` / equivalent for performance.

## 11. Implementation Notes

- The prototype's `tplHeader` / `tplFooter` / `tplCard` / `tplIdx` / `tplChips` template functions in `components.js` are 1:1 with what should become **components** in your framework. Naming suggestion:
  - `<SiteHeader active="index" />`
  - `<SiteFooter />`
  - `<WorkCard work={...} />`
  - `<WorkRow work={...} />`
  - `<CategoryFilter cats={...} active={...} onChange={...} />`
- **CSS strategy**: keep `tokens.css` as a global stylesheet (or convert to Tailwind theme). Component styles work well as CSS Modules — the existing class names (`.hd`, `.ft`, `.card`, `.ph`, `.sh`, `.mq`, etc.) translate cleanly. If using Tailwind, expose every token in `tailwind.config.{ts,js}` under `theme.extend` (colors, fontFamily, fontSize, spacing, transitionTimingFunction, transitionDuration).
- **Routing**: in Next.js App Router, `app/page.tsx` (home), `app/work/page.tsx` (archive), `app/work/[slug]/page.tsx` (detail), `app/about/page.tsx`, `app/contact/page.tsx`.
- **Video**: do **not** use raw `<video>` for hero/featured — too heavy. Use Mux Player or Vimeo embed for actual playback, with a poster frame `<Image>` as the placeholder until interaction.
- **Internationalization**: copy is mixed Korean + English. Headline kickers are English uppercase mono; body copy can be Korean. Plan for `next-intl` / `i18n` if multi-language is needed.
- **Form (contact)**: hook to whatever the target uses (Resend, Formspree, custom API route). Validate client-side with Zod / Yup; show inline errors in `--rec` red.

---

## 12. Acceptance Checklist

- [ ] All 5 routes implemented and linked from header/footer
- [ ] All design tokens mirrored into the target system
- [ ] 3 fonts loaded with correct weights
- [ ] Header is fixed + mix-blend-mode: difference + animated live dot
- [ ] Magazine grid renders with per-work column spans
- [ ] Filter chips work (URL state preferred)
- [ ] Grid ↔ list view toggle on `/work`
- [ ] Real video assets wired (posters + players)
- [ ] Contact form submits + validates
- [ ] `prefers-reduced-motion` respected
- [ ] Lighthouse: 95+ Performance, 100 Accessibility (color contrast on `--ink-500` text against `--ink-000` is the only thing to double-check — bump to `--ink-600` if needed)
- [ ] No layout shift, fonts preloaded
