# Phase 1: Data Model

This feature does not include networked data storage. The “model” captures core entities and their relationships in the design system domain.

## Entities

### Token
- Purpose: Semantic design values (color, type scale, spacing, radius, shadow, motion, breakpoints).
- Fields: `name`, `category`, `role`, `valueByTheme` (default/dark), `description`.
- Notes: Only consumed via CSS variables; no hardcoded values in components.

### Theme
- Purpose: A set of token values applied to components.
- Fields: `name` (default, dark), `scopes` (:root, .dark), `overrides`.

### Component
- Purpose: Reusable UI building block.
- Fields: `name`, `variants` (names + behavioral notes), `sizes`, `props` (public API), `a11yNotes`, `tokensUsed`.
- Relationships: Consumes Token; documented by DocumentationPage.

### Variant
- Purpose: Stylistic/behavioral option of a Component.
- Fields: `name` (e.g., solid, outline, ghost, link), `description`, `intendedUse`.

### Release
- Purpose: Versioned snapshot of the library.
- Fields: `version`, `date`, `changes`, `migrationNotes`.

### DocumentationPage
- Purpose: Human-friendly documentation for Tokens/Components.
- Fields: `slug`, `title`, `summary`, `examples`, `guidelines`, `a11yChecklist`.

## Relationships
- Component → Token: many-to-many (components consume multiple tokens; tokens used by many components).
- Theme → Token: provides values for tokens.
- DocumentationPage → Component/Token: many-to-many.
