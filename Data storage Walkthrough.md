# Centralized Portfolio Data Extraction Walkthrough

All portfolio details and section content have been extracted into a unified JSON file ([`src/data/portfolioData.json`](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/data/portfolioData.json)). You can now modify, add, or customize any text, skill, job experience, education, certification, link, or contact information directly in one single place.

---

## 📁 Centralized Data File

### [`src/data/portfolioData.json`](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/data/portfolioData.json)
Contains all structured data for the site:
- **`personal`**: Name, titles, email, resume path, and location.
- **`navigation`**: Brand title and header nav links.
- **`hero`**: Hero heading, role title, summary description, CTA buttons, and hero image attributes.
- **`about`**: Introduction text, bulleted highlight accomplishments, closing paragraphs, and key domain areas.
- **`skills`**: Categorized skill groups (Cloud Platforms, Programming Languages, Databases, Web Technologies).
- **`experience`**: Complete career timeline with role titles, companies, date ranges, locations, and achievements.
- **`education`**: Academic degrees and professional certifications.
- **`contact`**: Intro message, direct email, social channels (Email, LinkedIn, GitHub), and form placeholders/button labels.
- **`footer`**: Brand name, role title, tagline, and copyright notice.

---

## 🛠️ Updated Components

Each component now imports and consumes the centralized data cleanly:

1. **[`Navbar.tsx`](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/Navbar.tsx)**: Navigation links and brand logo dynamically read from `portfolioData.navigation`. Active section scroll tracking adapts automatically to the configured nav links.
2. **[`HeroSection.tsx`](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/HeroSection.tsx)**: Hero heading, subtitle, description, CTA buttons, and image metadata powered by `portfolioData.hero`.
3. **[`AboutSection.tsx`](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/AboutSection.tsx)**: Summary paragraphs, bullet points, and key areas powered by `portfolioData.about`.
4. **[`SkillsSection.tsx`](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/SkillsSection.tsx)**: Skill categories dynamically mapped from `portfolioData.skills`.
5. **[`ExperienceSection.tsx`](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ExperienceSection.tsx)**: Timeline cards rendered from `portfolioData.experience`.
6. **[`EducationSection.tsx`](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/EducationSection.tsx)**: Education and certification lists mapped from `portfolioData.education`.
7. **[`ContactSection.tsx`](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/ContactSection.tsx)**: Contact cards, email links, and form fields mapped from `portfolioData.contact`.
8. **[`Footer.tsx`](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/src/components/Footer.tsx)**: Footer titles, copyright, and tagline mapped from `portfolioData.footer`.
9. **[`tsconfig.app.json`](file:///d:/Visual%20Studio/Personal/OnlyBimal.com/tsconfig.app.json)**: Enabled `"resolveJsonModule": true` for typed JSON module resolution.

---

## ✅ Verification

- **Production Build**: Ran `npm run build` — TypeScript compilation and Vite bundling completed with zero errors.
- **Data Integrity**: All original text, links, structure, and formatting were preserved accurately in the JSON file.
