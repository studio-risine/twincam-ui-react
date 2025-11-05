# TC96 Design System Constitution

## Core Principles

### I. Token‑First
- All visual styles are defined as design tokens (color, typography, spacing, radius, shadow, motion, z-index, breakpoints).
- Components consume tokens and CSS variables only; no hardcoded values in component code.
- Dark mode and theming are driven by CSS variables and tokens, not component logic.

### II. Accessible by Default
- WCAG 2.1 AA baseline: color contrast, focus visibility, keyboard navigation, and screen reader labels.
- Respect user preferences (e.g., prefers-reduced-motion) and support RTL.
- Use semantic markup and ARIA only to fix gaps; prefer native elements where possible.

### III. Composable Primitives
- Build small, composable, and unopinionated primitives first; compose for higher-level patterns.
- Prefer headless primitives (e.g., Radix UI) for behavior; styling remains local via tokens.
- Forward refs, support className, and expose a minimal, predictable API.

### IV. Consistent APIs & Theming
- Standard variant API: variant, size, state flags; names and values must be consistent across components.
- Use class-variance-authority and tailwind-merge for variant styling; avoid bespoke conditionals.
- Theming via CSS variables at :root and theme scopes (e.g., .dark); no inline style themes.

### V. Quality, Docs, and SemVer
- Storybook stories are required for every component and variant; examples are the primary docs.
- Lint, typecheck, and build must pass on every PR. Visual/a11y checks via Storybook when available.
- Semantic Versioning: breaking changes require a MAJOR release with migration notes.

## Minimum Standards & Scope

### Design Tokens
- Color: neutral scale and semantic roles (bg, fg, border, accent, success, warning, danger) with light/dark values.
- Typography: font families, sizes/line-heights scale, weights.
- Spacing: a coherent scale (e.g., 0, 0.5, 1, 2, 3, 4, 6, 8, 12...).
- Radius and Shadow: small, medium, large radii; elevation shadows.
- Motion: standard durations and easings; provide reduced-motion safe defaults.
- Breakpoints/container sizes exposed for responsive decisions.

### Component Baseline
- At minimum, the library ships stable primitives for Button and Avatar (present), with consistent variants.
- Each component includes: accessible markup, keyboard support if interactive, ref forwarding, className, and testable props.
- No component introduces global state or side effects; all styles come from tokens/CSS.

### Tooling Alignment (non-binding but recommended)
- Styling: Tailwind CSS v4 with CSS variables for tokens; tailwind-merge for class safety.
- Behavior: Radix UI primitives where applicable.
- Icons: lucide-react where icons are needed.
- Scaffolding: shadcn/ui CLI for optional code generation; generated code is vendored (no runtime dependency).

### Shadcn UI Usage Policy
- Source model: Use the shadcn/ui CLI to scaffold React components and primitives. Generated files are copied into this repo and adapted; we do not depend on shadcn at runtime.
- Framework scope: Only import React variants. Do not use Next-specific utilities (e.g., next/link, next/image). Replace such imports with framework-agnostic alternatives.
- Tokens first: Replace hardcoded colors, spacing, radii, and shadows from templates with our CSS variables (see `src/styles/index.css`). All theming must flow through tokens.
- API normalization: Components must expose `variant` and `size` with our standard values, forward refs, accept `className`, and optionally support `asChild` via Radix Slot when applicable.
- Directory & exports: Place code under `src/components/ui/<component>/` (or a single file if trivial) and export from `src/index.ts`. Keep styles inlined via Tailwind classes bound to tokens.
- Accessibility: Preserve or improve ARIA roles, keyboard support, and focus states from the templates. Ensure WCAG 2.1 AA color contrast.
- Stories & docs: Add/maintain Storybook stories that demonstrate all variants, states (loading, disabled), and accessibility notes. Stories are the canonical docs.
- Tailwind integration: The CLI must target our CSS entry at `src/styles/index.css`. Any Tailwind config changes require review and must not break token variables or dark mode scopes.
- Review checklist: (1) Tokenized styles only; (2) No Next.js imports; (3) Variant/size match library conventions; (4) Ref forwarding tested; (5) Storybook coverage; (6) Types export stable; (7) No global side-effects.
- License: shadcn templates are MIT. Preserve license headers when present; include attribution in PR description when importing new templates.

## Development Workflow & Quality Gates

- TypeScript strict types; public APIs are typed and exported from `src/index.ts`.
- Required checks for PRs: `biome` lint, `tsc --noEmit` typecheck, `tsup` build, and Storybook build for docs.
- Every new/changed component must include Storybook stories covering variants, states, and a11y notes.
- Breaking changes must include migration notes in `CHANGELOG.md` and a MAJOR version bump.
- Deprecations: mark as deprecated in docs for at least one MINOR before removal.

## Governance

- This Constitution defines the minimum bar for contributions; it supersedes ad-hoc conventions.
- Amendments require a PR that documents the change, impact, and migration guidance when relevant.
- Reviewers verify compliance with Core Principles and Quality Gates before merging.

**Version**: 1.1.0 | **Ratified**: 2025-11-05 | **Last Amended**: 2025-11-05
