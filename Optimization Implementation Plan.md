# Implementation Plan - Comprehensive Performance, Bundle, SEO & Accessibility Optimizations

This plan implements full optimizations across all four key domains: **Web Performance & Core Web Vitals**, **JavaScript Bundle Size & Code Splitting**, **SEO & Discoverability**, and **Accessibility (a11y) & UX**.

---

## User Review & Open Clarifications

> [!IMPORTANT]
> Please review the following design decisions and let me know your preferences:
> 
> 1. **Unused Dependencies Cleanup**: 
>    - The starter template currently includes packages like `recharts`, `cmdk`, `vaul`, `input-otp`, `react-resizable-panels`, `date-fns`, and `react-day-picker` alongside boilerplate component files in `src/components/ui/`.
>    - **Recommendation**: Remove `recharts` and unused UI boilerplate files to reduce project dependency bloat and eliminate ~150KB+ of potential bundle overhead.
> 
> 2. **Social Share Preview Image (`og:image`)**:
>    - We will generate and place a clean, professional 1200x630 `og-image.png` banner in `public/` showcasing your personal branding and credentials for sharing on LinkedIn, Twitter, and messaging apps.
> 
> 3. **Hero Image Source**:
>    - Would you prefer keeping the tech illustration graphic (optimized locally as WebP) or replacing it with a profile avatar illustration/photo? (We will optimize whatever image is used with explicit dimensions, aspect ratio, and `fetchpriority="high"`).

---

## Proposed Changes

### Category 1: Web Performance & Core Web Vitals

#### [MODIFY] [index.html](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/index.html)
- Add `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`.
- Preload and link Google Fonts (`Inter` & `Poppins`) directly in HTML with `display=swap` to eliminate render-blocking CSS imports.

#### [MODIFY] [src/index.css](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/index.css)
- Remove `@import url('https://fonts.googleapis.com/css2?...');` to avoid CSSOM blocking.
- Add utility class for `content-visibility: auto` and `contain-intrinsic-size` on below-the-fold sections (`#experience`, `#education`, `#skills`) to speed up DOM rendering.

#### [MODIFY] [src/components/HeroSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/HeroSection.tsx)
- Add explicit `width="800"`, `height="533"`, `fetchpriority="high"`, and `loading="eager"` to the hero image to prevent Cumulative Layout Shift (CLS) and maximize Largest Contentful Paint (LCP).

---

### Category 2: JavaScript Bundle Size & Build Optimization

#### [MODIFY] [vite.config.ts](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/vite.config.ts)
- Configure Rollup `output.manualChunks` to split vendor libraries into clean cached chunks:
  - `vendor-react`: `react`, `react-dom`, `react-router-dom`
  - `vendor-radix`: `@radix-ui/*` primitives
  - `vendor-icons`: `lucide-react`
  - `vendor-query`: `@tanstack/react-query`
- Set `chunkSizeWarningLimit` and optimize production build terser/minify settings.

#### [MODIFY] [package.json](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/package.json)
- Remove unused dependency `recharts` (and unused boilerplate UI files from `src/components/ui/` like `chart.tsx`).

---

### Category 3: SEO & Discoverability

#### [MODIFY] [index.html](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/index.html)
- Add JSON-LD Structured Data Schema (`schema.org/Person` and `schema.org/WebSite`) with name, job title, company, skills, website URL, and social profile links (`sameAs`).
- Enable `og:image`, `og:image:width`, `og:image:height`, and `twitter:image` tags pointing to `https://onlybimal.com/og-image.png`.

#### [NEW] `public/og-image.png`
- Create a 1200x630 Open Graph preview image asset for social sharing.

#### [MODIFY] [public/sitemap.xml](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/public/sitemap.xml)
- Enrich sitemap entry with `<lastmod>`, `<changefreq>monthly</changefreq>`, and `<priority>1.0</priority>`.

---

### Category 4: Accessibility (a11y) & UX

#### [MODIFY] [src/components/ContactSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ContactSection.tsx)
- Add standard browser `autocomplete="name"` and `autocomplete="email"` attributes.
- Add `aria-required="true"` and clear `aria-label` bindings for screen readers.

#### [MODIFY] [src/components/Navbar.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/Navbar.tsx)
- Add `aria-current={activeSection === link.id ? 'page' : undefined}` for accessible screen reader navigation.
- Ensure all interactive elements have visible `focus-visible:ring-2` styling.

#### [MODIFY] [tailwind.config.ts](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/tailwind.config.ts)
- Add prefers-reduced-motion media query support to gracefully disable animations for users with motion sensitivity.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to verify clean chunk splitting, bundle size reduction, and zero TypeScript errors.
- Run `npm run lint` to ensure ESLint checks pass.

### Manual / Browser Verification
- **Lighthouse / Core Web Vitals**: Verify elimination of render-blocking font resources and layout shifts.
- **Rich Results & SEO**: Validate JSON-LD Schema syntax using schema validator structure.
- **Social Preview**: Verify Open Graph tags and meta properties.
- **Accessibility & Keyboard Navigation**: Verify Tab key navigation, focus rings, and screen reader labels.
