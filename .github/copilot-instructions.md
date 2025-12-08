# tc⚡96 Design System - Copilot Instructions

## Architecture Overview

This is a **React component library** built for distribution via npm (`@tc96/ui-react`). It uses:
- **Tailwind CSS v4** with CSS v4 syntax (`@theme`, `@plugin`, `@apply`)
- **Radix UI** primitives as foundation
- **class-variance-authority (CVA)** for variant management
- **Storybook v10** for documentation (addons use v8.6.14)
- **tsup** for dual CJS/ESM builds
- **Biome** for linting (with Tailwind directives enabled)

## Component Architecture Pattern

All UI components follow this **folder structure**:

```
src/components/ui/{component}/
  ├── index.tsx          # Component implementation with forwardRef
  └── {component}.variants.ts  # CVA variants definition
```

### Component Implementation Rules

1. **Type Pattern** (see `src/components/ui/avatar/index.tsx`):
   ```tsx
   import { forwardRef } from 'react'
   import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
   import type { VariantProps } from 'class-variance-authority'

   type ComponentProps = ComponentPropsWithoutRef<typeof Primitive.Root> &
     VariantProps<typeof componentVariants>

   const Component = forwardRef<ComponentRef<typeof Primitive.Root>, ComponentProps>(
     ({ className, variant, size, ...props }, ref) => (...)
   )
   ```
   - Use `ComponentPropsWithoutRef` to avoid ref conflicts with `forwardRef`
   - Combine Radix props + CVA variants in a single type
   - Export the combined props type alongside components

2. **Variants File Pattern** (see `src/components/ui/button/button.variants.ts`):
   ```tsx
   import { cva } from 'class-variance-authority'

   export const componentVariants = cva('base-classes', {
     defaultVariants: { size: 'base', variant: 'solid' },
     variants: { size: {...}, variant: {...} }
   })
   ```
   - Export ALL component style variants here (root, image, fallback, etc.)
   - Never hardcode Tailwind classes in component files

3. **Import Pattern**:
   - Modern React imports: `import { forwardRef } from 'react'` (not `React.forwardRef`)
   - Type-only imports: `import type { ... } from 'react'`
   - Use `ComponentRef` instead of deprecated `ElementRef`

4. **Data Attributes**:
   - Always add `data-slot="{component}"` to root elements (e.g., `data-slot="button"`, `data-slot="avatar"`)
   - Used for component identification and potential styling hooks

## Critical Path Aliases

- `@/*` → `src/*` (base path)
- `@/components/ui/{name}` → UI components location
- `@/libs/utils` → Contains `cn()` utility (clsx + tailwind-merge)

**Note**: There is NO `src/lib/` directory. Use `src/libs/utils.ts`.

## Development Workflows

### Commands
```bash
pnpm dev              # Storybook dev server (port 6006)
pnpm build            # tsup production build (dist/)
pnpm build:storybook  # Static Storybook build
pnpm lint:fix         # Biome auto-fix
pnpm check:type       # TypeScript validation
```

### Adding Components
1. Create folder: `src/components/ui/{name}/`
2. Create `{name}.variants.ts` with CVA variants
3. Create `index.tsx` following the type pattern above
4. Add `data-slot="{name}"` to the root element
5. Export from `src/index.ts`: `export * from '@/components/ui/{name}'`
6. Create story: `src/stories/{name}.stories.tsx`

### Publishing
- Package is published to npm as `@tc96/ui-react`
- Uses semantic versioning (current: `0.1.2`)
- Run `pnpm build` before publishing to generate `dist/` artifacts

### Storybook Stories Pattern
```tsx
import { Component, type ComponentProps } from '@/components/ui/component'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Component,
  args: { variant: 'solid', size: 'base' },
  argTypes: { variant: { control: 'select', options: [...] } },
  tags: ['autodocs'],
} satisfies Meta<ComponentProps>  // Use the exported ComponentProps type
```

## Biome Configuration

**Critical**: Biome extends `@tc96/biome-config` and enables Tailwind CSS v4 directives:
```json
{
  "css": { "parser": { "tailwindDirectives": true } }
}
```
This allows `@theme`, `@plugin`, `@apply` in CSS files without errors.

## Build Output

- **Dual format**: CJS (`dist/index.js`) + ESM (`dist/index.mjs`)
- **Types**: `dist/index.d.ts`
- **Styles**: `dist/index.css` (exported as subpath)
- **Tree-shakeable**: `sideEffects: false`

## TypeScript Configuration

- **Multi-project setup**: `tsconfig.json` references app/build/node/storybook configs
- **Path mapping**: `@/*` configured in base config
- Stories use `tsconfig.storybook.json` (extends `tsconfig.app.json`)

## Common Pitfalls

1. **Don't hardcode styles in components** - always use variants files
2. **Export types with components** - Storybook needs the combined props type
3. **Use `@/libs/utils` not `@/lib`** - the correct path for `cn()`
4. **Storybook version mismatch** - core is v10, addons are v8.6.14 (intentional)
5. **Biome Tailwind errors** - ensure `tailwindDirectives: true` in config

## Styling Conventions

- Use Tailwind utility classes via CVA variants
- Size variants: typically `sm`, `base` (default), `lg`
- Common variant names: `solid`, `outline`, `ghost`, `link`, `destructive`
- Use `cn()` from `@/libs/utils` to merge className props with variants
