# Personal Portfolio - Claude Code Profile

## Project Overview
React + TypeScript portfolio website for Anas Tber, deployed on Vercel with custom domain at https://anastber.com

## Tech Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: SCSS with CSS custom properties for theming
- **Deployment**: Vercel
- **Domain**: Custom domain (anastber.com)

## Key Features
- Two-column layout: sticky identity sidebar (name, rotating tagline, section nav, links, theme toggle) and scrolling content
- Light/dark theme following the system, with a persisted manual toggle
- Scroll-spy navigation, scroll reveal and subtle text animations (respects reduced motion)
- Typography: Fraunces (display) + Figtree (body)

## Project Structure
```
src/
├── components/
│   ├── Sidebar.tsx        # Sticky identity column + section nav
│   ├── RotatingWords.tsx  # Animated tagline words
│   ├── ThemeToggle.tsx    # Light/dark switch
│   ├── Entry.tsx          # Shared experience/project row
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── data/content.ts        # All site copy: links, experiences, projects
├── hooks/
│   ├── useTheme.ts
│   ├── useActiveSection.ts # Scroll-spy
│   └── useReveal.ts        # Reveal-on-scroll
└── styles/
    ├── globals.scss        # Tokens (light/dark), base, layout, keyframes
    └── sections.scss       # Section and entry styles
```

## Sections Navigation
- `#about` - About and education
- `#experience` - Work experience
- `#projects` - Selected projects
- `#contact` - Contact

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## SEO Setup
- sitemap.xml - All sections mapped
- robots.txt - Search engine guidelines
- Google Search Console configured

## Positioning
Engineering-first profile with a genuine interest in modelling; long-term goal ML / AI engineer. Copy lives in `src/data/content.ts`.

## Contact Information
- Email: anas.tber@etu.ec-lyon.fr
- GitHub: https://github.com/anastber
- LinkedIn: https://www.linkedin.com/in/anas-tber-99b994222/