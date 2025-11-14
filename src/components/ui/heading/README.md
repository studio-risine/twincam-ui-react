# Heading

A flexible heading component with size variants and polymorphic rendering for heading levels (h1-h6).

## Installation

```bash
pnpm add @tc96/ui-react
```

## Usage

```tsx
import { Heading } from '@tc96/ui-react'

export function Example() {
  return <Heading>This is a heading</Heading>
}
```

## Props

### `as`

Controls which HTML heading element is rendered. Defaults to `h1`.

- **`h1`** - Top-level heading (default)
- **`h2`** - Second-level heading
- **`h3`** - Third-level heading
- **`h4`** - Fourth-level heading
- **`h5`** - Fifth-level heading
- **`h6`** - Sixth-level heading

### Examples

```tsx
<Heading as="h1">Page Title</Heading>
<Heading as="h2">Section Title</Heading>
<Heading as="h3">Subsection Title</Heading>
```

## Sizes

The `size` prop controls the text size independently of the semantic heading level:

- **`2xl`** - Extra extra large (text-5xl)
- **`xl`** - Extra large (text-4xl)
- **`lg`** - Large (text-3xl)
- **`base`** (default) - Base size (text-2xl)
- **`sm`** - Small (text-xl)
- **`xs`** - Extra small (text-lg)

### Examples

```tsx
<Heading size="2xl" as="h1">Heading XXLarge</Heading>
<Heading size="xl">Heading XLarge</Heading>
<Heading size="lg">Heading Large</Heading>
<Heading size="base">Heading Medium</Heading>
<Heading size="sm">Heading Small</Heading>
<Heading size="xs">Heading XSmall</Heading>
```

## Custom Styling

The `className` prop can be used to add custom styles:

```tsx
<Heading as="h1" className="text-white mb-4">
  Custom Styled Heading
</Heading>
```

## Accessibility

- Always use heading levels in a logical order (h1 → h2 → h3, etc.)
- Don't skip heading levels for visual styling - use the `size` prop instead
- Ensure headings accurately describe the content that follows

### Example: Proper heading hierarchy

```tsx
<Heading as="h1" size="2xl">Page Title</Heading>
<Heading as="h2" size="xl">Main Section</Heading>
<Heading as="h3" size="lg">Subsection</Heading>
<Heading as="h2" size="xl">Another Main Section</Heading>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h2'` | The HTML heading element to render |
| `size` | `'2xl' \| 'xl' \| 'lg' \| 'base' \| 'sm' \| 'xs'` | `'base'` | The text size of the heading |
| `className` | `string` | `undefined` | Additional CSS classes to apply |

The component also accepts all standard HTML heading attributes.
