# Implementation Plan - Dark Theme & Theme Switcher

Add a custom `slate-800` / `slate-750` dark mode design system across the website with an accessible 2-way theme switcher in the navigation bar that accurately tracks and displays the active theme.

## User Review Required

> [!IMPORTANT]
> **Confirmed Choices**:
> 1. **2-Way Switcher**: Simple, instant toggle between **Light** and **Dark** themes.
>    - Defaults to user's OS preference if no choice is stored in `localStorage`.
>    - Shows a Moon icon in Light mode (clicking activates Dark mode) and a Sun icon in Dark mode (clicking activates Light mode).
>    - Embedded in both desktop Navbar and mobile drawer.
> 2. **Refined Slate-800 / Slate-750 Color Palette**:
>    - Base Background: `slate-800` (`#1e293b`) / `slate-750` (`#182234`)
>    - Alternate Sections: `slate-800` / `slate-850` (`#131c2e`)
>    - Elevated Cards & Containers: `slate-700` (`#334155`) / `slate-750` with subtle `slate-600` borders
>    - Typography: `slate-100` headings, `slate-200` & `slate-300` body text, `slate-400` muted text
>    - Accents: Brand blue (`#0A66C2` / `#38bdf8`) with high contrast

---

## Proposed Changes

### Theme Management & Context

#### [NEW] [useTheme.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/hooks/useTheme.tsx)
- Create a `ThemeProvider` and `useTheme` hook with 2-way switching (`light` | `dark`).
- Methods: `theme`, `toggleTheme`, `setTheme`.
- Saves selection to `localStorage` (`portfolio-theme`).
- Directly toggles the `.dark` class on `document.documentElement`.
- Initial state resolves stored preference or falls back to system preference (`window.matchMedia('(prefers-color-scheme: dark)').matches`).

#### [MODIFY] [index.html](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/index.html)
- Add inline script to read theme from `localStorage` before rendering, eliminating flash of light mode (FOUC).

#### [MODIFY] [App.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/App.tsx)
- Wrap the app with `<ThemeProvider>`.

---

### Design Tokens & CSS

#### [MODIFY] [index.css](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/index.css)
- Configure CSS variables for `.dark` matching the `slate-800` / `slate-750` theme palette:
  - `--background`: `222 47% 15%` (~`slate-800`)
  - `--foreground`: `210 40% 98%` (~`slate-100`)
  - `--card`: `217 33% 20%` (~`slate-750`)
  - `--card-foreground`: `210 40% 98%`
  - `--popover`: `217 33% 20%`
  - `--border`: `217 33% 28%` (~`slate-600`)
  - `--muted`: `217 33% 25%`
  - `--muted-foreground`: `215 20% 65%` (~`slate-400`)
  - `--accent`: `217 33% 25%`
  - `--ring`: `221 83% 53%`
- Update reusable utility classes:
  - `.section-title`: `dark:text-slate-100`
  - `.experience-card::after`: `dark:bg-slate-600`
  - `.skill-badge`: `dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-brand-blue dark:hover:text-white`

---

### Navigation & Theme Switcher Component

#### [NEW] [ThemeToggle.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ThemeToggle.tsx)
- 2-way toggle button with animated Sun/Moon icon transition.
- Explicit accessibility attributes: `aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}`.
- Distinct hover & active styles matching both light and dark themes.

#### [MODIFY] [Navbar.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/Navbar.tsx)
- Place `<ThemeToggle />` in desktop navbar and mobile navbar row.
- Adapt navbar backdrop blur and links:
  - Scrolled navbar: `bg-white/90 dark:bg-slate-800/90 border-b border-gray-100 dark:border-slate-700 backdrop-blur-sm`.
  - Brand name: `text-brand-navy dark:text-slate-100`.
  - Navigation links: `text-gray-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-blue-400`.
  - Active section pill: `dark:bg-slate-700 dark:text-blue-400`.
  - Mobile menu drawer: `bg-white dark:bg-slate-800 border-b dark:border-slate-700`.

---

### Portfolio Sections Dark Mode Styling

#### [MODIFY] [HeroSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/HeroSection.tsx)
- Hero gradient: `dark:from-slate-800 dark:to-slate-750`.
- Heading text: `dark:text-slate-100`.
- Paragraph text: `dark:text-slate-300`.
- Outline button: `dark:border-blue-400 dark:text-blue-400 dark:hover:bg-brand-blue dark:hover:text-white`.

#### [MODIFY] [AboutSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/AboutSection.tsx)
- Background: `bg-white dark:bg-slate-800`.
- Text & bullet points: `dark:text-slate-300`.
- Key Areas card: `dark:bg-slate-700/70 dark:border dark:border-slate-600/60`.
- Key Areas title: `dark:text-slate-100`.

#### [MODIFY] [ExperienceSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ExperienceSection.tsx)
- Background: `bg-gray-50 dark:bg-[#182234]`.
- Job titles: `dark:text-slate-100`.
- Dates & location: `dark:text-slate-400`.
- Bullet text: `dark:text-slate-300`.

#### [MODIFY] [SkillsSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/SkillsSection.tsx)
- Background: `bg-white dark:bg-slate-800`.
- Category titles: `dark:text-slate-100`.

#### [MODIFY] [EducationSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/EducationSection.tsx)
- Background: `bg-gray-50 dark:bg-[#182234]`.
- Degree/Certificate titles: `dark:text-slate-100`.
- Section headings: `dark:text-slate-100`.
- Dates & location: `dark:text-slate-400`.
- Descriptions: `dark:text-slate-300`.

#### [MODIFY] [ContactSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ContactSection.tsx)
- Background: `bg-white dark:bg-slate-800`.
- Contact links & text: `dark:text-slate-300 dark:hover:text-blue-400`.
- Icon containers: `dark:bg-slate-700 dark:text-blue-400`.
- Form container: `dark:bg-slate-700/70 dark:border dark:border-slate-600/60`.
- Form title & labels: `dark:text-slate-100` and `dark:text-slate-300`.
- Form inputs & textarea: `dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 dark:placeholder:text-slate-400`.

#### [MODIFY] [Footer.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/Footer.tsx)
- Background: `dark:bg-[#131c2e] dark:border-t dark:border-slate-700`.

#### [MODIFY] [NotFound.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/pages/NotFound.tsx)
- Background: `dark:bg-slate-800 dark:text-slate-100`.
- Subtitle: `dark:text-slate-400`.
- Link: `dark:text-blue-400 dark:hover:text-blue-300`.

---

## Verification Plan

### Automated Verification
1. Run `npm run build` / `npx tsc --noEmit` to verify type safety and bundle creation.
2. Run `npm run lint` to verify code quality.

### Manual / Browser Verification
1. **Initial Load & Anti-Flash**:
   - Verify proper theme initialization without screen flash on refresh.
2. **2-Way Switcher Verification**:
   - Click switcher in desktop navbar: verify instant toggle between Light and Dark.
   - Verify Moon icon in light mode, Sun icon in dark mode.
   - Test toggle in mobile navigation drawer.
3. **Palette & Contrast Verification**:
   - Verify rich `slate-800`/`slate-750` backgrounds and high readability on all sections.
   - Test interactive elements (buttons, links, contact form inputs, toast notifications).
