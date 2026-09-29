---
name: Warm Luxury Editorial
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#5b4137'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#8f7066'
  outline-variant: '#e4beb2'
  surface-tint: '#a93800'
  primary: '#a93800'
  on-primary: '#ffffff'
  primary-container: '#ff5e13'
  on-primary-container: '#541800'
  inverse-primary: '#ffb59b'
  secondary: '#a83900'
  on-secondary: '#ffffff'
  secondary-container: '#fe6a2a'
  on-secondary-container: '#5b1b00'
  tertiary: '#615e57'
  on-tertiary: '#ffffff'
  tertiary-container: '#97938b'
  on-tertiary-container: '#2e2c26'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59b'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#812900'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb59a'
  on-secondary-fixed: '#380d00'
  on-secondary-fixed-variant: '#802a00'
  tertiary-fixed: '#e7e2d9'
  tertiary-fixed-dim: '#cac6bd'
  on-tertiary-fixed: '#1d1c16'
  on-tertiary-fixed-variant: '#494740'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '500'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.5rem
  space-lg: 2.5rem
  space-xl: 4rem
---

## Brand & Style

This design system embodies the sophisticated convergence of high-end editorial publishing and modern executive agency precision. Tailored for high-stakes B2B consulting, executive representation, and strategic marketing, it rejects sterile corporate conventions in favor of a warm, tactile, and cultured atmosphere.

The aesthetic philosophy centers on:
- **Editorial Poise:** High-contrast serif headlines evoke the authority, intellect, and timeless distinction of broadsheets and luxury periodicals.
- **Agency Precision:** Clean, hyper-legible sans-serif typography and structural column grids ground the platform in analytical execution and contemporary clarity.
- **Atmospheric Warmth:** Cream-based surfaces accented by luminous burnt orange glows avoid clinical neutrality, conveying human warmth, creative energy, and commercial momentum.
- **Glassmorphism & Depth:** Frosted luminous overlays combined with subtle hairline boundaries deliver depth without heavy drop shadows.

## Colors

The palette balances warm earthen light with ink-inspired deep slates and a high-energy amber-orange catalyst.

- **Primary (`#FF5E13`):** The signature catalytic amber-orange. Reserved for high-priority interactive accents, highlighted statistics, dynamic underlines, and conversion moments.
- **Secondary (`#FF6B2B`):** Warm glow tangerine used for linear gradients, hovering surface states, and ambient badge highlights.
- **Tertiary (`#EAE5DC`):** The architectural boundary color. Applied to fine 1px card outlines, editorial splitters, and recessed structural panels.
- **Neutral (`#111827`):** Deep editorial slate/charcoal. Represents printer's ink for primary display headers, body prose, and high-contrast inverted cards.
- **Canvas Base (`#FAF7F2`):** Warm creamy off-white canvas mimicking uncoated heavy-stock editorial paper, reducing digital eye fatigue while communicating quiet luxury.

## Typography

The typographical pair establishes an intentional tension between editorial craft and modern execution:

- **Headlines & Narrative Statements (`Playfair Display`):** Reserved for high-level editorial headers, pull quotes, value propositions, and metrics titles. It projects authority, refinement, and strategic maturity.
- **Body, UI, & Metadata (`Plus Jakarta Sans`):** Handles narrative case studies, metrics readouts, interactive microcopy, and analytical captions. Provides crisp geometric balance against the high-contrast serif.
- **Case and Tracking Guidance:** Display labels, categories, and analytical metadata must be styled in uppercase with tracking between `+0.06em` and `+0.08em` for crisp navigational scanability.

## Layout & Spacing

The structural layout relies on an asymmetrical 12-column editorial grid designed to support spacious showcase portfolios, strategic metric cards, and case studies:

- **Desktop (1200px+):** 12-column fluid grid, `4rem` outer canvas margin, `1.5rem` gutters. Narrative case study sections should intentionally utilize generous offset columns (e.g., 5-column executive summary alongside a 7-column media deck).
- **Tablet (768px - 1199px):** 8-column layout with `2.5rem` outer margins and `1.25rem` gutters.
- **Mobile (Below 768px):** 4-column layout with `1.25rem` outer margins and `1rem` gutters. Horizontal margins collapse to prioritize screen-width readability of long-form case studies.
- **Vertical Cadence:** Editorial sections maintain expansive vertical breathing room (`4rem` to `6rem`) to reflect luxury pacing and portfolio curation.

