# Design Document: Inline Component

## Overview

The Inline component is a layout primitive that manages horizontal arrangement of child elements using flexbox. It mirrors the Stack component's API and patterns but operates in the horizontal direction (flex-row instead of flex-col). The component provides a declarative API for controlling spacing, alignment, wrapping, and justification of inline elements.

The design follows the established patterns in the TC96 design system:
- Uses class-variance-authority (CVA) for variant management
- Implements forwardRef for ref forwarding
- Supports polymorphic rendering via the `as` prop
- Follows the same file structure as Stack component
- Uses Tailwind CSS utility classes for styling

## Architecture

### Component Structure

```
src/components/ui/inline/
├── index.tsx              # Main component implementation
├── inline.variants.ts     # CVA variant definitions
└── README.md             # Component documentation
```

### Dependencies

- **React**: Core library (forwardRef, ComponentPropsWithoutRef, ElementType)
- **class-variance-authority**: Variant management
- **@/libs/utils**: cn() utility for class merging
- **Tailwind CSS**: Utility classes for styling

### Integration Points

- Export from `src/components/ui/index.ts`
- Storybook story at `src/stories/inline.stories.tsx`
- Used alongside Stack for complete layout primitive coverage

## Components and Interfaces

### Main Component: Inline

**File**: `src/components/ui/inline/index.tsx`

```typescript
import { cn } from '@/libs/utils'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { inlineVariants } from './inline.variants'

type InlineElement = 'div' | 'section' | 'nav' | 'ul' | 'span'

export type InlineProps = ComponentPropsWithoutRef<'div'> &
	VariantProps<typeof inlineVariants> & {
		as?: InlineElement
	}

export const Inline = forwardRef<HTMLElement, InlineProps>(
	({ className, space, align, justify, wrap, as, ...props }) => {
		const Component: ElementType = as || 'div'

		return (
			<Component
				className={cn(inlineVariants({ align, justify, space, wrap }), className)}
				data-slot="inline"
				data-testid="inline"
				{...props}
			/>
		)
	},
)

Inline.displayName = 'Inline'
```

### Variant Definitions

**File**: `src/components/ui/inline/inline.variants.ts`

```typescript
import { cva, type VariantProps } from 'class-variance-authority'

export type InlineProps = VariantProps<typeof inlineVariants>

export const inlineVariants = cva('flex flex-row', {
	defaultVariants: {
		align: 'center',
		justify: 'start',
		space: 'base',
		wrap: true,
	},
	variants: {
		align: {
			baseline: 'items-baseline',
			center: 'items-center',
			end: 'items-end',
			start: 'items-start',
			stretch: 'items-stretch',
		},
		justify: {
			around: 'justify-around',
			between: 'justify-between',
			center: 'justify-center',
			end: 'justify-end',
			evenly: 'justify-evenly',
			start: 'justify-start',
		},
		space: {
			base: 'gap-8',
			lg: 'gap-12',
			sm: 'gap-4',
			xl: 'gap-16',
		},
		wrap: {
			false: 'flex-nowrap',
			true: 'flex-wrap',
		},
	},
})
```

### Type Definitions

**InlineElement**: Union type of allowed HTML elements
- `'div'` - Default generic container
- `'section'` - Semantic section element
- `'nav'` - Navigation container
- `'ul'` - Unordered list (for horizontal lists)
- `'span'` - Inline element

**InlineProps**: Component props interface
- Extends `ComponentPropsWithoutRef<'div'>` for standard HTML attributes
- Extends `VariantProps<typeof inlineVariants>` for variant props
- Adds `as?: InlineElement` for polymorphic rendering

## Data Models

### Variant Options

#### Space Variants
Maps to Tailwind gap utilities (horizontal and vertical spacing):
- `sm`: `gap-4` (1rem / 16px)
- `base`: `gap-8` (2rem / 32px) - default
- `lg`: `gap-12` (3rem / 48px)
- `xl`: `gap-16` (4rem / 64px)

**Rationale**: Uses `gap` instead of `space-x` because gap works better with wrapping and doesn't require negative margins.

#### Align Variants
Maps to Tailwind items utilities (cross-axis alignment):
- `start`: `items-start` - Align to top
- `center`: `items-center` - Vertical center - default
- `end`: `items-end` - Align to bottom
- `stretch`: `items-stretch` - Fill container height
- `baseline`: `items-baseline` - Align text baselines

**Rationale**: Default to `center` for better visual alignment in typical inline layouts (buttons, badges, etc.)

#### Justify Variants
Maps to Tailwind justify utilities (main-axis distribution):
- `start`: `justify-start` - Left align - default
- `center`: `justify-center` - Horizontal center
- `end`: `justify-end` - Right align
- `between`: `justify-between` - Space between items
- `around`: `justify-around` - Space around items
- `evenly`: `justify-evenly` - Equal space distribution

#### Wrap Variants
Maps to Tailwind flex-wrap utilities:
- `true`: `flex-wrap` - Allow wrapping - default
- `false`: `flex-nowrap` - Single line only

