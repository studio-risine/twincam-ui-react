# Navigation Menu

A collection of links for navigating websites, built on top of Radix UI's Navigation Menu primitive.

## Installation

```bash
pnpm add @tc96/ui-react
```

## Usage

```tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuLinkVariants,
} from '@tc96/ui-react'

export function Example() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/link-1">Link 1</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

## Components

### NavigationMenu

The root component that explicitly manages the state and provides context to sub-components.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the menu |
| `className` | `string` | - | Additional CSS classes |

### NavigationMenuList

Contains the top-level menu items.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the list |

### NavigationMenuItem

A top-level menu item, contains a trigger and content or a link.

### NavigationMenuTrigger

The button that toggles the content.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the trigger |

### NavigationMenuContent

The component that pops out when a trigger is activated.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the content |

### NavigationMenuLink

A link component that navigates to a URL.

### NavigationMenuViewport

The component that optionally renders the content in a separate viewport. Used automatically by `NavigationMenu`.

## Accessibility

- Adheres to the [WAI-ARIA Design Pattern for Navigation Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).
- Supports keyboard navigation (Tab, Arrow keys, Enter, Space, Escape).
- Manages focus automatically.
