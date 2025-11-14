# Badge

A small inline label for statuses, counts, and metadata. Supports style variants and composes well inside headings, lists, and cards.

## Installation

```bash
pnpm add @tc96/ui-react
```

## Usage

```tsx
import { Badge } from '@tc96/ui-react'

export function Example() {
  return <Badge>New</Badge>
}
```

## Variants

Control the appearance with the `variant` prop. The default is `default`.

- `default` – Primary emphasis
- `secondary` – Subtle, secondary emphasis
- `destructive` – Error/destructive state
- `outline` – Minimal outline style

### Examples

```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

## Custom Styling

Use `className` to extend or override styles. Badge is `inline-flex` and `rounded-full` by default.

```tsx
<Badge className="uppercase tracking-wide">Custom Badge</Badge>
```

## Accessibility

- Use concise, meaningful labels (e.g., "New", "Beta", "Admin").
- Prefer text labels over color alone; color should not be the only indicator.
- When conveying dynamic counts, include the number in the label (e.g., `3 new`).
- Badges are decorative text; they typically do not need `role` attributes.
- Do not use badges as buttons; wrap them with an interactive element only when necessary and ensure focus styles are visible.

## Composition

Badges work well alongside other components:

```tsx
<Heading as="h3" size="lg">
  Notifications <Badge variant="secondary">3</Badge>
</Heading>

<Text>
  Your plan is <Badge variant="outline">Pro</Badge> with monthly billing.
</Text>
```

## API Reference

| Prop       | Type                                           | Default   | Description                              |
|-----------|------------------------------------------------|-----------|------------------------------------------|
| `variant` | `'default' | 'secondary' | 'destructive' | 'outline'` | `'default'` | Visual style of the badge                 |
| `className` | `string`                                      | `undefined` | Additional CSS classes to apply           |
| `children` | `ReactNode`                                    | —         | Contents of the badge (text or elements)  |

The component also accepts all standard `div` attributes.
