

# Copy 14ER CircularGallery Exactly

## Problem
The current carousel has correct rotation logic but the cards are too small and the section styling doesn't match the 14ER reference. The `circular-gallery.tsx` source from 14ER wasn't included in the dump, so the card sizing and layout need to be matched from the reference screenshots and the GallerySection usage patterns.

## Changes

### 1. `src/components/ui/CircularGallery.tsx` - Match 14ER card sizing and data model

**Data model change** - Match the 14ER `GalleryItem` interface exactly:
```
{ common: string, binomial: string, photo: { url: string, text: string, by: string } }
```
This replaces the current `CarouselItem` with `id/title/location/category/image`.

**Card sizing** - Increase to fill the section properly:
- Current: `w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-96` (tiny)
- New: `w-[280px] h-[380px] sm:w-[340px] sm:h-[440px] md:w-[420px] md:h-[520px]` (matches 14ER proportions where front card dominates)

**Accept `className` prop** - The 14ER GallerySection passes `className="relative z-10 h-[340px] sm:h-[420px] md:h-[480px]"` to CircularGallery. The component needs to accept and apply a className prop for height and positioning.

**Card text layout** - Match 14ER naming:
- Line 1: `item.common` (project name) - white, bold
- Line 2: `item.binomial` (location) - white/70
- Line 3: "Emerald Paints" (hardcoded brand) - white/50

**onItemClick** - Change to pass the array index (not an id), matching the 14ER pattern where lightbox uses index-based navigation.

The rotation engine (requestAnimationFrame, drag/swipe, angleRef) stays identical -- it's already correct.

### 2. `src/components/sections/Portfolio.tsx` - Match 14ER GallerySection exactly

**Data structure** - Switch to the 14ER `GalleryItem` format:
```typescript
const items = useMemo(() => [
  { common: "Kitchen Cabinet Refinishing", binomial: "Denver, CO", photo: { url: portfolioKitchen, text: "Kitchen refinishing", by: "Emerald Paints" } },
  // ... 8 items total
], []);
```

**Section structure** - Add `md:min-h-screen` to the section (matches 14ER).

**Lightbox** - Rewrite to match 14ER exactly:
- Uses plain div (not framer-motion AnimatePresence)
- `fixed inset-0 z-50 bg-black/95`
- Close button: rounded circle `bg-white/10 hover:bg-white/20`, top-right
- Prev/Next buttons: rounded circles with `bg-white/10 hover:bg-white/20`, centered vertically
- Image info bar at bottom: gradient overlay with project name, location, and counter "X / Y"
- Keyboard navigation (Escape, ArrowLeft, ArrowRight)
- Body scroll lock when lightbox is open

**CircularGallery usage** - Pass className for height:
```
className="relative z-10 h-[340px] sm:h-[420px] md:h-[480px]"
```

**Instruction text** - Match exactly: "Auto-rotates . Swipe left or right to explore . Tap any photo to view"

### 3. No dependency changes needed

## Technical Notes

The rotation engine in `CircularGallery.tsx` is already correct (requestAnimationFrame with angleRef). The main fixes are:
1. Card sizing (much larger cards)
2. Data model alignment with 14ER
3. Lightbox matching the 14ER style (plain div, rounded buttons, keyboard nav)
4. Section getting `md:min-h-screen`
5. className prop on CircularGallery for external height control

