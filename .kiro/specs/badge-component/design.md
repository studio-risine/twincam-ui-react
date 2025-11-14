# Design Document

## Overview

The badge component refactoring will reorganize the shadcn badge component to match the project's established architecture pattern. The component will be split into a folder structure with separated variant definitions while maintaining all original shadcn styling, functionality, and visual appearance. This ensures consistency across the component library and improves maintainability.

## Architecture

### Folder Structure

```
src/components/ui/badge/
├── index.tsx              # Main Badge component
├── badge.variants.ts      # CVA variant definitions and types
└── README.md             # Component documentation (optional)
```

### Component Organization

The badge component follows the project's established pattern:

1. **Variants File** (`badge.variants.ts`): Contains CVA variant definitions, TypeScript types, and exports
2. **Component File** (`index.tsx`): Contains the React component implementation that imports and uses variants
3. **Stories File** (`src/stories/badge.stories.tsx`): Contains Storybook stories for visual testing
4. **Export** (`src/components/ui/index.ts`): Re-exports the badge component for external consumption

## Components and Interfaces

### badge.variants.ts

This file will contain:

```typescript
import { cva, type VariantProps } from 'class-variance-authority'

export type BadgeProps = VariantProps<typeof badgeVariants>

export const badgeVariants = cva(
  // Base styles (unchanged from shadcn)
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
```

**Key Design Decisions:**
- Maintains all original shadcn variant styles without modification
- Uses CVA for variant management consistent with other components
- Exports `BadgeProps` type for TypeScript support
- Preserves default variant behavior

### index.tsx

This file will contain:

```typescript
import { cn } from '@/libs/utils'
import { type BadgeProps, badgeVariants } from './badge.variants'

export function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & BadgeProps) {
  return (
    <div 
      className={cn(badgeVariants({ variant }), className)} 
      {...props} 
    />
  )
}

export { badgeVariants, type BadgeProps }
```

**Key Design Decisions:**
- Imports variants from separate file
- Maintains div element as base (unchanged from shadcn)
- Uses `cn` utility for className merging
- Re-exports variants and types for convenience
- Accepts all standard div HTML attributes
- Supports className override for custom styling

## Data Models

### TypeScript Interfaces

```typescript
// BadgeProps (from VariantProps)
type BadgeProps = {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

// Component Props
type BadgeComponentProps = React.HTMLAttributes<HTMLDivElement> & BadgeProps
```

**Properties:**
- `variant`: Optional variant selection (default, secondary, destructive, outline)
- All standard HTML div attributes (className, onClick, children, etc.)

## Error Handling

The badge component is a presentational component with minimal error handling requirements:

1. **Invalid Variants**: CVA handles invalid variants by falling back to default variant
2. **Missing Children**: Component renders empty if no children provided (standard React behavior)
3. **ClassName Conflicts**: The `cn` utility properly merges and deduplicates classes

No additional error boundaries or validation needed.

## Testing Strategy

### Storybook Stories

Create comprehensive stories in `src/stories/badge.stories.tsx`:

1. **Variant Stories**: One story per variant (Default, Secondary, Destructive, Outline)
2. **Content Examples**: Stories showing different content types (text, numbers, icons)
3. **All Variants Display**: Story showing all variants together for comparison
4. **Interactive Tests**: Use Storybook play functions to verify:
   - Correct CSS classes are applied
   - Variants render with expected styles
   - Component accepts custom className
   - Content renders correctly

### Story Structure

Following the project's pattern from button and avatar stories:

```typescript
import { Badge } from '@/components/ui/badge'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

const meta = {
  component: Badge,
  tags: ['autodocs'],
  title: 'Components/Badge',
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// Individual variant stories with play functions
// All variants comparison story
// Different content examples
```

### Manual Testing

After implementation:
1. Verify visual appearance matches original shadcn badge
2. Test all variants in Storybook
3. Verify hover states work correctly
4. Test focus ring behavior
5. Confirm TypeScript types work correctly

## Implementation Notes

### Migration Steps

1. Create badge folder structure
2. Move and refactor variant definitions to `badge.variants.ts`
3. Create new `index.tsx` with component implementation
4. Delete original `badge.tsx` file
5. Update exports in `src/components/ui/index.ts`
6. Create Storybook stories
7. Verify functionality and styling

### Styling Preservation

All shadcn styles must be preserved exactly:
- Base classes: `inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors`
- Focus styles: `focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`
- Variant-specific classes remain unchanged
- Hover effects remain unchanged

### Compatibility

The refactored component maintains 100% API compatibility with the original shadcn implementation:
- Same props interface
- Same variant names
- Same default behavior
- Same TypeScript types
- Same visual appearance
