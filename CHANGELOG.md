# Changelog

## 0.7.5

### Fixes

- **Text Component**: Restored backward compatibility for `variant="primary"` prop
  - `variant="primary"` is now an alias for the new default `variant="foreground"`
  - Existing code using `variant="primary"` will continue to work without breaking changes
  - **Migration Note**: For future upgrades, remove the `variant="primary"` prop to use the default, or explicitly use `variant="foreground"` for clarity

## 0.7.4

### Major Changes

- **New Component Library**: Complete redesign and expansion of the component library with modern, accessible UI components
- **Tailwind CSS v4**: Upgraded to Tailwind CSS v4 with new `@theme` inline syntax and OKLCH color space
- **Design System**: Comprehensive design system with semantic tokens, dark mode support, and customizable preset

### New Components

- **Avatar**: User profile images with fallback support
- **Badge**: Status indicators and labels with multiple variants
- **Button**: Enhanced button component with 7 variants (primary, secondary, accent, destructive, ghost, link, outline) and 3 sizes
- **IconButton**: Compact button optimized for icon-only actions
- **Heading**: Semantic heading components with typography variants
- **Text**: Text components with size and weight variants
- **Stack**: Vertical layout container with spacing control
- **Inline**: Horizontal layout container with gap control
- **Input**: Form input field with size variants and accessibility states
- **NavigationLinks**: Navigation link components with active states
- **NavigationMenu**: Accessible navigation menu built on Radix UI
- **Header**: Reusable header block component

### Features

- **Tailwind Preset**: Exportable Tailwind configuration preset with complete design tokens
- **Dark Mode**: Built-in dark mode support with automatic token switching
- **TypeScript**: Full TypeScript support with exported types and variant definitions
- **Tree-shakeable**: Optimized build output for minimal bundle size
- **Accessibility**: Components built on Radix UI primitives with WCAG AA compliance
- **Storybook 10**: Interactive documentation with 73 automated tests
- **CVA Integration**: Type-safe component variants using class-variance-authority

### Design Tokens

- OKLCH color system for perceptual uniformity
- Semantic color tokens (primary, secondary, accent, destructive, muted)
- Responsive border radius system
- Inter font family integration
- Chart colors for data visualization
- Smooth animations and transitions

### Build & Development

- Dual ESM/CJS builds via tsup
- TypeScript definitions for both formats
- Sourcemaps for debugging
- Husky pre-commit hooks with Biome linting
- Vitest for component testing
- Storybook interaction tests

### Documentation

- Comprehensive installation guide
- Tailwind preset documentation
- Framework-specific setup instructions (Next.js, Vite, CRA)
- TypeScript configuration guide
- Troubleshooting section

## 0.4.5

### Patch Changes

- ci: rename release workflow file and remove publish condition

## 0.4.4

### Patch Changes

- 2ad0677: chore: init setup changesets
- 0d85ecb: chore: init setup changesets

