

# Services Page - Complete Rebuild

## Overview
The current Services page is minimal: a basic hero, simple card grid with only short descriptions, and a single CTA. The spec calls for a much richer, 7-section page with detailed service cards (features lists, image areas, overlapping icon badges), quality commitment section, materials/brands, process recap, FAQ accordion, and an emerald-branded CTA.

---

## What Changes

### 1. Update Constants (src/lib/constants.ts)
Add detailed service data: full descriptions, feature lists, and gradient placeholders for each of the 8 services. Add FAQ data array (8 questions/answers). Add a brands array.

### 2. Rebuild Services Page (src/pages/Services.tsx)
Replace the entire page with 7 sections:

**Section 1 - Services Hero:** Half-viewport dark hero with a circular Paintbrush icon badge, "Our Services" headline, and subheadline. Gradient placeholder background with overlay.

**Section 2 - Services Grid:** All 8 service cards in a responsive grid (1 col mobile, 2 col tablet, 3 col desktop). Each card has:
- 16:10 gradient image placeholder area
- Overlapping emerald icon badge (positioned between image and content)
- Service title and full description
- 4 feature bullet points with emerald checkmarks
- "Get a Quote" link with arrow

**Section 3 - Quality Commitment:** Two-column layout (image left, content right on desktop, stacked on mobile). 5 quality points in white cards with icons (Shield, Palette, Users, Home, Sparkles). Floating eyebrow pill badge.

**Section 4 - Materials & Brands:** Clean section showing 5 brand names (Sherwin-Williams, Benjamin Moore, Behr, PPG Paints, Cabot Stains) as styled text placeholders with grayscale-to-color hover effect.

**Section 5 - Process Recap:** Dark charcoal section with 4 process step cards. Horizontally scrollable on mobile, 4-column grid on desktop. Each card shows numbered badge, icon, title, description.

**Section 6 - FAQ Section:** Cream background with 8-item accordion. Uses Radix Accordion component (already installed). White card-style items with emerald plus/minus toggle icons. Smooth open/close animations.

**Section 7 - CTA Section:** Full emerald-500 background with white text. "Ready to Get Started?" headline, estimate button (white bg, emerald text), phone link, and trust line.

---

## Technical Details

### Files Modified
1. **src/lib/constants.ts** - Add `SERVICES_DETAILED`, `SERVICE_FAQS`, and `PAINT_BRANDS` arrays
2. **src/pages/Services.tsx** - Complete rebuild with all 7 sections

### Dependencies Used (already installed)
- `@radix-ui/react-accordion` for FAQ section
- `framer-motion` for animations
- `lucide-react` for icons (Home, Building, Trees, Layers, Building2, Wrench, Palette, Paintbrush, Shield, Users, Sparkles, Calendar, ClipboardList, CheckCircle, ChevronRight, Plus, Phone)

### No New Dependencies Required

