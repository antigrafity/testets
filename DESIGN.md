# Design System Inspired by Golden Owl

## 1. Visual Theme & Atmosphere

Golden Owl's design system embodies a sophisticated, intelligence-driven aesthetic rooted in sophistication and precision. The visual language combines deep, commanding darks with strategic golden and accent highlights, creating an atmosphere of authority, insight, and forward-thinking innovation. The design evokes a sense of vigilance and clarity—much like the owl's perception—through minimalist dark surfaces punctuated by purposeful color moments. Grid overlays and geometric patterns reinforce the technological foundation, while generous whitespace and deliberate typography hierarchy convey confidence and strategic clarity. This is a system designed for professionals and decision-makers who demand both visual elegance and functional precision.

**Key Characteristics**
- Deep dark backgrounds (`#09090B`, `#18181B`) establishing premium, focused environments
- Minimal color intervention with strategic golden and electric blue accents
- High contrast typography in clean, modern sans-serif
- Geometric, grid-based layout language suggesting data and intelligence
- Refined card containers with subtle shadows and refined borders
- Command-driven button hierarchy with ghost and outline variants
- Emphasis on whitespace and breathing room between content blocks
- Professional, tech-forward identity with subtle warmth through golden tones

## 2. Color Palette & Roles

### Primary
- **Primary Action** (`#1447E6`): Primary call-to-action buttons, active states, and key interactive elements requiring user attention
- **Brand Cyan** (`#00D9FF`): Secondary accent for highlights, brand moments, and premium UI signals

### Accent Colors
- **Teal Success** (`#009588`): Positive confirmations, success states, and completion indicators
- **Dark Teal** (`#104E64`): Secondary accent for calm, analytical interfaces
- **Deep Burgundy** (`#82181A`): Tertiary accent reserved for specialized contexts or data classification

### Interactive
- **Electric Blue** (`#1447E6`): Interactive CTAs, links, and primary engagement elements
- **Cyan Accent** (`#00D9FF`): Secondary interactive accent for depth and variation

### Neutral Scale
- **Pure White** (`#FFFFFF`): Primary text, high-contrast content, and light UI surfaces
- **Off-White Background** (`#FAFAFA`): Soft background surfaces reducing eye strain
- **Light Gray** (`#F4F4F5`): Secondary backgrounds and subtle surface differentiation
- **Border Gray** (`#E4E4E7`): Gentle borders, dividers, and subtle separators
- **Mid Gray** (`#52525C`): Secondary text, disabled states, and contextual labels
- **Dark Gray** (`#27272A`): Tertiary text and reduced-emphasis content

### Surface & Borders
- **Deep Black Surface** (`#18181B`): Primary dark container background, card surfaces
- **Darkest Black** (`#09090B`): Deepest background layers and premium dark surfaces
- **Ultra Dark** (`#0C0C0C`): Minimal-use deepest shade for maximum contrast areas
- **Charcoal** (`#222222`): Subtle dark variations and secondary surface differentiation
- **Black** (`#000000`): Pure black for text and maximum contrast elements

### Semantic / Status
- **Error / Danger** (`#E40014`): Critical error states, alerts, and destructive actions
- **Danger Secondary** (`#FB2C36`): Alternative error treatment for secondary contexts
- **Warning** (`#FCBB00`): Cautionary states, warnings, and non-critical alerts
- **Warning Alt** (`#F99C00`): Alternative warning treatment for consistency across interfaces

## 3. Typography Rules

