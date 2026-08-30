# Implementation Plan - Portfolio Improvements & Bug Fixes

Implement all recommended fixes and enhancements across SEO, contact form functionality, interactive UI elements, typos, and metadata.

## User Review Required
> [!NOTE]
> For the contact form, we will implement interactive validation, form submission state, and instant feedback toast notifications using `sonner`.

## Proposed Changes

### 1. SEO, Metadata & Domain Configuration

#### [MODIFY] [public/sitemap.xml](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/public/sitemap.xml)
- Update `<loc>` URL to `https://onlybimal.com/`.

#### [MODIFY] [public/robots.txt](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/public/robots.txt)
- Update Sitemap reference URL to `https://onlybimal.com/sitemap.xml`.

#### [MODIFY] [index.html](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/index.html)
- Add canonical link (`https://onlybimal.com`).
- Clean up Open Graph and Twitter tags (author attribution, proper card tags).

#### [MODIFY] [package.json](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/package.json)
- Update project name from `vite_react_shadcn_ts` to `onlybimal.com`.

---

### 2. Components & UI Fixes

#### [MODIFY] [src/components/HeroSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/HeroSection.tsx)
- Add `asChild` prop to the "Download Resume" button to fix HTML button-anchor nesting issue.
- Refine heading structure to eliminate repetition between `<h1>` and `<h2>`.

#### [MODIFY] [src/components/ContactSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ContactSection.tsx)
- Add form state management (`name`, `email`, `message`, `isSubmitting`).
- Wire `onSubmit` handler with input validation and instant `toast.success` notifications.
- Enable direct email fallback (`mailto:`).

#### [MODIFY] [src/components/Navbar.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/Navbar.tsx)
- Point brand logo link to `#hero`.
- Add active section tracking during scroll.

#### [MODIFY] [src/components/AboutSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/AboutSection.tsx)
- Fix typo: `"developement"` -> `"development"`.

#### [MODIFY] [src/components/ExperienceSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ExperienceSection.tsx)
- Fix string concatenation whitespace issue (`"practice.I oversee"` -> `"practice. I oversee"`).

#### [MODIFY] [src/components/EducationSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/EducationSection.tsx)
- Clean up trailing whitespace in certification strings.

---

### 3. Documentation

#### [MODIFY] [Summary.md](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/Summary.md)
- Update summary with the resolved improvements and updated structure.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to verify clean TypeScript compilation and Vite bundling without errors.
- Run `npm run lint` to verify ESLint compliance.

### Manual Verification
- Test contact form submit and verify toast alert appears.
- Test "Download Resume" button clickable area.
- Check navbar active section highlighting and smooth scrolling.
