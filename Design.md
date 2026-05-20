# Solvea Atelier Website Redesign

## Goal

Create a premium but practical ecommerce experience for a fur coats and winter outerwear boutique. The current page feels editorial and magazine-like: large imagery, dramatic spacing, and decorative typography dominate the shopping flow. The redesign should keep the sense of quality and boutique service, but make it easier for visitors to browse, compare, trust, and contact the store.

The site should feel like a refined luxury retail interface, not a fashion magazine spread.

## Target Customer

- Women shopping for fur coats, leather jackets, sheepskin coats, down jackets, trenches, and winter footwear.
- Customers in Astana and nearby regions who may want to inspect availability, sizes, price, material, and store location before visiting.
- Buyers making a high-value purchase who need confidence, clear product details, and easy contact options.

## Design Principles

1. Commerce first
   - The catalog must be reachable immediately.
   - Product cards should show useful buying information without relying on hover.
   - Filters, prices, material, sizes, and calls to action should be visible and easy to scan.

2. Premium, not theatrical
   - Use high-quality product photography and restrained luxury details.
   - Avoid oversized editorial typography, full-screen-only storytelling, and excessive empty space.
   - Keep the interface quiet, elegant, and structured.

3. Trust and service
   - Surface boutique location, fitting service, delivery, alterations, and consultation options.
   - For expensive items, add reassuring details near purchase actions.
   - Make contact and visit planning obvious.

4. Mobile practical
   - Mobile users should see products quickly.
   - Header, filters, cart, wishlist, and product actions must work comfortably on small screens.
   - Avoid interactions that depend on hover.

## Visual Direction

### Mood

Warm, polished, and retail-focused. The look should suggest a premium Astana boutique: calm, tactile, winter-ready, and trustworthy.

### Palette

Use a balanced neutral palette with enough contrast:

- Base: warm ivory or soft stone, not heavy beige everywhere.
- Surface: clean white or very light warm gray for cards and panels.
- Text: deep charcoal-brown for body and headings.
- Accent: muted champagne gold or bronze, used sparingly for prices, active filters, and primary accents.
- Support accents: soft graphite, muted taupe, and a low-saturation burgundy or forest tone for depth.

Avoid a one-note cream/tan page. The catalog should feel clean and readable.

### Typography

- Use a refined serif only for brand moments and major headings.
- Use a clear sans-serif for navigation, product names, prices, filters, specifications, and buttons.
- Product browsing should prioritize readability over editorial drama.
- Avoid large blocks of uppercase text and excessive letter spacing.

### Imagery

- Product photos should be the main visual asset.
- Use consistent product card ratios, ideally 4:5.
- Prefer real product-focused imagery over atmospheric fashion shots when users need to inspect items.
- The home hero can use one strong lifestyle image, but it should not hide the shopping path.

## Page Structure

### Header

The header should be compact, persistent, and utility-focused.

Include:

- Logo on the left.
- Main navigation: Catalog, New Arrivals, Sale, About, Contacts.
- Search icon or search field.
- Wishlist and cart icons with counters.
- Clear consultation/contact action, such as "Book fitting" or "WhatsApp".

Behavior:

- Header height around 72px desktop, 60px mobile.
- On mobile, use a menu button plus visible cart and contact icons.
- Do not let the logo overpower the navigation.

### Home Page

The home page should quickly guide users into shopping.

Recommended order:

1. Practical hero
   - Split or layered layout with a strong product/lifestyle image.
   - Headline: "Fur coats and winter outerwear in Astana" or equivalent Russian copy.
   - Supporting line with boutique value: fitting, premium materials, curated collection.
   - Primary CTA: "Shop catalog".
   - Secondary CTA: "Book fitting".
   - Add compact trust notes under CTAs: Astana boutique, fitting available, delivery/consultation.

2. Category shortcuts
   - Fur coats
   - Sheepskin coats
   - Leather jackets
   - Down jackets
   - Trenches
   - Footwear

3. Featured products or new arrivals
   - Use a grid, not only two large editorial cards.
   - Show name, material, price, sizes, wishlist, and quick view.

4. Sale or seasonal offer
   - Practical banner with direct link to discounted coats.

5. Boutique service section
   - Fitting appointment.
   - Alterations or tailoring support if applicable.
   - Delivery and pickup.
   - Care guidance.

6. Location and contact
   - Address: Mangilik El 36/1, Astana, Kazakhstan.
   - Opening hours if known.
   - Phone, WhatsApp, Instagram, and map area.

### Catalog Page

The catalog is the most important page.

Layout:

- Desktop: left sidebar filters plus product grid, or top filter bar if the catalog stays small.
- Mobile: sticky filter/sort bar with bottom-sheet filters.
- Product grid should be dense enough to compare items, usually 3-4 columns on desktop and 2 columns on mobile.

Filters:

- Category.
- Material.
- Size.
- Price range.
- Color.
- Length.
- Availability.
- Sale/new arrivals.

Sort options:

- Newest.
- Price low to high.
- Price high to low.
- Popular or recommended.

Product cards:

- Image.
- Product name.
- Material.
- Price.
- Available sizes.
- Short status label: New, Sale, In stock, Limited.
- Wishlist button always visible.
- Quick action: "Quick view" or "Details".
- Optional AR/try-on action, visible but secondary.

### Product Detail

Product detail should support high-confidence buying.

Recommended layout:

- Large product gallery on the left.
- Sticky purchase panel on the right for desktop.
- On mobile, image gallery first, then product info with sticky bottom action bar.

Include:

