# Quickstart: Using the Design System

This guide shows how to adopt the Design System in web apps and Next.js sites.

## Finding Components & Documentation

The design system includes comprehensive documentation via Storybook:

### Navigating Storybook

1. **Foundation** - Start here to understand design tokens (colors, spacing, typography)
2. **Components** - Interactive examples of all components with live controls
3. **Examples** - Complete page examples showing components in context

### Quick Component Lookup

- **Forms**: Input, Textarea, Button
- **Feedback**: Alert, Badge, Dialog
- **Layout**: Card, Avatar
- **Actions**: Button (6 variants), Dialog

### Finding the Right Variant

Each component page includes:
- Visual examples of all variants
- Usage guidelines and best practices
- Accessibility notes
- Common patterns and code examples
- Props documentation with TypeScript types

**Tip**: Use Storybook's search (Cmd/Ctrl+K) to quickly find components by name.

## Install

- Add the package as a dependency (public registry)
- Ensure peer dependencies (React) are satisfied

## Styles

- Import the distributed CSS once at app entry
- Ensure the `:root` and `.dark` token variables are not overridden by app styles

## Basic Usage

- Render components directly; pass `variant` and `size` consistently across components
- Use `asChild` for composability when nesting inside link wrappers

## Theming

### Dark Mode

Toggle dark mode by adding the `.dark` class to a parent element:

```tsx
// Toggle dark mode
<div className="dark">
  {/* All components inside will use dark theme */}
</div>
```

### Customizing Brand Colors

All components use design tokens for colors. Change your brand color by overriding CSS variables:

**Method 1: Global Override (Root Level)**

```css
/* In your app's global CSS */
:root {
  --accent: oklch(0.55 0.22 250); /* Your brand blue */
  --accent-foreground: oklch(0.97 0.01 250); /* Text on brand color */
}

.dark {
  --accent: oklch(0.6 0.22 250); /* Adjusted for dark mode */
  --accent-foreground: oklch(0.97 0.01 250);
}
```

**Method 2: Scoped Override (Per Section)**

```tsx
// Different brand per section
<div style={{ 
  '--accent': 'oklch(0.6 0.24 300)',
  '--accent-foreground': 'oklch(0.97 0.01 300)' 
}}>
  <Button>Purple Brand Button</Button>
  <Badge variant="accent">Purple Badge</Badge>
</div>
```

**Result**: All components using accent colors (Button primary variant, Badge accent variant, etc.) will automatically use your brand color. No component code changes needed!

### Available Token Overrides

| Token | Purpose | Components Affected |
|-------|---------|-------------------|
| `--accent` | Brand/primary color | Button (primary), Badge (accent) |
| `--accent-foreground` | Text on brand color | Button text, Badge text |
| `--destructive` | Error/danger color | Button (destructive), Alert (error) |
| `--radius` | Border radius scale | All rounded components |
| `--muted` | Subdued backgrounds | Input, Textarea backgrounds |
| `--border` | Border colors | All bordered elements |

**See the "Foundation/Token Propagation" story in Storybook for live examples.**

### Other Customizations

```css
/* Increase border radius globally */
:root {
  --radius: 1rem; /* Default is 0.5rem */
}

/* Adjust muted/subtle backgrounds */
:root {
  --muted: oklch(0.95 0.002 286);
}
```

## Accessibility

- Provide meaningful `aria-label` for icon-only buttons
- Ensure dialogs have labelled and described content
- Do not remove focus outlines

## Next.js Notes

- Library is SSR-safe; avoid dynamic imports unless necessary for heavy examples
- Import styles in your custom `_app` (pages) or root layout (app router)

## Example

### Common Components

**Button**
```tsx
import { Button } from '@tc96/ui-react'

// Variants: "solid" (default) | "destructive" | "outline" | "ghost" | "link"
// Sizes: "sm" | "base" (default) | "lg" | "icon"
<Button variant="solid" size="lg">Get Started</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

**Input & Forms**
```tsx
import { Input } from '@tc96/ui-react'

<div className="space-y-2">
  <label htmlFor="email" className="text-sm font-medium">Email</label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

**Card**
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@tc96/ui-react'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Supporting description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
</Card>
```

**Alert**
```tsx
import { Alert, AlertTitle, AlertDescription } from '@tc96/ui-react'

// Variants: "info" (default) | "success" | "warning" | "error"
<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>
```

**Badge**
```tsx
import { Badge } from '@tc96/ui-react'

// Variants: "neutral" (default) | "success" | "warning" | "danger" | "accent"
<Badge variant="success">Active</Badge>
<Badge variant="accent" size="sm">New</Badge>
```

**Avatar**
```tsx
import { Avatar } from '@tc96/ui-react'

<div className="size-10">
  <Avatar src="/avatar.jpg" alt="User name" fallback="UN" />
</div>
```

### Complete Example

See the **Examples/Landing Page** story in Storybook for a complete page built entirely with library components.

## Upgrading

- Follow the changelog for breaking changes and migration notes
- Deprecations are announced at least one minor before removal
