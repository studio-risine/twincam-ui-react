# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2025-01-XX

### Added

#### Components
- **Button**: 5 variants (solid, destructive, outline, ghost, link), 4 sizes (sm, base, lg, icon), polymorphic with `asChild` prop
- **Avatar**: Image with fallback support, customizable size
- **Input**: 3 sizes (sm, base, lg), form integration with error states
- **Textarea**: 3 sizes (sm, base, lg), multi-line text input with auto-resize
- **Card**: Composable layout with Header, Title, Description, Content, Footer
- **Dialog**: Modal with overlay, accessible close button, composable header/footer
- **Badge**: 5 variants (neutral, success, warning, danger, accent), 2 sizes (sm, base)
- **Alert**: 4 variants (info, success, warning, error), structured content with title/description

#### Design System
- **Design tokens**: Centralized CSS variables for colors, spacing, radius, shadows, motion
- **Token propagation**: Global token updates automatically cascade to all components
- **Dark mode**: Full dark theme support via `.dark` class, respects system preferences
- **Tailwind v4 integration**: Modern CSS-based configuration with @theme directive

#### Documentation
- **Storybook v8.6**: Interactive component playground at http://localhost:6006
- **8 MDX documentation pages**: Comprehensive usage guides for Button, Avatar, Input, Textarea, Card, Dialog, Badge, Alert
- **Token reference**: Complete tables of color, spacing, radius, shadow, and motion tokens
- **Token propagation demos**: Live examples showing centralized brand color updates
- **Quickstart guide**: Installation, theming, and customization instructions
- **Component contracts**: Technical specifications and API documentation

#### Developer Experience
- **cn utility export**: Exported for consumer convenience (combines clsx + tailwind-merge)
- **Tree-shaking**: Optimized tsup config with code splitting and external peer dependencies
- **Type safety**: Full TypeScript support with generated .d.ts files
- **Bundle sizes**: ESM 8.77 KB, CJS 10.14 KB, DTS 6.01 KB (after tree-shaking)

#### Accessibility
- WCAG 2.1 AA compliance baseline
- Keyboard navigation for all interactive components
- Visible focus states with ring indicators
- ARIA attributes (aria-label, aria-invalid, aria-describedby) where appropriate
- Screen reader support with sr-only text for icon-only buttons

### Changed
- Upgraded from basic setup to production-ready component library
- Enhanced README with documentation links and development commands
- Improved tsup configuration for better bundle optimization

### Fixed
- Button focus ring now shows on keyboard focus only (not click)
- Dialog close button properly positioned and accessible
- Form inputs properly associate with labels and error messages

[0.2.0]: https://github.com/tc96/tc96-design-system/releases/tag/v0.2.0


