

# Fix Portfolio 3D Carousel - Match 14ER Exactly

## Problem
The current carousel uses discrete step-based rotation (`setInterval` jumping 45 degrees every 4 seconds), causing jerky, broken behavior. The 14ER version uses continuous frame-based rotation via `requestAnimationFrame` for smooth, constant spinning.

## Solution
Create a new `CircularGallery` component matching the 14ER architecture, then update `Portfolio.tsx` to use it.

## Files to Create/Modify

### 1. NEW: `src/components/ui/CircularGallery.tsx`
A standalone 3D carousel engine with:
- **Continuous rotation** using `requestAnimationFrame` (not setInterval)
- `autoRotateSpeed` prop (default `-0.035` degrees/frame, matching 14ER)
- **Drag/swipe support**: mouse drag and touch drag to rotate manually
- **IntersectionObserver**: only animate when section is in viewport
- **Responsive radius** via prop (passed from parent)
- Cards positioned with `rotateY(angle + currentRotation)deg translateZ(radius)` around a circle
- Each card: rounded-2xl, shadow-2xl, full-bleed image, gradient overlay, text at bottom
- `backfaceVisibility: hidden` to hide rear-facing cards
- Opacity fading for cards not facing front (angle > 90 degrees from front)
- `onItemClick` callback for lightbox integration

### 2. MODIFY: `src/components/sections/Portfolio.tsx`
- Remove all rotation/activeIndex state logic and setInterval auto-rotation
- Add responsive radius with `useEffect` + resize listener (320px mobile, 520px desktop)
- Add `IntersectionObserver` to detect when section is visible (`isActive` state)
- Pass items, radius, `autoRotateSpeed={-0.035}`, `isActive`, and `onItemClick` to `CircularGallery`
- Keep the existing lightbox modal, header, instruction text, and CTA button
- Match the 14ER background exactly: multi-layer with base gradient (`from-[#0a1628] via-[#0d1f3c] to-[#0a0f1a]`), radial blue glow, mesh gradient overlay (orange/blue/purple radials), and vignette

### 3. No new dependencies needed
The `react-use-measure` package used in 14ER is not required -- we can use `useRef` + `getBoundingClientRect` or just CSS for the container sizing.

## Technical: CircularGallery Rotation Engine

```text
On each animation frame:
  if (not dragging && isActive):
    currentAngle += autoRotateSpeed
  
  For each card at index i:
    cardAngle = (360 / totalCards) * i + currentAngle
    normalizedAngle = normalize to [-180, 180]
    
    transform: rotateY(cardAngle)deg translateZ(radius)px
    opacity: |normalizedAngle| < 90 ? lerp(1, 0.3) : 0
    zIndex: based on how close to front (cos of angle)
    scale: front card ~1.0, sides ~0.85
```

Drag handling:
- On mousedown/touchstart: record startX and startAngle
- On mousemove/touchmove: currentAngle = startAngle + (deltaX * sensitivity)
- On mouseup/touchend: resume auto-rotation

## Background Layers (matching 14ER exactly)
1. Base gradient: `bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#0a0f1a]`
2. Radial glow: `bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]`
3. Mesh gradient: three radial gradients (orange at 20%/80%, blue at 80%/20%, purple at center) at 30% opacity
4. Vignette: `bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]`

