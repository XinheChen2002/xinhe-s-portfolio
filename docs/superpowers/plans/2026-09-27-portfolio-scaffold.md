# Personal Portfolio Scaffold Implementation Plan

**Execution status:** Implemented and verified on 2026-09-27. The checkboxes below remain reusable as a task-by-task build record.

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, responsive, runnable single-page portfolio for Xinhe Chen from the supplied design specification.

**Architecture:** Use a static Next.js App Router page composed from small server-rendered React components. Keep projects, timeline entries, and capabilities in typed data modules; use semantic HTML and one global CSS system for responsive layout, interaction states, media fallback, and reduced-motion support.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, Vitest, Testing Library, jsdom

**Spec:** `2026-09-27-personal-portfolio-design.md`

## Global Constraints

- English-language, single-route portfolio with anchored navigation.
- Static content only; no database, authentication, external connector, or application-owned backend.
- Product capability leads the narrative; spatial design is a differentiator.
- No contact form, localization, CMS, model-authored SVG, decorative grain, or animation-heavy effects.
- Semantic HTML, keyboard access, visible focus, readable contrast, touch-friendly controls, and `prefers-reduced-motion` are required.
- Missing resume, video, and contact details must degrade clearly without preventing a successful local build.

## Review Focus

- Missing optional media: the hero remains legible and useful with its CSS/poster fallback.
- Reduced-motion preference: nonessential motion is disabled and content remains available.
- Narrow viewport: navigation, actions, project metadata, and timeline remain readable without horizontal overflow.
- Keyboard use: all anchors and actions have visible focus treatment and meaningful labels.
- Placeholder contact/resume values: they are centralized and visibly marked for replacement rather than silently broken.

---

### Task 1: Runnable Next.js Foundation

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Create: `.gitignore`
- Create: `app/layout.tsx`
- Test: `app/page.test.tsx`

**Interfaces:**
- Consumes: the Node.js runtime and npm.
- Produces: `npm run dev`, `npm test`, `npm run lint`, and `npm run build`; a root layout that accepts `Readonly<{ children: React.ReactNode }>`.

- [ ] **Step 1: Add the test/build toolchain and a smoke test for the missing page**

Create the configuration files and a test that imports `Page` from `app/page` and expects the `main` landmark to render.

- [ ] **Step 2: Run the smoke test and verify RED**

Run: `npm test -- --run app/page.test.tsx`
Expected: FAIL because `app/page` does not exist.

- [ ] **Step 3: Add the minimal root layout and page shell**

Create `app/layout.tsx` with metadata and `app/page.tsx` exporting a `Page(): JSX.Element` that renders `<main />`.

- [ ] **Step 4: Run the smoke test and verify GREEN**

Run: `npm test -- --run app/page.test.tsx`
Expected: PASS.

### Task 2: Typed Portfolio Content and Semantic Sections

**Files:**
- Create: `data/portfolio.ts`
- Create: `components/hero.tsx`
- Create: `components/profile.tsx`
- Create: `components/project-card.tsx`
- Create: `components/timeline.tsx`
- Create: `components/capability-grid.tsx`
- Create: `components/contact-footer.tsx`
- Modify: `app/page.tsx`
- Modify: `app/page.test.tsx`

**Interfaces:**
- Consumes: `Project`, `TimelineEntry`, `CapabilityGroup`, and `siteConfig` from `data/portfolio.ts`.
- Produces: `Hero`, `Profile`, `ProjectCard`, `Timeline`, `CapabilityGrid`, and `ContactFooter` server components; anchors `#work`, `#profile`, `#experience`, and `#contact`.

- [ ] **Step 1: Add failing behavior tests**

Test the hero positioning copy, all four project headings in the specified order, evidence metrics (`0.80`, `41,174`, `0.910`), section landmarks, email action, and resume action.

- [ ] **Step 2: Run the page tests and verify RED**

Run: `npm test -- --run app/page.test.tsx`
Expected: FAIL because the content and components are absent.

- [ ] **Step 3: Implement the typed data and minimal semantic components**

Use readonly TypeScript types and map structured arrays into focused components. Keep incomplete personal URLs in `siteConfig` as explicit placeholders.

- [ ] **Step 4: Run the page tests and verify GREEN**

Run: `npm test -- --run app/page.test.tsx`
Expected: PASS.

### Task 3: Editorial Visual System and Resilient Hero

**Files:**
- Create: `app/globals.css`
- Modify: `app/layout.tsx`
- Modify: `components/hero.tsx`
- Modify: `app/page.test.tsx`

**Interfaces:**
- Consumes: the semantic class names and section IDs from Task 2.
- Produces: responsive desktop/mobile presentation, visible hover/focus states, CSS poster fallback, optional `/media/hero-loop.mp4` enhancement, and reduced-motion behavior.

- [ ] **Step 1: Add failing hero-resilience and accessibility tests**

Assert that the hero video is muted, looped, inline, nonessential to content, and labelled appropriately; assert navigation and calls to action use actual links.

- [ ] **Step 2: Run the tests and verify RED**

Run: `npm test -- --run app/page.test.tsx`
Expected: FAIL on the missing resilient-media attributes or accessible actions.

- [ ] **Step 3: Implement the global responsive visual system**

Add design tokens, architectural grid lines, large editorial type, project hierarchy, timeline layout, mobile breakpoints, focus-visible states, and `prefers-reduced-motion` rules. Use a CSS background as the guaranteed poster and allow the optional local video to fail transparently.

- [ ] **Step 4: Run tests and verify GREEN**

Run: `npm test -- --run app/page.test.tsx`
Expected: PASS.

### Task 4: Documentation and Production Verification

**Files:**
- Create: `README.md`
- Create: `public/media/README.md`
- Create: `public/resume/README.md`
- Modify: `package.json` only if verification reveals a script issue.

**Interfaces:**
- Consumes: the completed application and its placeholder asset paths.
- Produces: setup instructions, replacement instructions for hero media/resume/contact data, and a production-ready static build.

- [ ] **Step 1: Document setup and asset replacement**

Explain `npm install`, `npm run dev`, `npm test`, `npm run lint`, and `npm run build`; name the expected media and resume paths and the `siteConfig` fields to update.

- [ ] **Step 2: Run the complete test suite**

Run: `npm test -- --run`
Expected: all tests PASS with no warnings.

- [ ] **Step 3: Run static analysis**

Run: `npm run lint`
Expected: exit code 0.

- [ ] **Step 4: Run the production build**

Run: `npm run build`
Expected: Next.js completes the optimized production build and emits the single route successfully.

- [ ] **Step 5: Inspect the desktop and mobile page**

Run the local server and verify hierarchy, readable line lengths, correct anchor targets, no horizontal overflow, visible focus, and media fallback at desktop and mobile viewport sizes.
