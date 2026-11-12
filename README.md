# 3D Printing & Design Hub
Next.js 14 (App Router) + TypeScript + Tailwind, MDX blog. English only. Quote-based enquiry site: no login, database, dashboard, payments or customer file uploads.

## Run
cp .env.example .env.local   # fill values
npm install && npm run dev

## Quote form email (Resend)
1. Create a free account at resend.com and an API key.
2. Set RESEND_API_KEY and QUOTE_TO_EMAIL. Until you verify a domain in Resend, keep QUOTE_FROM_EMAIL=onboarding@resend.dev and use your Resend account email as QUOTE_TO_EMAIL.
3. Without these variables the form shows an error with a WhatsApp fallback.


## Deploy (Vercel)
Push to GitHub, import in Vercel, add the env vars, set NEXT_PUBLIC_SITE_URL to your domain, then add the site to Google Search Console.

## Portfolio (gallery)
All portfolio media lives in `public/portfolio` (WebP, optimised) and is described in `lib/portfolio.json`:
- `design[]`: 3D design projects (title, cover, images). `printing[]`: printing projects (images + optional video with caption). `overall`: the overall printing video. `hero[]`: homepage carousel slides.
- Project titles are working titles. Edit them in `lib/portfolio.json`.
- To add a project: drop WebP files into `public/portfolio/design/pNN/` (or `printing/`), then add an entry to `lib/portfolio.json`.
- Links: Fiverr and Behance URLs are in `lib/site.ts` (`LINKS`).

## Source fix
Fixed literal `\\n` sequences that had been inserted into `app/page.tsx`, `components/Icons.tsx`, and `components/Logo.tsx`; these are now real line breaks so the TypeScript/TSX parser can read the files.

## Image sliders
All sliders use one component, `components/ImageSlider.tsx`: autoplay every 2 seconds, loops from the last image back to the first, previous/next arrow buttons on the left and right of the image, pagination dots at the bottom (the active dot is the long one), swipe on touch and keyboard arrow keys. Autoplay pauses on hover/focus, while off-screen, on video slides, and when the visitor's OS asks for reduced motion.
- Project sliders (Home "Ideas Worth Making", Services, Gallery cards and popup) get their images from `lib/projects.ts`, which only returns a project's own files, so images of different projects never mix.
- About page uses the `hero[]` list in `lib/portfolio.json`; edit that list to change its images.

## Source fix 2
`Plant()` in `app/page.tsx` was missing a closing `)}`, which stopped the file from compiling. Fixed.
# 3D-Printing-Design-Hub
