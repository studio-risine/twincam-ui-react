# Avatar

An accessible avatar component built on Radix UI primitives, with image and fallback support and size variants.

## Installation

```bash
pnpm add @tc96/ui-react
```

## Usage

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@tc96/ui-react'

export function Example() {
  return (
    <Avatar>
      <AvatarImage src="/users/jane.jpg" alt="Jane Doe" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  )
}
```

## Sizes

Control the overall size with the `size` prop on `Avatar`.

- `sm` – 32px
- `base` (default) – 40px
- `lg` – 48px

### Examples

```tsx
<Avatar size="sm">
  <AvatarImage src="/img.png" alt="" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>

<Avatar size="base">
  <AvatarImage src="/img.png" alt="" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>

<Avatar size="lg">
  <AvatarImage src="/img.png" alt="" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

## Fallbacks

`AvatarFallback` renders when the image is loading or fails.

```tsx
<Avatar>
  <AvatarImage src="/broken.jpg" alt="User" />
  <AvatarFallback>US</AvatarFallback>
</Avatar>
```

Use initials or an icon for clear identification.

## Custom Styling

Use `className` to adjust styles.

```tsx
<Avatar className="ring-2 ring-accent">
  <AvatarImage src="/user.jpg" alt="" />
  <AvatarFallback>ME</AvatarFallback>
</Avatar>
```

## Accessibility

- Always provide meaningful `alt` text on `AvatarImage` when the avatar conveys identity.
- If the avatar is purely decorative, set `alt=""`.
- Ensure fallback content (e.g., initials) is readable and has sufficient contrast.
- Keep avatars focusable only if interactive (wrap in a button/link when clickable).

## Composition

Avatars commonly appear with names or badges:

```tsx
<Inline align="center" space="sm">
  <Avatar>
    <AvatarImage src="/users/jane.jpg" alt="Jane Doe" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Text>Jane Doe</Text>
  <Badge variant="secondary">Pro</Badge>
</Inline>
```

## API Reference

### `Avatar`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'base' \| 'lg'` | `'base'` | Overall avatar size |
| `className` | `string` | `undefined` | Additional CSS classes |

Accepts all Radix `Avatar.Root` props.

### `AvatarImage`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | `""` | Alternate text for the image |
| `className` | `string` | `undefined` | Additional CSS classes |

Accepts all Radix `Avatar.Image` props.

### `AvatarFallback`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Fallback content (e.g., initials) |
| `className` | `string` | `undefined` | Additional CSS classes |

Accepts all Radix `Avatar.Fallback` props.
