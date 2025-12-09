# MainContent

A layout component that provides consistent spacing, padding, and maximum width constraints for the main content area of a page.

## Installation

```bash
pnpm add @tc96/ui-react
```

## Usage

```tsx
import { MainContent } from '@tc96/ui-react'

export function Example() {
  return (
    <MainContent>
      <h1>Welcome to the Dashboard</h1>
      <p>This is the main content area.</p>
    </MainContent>
  )
}
```

## Size Variants

The MainContent component supports multiple size variants to control the maximum width of the content area:

- **`sm`** - Small width (max-width: 672px / 42rem)
- **`default`** - Default width (max-width: 768px / 48rem)
- **`lg`** - Large width (max-width: 896px / 56rem)
- **`xl`** - Extra large width (max-width: 1152px / 72rem)
- **`2xl`** - Extra extra large width (max-width: 1280px / 80rem)

### Examples

```tsx
<MainContent size="sm">
  <p>Narrow content for focused reading</p>
</MainContent>

<MainContent size="default">
  <p>Standard content width</p>
</MainContent>

<MainContent size="lg">
  <p>Wider content for more complex layouts</p>
</MainContent>

<MainContent size="xl">
  <p>Extra wide content for dashboards</p>
</MainContent>

<MainContent size="2xl">
  <p>Maximum width for full-featured pages</p>
</MainContent>
```

## Layout Features

The MainContent component automatically provides:

- **Responsive padding**: 
  - Mobile: `24px` (px-6, py-6)
  - Tablet: `40px` vertical (md:py-10)
  - Desktop: `56px` vertical (lg:py-14)
- **Centered content**: Automatically centers content horizontally with `mx-auto`
- **Vertical spacing**: Built-in gap between child elements
  - Mobile: `24px` (gap-6)
  - Desktop: `40px` (lg:gap-10)
- **Flexbox layout**: Uses `flex flex-col` for vertical stacking

## Common Use Cases

### Dashboard Layout

```tsx
import { MainContent } from '@tc96/ui-react'

export function Dashboard() {
  return (
    <MainContent size="xl">
      <header>
        <h1>Dashboard</h1>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>Card 1</div>
        <div>Card 2</div>
      </section>
    </MainContent>
  )
}
```

### Article/Blog Layout

```tsx
import { MainContent } from '@tc96/ui-react'

export function Article() {
  return (
    <MainContent size="default">
      <article>
        <h1>Article Title</h1>
        <p>Article content with optimal reading width...</p>
      </article>
    </MainContent>
  )
}
```

### Settings Page

```tsx
import { MainContent } from '@tc96/ui-react'

export function Settings() {
  return (
    <MainContent size="lg">
      <h1>Settings</h1>
      <form>
        {/* Form fields */}
      </form>
    </MainContent>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'default' \| 'lg' \| 'xl' \| '2xl'` | `'default'` | Maximum width of the content area |
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Content to be rendered inside the main element |

All standard HTML `<main>` element attributes are also supported.

## Semantic HTML

The component renders a semantic `<main>` element, which:
- Identifies the primary content of the document
- Improves accessibility for screen readers
- Helps with SEO by clearly marking the main content area
- Should only be used once per page

## Accessibility

- Uses semantic `<main>` element for proper document structure
- Includes `data-slot="main-content"` attribute for component identification
- Provides proper landmark for screen reader navigation
- Maintains readable line lengths for optimal accessibility

## Responsive Design

The component is fully responsive with:
- Mobile-first approach
- Adaptive padding that increases on larger screens
- Flexible gap spacing that grows with screen size
- Maximum width constraints that prevent overly wide content

## Customization

You can extend or override styles using the `className` prop:

```tsx
<MainContent className="bg-gray-50 dark:bg-gray-900">
  <p>Content with custom background</p>
</MainContent>
```

## Testing

The MainContent component includes Storybook interaction tests that verify:
- Proper semantic HTML structure
- Correct size variant classes
- Data attribute presence
- Flexbox layout application

To run the tests:

```bash
pnpm dev  # Start Storybook and view the interaction tests
```
