

# AI Image Generation for Emerald Paints

## Overview
Generate photorealistic images using the Gemini AI image model (via Lovable's API gateway) to replace all gradient placeholders across the site. Images will be generated through a Supabase edge function and stored in a Supabase storage bucket for fast, static delivery.

## Architecture

The system consists of three parts:
1. A Supabase edge function that calls the Gemini image API
2. A Supabase storage bucket to persist generated images
3. An admin page to trigger generation and preview results

Once images are generated and stored, all components will be updated to reference the storage URLs instead of gradient placeholders.

## What Gets Built

### Step 1: Enable Lovable Cloud (Supabase)
Required for the edge function and storage bucket. No database tables needed.

### Step 2: Create Storage Bucket
- Bucket name: `site-images`
- Public access enabled (images need to be served to all visitors)
- Organized by folder: `hero/`, `services/`, `portfolio/`, `about/`, `detail/`

### Step 3: Create Edge Function (`generate-image`)
- Accepts a prompt string and a target filename/path
- Calls `https://ai.gateway.lovable.dev/v1/chat/completions` with model `google/gemini-2.5-flash-image`
- Receives base64 image data
- Uploads to the `site-images` storage bucket
- Returns the public URL

### Step 4: Create Admin Page (`/admin/images`)
- Protected or hidden page (not in navigation)
- Lists all 28 image prompts organized by category
- "Generate" button per image and "Generate All" bulk button
- Shows preview thumbnails of generated images
- Shows status (pending, generating, done, error) for each
- Stores generation state in localStorage to track progress

### Step 5: Update All Components
After images are generated and stored, update these files to use real image URLs:

**Homepage:**
- `Hero.tsx` - Background image (prompt 1)
- `ServicesPreview.tsx` - 3 service card images (prompts 5, 6, 7)
- `WhyChooseUs.tsx` - Project photo (prompt 15)
- `Portfolio.tsx` - 8 gallery card images (prompts 17-22 + extras)
- `FinalCTA.tsx` - Denver skyline background (prompt 2)

**Services Page (`Services.tsx`):**
- Hero background (prompt 3)
- 8 service card images (prompts 5-12)
- Quality commitment image (prompt 10)

**About Page (`About.tsx`):**
- Hero background (prompt 4 or 14)
- Owner/founder photo (prompt 13)

### Image Inventory (28 total from spec)

| # | Category | Prompt Summary | Used In |
|---|----------|---------------|---------|
| 1 | Hero | Exterior painting, Denver home, mountains | Homepage hero bg |
| 2 | Background | Denver skyline golden hour | Final CTA bg |
| 3 | Hero | Interior painter with roller | Services hero bg |
| 4 | Hero | Team working on exterior | About hero bg |
| 5 | Service | Modern living room sage green | Interior card |
| 6 | Service | Colorado home exterior | Exterior card |
| 7 | Service | Freshly stained deck | Staining card |
| 8 | Service | Spray painting vinyl siding | Vinyl card |
| 9 | Service | Modern office gray walls | Commercial card |
| 10 | Service | Trim work detail | Touch-ups card |
| 11 | Service | Teal accent wall bedroom | Custom finishes card |
| 12 | Service | Color swatches consultation | Color consult card |
| 13 | Portrait | Miguel founder portrait | About page |
| 14 | Team | Team group photo | About hero or story |
| 15 | Action | Painter interior roller | Why Choose Us |
| 16 | Action | Painter exterior ladder | Portfolio |
| 17 | Portfolio | Kitchen cabinet refinishing | Portfolio gallery |
| 18 | Portfolio | Living room transformation | Portfolio gallery |
| 19 | Portfolio | Bathroom refresh | Portfolio gallery |
| 20 | Portfolio | Fence staining | Portfolio gallery |
| 21 | Portfolio | Accent wall emerald | Portfolio gallery |
| 22 | Portfolio | Before/after exterior | Portfolio gallery |
| 23 | Detail | Paint brush emerald close-up | Decorative |
| 24 | Detail | Paint roller texture | Decorative |
| 25 | Detail | Color swatches overhead | Decorative |
| 26 | Detail | Masking tape edge | Decorative |
| 27 | Environment | Colorado mountain home | Portfolio |
| 28 | Environment | Denver suburb street | Portfolio |

## Technical Details

### Files Created
1. `supabase/functions/generate-image/index.ts` - Edge function for AI image generation
2. `src/pages/AdminImages.tsx` - Admin page for image generation and management
3. `src/lib/imagePrompts.ts` - All 28 prompts with metadata (category, filename, target component)

### Files Modified
4. `src/App.tsx` - Add route for `/admin/images`
5. `src/components/sections/Hero.tsx` - Replace gradient with `<img>` tag
6. `src/components/sections/ServicesPreview.tsx` - Add images to 3 cards
7. `src/components/sections/WhyChooseUs.tsx` - Replace gradient with image
8. `src/components/sections/Portfolio.tsx` - Replace gradient cards with images
9. `src/components/sections/FinalCTA.tsx` - Replace gradient with background image
10. `src/pages/Services.tsx` - Add hero bg image, 8 service card images, quality image
11. `src/pages/About.tsx` - Add hero bg image, owner photo
12. `src/lib/constants.ts` - Add image URL mapping object (updated after generation)

### Edge Function Details
- Uses `LOVABLE_API_KEY` secret (already configured)
- Model: `google/gemini-2.5-flash-image`
- Uploads result to Supabase storage
- Returns public URL of stored image
- Includes error handling and timeout (image generation can be slow)

### Component Image Pattern
All image replacements will follow a consistent pattern using an `<img>` tag with lazy loading, a gradient fallback, and object-fit cover:
```
<img src={imageUrl} alt="..." loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
```
The gradient placeholder remains as a CSS background behind the image as a fallback while loading.