## Elevation & Depth

Visual hierarchy uses frosted glassmorphic layering, hairline border definitions, and subtle diffused ambient glows rather than opaque dropshadows:

- **Base Layer:** The solid `#FAF7F2` canvas.
- **Glassmorphic Card Layer:** Translucent cream surfaces (`rgba(250, 247, 242, 0.72)` or `#FFFFFF` at 65% opacity) paired with a `16px` to `24px` backdrop blur (`backdrop-filter: blur(20px)`). 
- **Outlines & Perimeter Borders:** Ghost borders of `1px solid #EAE5DC` to preserve crisp edges over mixed backgrounds.
- **Ambient Glow:** High-impact cards and hover states incorporate a diffused warm amber back-glow (`0px 20px 48px -12px rgba(255, 94, 19, 0.12)`).
- **Inverted Executive Depth:** Inverted slate panels (`#111827`) feature inner hairline borders of `1px solid rgba(255, 255, 255, 0.1)` and warm radiant ambient reflections.

## Shapes

The design system employs a soft, humanistic contour language with an overarching 24px (`rounded-xl` equivalent in custom components) radius for high-visibility containers.

- **Primary Cards & Modals:** Standardized with an intentional 24px (`1.5rem`) corner radius, creating a polished, tablet-like physical presence.
- **Nested Elements & Badges:** Inner badges, metrics pills, and data tags maintain a fully rounded pill shape (`9999px`) to offset larger containers.
- **Buttons & Action Items:** Interactive triggers adopt consistent soft-radius aesthetics (`0.75rem` to full pill geometry) to balance tactile feedback with editorial structure.

## Components

### Buttons
- **Primary Action:** Solid Deep Charcoal (`#111827`) fill with Cream text (`#FAF7F2`), rounded pill radius (`9999px`), padding `0.875rem 2rem`. On hover, subtle upward translation (`-2px`) with an ambient accent halo (`rgba(255, 94, 19, 0.25)`).
- **Secondary (Catalyst) Action:** Amber-Orange (`#FF5E13`) fill with white text, utilized exclusively for direct outreach or major conversion points.
- **Tertiary / Ghost:** Transparent surface, `1px solid #EAE5DC`, deep charcoal text. On hover, background shifts to `rgba(255, 94, 19, 0.05)` and border transitions to `#FF5E13`.

### Cards & Overlays
- **Case Study Glass Card:** 24px corner radius, background `rgba(255, 255, 255, 0.65)`, backdrop-filter `blur(20px)`, border `1px solid #EAE5DC`, padding `2.5rem`.
- **Metric Highlight Card:** High-contrast `#111827` slate card, 24px border radius, text in `#FAF7F2`, with metrics highlighted in `#FF5E13`.

### Chips & Badges
- **Status & Industry Tags:** Pill-shaped (`rounded-full`), padding `0.375rem 1rem`, typography `label-sm`. Background `rgba(234, 229, 220, 0.4)` with hairline border `1px solid #EAE5DC` and text `#111827`.
- **Featured Tag:** Warm amber background `rgba(255, 94, 19, 0.1)`, text `#FF5E13`, border `1px solid rgba(255, 94, 19, 0.2)`.

### Form Fields & Inputs
- **Text Fields:** Generous padding (`1rem 1.25rem`), radius `0.75rem`, background `rgba(255, 255, 255, 0.7)`, border `1px solid #EAE5DC`.
- **Focus State:** Border transitions cleanly to `#FF5E13` with a soft outer ring `0 0 0 3px rgba(255, 94, 19, 0.15)`.

### Lists & Split Sections
- **Editorial Experience List:** Minimalist horizontal divider lists separated by `1px solid #EAE5DC`. Each row consists of company role, year, and impact metrics with a wide column distribution.
- **Hover Micro-interaction:** Row background subtly shifts to frosted white tint with orange arrow indicators sliding smoothly into view.