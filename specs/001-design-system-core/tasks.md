---

description: "Task list for implementing Design System Core"
---

# Tasks: Design System Core

**Input**: Design documents from `/specs/001-design-system-core/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL and not required for MVP. Use Storybook stories as primary examples and a11y checks. Add a unit test runner later if needed.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verify project scaffolding, publishing, and docs wiring for the library package

- [x] T001 Ensure public distribution settings in package metadata ("publishConfig.access": "public") in /Users/gabs/Workspaces/p/tc96/tc96-design-system/package.json
- [x] T002 Add/verify library entry points and exports map in /Users/gabs/Workspaces/p/tc96/tc96-design-system/package.json
- [x] T003 Create CONTRIBUTING.md with governance summary and PR quality gates in /Users/gabs/Workspaces/p/tc96/tc96-design-system/CONTRIBUTING.md
- [x] T004 [P] Add Storybook config files if missing: /Users/gabs/Workspaces/p/tc96/tc96-design-system/.storybook/main.ts and /Users/gabs/Workspaces/p/tc96/tc96-design-system/.storybook/preview.ts
- [x] T005 [P] Create README usage section for installing and importing styles in /Users/gabs/Workspaces/p/tc96/tc96-design-system/README.md
- [x] T006 Create initial CHANGELOG heading for upcoming release in /Users/gabs/Workspaces/p/tc96/tc96-design-system/CHANGELOG.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T007 Create tokens overview docs page: /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/stories/tokens.stories.mdx
- [x] T008 [P] Verify token variables exist for color/typography/spacing/radius/shadow/motion in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/styles/index.css
- [x] T009 [P] Ensure `src/index.ts` re-exports public components and styles path in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/index.ts
- [x] T010 Create Storybook helpers (decorators for theme switching) in /Users/gabs/Workspaces/p/tc96/tc96-design-system/.storybook/preview.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Build with core library (Priority: P1) 🎯 MVP

**Goal**: Enable developers to build a basic marketing/product page using library tokens and components only

**Independent Test**: Build a single-page layout (hero, CTA, content section) using the library in under 2 hours without custom component code

### Implementation for User Story 1

- [x] T011 [P] [US1] Implement Input (text) component in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/components/ui/input/index.tsx
- [x] T012 [P] [US1] Implement Textarea component in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/components/ui/textarea/index.tsx
- [x] T013 [P] [US1] Implement Card primitive in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/components/ui/card/index.tsx
- [x] T014 [P] [US1] Implement Dialog (headless behavior via Radix) in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/components/ui/dialog/index.tsx
- [x] T015 [P] [US1] Implement Badge/Tag component in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/components/ui/badge/index.tsx
- [x] T016 [P] [US1] Implement Alert/Notice component in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/components/ui/alert/index.tsx
- [x] T017 [US1] Create cva variant files if needed (e.g., button-like patterns) in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/components/ui/**/[component].variants.ts (Note: Not needed - variants inline for simpler components, Button already has separate file)
- [x] T018 [US1] Add stories for Input and Textarea in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/stories/input.stories.tsx and textarea.stories.tsx
- [x] T019 [US1] Add stories for Card and Dialog in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/stories/card.stories.tsx and dialog.stories.tsx
- [x] T020 [US1] Add stories for Badge and Alert in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/stories/badge.stories.tsx and alert.stories.tsx
- [x] T021 [US1] Ensure accessible focus states and SR labels (icon-only, dialog titles) across new components in respective files under /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/components/ui/ (Verified: Dialog has sr-only close label, Alert has role="alert", Input/Textarea have focus-visible states)
- [x] T022 [US1] Export new components from /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/index.ts
- [x] T023 [US1] Validate P1 page assembly in Storybook example story at /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/stories/p1-landing-example.stories.tsx

**Checkpoint**: User Story 1 functional and testable independently

---

## Phase 4: User Story 2 - Discoverability and guidance (Priority: P2)

**Goal**: Designers/stakeholders can find tokens/components and guidance quickly with examples of variants/states

**Independent Test**: A non-developer can locate the correct component and variant/size within 2 minutes

### Implementation for User Story 2

- [x] T024 [P] [US2] Add usage guidance MDX for Button, Avatar in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/stories/button.docs.mdx and avatar.docs.mdx
- [x] T025 [P] [US2] Add usage guidance MDX for Input, Textarea in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/stories/input.docs.mdx and textarea.docs.mdx
- [x] T026 [P] [US2] Add usage guidance MDX for Card, Dialog in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/stories/card.docs.mdx and dialog.docs.mdx
- [x] T027 [P] [US2] Add usage guidance MDX for Badge, Alert in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/stories/badge.docs.mdx and alert.docs.mdx
- [x] T028 [US2] Organize Storybook titles and sidebar hierarchy for quick search in /Users/gabs/Workspaces/p/tc96/tc96-design-system/.storybook/main.ts
- [x] T029 [US2] Add token reference table (roles, examples) to /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/stories/tokens.stories.mdx
- [x] T030 [US2] Update Quickstart with discoverability pointers in /Users/gabs/Workspaces/p/tc96/tc96-design-system/specs/001-design-system-core/quickstart.md

**Checkpoint**: User Story 2 functional and independently verifiable

---

## Phase 5: User Story 3 - Centralized updates (Priority: P3)

**Goal**: Token changes propagate across consuming apps without per-component edits

**Independent Test**: Change a primary brand accent token; verify 3 representative stories reflect the change without component edits

### Implementation for User Story 3

- [x] T031 [P] [US3] Add brand accent token demo CSS in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/stories/token-propagation.stories.tsx
- [x] T032 [P] [US3] Create theme switcher examples in token propagation stories
- [x] T033 [US3] Add token propagation demo stories showing 4 different brand colors (orange, blue, purple, green)
- [x] T034 [US3] Validate token changes propagate: verified Button, Badge, and accent backgrounds update automatically
- [x] T035 [US3] Document token override workflow in /Users/gabs/Workspaces/p/tc96/tc96-design-system/specs/001-design-system-core/quickstart.md

**Checkpoint**: User Story 3 functional and independently verifiable

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Final touches before release

- [x] T036 [P] Add governance/contribution link from docs in /Users/gabs/Workspaces/p/tc96/tc96-design-system/README.md
- [x] T037 Code cleanup and export audit in /Users/gabs/Workspaces/p/tc96/tc96-design-system/src/index.ts (Added cn utility export)
- [x] T038 Performance pass: remove unused styles, ensure tree-shaking in /Users/gabs/Workspaces/p/tc96/tc96-design-system/tsup.config.mts (Enabled splitting and explicit tree-shaking)
- [ ] T039 [P] Optional: add unit test runner baseline (Vitest) configuration in /Users/gabs/Workspaces/p/tc96/tc96-design-system/vitest.config.ts (SKIPPED - Using Storybook for testing)
- [x] T040 Run quickstart.md validation and adjust examples in /Users/gabs/Workspaces/p/tc96/tc96-design-system/specs/001-design-system-core/quickstart.md (Validated and enhanced with comprehensive examples)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational (Phase 2) — No dependencies on other stories
- **User Story 2 (P2)**: Starts after Foundational (Phase 2) — Independent of US1 but references its docs
- **User Story 3 (P3)**: Starts after Foundational (Phase 2) — Independent but demonstrates propagation across US1/US2 examples

### Within Each User Story

- Models/Primitives before stories/docs
- Stories/docs before integration demos
- Export updates last

### Parallel Opportunities

- All tasks marked [P] can run in parallel
- US1 component implementations (T011–T016) can be done in parallel by different contributors
- US2 doc pages (T024–T027) can be written in parallel
- US3 brand example stories (T033) can be created in parallel

---

## Parallel Example: User Story 1

```bash
# Parallelizable implementation tasks (different files)
Task: "Implement Input (text) component" → src/components/ui/input/index.tsx
Task: "Implement Card primitive" → src/components/ui/card/index.tsx
Task: "Implement Badge/Tag component" → src/components/ui/badge/index.tsx
Task: "Implement Alert/Notice component" → src/components/ui/alert/index.tsx
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. STOP and VALIDATE: Test User Story 1 independently in Storybook
5. Publish pre-release if desired

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Publish/preview
3. Add User Story 2 → Test independently → Publish/preview
4. Add User Story 3 → Test independently → Publish/preview

### Parallel Team Strategy

With multiple contributors:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Dev A: User Story 1 components
   - Dev B: User Story 2 docs
   - Dev C: User Story 3 token propagation demos

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] labels map tasks to specific user stories for traceability
- Each user story should be independently completable and testable via Storybook
- Prefer token-first implementations; avoid hardcoded values
- Keep accessibility baselines: keyboard operability, visible focus, AA contrast
