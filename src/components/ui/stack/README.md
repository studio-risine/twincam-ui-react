# Stack

A layout primitive that arranges child elements in a vertical stack with consistent spacing and alignment control.

## Installation

```bash
pnpm add @tc96/ui-react
```

## Usage

```tsx
import { Stack } from '@tc96/ui-react'

export function Example() {
  return (
    <Stack space="base">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  )
}
```

## Props

### `space`

Controls the vertical spacing between child elements.

- **`sm`** - Small spacing (space-y-4, 1rem)
- **`base`** (default) - Base spacing (space-y-8, 2rem)
- **`lg`** - Large spacing (space-y-12, 3rem)
- **`xl`** - Extra large spacing (space-y-16, 4rem)

### Examples

```tsx
<Stack space="sm">
  <div>Tight spacing</div>
  <div>Item 2</div>
</Stack>

<Stack space="xl">
  <div>Loose spacing</div>
  <div>Item 2</div>
</Stack>
```

### `align`

Controls horizontal alignment of children.

- **`start`** - Align to the start (left)
- **`center`** - Center align
- **`end`** - Align to the end (right)
- **`stretch`** (default) - Stretch to full width

### Examples

```tsx
<Stack align="center">
  <Button>Centered button</Button>
</Stack>

<Stack align="end">
  <Text>Right-aligned text</Text>
</Stack>
```

### `justify`

Controls vertical justification of children.

- **`start`** (default) - Justify to the start
- **`center`** - Center vertically
- **`end`** - Justify to the end
- **`between`** - Distribute with space between
- **`around`** - Distribute with space around
- **`evenly`** - Distribute evenly

### Examples

```tsx
<Stack justify="center" style={{ height: '300px' }}>
  <div>Centered vertically</div>
</Stack>

<Stack justify="between" style={{ height: '300px' }}>
  <div>Top</div>
  <div>Bottom</div>
</Stack>
```

### `as`

Controls which HTML element is rendered.

- **`div`** (default) - Generic container
- **`section`** - Semantic section element
- **`ul`** - Unordered list (use with list items)
- **`ol`** - Ordered list (use with list items)

### Examples

```tsx
<Stack as="section">
  <Heading>Section Title</Heading>
  <Text>Section content</Text>
</Stack>

<Stack as="ul" role="list">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</Stack>
```

## Custom Styling

The `className` prop can be used to add custom styles:

```tsx
<Stack space="base" className="p-4 bg-slate-50 rounded-md">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
```

## Accessibility

### Semantic HTML

- Default to `<div>` for generic containers
- Use `<section>` for landmark regions
- Use `<ul>` or `<ol>` only when the content is a list
- When using `as="ul"` or `as="ol"`, ensure children are `<li>` elements

### Document Structure

Stack is a presentational component and does not alter document outline or heading hierarchy. It's safe to use for any layout without semantic concerns.

### Example: Semantic List

```tsx
<Stack as="ul" space="base" role="list">
  <li>
    <Text>First item</Text>
  </li>
  <li>
    <Text>Second item</Text>
  </li>
</Stack>
```

## Common Patterns

### Card with Title and Content

```tsx
<Stack space="base" className="p-6 rounded-lg border border-slate-200">
  <Heading as="h2" size="lg">Card Title</Heading>
  <Text>Card content goes here</Text>
  <Stack align="end" space="sm" className="mt-4">
    <Button>Cancel</Button>
    <Button variant="solid">Save</Button>
  </Stack>
</Stack>
```

### Form Layout

```tsx
<Stack space="lg" as="section" className="max-w-md">
  <div>
    <Text className="block mb-2 font-medium">Email</Text>
    <Input placeholder="your@email.com" />
  </div>
  <div>
    <Text className="block mb-2 font-medium">Message</Text>
    <textarea className="w-full border rounded p-2" />
  </div>
  <Button>Submit</Button>
</Stack>
```

### Centered Content

```tsx
<Stack align="center" space="base" className="py-12">
  <Heading as="h1" size="2xl">Welcome</Heading>
  <Text className="text-center max-w-lg">
    This is centered content with controlled spacing
  </Text>
  <Button>Get Started</Button>
</Stack>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `space` | `'sm' \| 'base' \| 'lg' \| 'xl'` | `'base'` | Vertical spacing between children |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Horizontal alignment of children |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `'start'` | Vertical justification of children |
| `as` | `'div' \| 'section' \| 'ul' \| 'ol'` | `'div'` | HTML element to render |
| `className` | `string` | `undefined` | Additional CSS classes to apply |

The component also accepts all standard HTML attributes for the chosen element.