### Font Family
**Primary Font:** myFont (system stack fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`)

**Secondary Font:** Same as primary; single-family system for consistency and clarity

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / H1 | myFont | 60px | 800 | 60px | 0px | Hero headlines, page titles, maximum emphasis |
| Heading 2 | myFont | 36px | 600 | 40px | 0px | Section headers, major content divisions |
| Heading 4 | myFont | 30px | 700 | 36px | 0px | Subsection headers, card titles |
| Heading 5 | myFont | 24px | 700 | 32px | 0px | Component headers, smaller section titles |
| Body / Paragraph | myFont | 20px | 400 | 28px | 0px | Primary body text, long-form content |
| Body Small | myFont | 16px | 400 | 24px | 0px | Secondary body text, descriptions |
| Label / Span | myFont | 15px | 500 | 15px | 0px | UI labels, tags, micro-text, button text |
| Input / Form | myFont | 14px | 400 | 20px | 0px | Form fields, input placeholders, helper text |
| Link | myFont | 16px | 400 | 24px | 0px | Inline and standalone links |

### Principles
- **Hierarchy through weight and size:** Use weight 800 for hero moments, 700 for section clarity, 600 for subsections, 400 for body and navigation
- **Generous line height:** All text sizes pair with proportional line height creating readable, premium layouts
- **Minimal letter spacing:** Tight letter spacing maintains sophistication; only added for special emphasis
- **Single-family consistency:** Unified typography system eliminates font-matching complexity and ensures cohesion across all interfaces
- **Size anchoring:** Even increments (60px → 36px → 30px) create predictable hierarchy and reduce cognitive load

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background:** `#1447E6`
- **Text Color:** `#FFFFFF`
- **Font Size:** 15px
- **Font Weight:** 500
- **Padding:** 8px 16px
- **Border Radius:** 8px
- **Border:** None
- **Box Shadow:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Height:** 36px
- **Line Height:** 15px
- **Hover State:** `#0F3AA8` (darkened blue)
- **Active State:** `#0A2470` (maximum darkness)

#### Secondary Button
- **Background:** transparent
- **Text Color:** `#FFFFFF`
- **Font Size:** 15px
- **Font Weight:** 500
- **Padding:** 8px 16px
- **Border Radius:** 8px
- **Border:** 1px solid `#52525C`
- **Box Shadow:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Height:** 36px
- **Line Height:** 15px
- **Hover State:** Background `#27272A`, border `#E4E4E7`
- **Active State:** Background `#18181B`, border `#FFFFFF`

#### Ghost Button
- **Background:** transparent
- **Text Color:** `#FFFFFF`
- **Font Size:** 15px
- **Font Weight:** 500
- **Padding:** 8px 16px
- **Border Radius:** 8px
- **Border:** None
- **Box Shadow:** None
- **Height:** 36px
- **Line Height:** 15px
- **Hover State:** Background `rgba(255, 255, 255, 0.1)`
- **Active State:** Background `rgba(255, 255, 255, 0.2)`

#### Danger Button
- **Background:** `#E40014`
- **Text Color:** `#FFFFFF`
- **Font Size:** 15px
- **Font Weight:** 500
- **Padding:** 8px 16px
- **Border Radius:** 8px
- **Border:** None
- **Box Shadow:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Height:** 36px
- **Line Height:** 15px
- **Hover State:** `#A80010` (darkened red)
- **Active State:** `#6B000A`

### Cards & Containers

#### Dark Card (Primary)
- **Background:** `#18181B`
- **Border:** 1px solid `#27272A`
- **Border Radius:** 10px
- **Padding:** 24px 24px
- **Box Shadow:** `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`
- **Text Color:** `#FFFFFF`
- **Font Size:** 16px
- **Font Weight:** 400
- **Line Height:** 24px

#### Deepest Dark Card
- **Background:** `#09090B`
- **Border:** 1px solid `#0C0C0C`
- **Border Radius:** 10px
- **Padding:** 24px 24px
- **Box Shadow:** `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`
- **Text Color:** `#FFFFFF`
- **Font Size:** 16px
- **Font Weight:** 400
- **Line Height:** 24px

#### Section Container (Full Width)
- **Background:** `#09090B`
- **Border Top:** 1px solid `#27272A`
- **Border Bottom:** 1px solid `#27272A`
- **Padding:** 64px 40px
- **Text Color:** `#FFFFFF`
- **Font Size:** 20px
- **Font Weight:** 400
- **Line Height:** 28px

### Inputs & Forms

#### Text Input
- **Background:** `#18181B`
- **Text Color:** `#FFFFFF`
- **Font Size:** 14px
- **Font Weight:** 400
- **Padding:** 8px 12px
- **Border Radius:** 8px
- **Border:** 1px solid `#27272A`
- **Box Shadow:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Height:** 36px
- **Line Height:** 20px
- **Focus State:** Border `#1447E6`, box-shadow `0 0 0 3px rgba(20, 71, 230, 0.1)`
- **Placeholder Color:** `#52525C`

#### Text Area
- **Background:** `#18181B`
- **Text Color:** `#FFFFFF`
- **Font Size:** 14px
- **Font Weight:** 400
- **Padding:** 12px 12px
- **Border Radius:** 8px
- **Border:** 1px solid `#27272A`
- **Box Shadow:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Min Height:** 100px
- **Line Height:** 20px
- **Focus State:** Border `#1447E6`, box-shadow `0 0 0 3px rgba(20, 71, 230, 0.1)`

#### Form Label
- **Text Color:** `#FFFFFF`
- **Font Size:** 14px
- **Font Weight:** 500
- **Margin Bottom:** 8px
- **Display:** block

#### Form Helper Text
- **Text Color:** `#52525C`
- **Font Size:** 12px
- **Font Weight:** 400
- **Margin Top:** 4px

### Navigation

#### Header Navigation
- **Background:** `#09090B`
- **Border Bottom:** 1px solid `#27272A`
- **Padding:** 16px 40px
- **Text Color:** `#FFFFFF`
- **Font Size:** 16px
- **Font Weight:** 400
- **Height:** 60px
- **Display:** flex
- **Align Items:** center
- **Justify Content:** space-between

#### Nav Link
- **Text Color:** `#FFFFFF`
- **Font Size:** 15px
- **Font Weight:** 500
- **Padding:** 8px 16px
- **Border Radius:** 6px
- **Hover State:** Background `rgba(255, 255, 255, 0.1)`
- **Active State:** Background `#1447E6`, color `#FFFFFF`

#### Logo
- **Font Size:** 20px
- **Font Weight:** 700
- **Color:** `#00D9FF`
- **Letter Spacing:** 0.5px

### Links

#### Inline Link
- **Text Color:** `#1447E6`
- **Font Size:** 16px
- **Font Weight:** 400
- **Text Decoration:** underline
- **Hover State:** Color `#0F3AA8`
- **Active State:** Color `#0A2470`

#### Link with Arrow
- **Text Color:** `#FFFFFF`
- **Font Size:** 14px
- **Font Weight:** 500
- **Padding:** 8px 16px
- **Border Radius:** 6px
- **Background:** transparent
- **Hover State:** Background `rgba(255, 255, 255, 0.1)`

## 5. Layout Principles

### Spacing System

**Base Unit:** 4px

**Spacing Scale:**
- 4px: Tight micro-spacing between inline elements
- 8px: Comfortable spacing within component internals (button padding, small gaps)
- 12px: Standard gap between sibling elements
- 16px: Default padding for cards, containers, and sections
- 20px: Spacing between related content blocks
- 24px: Standard gap between larger component groups
- 32px: Spacing between major content sections
- 40px: Horizontal padding for full-width containers
- 48px: Large vertical spacing between sections
- 64px: Premium vertical padding for hero and feature sections
- 80px: Maximum spacing for dramatic section separation

**Usage Context:**
- **Component internals:** 8px–12px (button text padding, input fields)
- **Related content groups:** 16px–24px (card stacks, form groups)
- **Section boundaries:** 48px–80px (between hero and content, between major sections)
- **Container edges:** 40px–64px (content padding from page edges)

### Grid & Container

**Max Width:** 1440px (standard desktop container)

**Column Strategy:** 12-column grid system implied by component widths; inferred from content layout proportions

**Container Padding:** 40px on left/right for standard desktop (reserves 1360px for content on 1440px viewport)

**Section Patterns:**
- Full-width hero sections: 1440px width with vertical padding 64px
- Content sections: 1440px width with border dividers top/bottom
- Card grids: 3 columns at 1440px with 24px gaps between cards
- Text columns: 600px–800px max width for readability on long-form content

### Whitespace Philosophy

Golden Owl embraces **generous whitespace** as a signal of premium, confident design. Spacing is never tight or cramped—instead, it creates visual breathing room that establishes hierarchy and guides focus. Empty space is treated as a design element, not wasted space. Between major sections, substantial vertical gaps (48px–80px) create natural content divisions. Within cards and components, padding scales with content importance. This approach reduces cognitive load and emphasizes quality over quantity, aligning with the brand's intelligence-focused positioning.

### Border Radius Scale

- **4px:** Minimal rounding on small, functional elements (inputs in compact layouts)
- **6px:** Subtle rounding for small buttons and tight component corners
- **8px:** Standard rounding for buttons, inputs, and medium components (primary radius)
- **10px:** Card containers and larger composed elements
- **0px:** Full-width sections and no rounding where edges extend to viewport

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (L0) | No shadow, solid background | Base backgrounds, text elements, semantic content |
| Subtle (L1) | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | Form inputs, secondary buttons, light elevation signals |
| Soft (L2) | `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` | Cards, raised containers, interactive surfaces |
| Pronounced (L3) | `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px` | Modals, floating panels, maximum elevation |

**Shadow Philosophy:**

Golden Owl's shadow system is deliberately restrained, reflecting a sophisticated, premium aesthetic. Rather than dramatic drop shadows, the design employs subtle layered shadows that suggest depth without distraction. Shadows are always cool-toned (black-based at low opacity) and never warm, maintaining the cool, analytical brand personality. The system uses multi-layer shadows to create soft, realistic depth—combining a primary shadow for distance and a secondary shadow for visual definition. This approach works seamlessly on dark backgrounds, where shadows add definition without appearing harsh. Elevation is functional rather than decorative, helping users distinguish interactive surfaces from static backgrounds.

## 7. Do's and Don'ts

### Do
- Use the full typography hierarchy; never skip sizes arbitrarily
- Apply sufficient contrast between text and backgrounds; maintain WCAG AA minimum 4.5:1 on body text
- Group related content with consistent 16px–24px spacing; use larger gaps (48px+) between distinct sections
- Leverage dark backgrounds (`#18181B`, `#09090B`) as primary surfaces; use white text (`#FFFFFF`) for legibility
- Reserve `#1447E6` (primary blue) for interactive CTAs and primary actions only
- Use `#00D9FF` (cyan) as an accent for brand moments, secondary CTAs, or premium signals
- Apply rounded corners (8px–10px) consistently to interactive components and cards
- Test all buttons and interactive states (hover, active, disabled, loading) for clarity
- Implement generous whitespace around premium content to establish hierarchy and emphasis
- Use semantic color roles (`#E40014` for error, `#009588` for success) consistently across all interfaces

### Don't
- Mix fonts or introduce custom typefaces outside of myFont; maintain single-family consistency
- Create small buttons smaller than 36px height or 8px padding; maintain touch-target minimums
- Exceed two levels of nesting in shadow treatments; keep elevation subtle and professional
- Use warm shadows; keep all shadows cool-toned (black-based) to maintain brand cool aesthetic
- Apply primary blue (`#1447E6`) to non-interactive elements; reserve for clear affordances
- Crowd interfaces with color; trust whitespace and let dark backgrounds dominate
- Use text colors other than `#FFFFFF` on dark backgrounds; maintain high contrast
- Set line heights lower than recommended hierarchy values; preserve readability and professionalism
- Create custom border colors; stick to `#27272A` (dark gray) and `#E4E4E7` (light gray) palette
- Forget accessibility; all interactive elements must be keyboard-navigable and screen-reader-compatible

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 375px–480px | Single column, 16px padding, H1 36px, stacked navigation |
| Tablet | 481px–768px | 2 columns, 24px padding, H1 48px, simplified menus |
| Desktop | 769px–1440px | 3 columns / full grid, 40px padding, H1 60px, full navigation |
| Large Desktop | 1441px+ | Max width 1440px center-aligned, horizontal scroll prevention |

### Touch Targets

- **Minimum Touch Size:** 44px × 44px for all interactive elements (buttons, links, form inputs)
- **Comfortable Touch Size:** 48px × 48px for frequently-tapped actions
- **Spacing Between Targets:** Minimum 8px between adjacent interactive elements to prevent mis-taps
- **Small Elements Exception:** Links within body text may be 36px height if spaced 16px apart horizontally

### Collapsing Strategy

**Mobile (375px–480px):**
- Stack 3-column card grids into single-column layouts
- Reduce H1 from 60px to 36px
- Collapse header navigation into hamburger menu
- Reduce horizontal padding from 40px to 16px
- Stack form fields vertically with full width
- Hide tertiary navigation items; show primary CTAs only

**Tablet (481px–768px):**
- Convert 3-column card grid to 2 columns
- Increase H1 to 48px
- Show primary and secondary navigation items; collapse tertiary
- Reduce H2 from 36px to 32px
- Increase padding to 24px
- Combine form fields into 2-column layout where appropriate

**Desktop (769px+):**
- Full 3-column card grids, 24px gaps
- H1 60px, full typography hierarchy
- Complete navigation visibility
- 40px horizontal padding on containers
- Multi-column forms supported
- All interactive states fully visible

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Primary Blue (`#1447E6`) — use for primary action buttons, active states, links
- **Secondary CTA:** Brand Cyan (`#00D9FF`) — use for secondary actions, brand highlights, tertiary buttons
- **Success State:** Teal (`#009588`) — use for confirmations, successful completions
- **Error State:** Danger Red (`#E40014`) — use for errors, destructive actions, critical alerts
- **Warning State:** Warning Gold (`#FCBB00` or `#F99C00`) — use for cautions, non-critical alerts
- **Background (Primary):** Deep Black (`#09090B`) — main page and section backgrounds
- **Background (Secondary):** Dark Charcoal (`#18181B`) — cards, containers, raised surfaces
- **Surface Border:** Dark Gray (`#27272A`) — borders, dividers, subtle separators
- **Text (Primary):** Pure White (`#FFFFFF`) — all body text, headings on dark backgrounds
- **Text (Secondary):** Mid Gray (`#52525C`) — disabled text, helper text, reduced emphasis
- **Text (Tertiary):** Light Gray (`#E4E4E7`) — minimal use, placeholders, very light emphasis

### Iteration Guide

1. **Always use 36px minimum for interactive buttons;** pair with 8px padding for comfortable click targets and maintain `#1447E6` or `#E40014` for primary actions
2. **Typography hierarchy is fixed:** H1 60px, H2 36px, H4 30px, body 20px, labels 15px—never deviate; use weight 800 for hero, 700 for sections, 400 for body
3. **Dark background is foundational:** always place `#09090B` or `#18181B` as card/section backgrounds, never light gray on dark—maintain the premium, focused aesthetic
4. **Spacing follows 4px base unit:** 8px for internals, 16px–24px for related groups, 48px–80px for section breaks—never use arbitrary spacing
5. **Card radius is 10px; button radius is 8px:** these are fixed scale values; apply consistently across all implementations
6. **Shadows are subtle and layered:** always use multi-layer soft shadows for cards (`rgba(0, 0, 0, 0.1) 0px 4px 6px -1px...`); never use dramatic single shadows
7. **Text on dark backgrounds is always white (`#FFFFFF`);** use `#52525C` for secondary/disabled only, never other grays for body text
8. **Interactive states matter:** buttons require hover (darker color or opacity), active (maximum darkness), and disabled (50% opacity + `#52525C` text) states
9. **Whitespace is a design feature:** section padding is 64px minimum; content margins are 40px+; trust empty space to establish hierarchy and emphasis
10. **Semantic colors signal intent:** error is `#E40014`, success is `#009588`, warning is `#FCBB00`—use consistently and never override these meanings