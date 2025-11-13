# IconButton

A compact icon button component optimized for icon-only actions, built on top of Radix UI's Slot primitive.

## Installation

```bash
pnpm add @tc96/ui-react
```

## Usage

```tsx
import { IconButton } from '@tc96/ui-react'

export function Example() {
  return (
    <IconButton aria-label="Search">
      <SearchIcon />
    </IconButton>
  )
}
```

## Variants

The icon button component supports multiple visual variants:

- **`solid`** (default) - Solid background button with accent color
- **`outline`** - Button with border and transparent background
- **`ghost`** - Minimal button with subtle hover effect
- **`link`** - Text button with underline on hover
- **`destructive`** - Button for destructive actions (e.g., delete, remove)

### Examples

```tsx
<IconButton variant="solid" aria-label="Like">
  <HeartIcon />
</IconButton>
<IconButton variant="outline" aria-label="Settings">
  <SettingsIcon />
</IconButton>
<IconButton variant="ghost" aria-label="Menu">
  <MenuIcon />
</IconButton>
<IconButton variant="destructive" aria-label="Delete">
  <TrashIcon />
</IconButton>
```

## Sizes

- **`sm`** - Small icon button (32x32px)
- **`base`** (default) - Base icon button (40x40px)
- **`lg`** - Large icon button (48x48px)

### Examples

```tsx
<IconButton size="sm" aria-label="Small">
  <Icon />
</IconButton>
<IconButton size="base" aria-label="Base">
  <Icon />
</IconButton>
<IconButton size="lg" aria-label="Large">
  <Icon />
</IconButton>
```

## Disabled State

When the `disabled` prop is set to `true`, the button displays specific styling and prevents interaction:

- **Background**: `slate-300`
- **Border**: `slate-300`
- **Text color**: `slate-500`
- **Pointer events**: Disabled

### Example

```tsx
<IconButton disabled aria-label="Disabled">
  <Icon />
</IconButton>
```

## Composition with asChild

The icon button supports composition through the `asChild` prop, which allows you to render the button as a different element while maintaining the button's styling.

```tsx
import { IconButton } from '@tc96/ui-react'
import Link from 'next/link'

export function Example() {
  return (
    <IconButton asChild aria-label="Go to profile">
      <Link href="/profile">
        <UserIcon />
      </Link>
    </IconButton>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'ghost' \| 'link' \| 'destructive'` | `'solid'` | Visual style variant |
| `size` | `'sm' \| 'base' \| 'lg'` | `'base'` | Icon button size |
| `asChild` | `boolean` | `false` | Render as child element (uses Radix Slot) |
| `disabled` | `boolean` | `false` | Disable the button |
| `aria-label` | `string` | - | **Required** for accessibility |
| `className` | `string` | - | Additional CSS classes |

All standard HTML button attributes are also supported.

## Testing

The icon button component includes Storybook interaction tests that verify:
- Disabled state functionality
- Click event handling
- Proper aria-label attributes
- Size variants

To run the tests:

```bash
pnpm dev  # Start Storybook and view the interaction tests
```

## Accessibility

- Uses semantic `<button>` element by default
- **Requires `aria-label`** for icon-only buttons to be accessible to screen readers
- Supports `disabled` attribute for proper keyboard navigation
- Includes focus-visible styles for keyboard users
- Maintains proper contrast ratios in all states
- `data-slot="icon-button"` attribute for component identification

### Accessibility Example

```tsx
// ✅ Good - has aria-label
<IconButton aria-label="Close dialog">
  <XIcon />
</IconButton>

// ❌ Bad - missing aria-label
<IconButton>
  <XIcon />
</IconButton>
```