- Product name.
- Material.
- Price.
- Available sizes.
- Color.
- Origin or composition.
- Length and fit notes.
- Care notes.
- Availability.
- Primary CTA: "Add to cart" or "Request fitting".
- Secondary CTA: "Try with AR".
- Contact CTA: WhatsApp/consultation.
- Trust details near CTA: fitting in boutique, delivery, payment options.

Avoid vague fashion copy as the main description. Use practical details first, then style notes.

### Cart

The cart should be direct and reassuring.

Include:

- Product image, name, size if selected, price.
- Remove/edit actions.
- Total.
- CTA to checkout or request order.
- Contact support option.

If checkout is not fully implemented, use language such as "Send order request" instead of pretending there is complete payment flow.

### Wishlist

Wishlist should act like a saved comparison list.

Include:

- Same practical product cards as catalog.
- Empty state with CTA back to catalog.
- Optional contact prompt for selected saved items.

### AR Try-On

Keep AR as a useful supporting feature, not the main shopping promise.

Improve:

- Clear upload area.
- Simple controls for scale, position, reset, and product change.
- Explanation in one short line only.
- Easy return to product detail.

## Component Guidance

Buttons:

- Primary buttons should be solid and high contrast.
- Secondary buttons should be outlined or subtle.
- Avoid very wide letter-spaced labels that are hard to read.

Cards:

- Use clean product cards with stable image ratios.
- Border radius should be modest, around 6-8px.
- Do not hide essential actions until hover.

Filters:

- Use chips for quick filters.
- Use checkboxes, sliders, and select menus for detailed filters.
- Show active filter count and allow clearing filters.

Spacing:

- Reduce vertical section padding compared with the current magazine layout.
- Use consistent container widths.
- Keep product grids visually compact but not crowded.

Motion:

- Keep animations subtle.
- Avoid slow hero zooms and excessive reveal animations that delay shopping.
- Use motion for feedback only: opening cart, changing filters, adding wishlist/cart.

## Content Direction

Tone:

- Clear, premium, and service-oriented.
- Avoid abstract editorial phrases as primary copy.
- Use direct shopping language.

Example copy direction, to be localized into Russian during implementation:

- Hero headline: "Fur coats and winter outerwear in Astana"
- Hero support: "Premium materials, boutique fitting, and personal consultation."
- Primary CTA: "View catalog"
- Secondary CTA: "Book a fitting"
- Trust notes: "Astana", "Boutique fitting", "Delivery and consultation"

Product descriptions should include:

- Material.
- Fit.
- Length.
- Warmth/seasonality.
- Available sizes.
- Care or storage guidance.
- Origin only if accurate and relevant.

## Accessibility and Usability

- Maintain strong color contrast for text and buttons.
- Do not rely on hover for important actions.
- Ensure tap targets are at least 44px on mobile.
- Use visible focus states.
- Keep text readable over images.
- Make cart and wishlist counters understandable to screen readers.
- Use meaningful alt text for product images.

## Implementation Priorities

1. Replace the magazine-style hero with a practical retail hero and immediate catalog CTAs.
2. Redesign product cards to show all important buying information upfront.
3. Add practical category shortcuts and better filters.
4. Improve product detail with structured specs and sticky purchase/contact actions.
5. Add service, location, and contact sections for trust.
6. Tighten typography, spacing, and header scale.
7. Make mobile filters and product actions first-class.

## Prompt for a Design AI Agent

You are redesigning a single-page React ecommerce website for Solvea Atelier, a premium women's fur coats and winter outerwear boutique in Astana, Kazakhstan. The current design feels luxurious but too much like a fashion magazine: oversized hero imagery, editorial typography, hidden hover actions, and too much decorative spacing. Create a more practical premium retail design that helps users browse, compare, trust the store, and request a fitting or purchase.

Design requirements:

- Keep the brand premium, warm, and refined, but make the shopping flow clear and efficient.
- Build a compact persistent header with logo, Catalog, New Arrivals, Sale, About, Contacts, search, wishlist, cart, and a visible contact or fitting CTA.
- Replace the full-screen magazine hero with a commerce-focused hero: strong product/lifestyle image, clear headline, short value proposition, "Shop catalog" CTA, "Book fitting" CTA, and small trust notes for Astana boutique, fitting, delivery, and consultation.
- Add category shortcuts for fur coats, sheepskin coats, leather jackets, down jackets, trenches, and footwear.
- Redesign the catalog so products are easy to compare. Product cards must show image, name, material, price, available sizes, status label, wishlist button, and quick view/details action without requiring hover.
- Add practical filters: category, material, size, price, color, length, availability, sale/new. Add sorting.
- Improve product detail with a large gallery, structured specs, size availability, care notes, price, sticky purchase/request-fitting panel, wishlist, AR try-on as secondary action, and contact support.
- Add service and trust sections: boutique fitting, consultation, delivery/pickup, care guidance, address at Mangilik El 36/1, Astana, Kazakhstan, and contact links.
- Mobile must prioritize quick browsing: compact header, two-column product grid, sticky filter/sort controls, visible cart/wishlist/contact actions, and no hover-only interactions.
- Visual style: warm ivory/stone background, clean white surfaces, deep charcoal-brown text, restrained champagne/bronze accent, optional graphite or muted burgundy/forest secondary accent. Avoid a flat all-beige palette.
- Typography: use a refined serif only for brand moments and main headings; use a readable sans-serif for navigation, filters, product information, buttons, and specs.
- Components should use modest 6-8px radius, clear spacing, strong contrast, stable product image ratios, and subtle feedback animations.
- Do not create a marketing-only landing page. The first screen must immediately support shopping.

Deliver a full updated design proposal or implementation that keeps the existing product data model in mind: products have name, material, price, description, origin, sizes, image, wishlist, cart, product detail, catalog filters, and AR try-on.
