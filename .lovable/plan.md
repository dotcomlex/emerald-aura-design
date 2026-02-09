

# Homepage Refinements to Match Premium Spec

## Overview
The site is already built with all 12 sections. This plan focuses on the specific refinements needed to match the detailed spec pixel-perfectly and elevate the premium feel.

---

## 1. Hero Section Overhaul
**Current:** Left-aligned text, gradient background, trust badges as plain text rows.
**Spec requires:**
- Mobile: centered layout, full-viewport (min-height 700px), scroll indicator (bouncing chevron)
- Desktop: left-aligned layout with right-biased gradient overlay
- Trust badges styled as glass-morphism pills (semi-transparent background + backdrop-blur)
- Updated copy: "Flawless Finishes. Lasting Impressions." headline, "DENVER'S TRUSTED PAINTING PROFESSIONALS" eyebrow
- Buttons: full-width stacked on mobile, side-by-side on desktop, with emerald glow shadow
- Animated scroll-down chevron at bottom

## 2. Navigation Updates
**Current:** Uses logo image, nav scrolls to charcoal/95 background.
**Spec requires:**
- Scroll state should transition to **white** background (not dark), with charcoal text and shadow
- Mobile: 3-column layout (hamburger | logo | phone icon)
- Mobile menu: full-screen overlay with centered links, social icons, and contact info at bottom
- Desktop: nav link hover underline animation (slides in from left)

## 3. Services Preview - Redesign to 3-Card Layout
**Current:** 8 service cards in a 4-column grid.
**Spec requires:** Only 3 featured cards (Interior, Exterior, Staining & Specialty) with image areas, "Learn More" links, and a bottom CTA row linking to the full Services page.

## 4. Why Choose Us - Two-Column Image Layout
**Current:** 6 cards in a grid on dark background.
**Spec requires:** Light (white) background, two-column layout with an image on the left (with floating "15+ Years" badge) and content on the right with 3 proof-point cards (Licensed & Insured, Premium Materials, Clean Professional Work). Uses pill-style eyebrow badge.

## 5. Process Steps - Timeline with Vertical Connector
**Current:** 4 cards in a horizontal grid, emerald icon boxes.
**Spec requires:** Light green (emerald-50) background, numbered circle badges (1-4) connected by a vertical line on mobile, horizontal connector on desktop, with specific icons (Calendar, ClipboardList, Paintbrush, CheckCircle).

## 6. 3D Portfolio Gallery Enhancements
**Current:** Working 3D carousel with gradient-colored placeholder cards.
**Spec requires:**
- Auto-rotation animation (60s cycle) that pauses on hover/drag
- White card backgrounds with image placeholders + gradient text overlays
- Larger cards: 280px wide mobile, 400px desktop
- "Emerald Paints" branding on each card
- Updated instruction text and CTA button below

## 7. Testimonials - Dark Background with Card Carousel
**Current:** Light cream background, centered quote carousel.
**Spec requires:** Dark charcoal background, card-based layout with left emerald border, avatar initials circle, auto-advancing dots navigation (every 6 seconds), gold stars.

## 8. Service Areas - Grid with Check Icons
**Current:** Pill-shaped tags with MapPin icons.
**Spec requires:** 2-column grid on mobile with CheckCircle icons, card-style items with emerald-50 background.

## 9. Final CTA - Image Background Section
**Current:** Dark charcoal with radial gradient.
**Spec requires:** Full-bleed background image (or gradient placeholder) with dark overlay, floating emerald badge with MessageCircle icon, trust line below CTA, arrow icon on the button.

## 10. Floating Mobile CTA - Single Round Button
**Current:** Full-width bar with two buttons (Call Now + Free Quote).
**Spec requires:** Single 60px round floating button (bottom-right), emerald background with pulse glow animation, phone icon, appears after 600px scroll.

## 11. Footer - Minor Refinements
**Current:** Already well-structured 4-column layout. Mostly matches spec. Minor text refinements needed.

---

## Technical Details

### Files to Modify
1. `src/components/layout/Navigation.tsx` - White scroll state, mobile layout, hover underlines
2. `src/components/sections/Hero.tsx` - New copy, centered mobile, glass badges, scroll indicator
3. `src/components/sections/ServicesPreview.tsx` - 3-card featured layout with images
4. `src/components/sections/WhyChooseUs.tsx` - Two-column image + proof points layout
5. `src/components/sections/ProcessSteps.tsx` - Timeline with vertical connector and numbered badges
6. `src/components/sections/Portfolio.tsx` - Auto-rotation, white cards, larger sizing
7. `src/components/sections/Testimonials.tsx` - Dark background, card style, auto-advance dots
8. `src/components/sections/ServiceAreas.tsx` - Grid layout with check icons
9. `src/components/sections/FinalCTA.tsx` - Background overlay, badge, trust line
10. `src/components/layout/FloatingCTA.tsx` - Single round button design
11. `tailwind.config.ts` - Add any missing keyframes/animations if needed

### No New Dependencies Required
All changes use existing packages (Framer Motion, Lucide, Tailwind).

