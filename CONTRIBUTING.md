# Contributing to TC96 Design System

Thank you for your interest in contributing to the TC96 Design System! This guide outlines our governance model and quality expectations.

## Governance

This project follows the [TC96 Design System Constitution](/.specify/memory/constitution.md) (v1.1.0), which defines core principles and minimum standards for all contributions.

### Core Principles

1. **Token-First**: All visual styles come from design tokens via CSS variables
2. **Accessible by Default**: WCAG 2.1 AA baseline; keyboard operability; visible focus
3. **Composable Primitives**: Small, unopinionated building blocks with predictable APIs
4. **Consistent APIs & Theming**: Standard variant/size conventions; CSS variable theming
5. **Quality, Docs, and SemVer**: Storybook docs required; semantic versioning with migration notes

## Pull Request Quality Gates

Every PR must pass these checks before merge:

### Required Checks

- [ ] **Lint**: `pnpm run lint` passes with no errors
- [ ] **Type-check**: `pnpm run check:type` passes
- [ ] **Build**: `pnpm run build` succeeds without errors
- [ ] **Storybook**: `pnpm run build:storybook` succeeds

### Component Contributions (New/Changed Components)

- [ ] Component uses only design tokens (no hardcoded colors, spacing, etc.)
- [ ] Variants and sizes follow library conventions (variant, size props with consistent naming)
- [ ] Ref forwarding implemented where applicable
- [ ] `className` prop supported for layout adjustments
- [ ] Accessibility baseline met:
  - [ ] Keyboard operable (if interactive)
  - [ ] Visible focus states
  - [ ] WCAG 2.1 AA color contrast
  - [ ] Screen reader labels (aria-label, aria-describedby where needed)
- [ ] Storybook stories added covering:
  - [ ] All variants
  - [ ] All sizes
  - [ ] Key states (disabled, loading, error, etc.)
  - [ ] Accessibility notes in MDX or story description
- [ ] Component exported from `src/index.ts`
- [ ] Types are stable and exported

### Using shadcn/ui Templates

If scaffolding components from shadcn/ui:

- [ ] Only React variants imported (no Next.js-specific imports like `next/link`, `next/image`)
- [ ] Hardcoded styles replaced with our CSS variables
- [ ] API normalized to our variant/size conventions
- [ ] Storybook stories added
- [ ] License/attribution noted in PR description

## Semantic Versioning

- **MAJOR**: Breaking changes to public APIs (prop renames, removals, behavior changes)
- **MINOR**: New components, new variants/sizes, new features (backward compatible)
- **PATCH**: Bug fixes, internal refactors, docs updates

### Breaking Changes

- Must include migration notes in `CHANGELOG.md`
- Deprecations announced at least one MINOR release before removal
- Mark deprecated APIs with `@deprecated` JSDoc tags

## Development Workflow

1. Create a feature branch from `main` (or `develop`)
2. Make changes following the constitution and quality gates
3. Add/update Storybook stories
4. Run `pnpm run lint:fix` and `pnpm run check:type`
5. Commit with [Conventional Commits](https://www.conventionalcommits.org/) format
6. Open a PR with a clear description and reference any issues
7. Address review feedback
8. Once approved and checks pass, maintainers will merge

## Running Locally

```bash
# Install dependencies
pnpm install

# Start Storybook (dev server)
pnpm run dev

# Lint and fix
pnpm run lint:fix

# Type-check
pnpm run check:type

# Build library
pnpm run build

# Build Storybook (static site)
pnpm run build:storybook
```

## Questions?

- Check the [Constitution](/.specify/memory/constitution.md) for detailed principles
- Review existing components and stories for patterns
- Open a discussion issue before starting large features

Thank you for helping build a high-quality, accessible design system!
