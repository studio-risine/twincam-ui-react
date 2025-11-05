# Component API Contracts (Design System Core)

This library exposes UI components, not network endpoints. Contracts below define public props, variants, sizes, and behaviors in technology-agnostic terms.

## Button
- Variants: `solid` (default), `destructive`, `outline`, `ghost`, `link`
- Sizes: `sm`, `base` (default), `lg`, `icon`
- Props: `variant`, `size`, `disabled`, `asChild` (optional), `onPress/Click`, `aria-label` (when icon-only)
- Behavior: Keyboard operable; visible focus; communicates disabled state to assistive tech

## Input (Text / Textarea)
- Variants: `default`
- Sizes: `sm`, `base`, `lg`
- Props: `value`, `onChange`, `placeholder`, `disabled`, `invalid`, `required`, `aria-describedby`
- Behavior: Label association documented; invalid state conveys meaning without color alone

## Card
- Variants: `default`
- Props: `header`, `media` (optional), `children`, `footer`
- Behavior: Structural container; no interactive roles

## Dialog/Modal
- Variants: `default`
- Props: `open`, `onOpenChange`, `title`, `description`, `children`
- Behavior: Focus trapping; escape to close; aria roles: dialog with labelledby/-describedby

## Avatar
- Variants: `default`
- Props: `src`, `alt`, `fallback` (content)
- Behavior: Meaningful alt or explicit decorative handling

## Badge/Tag
- Variants: `neutral` (default), `success`, `warning`, `danger`, `accent`
- Sizes: `sm`, `base`
- Props: `variant`, `size`, `children`

## Alert/Notice
- Variants: `info` (default), `success`, `warning`, `error`
- Props: `variant`, `title`, `description`, `actions` (optional)
- Behavior: Announces changes; avoids role=alert misuse; accessible icons and color contrast

## Cross-cutting Contracts
- All components accept `className` for non-breaking layout adjustments.
- All interactive components are keyboard operable and have visible focus.
- All visuals derive from design tokens; no hard-coded colors/spacings.
- Components forward references where platform-appropriate.
