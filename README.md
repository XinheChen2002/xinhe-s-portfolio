# Xinhe Chen Portfolio

A responsive, single-page portfolio built with Next.js, React, and TypeScript from `2026-09-27-personal-portfolio-design.md`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify

```bash
npm test -- --run
npm run lint
npm run build
```

## Replace the scaffold placeholders

- Update `siteConfig.email` in `data/portfolio.ts` with Xinhe's confirmed email address.
- Put the final resume at `public/resume/xinhe-chen-resume.pdf`, then set `siteConfig.resumeUrl` to `/resume/xinhe-chen-resume.pdf`.
- Optionally add `public/media/hero-loop.mp4` and `public/media/hero-poster.webp`. The hero uses a complete CSS fallback when these files are absent or motion is reduced.
- Confirm the provisional dates for University of Michigan, Envision Resilience Challenge, Shanghai Tuyuansu Digital Technology, and Beijing Forestry University against the source resume.

Content lives in `data/portfolio.ts`; presentation components live in `components/`; the responsive visual system lives in `app/globals.css`.
