# Personal Portfolio Handoff

Last checked: 2026-09-27 (America/Detroit)

## Current status

The repository contains a runnable, static, single-page personal portfolio. It is suitable as a functional design baseline, but it is not content-complete for publication because several personal details and final media assets are still placeholders.

Local preview verified at: <http://127.0.0.1:3000/>

## Technical stack

- Next.js 16.3.6 with the App Router and Turbopack
- React and React DOM 19.3.0
- TypeScript 6 with strict type checking
- Plain responsive CSS in `app/globals.css`
- Vitest 4, Testing Library, jest-dom, and jsdom
- ESLint 9 with Next.js Core Web Vitals and TypeScript rules
- Static content only: no database, API, authentication, CMS, or client-side state layer

The main content model is stored in `data/portfolio.ts`. Page composition is in `app/page.tsx`, reusable sections are in `components/`, and global layout/metadata are in `app/layout.tsx`.

## Local commands

Install dependencies:

```bash
npm install
```

Start the development preview:

```bash
npm run dev
```

The default local address is <http://localhost:3000/>. During this handoff check the server was bound explicitly to <http://127.0.0.1:3000/>.

Run validation:

```bash
npm test -- --run
npm run lint
npm run build
```

Preview the production build after `npm run build`:

```bash
npm run start
```

## Implemented

- English single-page portfolio with anchored sections for Profile, Selected Work, and Experience.
- Full-height dark Hero with wordmark, desktop navigation, contact CTA, positioning statement, work CTA, scroll cue, media overlay, and CSS fallback artwork.
- Concise interdisciplinary profile connecting landscape architecture, information, data science, research, product definition, and implementation.
- Four structured projects in the required order, including the specified quantitative evidence and technology tags.
- Reverse-chronological-style experience and education timeline.
- Four capability groups: Product & Research, Data & AI, Full-stack Development, and Spatial Thinking.
- Contact footer with Ann Arbor location and email CTA.
- Typed reusable data and presentation components.
- Desktop, tablet, and mobile responsive rules.
- Semantic landmarks and headings, a skip link, visible keyboard focus, touch-sized CTAs, and `prefers-reduced-motion` handling.
- Hero video markup configured for autoplay, muted playback, looping, inline playback, and a poster path.
- Component tests covering page landmarks, positioning copy, project order, key metrics, navigation links, contact behavior, and video fallback attributes.

## Missing or still provisional

- `siteConfig.email` is currently `hello@xinhe.design` and has not been confirmed as Xinhe's real contact address.
- `siteConfig.resumeUrl` is `null`; no downloadable resume PDF exists yet. The UI intentionally displays `Resume asset pending`.
- `public/media/hero-loop.mp4` and `public/media/hero-poster.webp` do not exist. The Hero currently relies on the CSS fallback background.
- Exact dates for the University of Michigan, Beijing Forestry University, Envision Resilience Challenge, and Shanghai Tuyuansu Digital Technology entries still need confirmation against the source resume.
- Project cards contain narrative and metrics but no approved project imagery, product screens, process diagrams, or outbound case-study links.
- On viewports below 900px, the three anchor navigation links are hidden instead of being replaced by a compact mobile navigation control.
- The navigation has hover and focus states but does not track the currently viewed section.
- There is no favicon, social share image, final SEO/social metadata set, analytics, or deployment configuration.
- There are no browser-level end-to-end tests for scrolling, asset availability, or actual resume/email destinations.
- Multi-page case studies, Chinese localization, CMS, contact form, authentication, and admin features remain intentionally out of scope for the first release.

## Verification results

Commands were run from the project root on 2026-09-27:

- `npm test -- --run`: passed, 1 test file and 6 tests, 0 failures.
- `npm run lint`: passed with exit code 0 and no reported lint errors.
- `npm run build`: passed with Next.js 16.3.6. The `/` route and `/_not-found` route were generated as static content.
- Development preview: started with `npm run dev -- --hostname 127.0.0.1 --port 3000`.
- HTTP check: `GET http://127.0.0.1:3000/` returned `200`, `text/html; charset=utf-8`, and the expected page title.

Starting `next dev` with this Next.js version also generates root-level `AGENTS.md` and `CLAUDE.md` framework guidance files. They are local, unstaged files and are not required at runtime.

## Repository hygiene

`.gitignore` currently excludes:

- `node_modules/`
- `.next/`, `out/`, and `coverage/`
- `.env` and all `.env.*` variants, except the safe template `.env.example`
- `.vercel/`
- logs, TypeScript build metadata, macOS metadata, Superpowers scratch files, and local worktrees

The ignore rules were checked directly. `package-lock.json`, `package.json`, source files, and required Next.js configuration remain eligible for version control.

No files were staged, committed, pushed, published, or deployed during this handoff pass.

## Design task for v0

Use the existing Next.js implementation as the source of truth and visually refine it rather than replacing its content model.

### Objective

Turn the current functional scaffold into a portfolio-ready product casebook for a product designer and full-stack developer. Preserve the restrained architectural character: dark cinematic Hero, light editorial content sections, generous whitespace, fine rules, large serif display typography, compact technical metadata, and a limited acid-lime interaction accent.

### Required design work

1. Design a stronger visual storytelling system for the four project cards. Keep the AI Career Path Recommendation Platform dominant, and introduce realistic slots for approved product screens, research artifacts, data visualizations, or spatial diagrams without inventing project evidence.
2. Refine the Hero composition around a future looping background video and poster image. Text contrast and the current CSS-only fallback must remain robust.
3. Add a compact, keyboard-accessible mobile navigation pattern so Work, Profile, and Experience remain directly reachable below 900px.
4. Improve hierarchy and pacing through the Profile, Experience, and Capabilities sections while preserving all existing copy, project order, metrics, and semantic heading structure.
5. Design final states for a real resume download and verified email address. Until assets are supplied, keep placeholders visibly nonfunctional instead of linking to missing files.
6. Specify responsive behavior for 390px mobile, tablet, 1280px desktop, and wide desktop layouts.
7. Preserve visible focus states, sufficient contrast, reduced-motion behavior, readable line lengths, and touch targets of at least 44px.

### Constraints

- Stay within the existing Next.js/React/TypeScript architecture and structured data model.
- Do not add a CMS, backend, authentication, contact form, dashboard styling, decorative grain, heavy 3D, or essential animation.
- Do not fabricate personal details, dates, project screenshots, results, or contact information.
- Do not remove the CSS media fallback or make essential content depend on animation.
- Prefer reusable CSS and focused components over a large monolithic page component.

### Expected v0 output

- Updated page/component markup and CSS that can replace the current visual layer without changing the content schema.
- Clear placeholder treatment for project media, Hero video/poster, resume, and contact details.
- Responsive desktop and mobile states.
- A short note listing any required assets and the exact public paths expected by the implementation.
