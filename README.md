
<div align="center">

# @tc96/ui-react

[![npm version](https://img.shields.io/npm/v/@tc96/ui-react?style=flat&colorA=18181B&colorB=0EA5E9)](https://www.npmjs.com/package/@tc96/ui-react)
[![npm downloads](https://img.shields.io/npm/dm/@tc96/ui-react?style=flat&colorA=18181B&colorB=0EA5E9)](https://www.npmjs.com/package/@tc96/ui-react)
[![CI](https://github.com/gblsmlo/tc96-design-system/workflows/ci/badge.svg)](https://github.com/gblsmlo/tc96-design-system/actions)
[![License](https://img.shields.io/github/license/gblsmlo/tc96-design-system?style=flat&colorA=18181B&colorB=0EA5E9)](https://github.com/gblsmlo/tc96-design-system/blob/main/LICENSE)

A modern, accessible React component library for product teams. Built on Tailwind CSS v4, Radix UI primitives, and class-variance-authority, and distributed as `@tc96/ui-react`.

</div>



## Overview
- Consistent, themeable UI components powered by Tailwind v4 tokens (OKLCH).
- Accessible by default using Radix UI primitives and a11y testing via Storybook.
- Typed variants with CVA for predictable APIs and great DX.
- Dual ESM/CJS builds via tsup, tree-shakeable, and type-safe.

## Tech Stack
- React 19 + TypeScript
- Tailwind CSS v4 (CSS v4 `@theme`, `@plugin`, `@apply`)
- Radix UI primitives
- class-variance-authority (CVA)
- Storybook 10 for docs and interaction tests
- tsup for builds, Biome for linting

## Goals
- Reliability: stable, versioned components with changelog.
- Accessibility: meet WCAG AA where applicable; a11y checks in Storybook.
- Theming: first-class token support using OKLCH and Tailwind v4.
- Ergonomics: simple, composable APIs with typed variants and sensible defaults.

## Installation

For complete installation instructions, see the [Installation Guide](./docs/installation.md).

**Quick Start:**

```sh
pnpm add @tc96/ui-react
# or
npm install @tc96/ui-react
# or
yarn add @tc96/ui-react
```

Import the styles once (recommended in your app entry):

```ts
// app entry (e.g., src/main.tsx)
import '@tc96/ui-react/styles.css'
```

Use components in your app:

```tsx
import { Button } from '@tc96/ui-react'

export default function Example() {
  return <Button variant="solid" size="base">Click me</Button>
}
```

## Tailwind Configuration

To use the full design system with your own Tailwind configuration, import the preset:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";
import twincamPreset from "@tc96/ui-react/tailwind-preset";

export default {
  presets: [twincamPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tc96/ui-react/dist/**/*.{js,mjs}",
  ],
  // Optional: extend the preset with your own customizations
  theme: {
    extend: {
      // Add your custom styles here
    },
  },
} satisfies Config;
```

The preset includes:
- Design tokens (colors, spacing, typography)
- Custom theme with dark mode support
- Border radius system
- Animations for components
- Inter font family

See [TAILWIND_PRESET.md](./docs/TAILWIND_PRESET.md) for detailed usage instructions.


## Local Development (Contributors)
Prerequisites: Node 18+ (recommended 22), pnpm.

```sh
pnpm install

# Storybook (dev)
pnpm dev

# Type check
pnpm check:type

# Lint & fix
pnpm lint:fix

# Build library
pnpm build

# Build Storybook static
pnpm build:storybook
```

Project structure highlights:
- `src/components/ui/<component>/` — component and its CVA variants
- `src/stories/` — Storybook stories with interaction tests
- `src/styles/index.css` — Tailwind v4 tokens and theme
- `dist/` — build output (ESM, CJS, types, styles)

## Components

### UI Components
- **Avatar**: User profile images with fallback support
- **Badge**: Status indicators and labels with multiple variants
- **Button**: Primary action buttons with 7 variants and 3 sizes
- **IconButton**: Compact button optimized for icon-only actions
- **Heading**: Semantic headings with typography variants
- **Text**: Text components with size and weight variants
- **Stack**: Vertical layout container with spacing control
- **Inline**: Horizontal layout container with gap control
- **Input**: Form input field with size variants and accessibility states
- **NavigationLinks**: Navigation link components with active states
- **NavigationMenu**: Accessible navigation menu built on Radix UI

### Block Components
- **Header**: Reusable page header component

Explore all components and their variants in Storybook via `pnpm dev`.

## Contributing & Issues
- Found a bug or have a request? Open an issue:
  - https://github.com/gblsmlo/tc96-ui-react/issues
- Pull Requests are welcome. Please run `pnpm check:type` and `pnpm lint:fix` before submitting.

## Versioning & Releases
- Semantic Versioning (SemVer). See `CHANGELOG.md` for details.
- Package name: `@tc96/ui-react`.

## License

MIT License - see the [LICENSE](./LICENSE) file for details.
