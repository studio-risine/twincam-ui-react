# Phase 0 Research: Design System Core

Date: 2025-11-05
Branch: 001-design-system-core

## Decisions and Rationale

### Framework Boundary (React library, consumed by Next.js)
- Decision: Library exports framework-agnostic React components; consuming apps include Next.js sites and apps.
- Rationale: Keeps the package portable and SSR-safe while supporting our primary platform.
- Alternatives considered: Build Next.js-only components (rejected: limits portability), ship web components (rejected: heavier integration cost).

### Distribution Channel
- Decision: Public package registry with SemVer and public changelog.
- Rationale: Encourages adoption and transparency; simplifies internal/external consumption.
- Alternatives: Private-only (rejected: restricts future use), dual-channel (rejected for MVP complexity).

### Brand Strategy
- Decision: Single brand with token-driven overrides (default + dark; brand accent adjustable via tokens).
- Rationale: Faster delivery; sufficient for initial use cases; keeps API surface small.
- Alternatives: Multi-brand now (rejected: complexity), theme pack marketplace (rejected: out of scope).

### Documentation Surface
- Decision: Dedicated docs site with examples and usage guidance (backed by Storybook pages and MDX content).
- Rationale: Single source of truth; easy discovery; supports visual and a11y checks.
- Alternatives: Embed docs into consuming apps (rejected: fragmentation), README-only (rejected: insufficient).

### Tokens & Theming
- Decision: CSS variables for tokens at :root and .dark scopes; components consume tokens only.
- Rationale: Aligns with token-first principle; easy theming; SSR-friendly.
- Alternatives: CSS-in-JS tokens (rejected: runtime overhead), inline styles (rejected: breaks theming).

### Accessibility Baseline
- Decision: WCAG 2.1 AA; keyboard operability; visible focus; ARIA only to patch semantic gaps.
- Rationale: Non-negotiable baseline; reduces downstream accessibility debt.
- Alternatives: Visual-only checks (rejected: insufficient), defer a11y (rejected).

### RTL and i18n Considerations
- Decision: Respect logical properties and avoid directional CSS where possible; ensure focus orders and icons work in RTL.
- Rationale: International readiness from day one.
- Alternatives: Add later (rejected: costly retrofits).

### shadcn/ui Usage
- Decision: Use shadcn CLI to scaffold React variants only; vendor code; normalize to tokens and variant/size API; add stories.
- Rationale: Speed with control; complies with Constitution policy.
- Alternatives: Handcraft all primitives (slower), depend on shadcn runtime (rejected: lock-in).

### Testing Approach
- Decision: Type-check + lint gates; Storybook as primary examples and a11y checks; evaluate Vitest for unit tests.
- Rationale: Focus on UI surface; add unit tests where behavior is non-trivial.
- Alternatives: Full E2E at library level (rejected for MVP).

## Open Questions (Resolved)
- Unit test runner: Adopt Vitest in future iteration; for MVP, rely on type/lint/story checks.
- Docs hosting: Use dedicated site; Storybook build deployable to static hosting.

## References
- Constitution 1.1.0 (Token-First, A11y by Default, Composable Primitives, Consistent APIs & Theming, Quality/Docs/SemVer, Shadcn Policy)
