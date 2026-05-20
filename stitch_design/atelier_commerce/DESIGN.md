---
name: Atelier Commerce
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4e4541'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#7f7570'
  outline-variant: '#d1c4be'
  surface-tint: '#665c58'
  primary: '#27201c'
  on-primary: '#ffffff'
  primary-container: '#3d3531'
  on-primary-container: '#a99d98'
  inverse-primary: '#d1c4be'
  secondary: '#715a40'
  on-secondary: '#ffffff'
  secondary-container: '#fadab9'
  on-secondary-container: '#765e44'
  tertiary: '#46090d'
  on-tertiary: '#ffffff'
  tertiary-container: '#631f20'
  on-tertiary-container: '#e58482'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eee0da'
  primary-fixed-dim: '#d1c4be'
  on-primary-fixed: '#211a17'
  on-primary-fixed-variant: '#4e4541'
  secondary-fixed: '#fdddbc'
  secondary-fixed-dim: '#e0c1a1'
  on-secondary-fixed: '#281805'
  on-secondary-fixed-variant: '#58432b'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b0'
  on-tertiary-fixed: '#3e0308'
  on-tertiary-fixed-variant: '#782f2f'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
  ivory-base: '#F7F5F2'
  surface-white: '#FFFFFF'
  charcoal-brown: '#3D3531'
  champagne-gold: '#B89C7E'
  muted-bronze: '#8E735B'
  stone-gray: '#E8E4DF'
  graphite: '#5E5E5E'
  vintage-burgundy: '#7A3030'
typography:
  headline-xl:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-xl-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  price-display:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  unit: 8px
---

## Brand & Style

This design system establishes a **Corporate Modern** aesthetic tailored for a high-end boutique environment. It balances the emotional weight of luxury with the functional efficiency of a high-performance retail platform. The brand personality is poised, dependable, and tactile, shifting away from ephemeral "fashion magazine" layouts toward a structured, service-oriented digital flagship.

The visual narrative is driven by:
- **Pragmatic Luxury:** Every design element serves a commercial purpose; high-quality imagery is framed by clean, functional controls rather than decorative voids.
- **Boutique Trust:** The interface uses tactile colors and refined typography to mimic the physical experience of a luxury Astana showroom.
- **Functional Polish:** A focus on high contrast, clear labeling, and accessible interactive zones ensures that the sophistication of the brand never compromises the ease of purchase.

## Colors

The palette is anchored in a warm, neutral foundation to evoke the tactile quality of fur and fine textiles.

- **Primary (Charcoal Brown):** Used for all primary text, headings, and high-impact UI elements to provide deep contrast against light backgrounds.
- **Secondary (Champagne Gold):** Reserved for accentuation—prices, active filter states, and primary Call-to-Action highlights.
- **Neutral (Ivory & White):** A layered approach where `ivory-base` acts as the site-wide canvas, while `surface-white` is used for cards and interactive panels to create subtle depth without relying on heavy shadows.
- **Support Accents:** `vintage-burgundy` is used sparingly for alerts or seasonal highlights (e.g., Sale tags), while `graphite` handles secondary utility text.

## Typography

This system employs a high-contrast typographic pairing to balance heritage with utility.

- **Brand & Headings:** *Libre Caslon Text* provides a refined, editorial serif feel for brand moments and major headlines. It is never used for dense data or navigation to maintain readability.
- **Interface & Utility:** *Hanken Grotesk* is the workhorse of the design system. Its sharp, contemporary geometry ensures that prices, material specs, and navigation labels are legible at all sizes.
- **Hierarchy:** We prioritize standard sentence case for most UI elements. All-caps is reserved strictly for small labels (e.g., `label-md`) with slight tracking to ensure clear scannability on mobile.

## Layout & Spacing

The layout utilizes a **12-column fixed grid** on desktop, shifting to a **2-column fluid grid** on mobile.

- **Retail Density:** Unlike editorial layouts, vertical padding is tightened to ensure product information remains "above the fold." Sections are separated by subtle `stone-gray` dividers or tonal shifts rather than vast whitespace.
- **Breakpoints:**
  - **Desktop (1024px+):** 12 columns, 24px gutters. Focus on side-by-side comparison.
  - **Tablet (768px - 1023px):** 8 columns, 20px gutters. Navigation collapses to a simplified bar.
  - **Mobile (<767px):** 4 columns (effectively 2 for product grids), 16px gutters.
- **Rhythm:** All spacing (padding, margins, component heights) is derived from an 8px base unit to maintain a rigorous mathematical harmony.

## Elevation & Depth

Depth is achieved through **Tonal Layers** rather than heavy drop shadows, maintaining a "flat-luxury" aesthetic.

- **Base Layer:** `ivory-base` (#F7F5F2) serves as the floor.
- **Raised Surfaces:** Product cards and modals use `surface-white` (#FFFFFF) with a very soft, 12% opacity `charcoal-brown` shadow (4px blur, 2px offset) to create a gentle "lift."
- **Interactive States:** Buttons and chips use high-contrast fills. Secondary actions use `stone-gray` outlines (1px) to stay recessed compared to primary CTAs.
- **Persistent Elements:** The header uses a subtle backdrop blur (12px) over a semi-transparent white fill to maintain visibility over scrolling imagery.

## Shapes

The shape language is **Soft** and structured.

- **Corner Radius:** A consistent 8px (`rounded-lg` per our 0.5rem standard) is applied to all primary cards, input fields, and buttons. This provides a approachable feel that avoids the clinical nature of sharp corners or the casual nature of full pills.
- **Image Ratios:** Product images are strictly capped at a 4:5 ratio. This vertical orientation is optimal for outerwear and maintains a cohesive rhythm in the catalog grid.

## Components

### Buttons
- **Primary:** Solid `charcoal-brown` with white text. High contrast for "Add to Cart" or "Book Fitting."
- **Secondary:** Outlined `charcoal-brown` or solid `champagne-gold` for seasonal highlights.
- **Tertiary:** Text link with a subtle `muted-bronze` underline for "View All" or "Details."

### Product Cards
- Cards must always display the price and material (e.g., "Mink," "Cashmere") prominently.
- Wishlist "heart" icon is persistent in the top-right corner, not hidden behind hover.
- Size availability is displayed as small text-only chips at the bottom of the card.

### Input Fields & Filters
- Use a 1px `stone-gray` border. On focus, the border transitions to `muted-bronze`.
- Catalog filters use "Accordions" for desktop sidebars and "Bottom Sheets" for mobile to maximize screen real estate.

### Chips
- Used for quick-access filters (e.g., "In Stock," "New"). These use a `stone-gray` background with `charcoal-brown` text, flipping to a `champagne-gold` background when active.

### Feedback
- Use subtle opacity transitions (200ms) for button presses.
- Avoid dramatic motion; focus on utility-based feedback such as a sliding drawer for the cart.