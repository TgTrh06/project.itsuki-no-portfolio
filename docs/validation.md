# Validation — first local implementation

## Itsumori refinement validation

Build (including TypeScript) and lint passed after the identity/content update. Browser confirmed all five Japanese annotations, Itsumori introduction, project names and “Mùa tiếp theo”. Mobile project introduction and desktop About were visually inspected. At the browser's existing zoom, measured client widths 277, 341 and 1295px matched document scroll widths after removing the old 280px body minimum. The 768px resize returned stale dimensions and is not counted as an additional verified width in this update. Japanese glyphs rendered using system fonts on this Windows machine; other platforms may choose different fallback fonts. Reduced-motion toggle set the root preference to true and scrolling to auto; it was then restored. Browser warning/error log was empty. Screenshot: `artifacts/itsumori.png`. No new dependency, push or deployment.

Validated on 2026-09-07 in the Codex in-app Chromium browser. This is focused implementation QA, not an accessibility certification or cross-browser audit.

## Commands

- `npm run lint`: passed, no warnings.
- `npm run typecheck`: passed.
- `npm run build`: passed; static output generated in `dist/`.
- Production preview at `http://127.0.0.1:4173/`: observed correct title, hero, stylesheet and both images; browser warning/error log empty. HTTP check after restarting preview returned 200.
- `npm ls --depth=0`: all required packages resolve without missing/invalid dependency errors.
- Installation audit: 0 reported vulnerabilities at installation time.
- `git diff --check`: no whitespace errors in the tracked diff; Git notes its existing LF-to-CRLF handling for README.

Final browser JavaScript bundle: approximately 209.13 kB, 66.13 kB gzip. CSS: 32.52 kB, 9.76 kB gzip. Font subsets are emitted separately and selected by Unicode ranges. Images total approximately 373 kB. These are build sizes, not measured network performance or Core Web Vitals.

## Observed interactions

| Interaction | Observed result |
| --- | --- |
| Hero “Khám phá dự án” | Navigates to `#du-an`; focus moves to the project section. |
| Itsu Sushi story | Opens the context/scope/decisions; Enter closes the disclosure. |
| Itsuki no Tabi story | Opens the second project's detail; can close again independently. |
| Copy email | Inline status says the address was copied successfully. |
| Reduce motion | `aria-pressed=true`, root motion preference true, scroll behavior auto, hero CSS animation none. |
| Reload with reduced motion | Preference persists and control remains pressed. |
| Mobile menu | Opens with expanded state and exposes the three section links. |
| Escape in mobile menu | Closes menu and returns focus to the toggle. |
| Select mobile Dự án link | Closes menu, navigates and moves focus to `du-an`. |
| Navigation Về mình | Scrolls to About and underlines the current navigation item. |
| Back to top | Returns to the hero. |
| Internal anchors | Every anchor target resolves to an existing element. |
| Images | Both images complete loading with nonzero natural dimensions. |

## Responsive checks

Measured document scroll width equals client width at viewport widths 320, 390, 700, 701, 768, 1024 and 1440. The browser reserves a 15px scrollbar, so measured client width is correspondingly smaller. No unintended horizontal overflow was detected.

Visual inspection covered mobile hero and projects, tablet hero, desktop hero, projects and About. Mobile presents one column and a menu disclosure. Tablet/desktop use the intended multi-column composition. The 700/701 boundary changes between mobile and desktop navigation without document overflow.

## Contrast measurements

Measured with the personal-design-language contrast-check script:

| Foreground / background | Ratio |
| --- | --- |
| Main ink `#242820` / paper `#F5F2EA` | 13.41:1 |
| Muted `#62665B` / paper | 5.26:1 |
| Olive `#526343` / paper | 5.82:1 |
| Muted / About `#E9EBDF` | 4.88:1 |
| Olive / About | 5.40:1 |
| Travel ink `#35432D` / `#DFE5D5` | 8.19:1 |
| Muted / screenshot surround `#E7E4DA` | 4.62:1 |
| Paper / olive button | 5.82:1 |

All listed text combinations exceed 4.5:1. Decorative separator lines do not carry essential control state.

## Limits and remaining content decisions

- The available browser API did not support the attempted browser zoom shortcuts; no actual 200%/400% zoom result is claimed. Narrow-width reflow was measured separately.
- System-level reduced-motion emulation was not available through the used API. The local preference was exercised; system media-query and change-listener handling were reviewed in code only.
- Clipboard failure fallback and blocked-storage fallback were reviewed in code, not fault-injected in the browser.
- Screen-reader output, physical touch devices, Safari and Firefox were not exercised.
- External repo destinations are copied from the user's profile; the Itsu Sushi demo was opened and captured. No external messages, payment flows or forms were submitted.
- Public copy, chosen CV, artwork usage rights and production metadata remain owner's publication decisions. See `content-sources.md`.
- ESLint 9's npm maintenance notice is a development-tooling trade-off to keep compatibility with the existing Node runtime, documented in `design-direction.md`.

The final full-page desktop screenshot is stored locally at ignored `artifacts/desktop.png` so it does not become a production asset. Mobile and tablet screenshots were inspected during the browser session but were not saved as separate files.
