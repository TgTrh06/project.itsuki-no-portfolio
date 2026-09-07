# Design direction — Itsuki

## Approved Itsumori refinement

Itsuki names the personal portfolio; Itsumori names the project collection. Forest imagery is expressed through the owner's narrative, olive accents and the existing editorial rhythm. Japanese names and short phrases are secondary annotations with `lang="ja"`, using system Mincho/serif fallbacks. No additional dependency or remote font service is needed. The About section now includes “Mùa tiếp theo”, explicitly describing future goals. Existing reduced-motion behavior applies to the added content.

Approved direction: 2026-09-07. Local implementation only.

## Context

Personal portfolio for technical recruiters and potential collaborators. Expression: bold; rhythm: editorial; motion: expressive with restraint. The first action is exploring selected projects. Content flows from identity to work, working approach and contact.

Vietnamese is the initial language, inferred from the conversation. Public-facing professional identity comes from the existing GitHub profile: Tùng Trịnh, Backend Developer / Full-stack Web Builder. The profile's Fuji artwork and “Quietly, steadily” phrase support the visual identity without inventing a new theme.

## Visual system

| Role | Value |
| --- | --- |
| Background | `#F5F2EA` |
| Main text | `#242820` |
| Secondary text | `#62665B` |
| Accent | `#526343` |
| Section wash | `#E9EBDF` |
| Separators | `#D4D5C9` |
| Display | Lora Variable, regular and italic |
| Body | Manrope Variable |

Typography, spacing and aligned edges provide hierarchy. Main surfaces stay flat; the image frame represents a project preview. A single circular contact link has a specific action and appears only where space supports it. No stock metrics, testimonials, percentage skill bars or decorative icon grids.

The hero uses a large headline and existing artwork. The work section alternates image/text placement on desktop to create rhythm, returning to image then information on mobile. About introduces a muted section background. The contact section returns to open space and a direct email address.

## Interaction

- Native anchors and scroll position identify the current section.
- A disclosure navigation on mobile, with Escape and outside-pointer close. It is not a modal and does not trap focus.
- Native `details` for each project; no essential information exists only on hover.
- Email stays selectable, with a separate copy action and an inline live status message.
- Entrance effects use opacity and a short transform; section effects play once per observed element. They do not hide content while waiting for JavaScript.
- Reduced motion follows system settings and a local preference. The explicit local control can reduce motion further, never override a system reduction.
- Default scrolling remains native; no scroll interception or wheel handlers.

## Responsive and accessibility

Layout thresholds respond to typography and content fit. Desktop has two-column hero/projects/about; narrow screens reorder into one column. Header becomes a disclosure menu at 700px. Interactive targets are at least 44px high where practical; focus indicators are visible. Long email content can wrap.

Text contrast must be measured against its actual surface. Thin separators are decorative and are not the sole boundary or indicator for operating a control. Fonts include Vietnamese glyphs. Semantic headings, landmarks, project articles and native details carry structure.

## Technical scope

Vite + React + TypeScript, CSS custom properties, native IntersectionObserver and Web Animations. ESLint and TypeScript validate source. React's build output is static. TypeScript 5.9 and typescript-eslint 8.46.4 are selected within the parser's supported range (`>=4.8.4 <6.0.0`). ESLint 9.39.5 is used for compatibility with the existing Node 22.12 runtime; ESLint 10 requires at least Node 22.13 on that branch. ESLint 9 now emits a maintenance/deprecation notice from npm. Migrating the lint toolchain should accompany a separately approved runtime upgrade; this does not affect the shipped browser bundle.

No router is needed for the single page. No animation framework, backend, analytics, contact form, dark theme, publishing or infrastructure change is included. Future case-study pages, multilingual support and a selected public CV can be scoped separately.
