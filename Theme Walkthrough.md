# Walkthrough - Dark Theme & Theme Switcher Implementation

We have added a custom `slate-800` / `slate-750` dark theme across the entire portfolio website along with a 2-way theme switcher in the navigation bar that accurately tracks and displays the active theme.

---

## Key Changes Made

### 1. Theme State Management & Persistence
- **[useTheme.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/hooks/useTheme.tsx)**: Created `ThemeProvider` and `useTheme` hook with:
  - 2-way toggle (`light` ↔ `dark`).
  - Automatic detection of system preference on initial visit.
  - Persistent storage in `localStorage` under key `portfolio-theme`.
  - Direct manipulation of `document.documentElement` (`dark` class).
- **[index.html](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/index.html)**: Added an inline `<script>` in the `<head>` to read the theme before the initial render, preventing any flash of unstyled content (FOUC) when refreshing in dark mode.
- **[App.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/App.tsx)**: Wrapped the root application tree in `<ThemeProvider>`.

### 2. Design Tokens & Styling
- **[index.css](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/index.css)**:
  - Configured `.dark` CSS variables tailored to `slate-800` / `slate-750`.
  - Updated reusable component classes (`.section-title`, `.experience-card::after`, `.skill-badge`) for seamless dark styling.

### 3. Interactive Theme Switcher Component
- **[ThemeToggle.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ThemeToggle.tsx)**:
  - Accessible button with `aria-label` and `title` reflecting the target theme.
  - Sun and Moon icons from `lucide-react` with smooth rotation/scaling animations.
  - Shows Moon icon in light mode (clicking switches to dark) and Sun icon in dark mode (clicking switches to light).
- **[Navbar.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/Navbar.tsx)**:
  - Integrated `<ThemeToggle />` in desktop navbar and mobile drawer.
  - Enhanced contrast between active and inactive navigation items:
    - **Active**: Vibrant solid blue pill (`bg-brand-blue text-white dark:bg-blue-600 dark:text-white font-semibold shadow-sm`) providing prominent, unmistakable indication of current section.
    - **Hover (High Contrast Pill Area)**: High-contrast pill surface (`hover:bg-slate-300 hover:text-slate-900 dark:hover:bg-slate-600 dark:hover:text-white`) creating immediate, punchy visual feedback for the link area on mouseover.
    - **Inactive (Default)**: Clean muted slate text (`text-gray-600 dark:text-slate-400`).
  - Styled navbar backdrop blur (`bg-white/90 dark:bg-slate-800/90`), border, and mobile drawer.

### 4. Portfolio Sections Dark Mode Styling
- **[HeroSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/HeroSection.tsx)**: Gradient background (`dark:from-slate-800 dark:to-[#161f2e]`), headings, paragraph, and outline resume button.
- **[AboutSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/AboutSection.tsx)**: Background, body copy, list items, and key areas card (`dark:bg-slate-700/60`).
- **[ExperienceSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ExperienceSection.tsx)**: Background (`dark:bg-[#182234]`), job titles, company colors, dates, and descriptions.
- **[SkillsSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/SkillsSection.tsx)**: Background and category headers.
- **[EducationSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/EducationSection.tsx)**: Background (`dark:bg-[#182234]`), headings, degree cards, dates, and descriptions.
- **[ContactSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ContactSection.tsx)**: Background, channel cards/icons, form inputs, textarea, and submit button.
- **[Footer.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/Footer.tsx)**: Background (`dark:bg-[#131c2e]`), border, and text.
- **[NotFound.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/pages/NotFound.tsx)**: Dark mode 404 screen.
- **[Index.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/pages/Index.tsx)**: Smooth transition background on page wrapper.

---

## Verification Results

### Build & Type-Checking
- **TypeScript**: `npx tsc --noEmit` passed with 0 errors.
- **ESLint**: `npm run lint` passed cleanly.
- **Production Build**: `npm run build` completed successfully in `7.84s`.
