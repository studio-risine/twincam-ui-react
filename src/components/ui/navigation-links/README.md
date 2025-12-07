# Navigation Menu

A flexible navigation menu component with support for both horizontal and vertical orientations, built on top of Radix UI primitives.

## Features

- **Dual Orientation Support**: Switch between horizontal and vertical layouts
- **Accessible**: Built with Radix UI primitives for full keyboard navigation and ARIA support
- **Type-Safe**: Full TypeScript support with proper interface contracts
- **Performance Optimized**: Uses React.memo to prevent unnecessary re-renders
- **Customizable**: Uses CVA (Class Variance Authority) for flexible styling

## Installation

This component requires `@radix-ui/react-navigation-menu`:

```bash
pnpm add @radix-ui/react-navigation-menu
```

## Usage

### Simple Navigation with Wrapper (Recommended)

The easiest way to use the navigation menu is with the `NavigationMenuLinks` wrapper component:

```typescript
import { NavigationMenuLinks } from '@/components/ui/navigation-menu'

function MyNav() {
  return (
    <NavigationMenuLinks
      orientation="horizontal"
      data={{
        items: [
          { title: "Home", href: "/", description: "Homepage" },
          { title: "About", href: "/about", description: "About us" }
        ],
        groups: [
          {
            title: "Products",
            items: [
              { 
                title: "Product 1", 
                href: "/products/1", 
                description: "First product" 
              },
              { 
                title: "Product 2", 
                href: "/products/2", 
                description: "Second product" 
              }
            ]
          }
        ]
      }}
    />
  )
}
```

### Advanced: Composing Components Manually

For more control, you can compose the components manually:

```typescript
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

function AdvancedNav() {
  return (
    <NavigationMenu orientation="horizontal">
      <NavigationMenuList orientation="horizontal">
        <NavigationMenuItem>
          <NavigationMenuTrigger orientation="horizontal">
            Getting Started
          </NavigationMenuTrigger>
          <NavigationMenuContent orientation="horizontal">
            <NavigationMenuLink href="/getting-started">
              Learn how to get started
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

## Data Structure

### NavigationMenuLinks Wrapper

```typescript
interface NavItem {
  title: string
  href: string
  description: string
}

interface NavGroup {
  title: string        // Group title (e.g., "Products")
  items: NavItem[]     // Items within the group
}

interface NavigationData {
  items?: NavItem[]    // Top-level simple links
  groups?: NavGroup[]  // Groups with dropdown content
}
```

### Example Data

```typescript
const navigationData: NavigationData = {
  items: [
    { title: "Home", href: "/", description: "Homepage" },
    { title: "About", href: "/about", description: "About us" }
  ],
  groups: [
    {
      title: "Documentation",
      items: [
        { 
          title: "Getting Started", 
          href: "/docs/start", 
          description: "Learn the basics" 
        },
        { 
          title: "API Reference", 
          href: "/docs/api", 
          description: "Full API docs" 
        }
      ]
    }
  ]
}
```

## API Reference

### NavigationMenuLinks (Wrapper)

Simplified wrapper component for common use cases.

**Props:**
- `data: NavigationData` - Navigation structure with items and/or groups
- `orientation?: 'horizontal' | 'vertical'` - Layout direction (default: `'horizontal'`)

### NavigationMenu

Root component that wraps the entire navigation menu.

**Props:**
- `orientation?: 'horizontal' | 'vertical'` - Layout direction (default: `'horizontal'`)
- Includes `data-orientation` data attribute

### NavigationMenuList

Container for navigation menu items.

**Props:**
- `orientation?: 'horizontal' | 'vertical'` - Layout direction (default: `'horizontal'`)

### NavigationMenuTrigger

Clickable trigger that opens menu content.

**Props:**
- `orientation?: 'horizontal' | 'vertical'` - Layout direction (default: `'horizontal'`)

### NavigationMenuContent

Content panel that appears when trigger is activated.

**Props:**
- `orientation?: 'horizontal' | 'vertical'` - Layout direction (default: `'horizontal'`)

### NavigationMenuLink

Link component for navigation items. Supports the `asChild` pattern for custom link components.

### NavigationMenuItem

Wrapper for individual menu items.

## Accessibility

- Full keyboard navigation support (Tab, Arrow keys, Enter, Escape)
- Proper ARIA attributes automatically applied
- Focus management handled by Radix UI
- Screen reader friendly

## Performance

The component uses `React.memo` on the `NavigationMenuLink` to prevent unnecessary re-renders when parents update. The orientation prop is designed to be static, avoiding re-renders when switching contexts.
