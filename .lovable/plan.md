

# Color System Complete Overhaul

## Overview
Replace the dominant emerald green (#22c55e / emerald-500) color system with a sophisticated blue + orange palette. Green will be restricted to tiny checkmarks and success indicators only. This touches every component and page across the site.

---

## New Color Mapping

| Old | New | Where |
|-----|-----|-------|
| `emerald-500` (buttons, CTAs) | `orange-500` (#f97316) | Primary CTA buttons |
| `emerald-600` (hover states) | `orange-600` (#ea580c) | Button hovers |
| `emerald-700` (hero CTA) | `orange-500` | Hero primary button |
| `emerald-400` (accents on dark bg) | `blue-400` (#60a5fa) | Eyebrows, highlights on dark sections |
| `emerald-500` (icon badges, step circles) | `blue-500` (#3b82f6) | Icon badges, process step numbers |
| `emerald-600` (icon color in cards) | `blue-600` (#2563eb) | Icon fills inside cards |
| `emerald-100` / `emerald-50` (icon bg) | `blue-50` / `blue-100` | Icon background circles |
| `emerald-500` (eyebrow text on light bg) | `orange-500` | Eyebrow labels on light sections |
| `emerald-600` (eyebrow text on light bg) | `orange-600` | Eyebrow labels variation |
| `emerald-500` (CheckCircle icons) | `emerald-500` | KEEP -- only valid green use |
| `shadow-glow-emerald` | Remove or change to orange shadow | Button glow effects |
| `bg-emerald-500` (CTA sections) | `bg-slate-800` (#1e293b) | Full-section CTA backgrounds |
| `bg-emerald-50` (response badge) | `bg-blue-50 border-blue-200` | Contact sidebar badge |
| `text-emerald-400` (mobile nav active) | `text-blue-400` | Active nav link in mobile |
| `text-emerald-600` (active nav scrolled) | `text-blue-600` | Active nav link when scrolled |
| `after:bg-emerald-500` (nav underline) | `after:bg-blue-500` | Nav link underline animation |

---

## Files Modified (16 total)

### 1. `tailwind.config.ts`
- Add `shadow-glow-orange` to replace `shadow-glow-emerald`
- Add `shadow-glow-orange-strong` to replace `shadow-glow-emerald-strong`
- Update `pulse-glow` keyframe to use orange rgba values instead of emerald

### 2. `src/index.css`
- Change CSS variable `--primary` from `160 84% 39%` (emerald) to `221 83% 53%` (blue-500)
- Change `--ring` similarly
- Dark mode primary also updated

### 3. `src/components/layout/Navigation.tsx`
- Nav underline: `after:bg-emerald-500` -> `after:bg-blue-500`
- Active link scrolled: `text-emerald-600` -> `text-blue-600`
- Active link dark: `text-emerald-400` -> `text-blue-400`
- Desktop CTA button: `bg-emerald-500 hover:bg-emerald-600 shadow-glow-emerald` -> `bg-orange-500 hover:bg-orange-600 shadow-glow-orange`
- Mobile CTA: `bg-emerald-500 hover:bg-emerald-600` -> `bg-orange-500 hover:bg-orange-600`
- Mobile active link: `text-emerald-400` -> `text-blue-400`
- Mobile phone icon: `text-emerald-400` -> `text-blue-400`

### 4. `src/components/layout/Footer.tsx`
- Social icon hover: `hover:bg-emerald-500/20` -> `hover:bg-blue-500/20`
- Link hover: `hover:text-emerald-400` -> `hover:text-blue-400`

### 5. `src/components/layout/FloatingCTA.tsx`
- `bg-emerald-500` -> `bg-orange-500`
- `shadow-glow-emerald-strong` -> `shadow-glow-orange-strong`
- Update `animate-pulse-glow` keyframe (in tailwind config) to orange

### 6. `src/components/sections/Hero.tsx`
- Eyebrow: `text-emerald-400` -> `text-blue-400`
- "Lasting Impressions" highlight: `text-emerald-400` -> `text-blue-400`
- Primary CTA: `bg-emerald-700 hover:bg-emerald-800 shadow-glow-emerald` -> `bg-orange-500 hover:bg-orange-600 shadow-glow-orange`
- Trust badge icons: `text-emerald-400` -> `text-blue-400` (except Star which stays gold)

### 7. `src/components/sections/SocialProofMarquee.tsx`
- No changes needed (already uses gold for stars, white for text)

### 8. `src/components/sections/ServicesPreview.tsx`
- Icon circle: `bg-emerald-50` -> `bg-blue-50`
- Icon color: `text-emerald-600` -> `text-blue-600`
- "Learn More" link: `text-emerald-500` -> `text-blue-500`
- "View All Services" button: `bg-emerald-500 hover:bg-emerald-600` -> `bg-orange-500 hover:bg-orange-600`

### 9. `src/components/sections/WhyChooseUs.tsx`
- Eyebrow pill: `text-emerald-700` -> `text-blue-700`
- Floating badge: `bg-emerald-500 shadow-glow-emerald` -> `bg-orange-500 shadow-glow-orange`
- Icon backgrounds: `bg-emerald-100` -> `bg-blue-100`
- Icon colors: `text-emerald-600` -> `text-blue-600`

### 10. `src/components/sections/ProcessSteps.tsx`
- Step number circles: `bg-emerald-500` -> `bg-blue-500`
- Step icons: `text-emerald-500` -> `text-blue-500`

### 11. `src/components/sections/Portfolio.tsx`
- CTA button: `bg-emerald-500 hover:bg-emerald-600 shadow-glow-emerald` -> `bg-orange-500 hover:bg-orange-600 shadow-glow-orange`

### 12. `src/components/sections/Testimonials.tsx`
- Author avatar circle: `bg-emerald-600` -> `bg-blue-600`
- Active selector button: `bg-emerald-600` -> `bg-blue-600`

### 13. `src/components/sections/ServiceAreas.tsx`
- CheckCircle icons: `text-emerald-500` -> KEEP (valid green usage for checkmarks)
- No other changes needed (already using gray-50 bg)

### 14. `src/components/sections/FinalCTA.tsx`
- "Let's Talk" badge: `bg-emerald-500` -> `bg-orange-500`
- CTA button: `bg-emerald-500 hover:bg-emerald-600 shadow-glow-emerald` -> `bg-orange-500 hover:bg-orange-600 shadow-glow-orange`

### 15. `src/components/ui/SectionHeader.tsx`
- Light mode eyebrow: `text-emerald-600` -> `text-orange-500`
- Dark mode eyebrow: `text-emerald-400` -> `text-blue-400`

### 16. `src/pages/Services.tsx`
- Hero icon badge: `bg-emerald-500 shadow emerald` -> `bg-blue-500 shadow blue`
- "What We Offer" eyebrow: `text-emerald-500` -> `text-orange-500`
- Service card icon badge: `bg-emerald-500 border-white shadow-emerald` -> `bg-blue-500`
- Card hover border: `hover:border-emerald-200` -> `hover:border-blue-200`
- CheckCircle icons in features: KEEP green (valid usage)
- "Get a Quote" links: `text-emerald-500 hover:text-emerald-600` -> `text-blue-500 hover:text-blue-600`
- Quality section eyebrow: `text-emerald-600` -> `text-orange-500`
- Quality icon bg: `bg-emerald-50` -> `bg-blue-50`
- Quality icon color: `text-emerald-600` -> `text-blue-600`
- Brand hover: `hover:text-emerald-600` -> `hover:text-blue-600`
- Process step circles: `bg-emerald-500` -> `bg-blue-500`
- Process icons: `text-emerald-400` -> `text-blue-400`
- FAQ accordion icon: `[&>svg]:text-emerald-500` -> `[&>svg]:text-blue-500`
- CTA section: `bg-emerald-500` -> `bg-slate-800`
- CTA button: `text-emerald-600` -> `text-orange-500` (white bg button on dark section)

### 17. `src/pages/About.tsx`
- Hero icon: `text-emerald-500` -> `text-blue-500`
- Story eyebrow: `text-emerald-500` -> `text-orange-500`
- Values icon bg: `bg-emerald-50` -> `bg-blue-50`
- Values icon color: `text-emerald-600` -> `text-blue-600`
- Values eyebrow: `text-emerald-600` -> `text-orange-500`
- Stats numbers: `text-emerald-400` -> `text-blue-400`
- Stats star: `text-emerald-400 fill-emerald-400` -> `text-gold fill-gold`
- Credentials icons: `text-emerald-500` -> `text-blue-500`
- CTA section: `bg-emerald-500` -> `bg-slate-800`
- CTA button: `text-emerald-600` -> `text-orange-500`

### 18. `src/pages/Contact.tsx`
- Hero section: `bg-emerald-500` -> `bg-slate-800`
- Hero phone icon: `text-emerald-500` -> `text-blue-500`
- Form focus borders: `focus:border-emerald-500` -> `focus:border-blue-500`
- Submit button: `bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700` -> `bg-orange-500 hover:bg-orange-600 active:bg-orange-700`
- Success icon bg: `bg-emerald-100` -> `bg-blue-100`
- Success icon: `text-emerald-600` -> `text-blue-600`
- Success heading: `text-emerald-600` -> `text-blue-600`
- Success link: `text-emerald-500` -> `text-blue-500`
- Sidebar icons: `text-emerald-500` -> `text-blue-500`
- Sidebar hover: `hover:text-emerald-600` -> `hover:text-blue-600`
- Social hover: `hover:text-emerald-500` -> `hover:text-blue-500`
- Response badge: `bg-emerald-50 border-emerald-200` -> `bg-blue-50 border-blue-200`
- Response badge icon: `text-emerald-500` -> `text-blue-500`
- Service areas tags: `bg-emerald-50 border-emerald-100` -> `bg-slate-50 border-slate-200`
- Service areas CheckCircle: KEEP green

---

## Where Green IS Kept (emerald-500 only)

These are the ONLY places green remains:
- `CheckCircle` icons next to feature lists (Services page, Service Areas)
- `CheckCircle` icons in homepage Service Areas section
- These are small (h-4 w-4) indicators -- exactly the valid use case

---

## No New Dependencies

All changes use existing Tailwind classes (blue, orange, slate are built-in).

