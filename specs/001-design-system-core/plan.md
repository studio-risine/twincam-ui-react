# Implementation Plan: Design System Core

**Branch**: `001-design-system-core` | **Date**: 2025-11-05 | **Spec**: ./spec.md
**Input**: Feature specification from `/specs/001-design-system-core/spec.md`

## Summary

Build a public, token-first React design system that small teams can use across landing pages, SaaS products, and apps. The library centralizes tokens (color, type, spacing, motion, etc.) and a minimal, accessible component set with consistent variant/size APIs. It’s consumed by Next.js apps and marketing sites but remains framework-agnostic at runtime. Docs live on a dedicated site with examples and usage guidance. Versioning follows SemVer with clear migration notes.

## Technical Context

**Language/Version**: TypeScript 5.x, React 19 (peer)
**Primary Dependencies**: React, Radix UI primitives (behavior), Tailwind CSS v4 (styling), class-variance-authority + tailwind-merge (variants), lucide (icons), Storybook (docs), tsup (build)
**Storage**: N/A
**Testing**: Type-check (tsc), lint (Biome), visual/a11y checks and examples via Storybook; unit test runner (NEEDS CLARIFICATION: adopt Vitest or rely on story-driven tests only for MVP)
**Target Platform**: Web; consumed by Next.js applications and static/SSR marketing sites
**Project Type**: Single package library published publicly
**Performance Goals**: Tree-shakable ESM/CJS exports; minimal CSS output per import; no blocking layout shifts from components; SSR-safe (no window access at import)
**Constraints**: WCAG 2.1 AA; no Next.js-specific imports in package; tokens define all visuals; SemVer; public changelog
**Scale/Scope**: Initial 6–10 core components and full token set; target ≥2 internal adoptions in 4 weeks

## Constitution Check

Gate summary vs Constitution 1.1.0:
- Token‑First: PASS — CSS variables define all visuals; no hardcoded values in component code.
- Accessible by Default: PASS — focus states, keyboard operability, SR labels; WCAG 2.1 AA contrast.
- Composable Primitives: PASS — Radix for behavior; minimal, ref-forwarding, asChild when useful.
- Consistent APIs & Theming: PASS — variant/size conventions with cva; theming via CSS variables and .dark scope.
- Quality, Docs, and SemVer: PASS — Storybook docs per component; lint/type/build gates; SemVer with migration notes.
- Shadcn Policy: PASS — use CLI as scaffold only; React-only templates; tokenization; stories; review checklist.

No violations detected. Gate: PASS.

## Project Structure

### Documentation (this feature)

```text
specs/001-design-system-core/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── contracts/           # Phase 1 output (component API contracts)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── avatar.tsx
│   └── ui/
│       └── button/
│           ├── button.variants.ts
│           └── index.tsx
├── lib/
│   └── cn.ts
├── stories/
│   ├── avatar.stories.tsx
│   └── button.stories.ts
└── styles/
    └── index.css
```

**Structure Decision**: Single library package. Public APIs exported via `src/index.ts`; styles distributed at `dist/styles/index.css`. Docs and examples live in Storybook, separate dedicated site to be configured.

## Complexity Tracking

No constitutional violations to justify.

## Post-Design Constitution Check

Re-evaluated after Phase 0/1 artifacts:
- Tokens centralized and used exclusively by components: PASS
- Accessibility baselines documented and reflected in contracts: PASS
- Consistent variant/size API across components: PASS
- Shadcn policy adhered to for any future scaffolding: PASS
- Docs site decision aligned with Quality & Docs principle: PASS
