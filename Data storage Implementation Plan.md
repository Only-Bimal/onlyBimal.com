# Implementation Plan: Extract Portfolio Data into Centralized JSON

Extract all hardcoded content across the application into a unified, clean JSON data file (`src/data/portfolioData.json`). Components will consume this data dynamically, allowing easy maintenance and instant updates to portfolio content without touching React component files.

## Proposed Changes

### Data Architecture

#### [NEW] [portfolioData.json](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/data/portfolioData.json)
- Consolidate all site data into structured sections:
  - `personal`: Global personal info (name, title, email, social links, resume)
  - `navigation`: Navigation items (`name`, `href`, `id`)
  - `hero`: Title, subtitle, description, CTAs, and hero image attributes
  - `about`: Intro paragraphs, detailed bullet highlights, and key focus areas
  - `skills`: Categorized technical skills (Cloud, Languages, Databases, Web)
  - `experience`: Work history items (title, company, period, location, bullet points)
  - `education`: Academic history and certifications list
  - `contact`: Contact prompt text, contact cards (email, LinkedIn, GitHub), and form settings
  - `footer`: Brand name, role, copyright text, and tagline

#### [MODIFY] [tsconfig.app.json](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/tsconfig.app.json)
- Ensure `"resolveJsonModule": true` is enabled for clean, type-checked JSON imports across the app.

---

### Component Integration

#### [MODIFY] [Navbar.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/Navbar.tsx)
- Use navigation links and brand name from `portfolioData.json`.

#### [MODIFY] [HeroSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/HeroSection.tsx)
- Use hero heading, subtitle, description, CTA buttons, and image metadata from `portfolioData.json`.

#### [MODIFY] [AboutSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/AboutSection.tsx)
- Map paragraphs, highlights, and key areas from `portfolioData.json`.

#### [MODIFY] [SkillsSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/SkillsSection.tsx)
- Render skill categories dynamically from `portfolioData.json`.

#### [MODIFY] [ExperienceSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ExperienceSection.tsx)
- Load career timeline and descriptions from `portfolioData.json`.

#### [MODIFY] [EducationSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/EducationSection.tsx)
- Map degrees and certifications lists from `portfolioData.json`.

#### [MODIFY] [ContactSection.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ContactSection.tsx)
- Load contact description, email address, social links, and fallbacks from `portfolioData.json`.

#### [MODIFY] [Footer.tsx](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/Footer.tsx)
- Load brand name, role title, and tagline from `portfolioData.json`.

---

## Verification Plan

### Automated Build Verification
- Run `npm run build` to verify TypeScript compilation, JSON parsing, and asset resolution.

### Manual / Browser Verification
- Verify all sections (Hero, About, Skills, Experience, Education, Contact, Footer, Navbar) render accurately with all previous content intact.
- Verify links, mailto actions, theme toggle, and mobile navigation remain fully functional.
