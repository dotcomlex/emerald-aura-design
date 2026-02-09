

# Portfolio 3D Carousel Rebuild

## Overview
Rewrite the Portfolio section to match the 14ER Renovations 3D carousel exactly as shown in the reference screenshot. The current implementation uses continuous drag-based rotation; the new one uses discrete step-based auto-rotation with swipe/click controls, proper card centering, and the exact visual structure from the reference.

## What Changes

### File: `src/components/sections/Portfolio.tsx` (full rewrite)

**Remove**: The `useDragRotation` hook dependency, `AnimatedSection` and `SectionHeader` component usage, and the lightbox modal.

**New implementation**:

- **State**: `activeIndex` (current card) and `rotation` (in degrees) instead of continuous pixel-based rotation.
- **Auto-rotation**: Steps forward by one card (360/N degrees) every 4 seconds, pauses on hover.
- **Touch/swipe**: Threshold-based (50px) swipe detection to go next/prev card.
- **Mouse drag**: Same drag-to-rotate as before but snapping to discrete positions.

**3D Carousel mechanics**:
- Each card positioned with `rotateY(angle - rotation)deg translateZ(280px)` from center.
- Cards centered in container using `left: 50%; top: 50%; transform: translate(-50%, -50%)` plus the 3D transform.
- Card dimensions: `w-64 h-80` (mobile) / `w-80 h-96` (desktop).
- `perspective: 1000px` on container, `transform-style: preserve-3d` on track.
- `backfaceVisibility: hidden` on each card.

**Section styling**:
- Background: `bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`
- Subtle decorative blurred circles (orange and blue) in corners
- Header with orange "OUR WORK" eyebrow, white title, white/70 subtitle
- Instruction text: "Auto-rotates . Swipe left or right to explore . Tap any photo to view"
- Orange CTA button with ArrowRight icon from lucide-react

**Card styling** (matching reference screenshot exactly):
- White rounded-2xl cards with shadow-2xl
- Full-bleed image with gradient overlay from-black/80 via-black/20 to-transparent
- Text overlay at bottom: title (white bold), location (white/80), "Emerald Paints" (white/60)

**Portfolio items**: Keep the existing 8 items with their real image imports (portfolioKitchen, portfolioExterior, etc.).

**Lightbox**: Keep the existing lightbox modal for tapping a card to view full-size.

### File: `src/index.css` (add 3 utility classes)

Add to `@layer utilities`:
```css
.perspective-1000 { perspective: 1000px; }
.preserve-3d { transform-style: preserve-3d; }
.transform-gpu { transform: translateZ(0); will-change: transform; }
```

### No other files change
- `useDragRotation.ts` can remain (unused, or we can remove it -- it's only used by Portfolio).
- All image imports stay the same.

---

## Technical Details

### Rotation Math
- 8 cards at 45 degrees apart (360/8)
- `rotation` state tracks cumulative degrees rotated
- Each card: `transform: rotateY(cardAngle - rotation) translateZ(280px)`
- Front-facing cards (angle difference < 90 degrees from 0) get full opacity; others fade to 0.3
- Active card (front-center) scales to 1.05; others at 0.95

### Auto-Rotation Logic
```
useEffect: every 4000ms, rotation += angleStep, activeIndex = (activeIndex + 1) % total
Pauses when: isHovering or lightbox is open
```

### Swipe Logic
```
onTouchStart: record start X
onTouchMove: if delta > 50px, advance; if delta < -50px, go back; reset touchStart
```

### Container Sizing
- Mobile: `h-[380px]`
- Tablet: `h-[420px]`
- Desktop: `h-[480px]`
- `translateZ` radius: 280px (tighter than current 480px, matching 14ER proportions for better visual overlap of side cards)

