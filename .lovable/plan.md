

# About & Contact Pages - Complete Rebuild

## Overview
Both pages currently have basic implementations. The spec calls for much richer, multi-section pages with specific layouts, new content, and premium styling.

---

## About Page (src/pages/About.tsx) - Full Rewrite

### Current State
- Simple hero with plain charcoal background
- Single story section with 3 paragraphs (no image, no two-column layout)
- Basic 4-value cards in a grid
- Trust section with icons and a single CTA
- Missing: Stats section, credentials section, owner photo, detailed copy

### New 7-Section Structure

**Section 1 - Hero:** 45vh height (55vh desktop) with gradient background, white Users icon badge (64px circle), "About Emerald Paints" headline, and descriptive subheadline. Dark overlay.

**Section 2 - Our Story:** Two-column layout on desktop (image 40%, content 60%). Left side has a 4:3 aspect-ratio placeholder image with caption "Miguel, Founder & Lead Painter." Right side has "OUR STORY" eyebrow, "Built on Craftsmanship, Driven by Pride" headline, and 4 detailed paragraphs about Miguel's journey and the company mission.

**Section 3 - Our Values:** Emerald-50 background. 4 value cards in a grid (1 col mobile, 2 tablet, 4 desktop). Each card is white with centered icon in emerald-100 rounded box, title, and longer description. Values: Quality First (Gem), Honest Communication (MessageCircle), Respect for Your Home (Heart), Customer Satisfaction (ThumbsUp).

**Section 4 - By The Numbers:** Dark charcoal-900 section. 2x2 grid on mobile, 4-column on desktop. Large emerald-400 numbers (48px mobile, 64px desktop) with white labels: "15+" Years, "500+" Projects, "100%" Satisfaction, "5.0" Star Rating.

**Section 5 - Credentials:** White background. "Licensed, Insured, and Trusted" headline. 2x2 grid of credential items with icons on charcoal-50 backgrounds: Licensed Contractor (BadgeCheck), Fully Insured (Shield), Bonded (Lock), Local & Established (MapPin).

**Section 6 - CTA:** Emerald-500 background matching the Services page CTA pattern. "Ready to Work with Us?" headline, white estimate button, phone link, trust line.

### Files Modified
- `src/pages/About.tsx` - Complete rewrite

---

## Contact Page (src/pages/Contact.tsx) - Full Rewrite

### Current State
- Plain charcoal hero
- Basic 5-field form (name, phone, email, service dropdown, textarea)
- Simple sidebar with contact info and hours
- Uses mailto fallback for submission
- Missing: timeline field, referral source field, validation, loading/error states, FAQ section, service areas section, privacy note, response time badge

### New 5-Section Structure

**Section 1 - Contact Hero:** Emerald-500 background (not dark charcoal). White Phone icon badge (56px circle), "Let's Talk" headline, subheadline about free estimates.

**Section 2 - Main Contact Section:** White background, two-column on desktop (form 60%, info sidebar 40%).

- **Form:** 7 fields total: Name (required), Phone (required, type=tel), Email (required), Service Type dropdown (required, 9 options including "Other"), Timeline dropdown (optional, 5 options), Project Details textarea, How Did You Hear About Us dropdown (optional, 6 options). All inputs use charcoal-50 background with 52px height, 16px font (prevents iOS zoom), emerald focus borders. Submit button "Get My Free Estimate" with ArrowRight icon. Privacy note with Lock icon below. Loading state with spinner. Success state replaces form with green checkmark, thank you message, and phone link. Error state shows red alert above submit.

- **Info Sidebar:** Three contact blocks (Phone with hours, Email with response time, Location), social links (Facebook/Instagram), and a response time badge (emerald-50 card with Clock icon, "We typically respond within 2 hours"). On desktop the sidebar is sticky.

**Section 3 - FAQ Mini-Section:** Charcoal-50 background. "Quick Answers" headline. 3-item accordion (same style as Services page) covering start timing, free estimates, and what's included.

**Section 4 - Service Areas:** White background. 2-column grid with CheckCircle icons and emerald-50 tags for all 10 service areas.

### New Constants
Add `CONTACT_FAQS` array (3 items) to `src/lib/constants.ts`.

### Files Modified
- `src/lib/constants.ts` - Add `CONTACT_FAQS`
- `src/pages/Contact.tsx` - Complete rewrite

---

## Technical Notes

### Dependencies Used (all already installed)
- `@radix-ui/react-accordion` for Contact FAQ section
- `framer-motion` for animations via AnimatedSection
- `lucide-react` for all icons
- No new dependencies needed

### Form Handling
- Client-side validation with inline error messages
- Loading state on submit button
- Success/error state management via React state
- Currently logs to console + shows success (ready for future webhook integration)
- Proper `encodeURIComponent` for any external URL parameters

