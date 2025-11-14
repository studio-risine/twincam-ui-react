# Text

A flexible text component for body copy and inline text, supporting paragraph and span elements with size variants.

## Installation

```bash
pnpm add @tc96/ui-react
```

## Usage

```tsx
import { Text } from '@tc96/ui-react'

export function Example() {
  return <Text>This is body text</Text>
}
```

## Props

### `as`

Controls which HTML text element is rendered. Defaults to `p`.

- **`p`** (default) - Paragraph element for block-level text
- **`span`** - Inline text element

### Examples

```tsx
<Text as="p">This is a paragraph</Text>
<Text as="span">This is inline text</Text>
```

## Sizes

The `size` prop controls the text size:

- **`sm`** - Small text (text-sm, 14px)
- **`base`** (default) - Base text (text-base, 16px)
- **`lg`** - Large text (text-lg, 18px)
- **`xl`** - Extra large text (text-2xl, 24px)

### Examples

```tsx
<Text size="sm">Small text</Text>
<Text size="base">Base text</Text>
<Text size="lg">Large text</Text>
<Text size="xl">Extra large text</Text>
```

## Custom Styling

The `className` prop can be used to add custom styles:

```tsx
<Text className="text-blue-600 font-bold">
  Custom styled text
</Text>
```

## Accessibility

### Semantic HTML

- Use `<Text as="p">` for paragraphs of text content
- Use `<Text as="span">` for inline text that needs styling within a paragraph
- For links, use a dedicated Link component (not Text)
- For headings, use the Heading component

### Text Hierarchy

```tsx
{/* Use Heading for titles */}
<Heading as="h2" size="xl">Section Title</Heading>

{/* Use Text for body content */}
<Text>
  This is the body text that follows the heading. It provides
  detailed information about the section topic.
</Text>

{/* Use span for inline emphasis */}
<Text>
  This paragraph has <Text as="span" className="font-bold">bold text</Text> inline.
</Text>
```

### Color and Contrast

- Default color uses `text-foreground` from the theme
- Ensure sufficient contrast when overriding colors (WCAG AA minimum 4.5:1 for normal text)
- Test color combinations with accessibility tools

### Font Size Considerations

- `sm` (14px) - Use sparingly; ensure readability
- `base` (16px) - Recommended minimum for body text
- `lg` and `xl` - For emphasis or larger displays

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `'p' \| 'span'` | `'p'` | The HTML text element to render |
| `size` | `'sm' \| 'base' \| 'lg' \| 'xl'` | `'base'` | The text size |
| `className` | `string` | `undefined` | Additional CSS classes to apply |

The component also accepts all standard HTML paragraph attributes.

## Examples

### Basic Paragraph

```tsx
<Text>
  This is a paragraph of text with the default base size.
</Text>
```

### Inline Text with Custom Style

```tsx
<p>
  This is a sentence with <Text as="span" className="text-accent font-medium">highlighted text</Text> inline.
</p>
```

### Different Sizes

```tsx
<div className="space-y-2">
  <Text size="sm">Small supporting text</Text>
  <Text size="base">Standard body text</Text>
  <Text size="lg">Emphasized text</Text>
  <Text size="xl">Large prominent text</Text>
</div>
```
