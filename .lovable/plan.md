

# Emerald Paints LLC — Premium Painting Contractor Website

## Overview
A premium, mobile-first website for Emerald Paints LLC, a high-end residential painting contractor in Commerce City, Colorado. Designed to convert Facebook ad traffic into quote requests by establishing instant trust and professionalism.

---

## Phase 1: Foundation & Design System
- Set up the custom color palette (emerald greens, charcoal darks, navy, gold accents)
- Configure typography with Montserrat (headings) and Inter (body)
- Install Framer Motion for premium animations
- Create reusable components: custom Button variants, SectionHeader, AnimatedSection wrapper
- Add the uploaded Emerald Paints logo as a project asset
- Set up constants file with all company info, services, testimonials, and portfolio data
- Create custom hooks (useScrollPosition, useDragRotation for 3D gallery)

## Phase 2: Layout Components
- **Navigation** — Transparent on hero, solid on scroll. Mobile hamburger menu with smooth slide-in. Logo + nav links + "Get a Quote" CTA button
- **Footer** — Company info, service areas, hours, social links, phone/email with tap-to-call
- **Floating Mobile CTA** — Appears after scrolling, always accessible "Get a Free Quote" button

## Phase 3: Homepage (Section by Section)
1. **Hero** — Full-screen dark background with gradient overlay. Bold headline ("Denver's Premier Painting Professionals"), subtext, two CTA buttons (Get a Quote + View Our Work). Trust badges (15+ years, 500+ projects, 5-star rated). Sequenced Framer Motion entrance animations
2. **Social Proof Marquee** — Auto-scrolling ticker of micro-reviews, subtle and continuous
3. **Services Preview** — Grid of 8 service cards with icons, short descriptions, and hover effects. Links to full Services page
4. **Why Choose Us** — 4-6 differentiators with icons (Licensed & Insured, Premium Materials, Clean Job Sites, etc.)
5. **Process Steps** — Visual 4-step timeline (Consultation → Quote → Painting → Walkthrough)
6. **Portfolio / 3D Gallery** — The "wow" moment. Interactive 3D rotating gallery of project photos using CSS 3D transforms. Drag/swipe to rotate. Click to open lightbox. Dark navy background for dramatic effect
7. **Testimonials** — Card carousel with star ratings, customer names, project types, and locations
8. **Service Areas** — Map-style section listing all Denver metro cities served
9. **Final CTA** — Dark section with compelling headline and prominent quote request button

## Phase 4: Services Page
- Hero banner with service-specific headline
- Detailed cards for each of the 8 services with descriptions and icons
- CTA sections between service groups

## Phase 5: About Page
- Company story and mission
- Owner introduction (Miguel, 15+ years experience)
- Values and commitments
- Trust badges and credentials

## Phase 6: Contact Page
- Contact form (name, phone, email, service type, message)
- Company info sidebar (phone, email, address, hours)
- Map embed placeholder for Commerce City location
- Tap-to-call and mailto links

## Design Principles Throughout
- **Mobile-first**: Every section tested at 375px, 768px, and 1280px
- **Premium feel**: Moody dark sections alternating with clean white sections
- **Subtle animations**: Fade-up on scroll, hover effects, staggered reveals
- **Trust-building**: Ratings, years of experience, and project count visible early
- **Conversion-focused**: Quote CTAs on every page, floating mobile button, tap-to-call phone numbers
- **No backend needed**: Static content site, contact form can use mailto or a future form service

