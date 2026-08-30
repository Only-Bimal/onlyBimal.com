# Project Summary: OnlyBimal.com

## 1. Overview
**OnlyBimal.com** is a modern, responsive personal portfolio website for **Bimal**, a seasoned Solutions Architect, Appian Technical Architect, and Cloud/DevOps professional with 15+ years of experience in enterprise systems, low-code/no-code BPM, RPA, and cloud infrastructure.

The website presents a clean, single-page presentation of professional accomplishments, career history, technical skills, certifications, and contact options, complete with resume download functionality.

---

## 2. Tech Stack

| Category | Technology / Library |
| :--- | :--- |
| **Framework / Core** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) with `@vitejs/plugin-react-swc` |
| **Styling & Design** | [Tailwind CSS](https://tailwindcss.com/) with custom brand palette & typography |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) (built on Radix UI primitives) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Routing** | [React Router DOM](https://reactrouter.com/) (v7) |
| **Data Fetching / State** | [@tanstack/react-query](https://tanstack.com/query) |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) |
| **Deployment / CI/CD** | [GitHub Actions](https://github.com/features/actions) & [GitHub Pages](https://pages.github.com/) |

---

## 3. Project Structure

```
OnlyBimal.com/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD deployment to GitHub Pages
├── public/
│   ├── favicon.ico             # Site favicon
│   ├── og-image.png            # 1200x630 Open Graph & Twitter social share card
│   ├── placeholder.svg         # SVG placeholder asset
│   ├── resume.pdf              # Downloadable resume
│   ├── robots.txt              # Search engine crawling rules
│   └── sitemap.xml             # Search engine sitemap with lastmod & priority
├── src/
│   ├── components/
│   │   ├── ui/                 # Streamlined core UI components (button, toast, toaster, tooltip, sonner)
│   │   ├── AboutSection.tsx    # Professional summary and key areas of expertise
│   │   ├── ContactSection.tsx  # Accessible contact form with toast feedback & mail fallback
│   │   ├── EducationSection.tsx# Academic education & professional certifications
│   │   ├── ExperienceSection.tsx# Chronological career timeline & achievements
│   │   ├── Footer.tsx          # Page footer
│   │   ├── HeroSection.tsx     # Landing hero section with CTAs & resume download
│   │   ├── Navbar.tsx          # Scroll-aware, accessible navigation with active states
│   │   └── SkillsSection.tsx   # Categorized technical skills
│   ├── hooks/                  # Custom React hooks (use-toast, use-mobile)
│   ├── lib/                    # Shared utility helpers (cn helper)
│   ├── pages/
│   │   ├── Index.tsx           # Main single-page portfolio layout
│   │   └── NotFound.tsx        # 404 fallback page
│   ├── App.css                 # Application-level styles
│   ├── App.tsx                 # Root application wrapper, providers & routing
│   ├── index.css               # Design tokens, Tailwind directives & performance utilities
│   ├── main.tsx                # React DOM root render entry point
│   └── vite-env.d.ts           # Vite TypeScript definitions
├── CNAME                       # Custom domain binding (onlybimal.com)
├── components.json             # shadcn/ui component configuration
├── package.json                # Project dependencies and script commands
├── tailwind.config.ts          # Tailwind CSS theme & animation configurations
├── tsconfig.json               # TypeScript workspace configuration
└── vite.config.ts              # Vite configuration
```

---

## 4. Key Features & Sections

- **Hero Banner (`HeroSection.tsx`)**: High-impact introduction highlighting architectural leadership, with instant call-to-actions to get in touch and download the PDF resume.
- **About Me (`AboutSection.tsx`)**: In-depth overview of 15+ years of domain expertise across Appian BPM, RPA (UiPath/Blue Prism), .NET, full-stack architecture, and cloud solutions.
- **Experience Timeline (`ExperienceSection.tsx`)**: Structured timeline detailing positions at EXL Service, HCL Technologies, Boss Computech, and Interactive Education.
- **Skills Grid (`SkillsSection.tsx`)**: Interactive badge grid categorizing technical competencies across Cloud Platforms, Languages, Databases, and Web Technologies.
- **Education & Certifications (`EducationSection.tsx`)**: Highlights formal degrees (MCA, PGDCA) alongside industry certifications (Appian Certified, AWS Certified Cloud Practitioner, UiPath Certified Solution Architect & Business Analyst).
- **Contact & Inquiries (`ContactSection.tsx`)**: Direct email, LinkedIn, and GitHub links paired with an interactive message submission form with toast validation and direct mail client integration.
- **Responsive Navigation (`Navbar.tsx`)**: Scroll-aware, fixed navigation bar with active section tracking, smooth section anchor links, and a mobile drawer.

---

## 5. Development & Deployment

### Local Development
```bash
# 1. Install dependencies
npm install

# 2. Start local development server (auto-reloading)
npm run dev

# 3. Lint codebase
npm run lint

# 4. Build for production
npm run build
```

### Deployment Pipeline
The repository uses a GitHub Actions workflow (`.github/workflows/deploy.yml`) that triggers on every push to the `main` branch. It automatically installs dependencies, compiles the static production bundle using Vite (`npm run build`), and deploys the output in `dist/` directly to **GitHub Pages** bound to `onlybimal.com`.