**Rationale**: Default to wrapping for responsive behavior.

## Error Handling

### Type Safety
- TypeScript ensures only valid variant values are passed
- `as` prop is constrained to specific HTML elements
- Ref forwarding is properly typed with `HTMLElement`

### Runtime Behavior
- Invalid props are caught at compile time via TypeScript
- CVA handles missing variant props by applying defaults
- cn() utility safely merges className props

### Edge Cases
- Empty children: Component renders empty container (standard React behavior)
- Single child: Gap has no visual effect but component still works
- Custom className conflicts: User classes override variant classes via cn() merge order

## Testing Strategy

### Unit Tests
Not required for this component as it's a simple presentational wrapper. Testing will be handled through Storybook interaction tests.

### Storybook Stories

**File**: `src/stories/inline.stories.tsx`

Stories to implement:
1. **Default**: Base configuration with all default props
2. **SpaceSmall**: Demonstrates sm spacing
3. **SpaceLarge**: Demonstrates lg spacing
4. **SpaceXLarge**: Demonstrates xl spacing
5. **AlignStart**: Top alignment
6. **AlignEnd**: Bottom alignment
7. **AlignBaseline**: Baseline alignment
8. **AlignStretch**: Stretch to fill height
9. **JustifyCenter**: Horizontal centering
10. **JustifyBetween**: Space between distribution
11. **JustifyEnd**: Right alignment
12. **WrapEnabled**: Demonstrates wrapping behavior
13. **WrapDisabled**: Demonstrates nowrap behavior
14. **AsNav**: Renders as nav element
15. **AsSpan**: Renders as span element
16. **WithCustomClass**: Custom className application
17. **AllSpacings**: Visual comparison of all spacing options

### Interaction Tests
Each story includes play functions that:
- Verify correct data attributes (data-slot, data-testid)
- Check for expected Tailwind classes
- Validate HTML element type when using `as` prop
- Confirm className merging works correctly

### Visual Regression
Storybook's built-in visual testing will catch:
- Spacing inconsistencies
- Alignment issues
- Wrapping behavior problems
- Cross-browser rendering differences

## Implementation Notes

### Key Differences from Stack

| Aspect | Stack | Inline |
|--------|-------|--------|
| Direction | `flex-col` | `flex-row` |
| Spacing | `space-y-*` | `gap-*` |
| Default align | `stretch` | `center` |
| Default wrap | N/A | `flex-wrap` |
| Wrap prop | No | Yes |
| Baseline align | No | Yes |

### Why gap instead of space-x?

The Stack component uses `space-y-*` utilities, but Inline uses `gap-*` for several reasons:
1. **Wrapping support**: `gap` works correctly with `flex-wrap`, while `space-x` creates issues
2. **No negative margins**: `gap` doesn't require negative margins on the container
3. **Bidirectional**: `gap` handles both horizontal and vertical spacing when wrapping occurs
4. **Simpler**: No need for `:not(:last-child)` selectors

### Accessibility Considerations

1. **Semantic HTML**: Support for nav, section, ul elements enables proper document structure
2. **List semantics**: When using `as="ul"`, children should be `<li>` elements
3. **No ARIA required**: Component is purely presentational
4. **Keyboard navigation**: No special handling needed (relies on child components)
5. **Screen readers**: No impact on reading order (follows DOM order)

### Performance Considerations

1. **CSS-only**: No JavaScript calculations for layout
2. **CVA caching**: Variant classes are computed once and cached
3. **Minimal re-renders**: Component only re-renders when props change
4. **No layout thrashing**: Flexbox is handled by browser's layout engine

## Design Decisions

### Default Values Rationale

- **space='base'**: Matches Stack component for consistency
- **align='center'**: Most common use case for inline elements (buttons, badges, icons with text)
- **justify='start'**: Standard left-to-right reading order
- **wrap=true**: Responsive by default, prevents overflow issues

### Supported Elements

Limited to semantic and commonly-used inline containers:
- `div`: Generic container (default)
- `section`: Semantic sections
- `nav`: Navigation menus
- `ul`: Horizontal lists (breadcrumbs, tags, etc.)
- `span`: True inline element

Excluded elements:
- `ol`: Less common for horizontal layouts
- `header`/`footer`: Better suited for Stack
- `article`: Typically vertical content

### Variant Naming

Follows Stack component conventions:
- `space` instead of `gap` (user-facing API consistency)
- `align` for cross-axis (consistent with Stack)
- `justify` for main-axis (consistent with Stack)
- Boolean `wrap` instead of string values (simpler API)

## Future Enhancements

Potential additions (not in current scope):
1. **Responsive variants**: Different spacing/alignment per breakpoint
2. **Divider support**: Automatic separators between children
3. **Reverse prop**: `flex-row-reverse` for RTL layouts
4. **Gap variants**: Separate horizontal/vertical gap control
5. **Inline-block mode**: Support for inline-flex vs flex

These would be added based on user feedback and real-world usage patterns.
