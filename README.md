# tc⚡96 ui-react

A modern, accessible React design system for building landing pages, SaaS products, and web applications.

## Features

- **Token-First Design**: All styles driven by CSS variables and design tokens
- **Accessible by Default**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Framework Agnostic**: Works with Next.js, Remix, Vite, and any React framework
- **Composable Primitives**: Built on Radix UI with consistent variant/size APIs
- **Tree-Shakable**: ESM/CJS exports with minimal bundle impact
- **Dark Mode**: Built-in theming support via CSS variables

## Installation

```bash
npm install @tc96/ui-react
# or
pnpm add @tc96/ui-react
# or
yarn add @tc96/ui-react
```

## Usage

### 1. Import Styles

Import the CSS file once in your application entry point:

```tsx
// For Next.js (app router) - add to app/layout.tsx
import '@tc96/ui-react/styles.css'

// For Next.js (pages router) - add to pages/_app.tsx
import '@tc96/ui-react/styles.css'

// For Vite/CRA - add to main.tsx or App.tsx
import '@tc96/ui-react/styles.css'
```

### 2. Use Components

```tsx
import { Button, Card, Avatar } from '@tc96/ui-react'

export function Example() {
  return (
    <Card>
      <Avatar src="/avatar.jpg" alt="User" fallback="UN" />
      <Button variant="solid" size="base">
        Click me
      </Button>
    </Card>
  )
}
```

### 3. Theming

Toggle dark mode by adding the `.dark` class to a parent element:

```tsx
<div className="dark">
  {/* All components inside will use dark theme */}
  <Button>Dark mode button</Button>
</div>
```

Customize brand tokens via CSS variables:

```css
:root {
  --color-accent: oklch(0.67 0.16 58); /* Your brand color */
}
```

## Available Components

- `Button` - Solid, outline, ghost, link variants
- `Avatar` - User avatars with fallback
- `Input` - Text inputs
- `Textarea` - Multi-line text
- `Card` - Content containers
- `Dialog` - Modal dialogs
- `Badge` - Status tags
- `Alert` - Notices and messages

## Documentation

- **[Storybook](http://localhost:6006/)** - Interactive component gallery with live examples
- **[Quickstart Guide](./specs/001-design-system-core/quickstart.md)** - Installation and usage guide
- **[Component Contracts](./specs/001-design-system-core/contracts/component-contracts.md)** - API specifications
- **[Design System Constitution](./specs/.specify/memory/constitution.md)** - Core principles and standards

## Contributing

We welcome contributions! Please read:

- **[Contributing Guide](./CONTRIBUTING.md)** - Governance, PR process, and quality gates
- **[Design System Constitution](./specs/.specify/memory/constitution.md)** - Core principles and architecture decisions

### Development

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm run dev

# Build library
pnpm run build

# Lint and format
pnpm run lint:fix

# Type check
pnpm run check:type
```

## License

MIT

