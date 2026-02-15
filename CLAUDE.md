# Personal Portfolio - Claude Code Profile

## Project Overview
React + TypeScript portfolio website for Anas Tber, deployed on Vercel with custom domain at https://anastber.com

## Tech Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: SCSS with CSS custom properties for theming
- **Deployment**: Vercel
- **Domain**: Custom domain (anastber.com)

## Key Features
- Dark/Light theme toggle
- Responsive mobile-first design
- Smooth scrolling navigation
- Particle background animation
- Project galleries with modal views
- Animated timeline for experience
- Contact form integration

## Project Structure
```
src/
├── components/          # React components
│   ├── About.tsx       # About section with education & skills
│   ├── Contact.tsx     # Contact section with info cards
│   ├── Experience.tsx  # Timeline-based experience display
│   ├── Hero.tsx        # Landing section with profile
│   ├── Navigation.tsx  # Fixed navigation with mobile menu
│   ├── ParticleBackground.tsx # Canvas-based particle system
│   ├── Projects.tsx    # Project showcase with galleries
│   └── ThemeToggle.tsx # Dark/light theme switcher
├── hooks/
│   ├── useTheme.ts     # Theme management hook
│   └── useTypewriter.ts # Typewriter effect hook
├── styles/
│   └── globals.scss    # Global styles and CSS variables
└── [component].scss    # Component-specific styles
```

## Sections Navigation
- `#home` - Hero section
- `#about` - About, education, skills
- `#experience` - Work experience timeline
- `#projects` - Project portfolio
- `#contact` - Contact information

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## SEO Setup
- sitemap.xml - All sections mapped
- robots.txt - Search engine guidelines
- Google Search Console configured

## Recent Improvements
- Fixed mobile scrolling issues (removed preventDefault from touch events)
- Enhanced mobile responsiveness and centering
- Improved text wrapping and spacing on mobile devices
- Added SEO optimization files

## Design Patterns
- CSS custom properties for theming
- Mobile-first responsive design
- Component-specific SCSS files
- Intersection Observer for animations
- Canvas-based particle effects

## Contact Information
- Email: anas.tber@etu.ec-lyon.fr
- GitHub: https://github.com/anastber
- LinkedIn: https://www.linkedin.com/in/anas-tber-99b994222/