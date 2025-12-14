# @tc⚡96/ui-react - Copilot Instructions

## Architecture Overview

This is a **React component library** built for distribution via npm (`@tc96/ui-react`). Key technologies:
- **Tailwind CSS v4** with CSS v4 syntax (`@theme`, `@custom-variant`, `@source`)
- **Radix UI** primitives for accessible foundations
- **class-variance-authority (CVA)** for typed variant management
- **Storybook v10** with Vitest integration for docs and interaction tests
- **Vite** for dual CJS/ESM builds with `vite-plugin-dts` for type generation
- **Biome** for linting/formatting (extends `@tc96/biome-config`)
- **Changesets** for version management and changelog generation

## Component Architecture Pattern

### Standard Folder Structure
```
src/components/ui/{component}/
  ├── index.tsx                 # Re-exports (component + variants)
  ├── {component}.tsx           # Component implementation with forwardRef
  └── {component}.variants.ts   # CVA variants definition
```

**Examples:** See [badge](src/components/ui/badge), [avatar](src/components/ui/avatar), [button](src/components/ui/button)

### Component Implementation Rules

1. **Type Pattern** (see [badge/index.tsx](src/components/ui/badge/index.tsx)):
   ```tsx
   import { forwardRef } from 'react'
   import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
   import type { VariantProps } from 'class-variance-authority'

   export type ComponentProps = ComponentPropsWithoutRef<'div'> &
     VariantProps<typeof componentVariants> & {
       'data-testid'?: string
     }

   export const Component = forwardRef<ComponentRef<'div'>, ComponentProps>(
     ({ className, variant, size, ...props }, ref) => (
       <div
         className={cn(componentVariants({ size, variant }), className)}
         data-slot="component"
         ref={ref}
         {...props}
       />
     )
   )

   Component.displayName = 'Component'
   ```
   - Use `ComponentPropsWithoutRef` to avoid ref conflicts
   - Combine native element/Radix props + CVA variants in a single type
   - **Always export** the combined props type for Storybook
   - Include `data-testid` for interaction tests

2. **Variants File Pattern** (see [badge.variants.ts](src/components/ui/badge/badge.variants.ts)):
   ```tsx
   import { cva } from 'class-variance-authority'

   export const componentVariants = cva('base-classes', {
     defaultVariants: { size: 'base', variant: 'secondary' },
     variants: {
       size: { sm: '...', base: '...' },
       variant: { primary: '...', secondary: '...', outline: '...' }
     }
   })
   ```
   - Export ALL component style variants here (root, image, fallback, etc.)
   - **Never hardcode Tailwind classes** in component files - always use CVA
   - Use semantic design tokens (`bg-primary`, `text-foreground`, `border-secondary`)

3. **Export Pattern** - Index file must re-export both:
   ```tsx
   export * from './component'
   export * from './component.variants'
   ```

4. **Import Conventions**:
   - Modern React imports: `import { forwardRef } from 'react'` (not `React.forwardRef`)
   - Type-only imports: `import type { ... } from 'react'`
   - Use `ComponentRef` instead of deprecated `ElementRef`

5. **Data Attributes**:
   - **Always** add `data-slot="{component}"` to root elements for component identification
   - Add `data-testid` prop support for Storybook interaction tests

6. **Polymorphic Components** (see [button](src/components/ui/button/button.tsx)):
   - Use `@radix-ui/react-slot` for `asChild` pattern
   - Reference types from `@/shared/types/polymorphic.ts` when needed

## Critical Path Aliases

- `@/*` → `src/*` (configured in [tsconfig.json](tsconfig.json))
- `@/components/ui/{name}` → UI components location
- `@/libs/utils` → Contains `cn()` utility (clsx + tailwind-merge)
- `@/shared/types/*` → Shared TypeScript utilities (polymorphic types)

**⚠️ Critical:** There is NO `src/lib/` directory. Use `src/libs/utils.ts`.

## Development Workflows

### Essential Commands
```bash
pnpm dev              # Storybook dev server (port 6006)
pnpm build            # Vite library build (dist/)
pnpm build:storybook  # Static Storybook build
pnpm lint:fix         # Biome auto-fix
pnpm check:type       # TypeScript validation
pnpm test             # Vitest unit tests
pnpm test-storybook   # Storybook interaction tests
```

