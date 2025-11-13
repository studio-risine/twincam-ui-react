# Button

A versatile button component with multiple variants and sizes, built on top of Radix UI's Slot primitive.

## Installation

```bash
pnpm add @tc96/ui-react
```

## Usage

```tsx
import { Button } from '@tc96/ui-react'

export function Example() {
  return <Button>Click me</Button>
}
```

## Variants

The button component supports multiple visual variants:

- **`solid`** (default) - Solid background button with accent color
- **`outline`** - Button with border and transparent background
- **`ghost`** - Minimal button with hover effect
- **`link`** - Text button with underline on hover
- **`destructive`** - Button for destructive actions (e.g., delete, remove)

### Examples

```tsx
<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Delete</Button>
```

## Sizes

- **`sm`** - Small button (height: 32px)
- **`base`** (default) - Base button (height: 40px)
- **`lg`** - Large button (height: 48px)

### Examples

```tsx
<Button size="sm">Small</Button>
<Button size="base">Base</Button>
<Button size="lg">Large</Button>
```

## Disabled State

When the `disabled` prop is set to `true`, the button displays specific styling and prevents interaction:

- **Background**: `slate-300`
- **Border**: `slate-300`
- **Text color**: `slate-500`
- **Pointer events**: Disabled

### Example

```tsx
<Button disabled>Disabled Button</Button>
<Button variant="outline" disabled>Disabled Outline</Button>
```

## Composition with asChild

The button supports composition through the `asChild` prop, which allows you to render the button as a different element while maintaining the button's styling.

```tsx
import { Button } from '@tc96/ui-react'
import Link from 'next/link'

export function Example() {
  return (
    <Button asChild>
      <Link href="/dashboard">Go to Dashboard</Link>
    </Button>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'ghost' \| 'link' \| 'destructive'` | `'solid'` | Visual style variant |
| `size` | `'sm' \| 'base' \| 'lg' \| 'base'` | Button size |
| `asChild` | `boolean` | `false` | Render as child element (uses Radix Slot) |
| `disabled` | `boolean` | `false` | Disable the button |
| `className` | `string` | - | Additional CSS classes |

All standard HTML button attributes are also supported.

## Testing

The button component includes Storybook interaction tests that verify:
- Disabled state functionality
- Click event handling
- Proper aria attributes

To run the tests:

```bash
pnpm dev  # Start Storybook and view the interaction tests
```

## Accessibility

- Uses semantic `<button>` element by default
- Supports `disabled` attribute for proper keyboard navigation
- Includes focus-visible styles for keyboard users
- Maintains proper contrast ratios in all states
- `data-slot="button"` attribute for component identification
