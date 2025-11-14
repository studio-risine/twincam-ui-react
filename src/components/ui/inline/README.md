# Inline

A layout primitive that arranges child elements horizontally with consistent spacing, alignment, and wrapping control.

## Installation

```bash
pnpm add @tc96/ui-react
```

## Usage

```tsx
import { Inline } from '@tc96/ui-react'

export function Example() {
  return (
    <Inline space="base">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Inline>
  )
}
```

## Props

### `space`

Controls the spacing between child elements.

- **`sm`** - Small spacing (gap-4, 1rem)
- **`base`** (default) - Base spacing (gap-8, 2rem)
- **`lg`** - Large spacing (gap-12, 3rem)
- **`xl`** - Extra large spacing (gap-16, 4rem)

### Examples

```tsx
<Inline space="sm">
  <div>Tight spacing</div>
  <div>Item 2</div>
</Inline>

<Inline space="xl">
  <div>Loose spacing</div>
  <div>Item 2</div>
</Inline>
```

### `align`

Controls vertical alignment of children along the cross-axis.

- **`start`** - Align to the top
- **`center`** (default) - Center vertically
- **`end`** - Align to the bottom
- **`stretch`** - Stretch to fill container height
- **`baseline`** - Align text baselines

### Examples

```tsx
<Inline align="start">
  <div>Top aligned</div>
  <div style={{ height: '60px' }}>Tall item</div>
</Inline>

<Inline align="baseline">
  <Text size="sm">Small text</Text>
  <Text size="lg">Large text</Text>
</Inline>
```

### `justify`

Controls horizontal distribution of children along the main-axis.

- **`start`** (default) - Align to the left
- **`center`** - Center horizontally
- **`end`** - Align to the right
- **`between`** - Distribute with space between
- **`around`** - Distribute with space around
- **`evenly`** - Distribute evenly

### Examples

```tsx
<Inline justify="center">
  <Button>Centered buttons</Button>
  <Button>Button 2</Button>
</Inline>

<Inline justify="between">
  <Text>Left</Text>
  <Text>Right</Text>
</Inline>
```

### `wrap`

Controls whether children wrap to new lines when they exceed container width.

- **`true`** (default) - Allow wrapping to multiple lines
- **`false`** - Keep all children on a single line

### Examples

```tsx
<Inline wrap={true} space="sm">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
  <Button>Button 4</Button>
  <Button>Button 5</Button>
</Inline>

<Inline wrap={false}>
  <div>No wrapping</div>
  <div>Single line</div>
</Inline>
```

### `as`

Controls which HTML element is rendered.

- **`div`** (default) - Generic container
- **`section`** - Semantic section element
- **`nav`** - Navigation container

### Examples

```tsx
<Inline as="nav" space="base">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</Inline>
```

## Custom Styling

The `className` prop can be used to add custom styles:

```tsx
<Inline space="base" className="p-4 bg-slate-50 rounded-md">
  <div>Item 1</div>
  <div>Item 2</div>
</Inline>
```

## Accessibility

### Semantic HTML

- Default to `<div>` for generic containers
- Use `<nav>` for navigation menus to create proper landmarks
- Use `<section>` for thematic groupings of content

### Document Structure

Inline is a presentational component and does not alter document outline or heading hierarchy. It's safe to use for any layout without semantic concerns.

### Example: Semantic Navigation

```tsx
<Inline as="nav" space="base" aria-label="Main navigation">
  <a href="/">Home</a>
  <a href="/products">Products</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</Inline>
```

## Common Patterns

### Navigation Menu

```tsx
<Inline as="nav" space="lg" align="center" aria-label="Main navigation">
  <a href="/" className="font-medium hover:text-accent">Home</a>
  <a href="/products" className="font-medium hover:text-accent">Products</a>
  <a href="/about" className="font-medium hover:text-accent">About</a>
  <a href="/contact" className="font-medium hover:text-accent">Contact</a>
</Inline>
```

### Button Group

```tsx
<Inline space="sm" align="center">
  <Button variant="outline">Cancel</Button>
  <Button variant="solid">Save</Button>
  <Button variant="destructive">Delete</Button>
</Inline>
```

### Tag List

```tsx
<Inline space="sm" wrap={true}>
  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tailwind</span>
  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vite</span>
</Inline>
```

### Breadcrumbs

```tsx
<Inline as="nav" space="sm" align="center" aria-label="Breadcrumb">
  <a href="/" className="text-slate-600 hover:text-slate-900">Home</a>
  <span className="text-slate-400">/</span>
  <a href="/products" className="text-slate-600 hover:text-slate-900">Products</a>
  <span className="text-slate-400">/</span>
  <span className="text-slate-900 font-medium">Current Page</span>
</Inline>
```

### Icon with Text

```tsx
<Inline space="sm" align="center">
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
  <Text>Icon with aligned text</Text>
</Inline>
```

### Toolbar

```tsx
<Inline space="base" align="center" justify="between" className="p-4 border-b">
  <Inline space="sm">
    <IconButton aria-label="Bold">B</IconButton>
    <IconButton aria-label="Italic">I</IconButton>
    <IconButton aria-label="Underline">U</IconButton>
  </Inline>
  <Inline space="sm">
    <Button size="sm" variant="outline">Cancel</Button>
    <Button size="sm">Save</Button>
  </Inline>
</Inline>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `space` | `'sm' \| 'base' \| 'lg' \| 'xl'` | `'base'` | Spacing between children |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` | `'center'` | Vertical alignment of children |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `'start'` | Horizontal distribution of children |
| `wrap` | `boolean` | `true` | Whether children wrap to new lines |
| `as` | `'div' \| 'section' \| 'nav' \| `'div'` | HTML element to render |
| `className` | `string` | `undefined` | Additional CSS classes to apply |

The component also accepts all standard HTML attributes for the chosen element.