### Adding New Components
1. Create folder: `src/components/ui/{name}/`
2. Create `{name}.variants.ts` with CVA variants
3. Create `{name}.tsx` following the type pattern above
4. Create `index.tsx` with re-exports
5. Add `data-slot="{name}"` to the root element
6. Export from `src/index.ts`: `export * from '@/components/ui/{name}'`
7. Create story: `src/stories/ui/{name}.stories.tsx` with interaction tests

### Storybook Stories Pattern (see [badge.stories.tsx](src/stories/ui/badge.stories.tsx))
```tsx
import { Component, type ComponentProps } from '@/components/ui/component'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

const meta = {
  component: Component,
  args: { 'data-testid': 'component', variant: 'secondary', size: 'base' },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline'] },
    size: { control: 'inline-radio', options: ['sm', 'base'] }
  },
  tags: ['autodocs'],
  title: 'Components/Component',
} satisfies Meta<ComponentProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: 'Default' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const element = canvas.getByTestId('component')
    await expect(element).toHaveAttribute('data-slot', 'component')
  }
}
```
- Use `'storybook/test'` for interaction tests (not `@storybook/test`)
- Test `data-slot` attribute presence in play functions
- Use `data-testid` for reliable element queries

### Version Management & Publishing
- Uses **Changesets** for version management (see [.changeset/config.json](.changeset/config.json))
- Run `pnpm changeset` to document changes after completing features
- Follows semantic versioning with conventional commits (via `@commitlint/config-conventional`)
- Run `pnpm build` before publishing to generate `dist/` artifacts

## Build Configuration

### Vite Build (see [vite.config.mts](vite.config.mts))
- Library mode with entry at `src/index.ts`
- Dual format: ESM (`dist/index.mjs`) + CJS (`dist/index.js`)
- Type definitions: `dist/index.d.ts` via `vite-plugin-dts`
- External deps: React, Radix UI, CVA, clsx, tailwind-merge
- CSS output: `dist/index.css` (exported via `package.json` as `./dist/styles.css`)
- Excludes from types: stories, tests, mocks, libs, shared

### Package Exports
```json
{
  ".": { types, import, require },
  "./styles.css": "./src/styles/index.css",      // Source CSS with @theme
  "./dist/styles.css": "./dist/index.css"        // Compiled CSS
}
```

## Styling & Design System

### Design Tokens (see [src/styles/index.css](src/styles/index.css))
- Uses OKLCH color space for semantic tokens
- Semantic colors: `primary`, `secondary`, `muted`, `accent`, `destructive`, `success`, `warning`
- Each color has `-foreground` variant for text contrast
- Dark mode: `.dark` class with token overrides
- Border radius: `--radius` variable (default: `0.625rem`)

### Styling Rules
- **Always use semantic tokens** from design system (never raw colors)
- Size variants: typically `sm`, `base` (default), optionally `lg`
- Common variant names: `primary`, `secondary`, `outline`, `ghost`, `link`, `destructive`
- Use `cn()` from `@/libs/utils` to merge className props with variants
- **Never hardcode** Tailwind classes in component files

## TypeScript Configuration

- **Multi-project setup**: `tsconfig.json` references separate configs
  - `tsconfig.app.json` → app/component code
  - `tsconfig.build.json` → build configuration
  - `tsconfig.storybook.json` → Storybook stories (extends app)
  - `tsconfig.node.json` → Node.js scripts
- Path mapping `@/*` configured in base config

## Biome Configuration

**Critical**: Biome extends `@tc96/biome-config` and enables Tailwind CSS v4 directives:
```json
{
  "css": { "parser": { "tailwindDirectives": true, "cssModules": false } }
}
```
This allows `@theme`, `@custom-variant`, `@source`, `@apply` in CSS files without errors.

## Common Pitfalls

1. **Don't hardcode styles in components** - always use `.variants.ts` files with CVA
2. **Export types with components** - Storybook needs the combined props type
3. **Use `@/libs/utils` not `@/lib`** - the correct path for `cn()`
4. **Wrong import for tests** - use `'storybook/test'` not `'@storybook/test'`
5. **Missing data attributes** - always add `data-slot` and support `data-testid`
6. **Forgetting re-exports** - index.tsx must export both component and variants
7. **Missing index.ts export** - new components must be exported from `src/index.ts`
