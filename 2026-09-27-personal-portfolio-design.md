# Xinhe Chen Personal Portfolio - Design Specification

## Purpose

Create an English-language personal portfolio for Xinhe Chen that primarily serves technology product teams. The site should make Xinhe's combined product thinking, user research, data analysis, AI, and full-stack implementation skills understandable within a short review, while presenting spatial design as a distinctive source of systems thinking.

The first release is a polished, responsive, single-page portfolio. A future Chinese version will be deployed separately and is outside this release.

## Audience and Success Criteria

Primary readers are product managers, product designers, design leaders, technical hiring managers, and interdisciplinary technology teams.

The site succeeds when a reader can quickly answer:

- Who is Xinhe and what kind of problems does he solve?
- How does his spatial-design background strengthen his product work?
- What products and research projects has he completed?
- What measurable outcomes and technical skills can he demonstrate?
- How can the reader contact him or download his resume?

## Positioning

Primary identity:

> Product Designer x Full-stack Developer

Core proposition:

> I turn complex human problems into clear, data-informed digital products.

Hero headline:

> Designing systems across space, data, and technology.

The product narrative leads with technology and product capability. Landscape architecture and spatial design provide differentiation rather than becoming the dominant portfolio category.

## Information Architecture

The site is a single scrolling page with anchored navigation.

### 1. Hero

- Full viewport height.
- Muted, looping background video with a clean dark readability overlay.
- No grain or texture overlay.
- Top-left wordmark: `XINHE CHEN`.
- Navigation: `Work`, `Profile`, and `Experience`.
- High-visibility `Let's Talk` contact button.
- Hero headline, role label, selected-work prompt, and scroll indicator.
- Primary calls to action: `View selected work` and `Download resume`.

### 2. Profile

A concise introduction covering Xinhe's Landscape Architecture, Information, and Data Science background. Copy should emphasize the ability to connect user research, product definition, data analysis, and implementation. This section should not become a long autobiography.

### 3. Selected Work

Projects appear in this order:

1. AI Career Path Recommendation Platform
2. Envision Resilience Challenge
3. Startup Investment Analysis
4. UMSI Policy RAG Assistant

The AI Career project is the featured case and receives the most visual space. Each project uses the same content model:

- Problem
- Role
- Approach and key methods
- Outcome and measurable evidence
- Technology stack

Resume-supported evidence includes the six-module AI career workflow; the Envision coverage increase from 0.63 to 0.80; the startup dataset of 41,174 valid observations and model performance of 0.828 accuracy and 0.910 ROC-AUC; and the RAG assistant's cited retrieval and persisted vector store.

### 4. Experience and Education

A compact reverse-chronological timeline combines work, research, and education without repeating project details. The following additional experiences each receive a single-sentence description:

- **Jun-Jul 2022 - Shandong Garden Design and Research Institute, Designer Assistant:** Contributed to the planning and landscape development of the Xingtai Zoo project in Hebei.
- **Aug-Sep 2022 - Shandong Tongyuan Design Company, Designer Assistant:** Developed architectural and landscape proposals for Academician Valley and a Confucian culture theme park.
- **Jun-Aug 2025 - Shanghai Landscape Planning and Design Research Institute, Research Assistant:** Organized historical archival materials and supported cross-department project operations.

Other timeline entries include the University of Michigan, Beijing Forestry University, Envision Resilience Challenge, and Shanghai Tuyuansu Digital Technology product management internship.

### 5. Capabilities

Four concise capability groups:

- Product and Research
- Data and AI
- Full-stack Development
- Spatial Thinking

The content uses short, scannable terms rather than reproducing the complete resume skills list.

### 6. Contact and Footer

- Short invitation to discuss product, research, or interdisciplinary opportunities.
- Email link.
- Ann Arbor, Michigan location.
- Resume download link.

No contact form is included in the first release.

## Visual Direction

The visual language is a restrained product casebook with subtle spatial-design references:

- A dark, cinematic hero followed by light content sections.
- Editorial typography with large display headlines and highly legible body text.
- Architectural grids, fine rules, section numbering, coordinates, and measured spacing.
- Strong hierarchy and generous whitespace.
- Minimal color accents used for interaction and project metadata.
- No decorative grain, model-authored SVG illustration, or generic developer-dashboard styling.

The result should feel deliberate and technical without losing warmth or clarity.

## Interaction and Motion

- Anchor navigation moves readers to major sections and clearly indicates interaction states.
- Hero copy enters with restrained motion.
- Project cards may use subtle movement or reveal effects without obstructing reading.
- Buttons and links have visible hover, focus, and active states.
- The background video is muted, autoplaying, inline, and looping where browser policy permits.
- When the video cannot load, the connection is slow, the viewport is small, or reduced motion is enabled, the hero displays a static poster image.
- Motion never carries essential meaning.

## Component Model

- `Hero`: navigation, background media, positioning copy, primary actions, and fallback behavior.
- `Profile`: concise interdisciplinary biography and positioning proof.
- `ProjectCard`: reusable project story with role, problem, methods, outcome, and stack.
- `Timeline`: compact work and education chronology.
- `CapabilityGrid`: four grouped capability sets.
- `ContactFooter`: contact invitation, email, location, and resume link.

Project and timeline content should be stored as structured data so future entries can be added without changing the presentation components.

## Technical Architecture

- A lightweight React-based, single-route site using the workspace's Sites starter structure.
- Static content only; no database, authentication, external connector, or application-owned backend.
- Resume PDF served as a downloadable public asset.
- Video and poster image served as optimized public assets.
- Responsive CSS handles desktop, tablet, and mobile presentation.
- Semantic HTML and accessible interaction patterns are required.
- Avoid unnecessary client state and speculative features.

## Accessibility and Resilience

- Meet readable foreground/background contrast throughout the video hero and content areas.
- Provide keyboard-accessible navigation and visible focus treatment.
- Maintain adequately sized touch targets.
- Use meaningful headings and landmarks.
- Respect `prefers-reduced-motion`.
- Provide useful text and poster fallbacks if media loading fails.
- Preserve full content access without relying on animation.

## Validation

Before delivery, verify:

- Production build completes successfully.
- Desktop and mobile layouts preserve hierarchy and readable line lengths.
- Navigation anchors reach the correct sections.
- Email and resume links work.
- Background video does not block text readability and falls back correctly.
- Keyboard navigation, focus states, and reduced-motion behavior work.
- All dates, metrics, project descriptions, and contact details match the supplied resume and approved additions.

## Out of Scope

- Chinese localization.
- Multi-page project case studies.
- Blog or content management system.
- Contact form or persistent data.
- Authentication.
- Admin interface.
- Complex 3D effects or animation-heavy transitions.
