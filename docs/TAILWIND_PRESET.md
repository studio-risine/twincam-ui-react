# Tailwind CSS Preset

The `@tc96/ui-react` library includes a Tailwind CSS preset that provides the complete design system configuration, including tokens, theme, animations, and dark mode support.

## What's Included

The preset provides:

- **Design Tokens**: Semantic color tokens using OKLCH color space
- **Theme Configuration**: Colors, typography, spacing, and border radius
- **Dark Mode**: Built-in dark mode support with proper token mapping
- **Animations**: Smooth animations for interactive components
- **Typography**: Inter font family configuration

## Basic Usage

Import and use the preset in your `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss"
import twincamPreset from "@tc96/ui-react/tailwind-preset"

export default {
  presets: [twincamPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tc96/ui-react/dist/**/*.{js,mjs}",
  ],
} satisfies Config
```

> **Important:** Always include `./node_modules/@tc96/ui-react/dist/**/*.{js,mjs}` in your `content` array to ensure proper tree-shaking and purging.

## Extending the Preset

You can extend the preset with your own customizations:

```ts
import type { Config } from "tailwindcss"
import twincamPreset from "@tc96/ui-react/tailwind-preset"

export default {
  presets: [twincamPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tc96/ui-react/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "oklch(0.5 0.2 250)",
          light: "oklch(0.7 0.2 250)",
          dark: "oklch(0.3 0.2 250)",
        },
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
} satisfies Config
```

## Color System

The preset uses semantic color tokens that automatically adapt to light and dark modes:

### Semantic Colors

```tsx
// Primary action colors
<div className="bg-primary text-primary-foreground">Primary</div>

// Secondary/muted colors
<div className="bg-secondary text-secondary-foreground">Secondary</div>
<div className="bg-muted text-muted-foreground">Muted</div>

// Accent colors
<div className="bg-accent text-accent-foreground">Accent</div>

// Destructive/error colors
<div className="bg-destructive text-destructive-foreground">Error</div>

// Background and foreground
<div className="bg-background text-foreground">Content</div>

// Card components
<div className="bg-card text-card-foreground">Card</div>

// Popover/dropdown components
<div className="bg-popover text-popover-foreground">Popover</div>

// Borders and inputs
<div className="border-border">Border</div>
<input className="border-input" />

// Focus rings
<button className="focus:ring-ring">Focus</button>
```

### Chart Colors

Five chart colors are provided for data visualization:

```tsx
<div className="bg-chart-1">Chart 1</div>
<div className="bg-chart-2">Chart 2</div>
<div className="bg-chart-3">Chart 3</div>
<div className="bg-chart-4">Chart 4</div>
<div className="bg-chart-5">Chart 5</div>
```

## Border Radius System

The preset includes a cohesive border radius system:

```tsx
<div className="rounded-sm">Small radius</div>
<div className="rounded-md">Medium radius</div>
<div className="rounded-lg">Large radius</div>
<div className="rounded-xl">Extra large radius</div>
```

These correspond to:
- `sm`: `--radius - 4px`
- `md`: `--radius - 2px`
- `lg`: `--radius` (default: 0.625rem)
- `xl`: `--radius + 4px`

## Typography

The preset configures the Inter font family as the default sans-serif font:

```tsx
<p className="font-sans">
  This text uses the Inter font family
</p>
```

To use Inter, ensure you've loaded it in your project:

```tsx
// Next.js App Router (app/layout.tsx)
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

Or using a CDN in your HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
```

## Animations

The preset includes accordion animations for collapsible components:

```tsx
// These are used automatically by components, but you can use them directly:
<div className="animate-accordion-down">Expanding</div>
<div className="animate-accordion-up">Collapsing</div>
```

Available animations:
- `accordion-down`: Smooth expand animation
- `accordion-up`: Smooth collapse animation

## Dark Mode

Dark mode is supported via Tailwind's class-based strategy. Add the `dark` class to your HTML element:

```tsx
// Manual toggle
<button onClick={() => document.documentElement.classList.toggle('dark')}>
  Toggle Dark Mode
</button>
```

Or use a dark mode library like `next-themes`:

```tsx
import { ThemeProvider } from 'next-themes'

function App({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
```

All semantic tokens automatically switch between light and dark values.

## Customizing Colors

To override or add colors while preserving the design system:

```ts
export default {
  presets: [twincamPreset],
  theme: {
    extend: {
      colors: {
        // Override semantic tokens
        primary: {
          DEFAULT: "oklch(0.4 0.15 250)",
          foreground: "oklch(0.98 0 0)",
        },
        // Add custom colors
        brand: "oklch(0.5 0.2 180)",
      },
    },
  },
} satisfies Config
```

## Using Without the Preset

If you prefer not to use the preset, you can still use the components by importing the CSS file:

```tsx
import '@tc96/ui-react/dist/styles/index.css'
```

The CSS includes all necessary design tokens and will work independently.

## OKLCH Color Space

The design system uses OKLCH colors for better perceptual uniformity and wider color gamut support.

Benefits:
- **Perceptually uniform**: Equal changes in values result in equal perceived changes
- **Wide gamut**: Access to more vibrant colors on modern displays
- **Predictable lightness**: Easier to create accessible color scales
- **Better dark mode**: More accurate color inversion

Example OKLCH format:
```css
/* oklch(Lightness Chroma Hue / Alpha) */
--color: oklch(0.5 0.2 250);
         /*    ^   ^   ^
               |   |   Hue (0-360)
               |   Chroma (0-0.4)
               Lightness (0-1)
         */
```

## Complete Example

Here's a complete Tailwind configuration with the preset:

```ts
import type { Config } from "tailwindcss"
import twincamPreset from "@tc96/ui-react/tailwind-preset"

export default {
  // Use the preset as the foundation
  presets: [twincamPreset],
  
  // Configure content sources
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tc96/ui-react/dist/**/*.{js,mjs}",
  ],
  
  // Extend with custom theme
  theme: {
    extend: {
      colors: {
        brand: "oklch(0.5 0.2 180)",
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  
  // Add custom plugins if needed
  plugins: [],
} satisfies Config
```

## Resources

- [OKLCH Color Picker](https://oklch.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Inter Font Family](https://fonts.google.com/specimen/Inter)
