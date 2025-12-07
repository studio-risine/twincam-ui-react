# Text Component

A polymorphic text component that can render as different HTML elements while maintaining type safety and consistent styling.

## Features

- **Polymorphic**: Render as `p`, `span`, `div`, `a`, `button`, or `label`
- **Type-Safe**: Full TypeScript support with element-specific props
- **Variants**: Built-in size and color variants via CVA
- **Accessible**: Semantic HTML with proper element selection
- **Ref Support**: Forward refs with correct typing

## Installation

```bash
# This component is part of the UI library
# No separate installation needed
```

## Basic Usage

```tsx
import { Text } from '@/components/ui/text'

// Default paragraph
<Text>This is a paragraph</Text>

// As span
<Text as="span">Inline text</Text>

// As link with native props
<Text as="a" href="/home">Navigate</Text>

// As button with event handlers
<Text as="button" onClick={handleClick}>Click me</Text>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `'p' \| 'span' \| 'div' \| 'a' \| 'button' \| 'label'` | `'p'` | The HTML element to render |
| `size` | `'sm' \| 'base' \| 'lg' \| 'xl'` | `'base'` | Text size variant |
| `color` | `'primary' \| 'secondary' \| 'muted' \| 'destructive'` | - | Text color variant |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Content to display |
| `ref` | `React.Ref<HTMLElement>` | - | Forward ref to the element |
| `...props` | `ComponentProps<T>` | - | Native props based on `as` value |

### Size Variants

- `sm`: 14px (0.875rem)
- `base`: 16px (1rem) - default
- `lg`: 18px (1.125rem)
- `xl`: 20px (1.25rem)

### Color Variants

- `primary`: Primary brand color
- `muted`: Muted/subdued text

## Examples

### Size Variants

```tsx
<Text size="sm">Small text</Text>
<Text size="base">Normal text</Text>
<Text size="lg">Large text</Text>
<Text size="xl">Extra large text</Text>
```

### Color Variants

```tsx
<Text color="primary">Primary text</Text>
<Text color="secondary">Secondary text</Text>
<Text color="muted">Muted text</Text>
<Text color="destructive">Error message</Text>
```

### As Link

```tsx
// HTML anchor
<Text as="a" href="https://example.com" target="_blank" rel="noopener">
  External link
</Text>

// Next.js Link
import Link from 'next/link'
<Text as={Link} href="/dashboard">
  Dashboard
</Text>
```

### As Button

```tsx
<Text as="button" onClick={() => alert('Clicked!')}>
  Click me
</Text>

<Text as="button" disabled>
  Disabled button
</Text>
```

### As Label

```tsx
<Text as="label" htmlFor="email" size="sm">
  Email address
</Text>
<input id="email" type="email" />
```

### With Ref

```tsx
import { useRef } from 'react'

function MyComponent() {
  const textRef = useRef<HTMLParagraphElement>(null)

  const focusText = () => {
    textRef.current?.focus()
  }

  return (
    <>
      <Text ref={textRef} tabIndex={0}>
        Focusable text
      </Text>
      <button onClick={focusText}>Focus text</button>
    </>
  )
}
```

### Inline Composition

```tsx
<Text>
  This is a paragraph with{' '}
  <Text as="span" color="primary" className="font-bold">
    highlighted text
  </Text>{' '}
  in the middle.
</Text>
```

## Type Safety

The component provides full type safety for element-specific props:

```tsx
// ✅ Valid: 'a' accepts href
<Text as="a" href="/home">Link</Text>

// ✅ Valid: 'button' accepts onClick
<Text as="button" onClick={handleClick}>Button</Text>

// ❌ Error: 'p' doesn't have href
<Text as="p" href="/home">Error</Text>

// ❌ Error: 'h1' is not in allowed elements
<Text as="h1">Error</Text>
```

## Implementation Details

### Polymorphic Approach

The component uses a polymorphic pattern with `forwardRef`:

```typescript
type AllowedTextElements = 'p' | 'span' | 'div' | 'a' | 'button' | 'label'

type TextComponent = <T extends AllowedTextElements = 'p'>(
  props: TextComponentProps<T> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement | null

const TextPolymorphic = forwardRef<HTMLElement, TextComponentProps<AllowedTextElements>>(
  ({ as, children, size, color, className, ...props }, ref) => {
    const Component = (as || 'p') as ElementType
    return (
      <Component
        className={cn(textVariants({ size, color }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

export const Text = TextPolymorphic as TextComponent
```

### Why This Approach?

1. **Type Inference**: The generic `TextComponent` type preserves type inference based on the `as` prop
2. **Ref Support**: Using `forwardRef` allows ref forwarding with correct typing
3. **Type Assertion**: The final cast connects the concrete implementation with the generic type
4. **Restricted Elements**: Limiting to specific elements prevents misuse while maintaining flexibility

### Avoiding Conflicts

The component uses `Omit<ComponentPropsWithoutRef<T>, keyof TextProps>` to prevent conflicts between:
- Native HTML props (e.g., `<input size>`)
- CVA variant props (e.g., our `size` variant)

This ensures variant props always take precedence.

## Use Cases

### When to Use

- ✅ Text content that needs semantic flexibility
- ✅ Consistent typography across the application
- ✅ Links that should look like text
- ✅ Buttons styled as text
- ✅ Form labels with consistent styling

### When NOT to Use

- ❌ Complex interactive components (use dedicated components)
- ❌ Headings (consider a dedicated `Heading` component)
- ❌ Rich text with complex formatting (use a rich text editor)

## Accessibility

- Uses semantic HTML elements based on the `as` prop
- Supports all native ARIA attributes
- Maintains proper focus management with `ref`
- Respects color contrast requirements (use appropriate color variants)

## Related Components

- `Heading`: For semantic heading elements (h1-h6)
- `Link`: For navigation links with routing
- `Button`: For interactive buttons with variants

## Contributing

When adding new variants or features:

1. Update `text.variants.ts` with new CVA variants
2. Update TypeScript types in `index.tsx`
3. Add examples to `examples.tsx`
4. Add Storybook stories to `text.stories.tsx`
5. Update this README with new API documentation
