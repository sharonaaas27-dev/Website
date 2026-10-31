# TUF Networks

**A curated network of founders, builders, creators and operators in Kerala, India.**

## Overview

TUF Networks (The Ultimate Foundery) is a curated community platform connecting founders, builders, creators and operators. The website serves as the primary entry point for the network, showcasing the community's purpose, values, and opportunities for involvement.

## Live Demo

Visit the website at: [tufnetworks.com](https://tuf-networks.vercel.app) *(or local: http://localhost:3000)*

## Table of Contents

- [Key Sections](#key-sections)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Design Highlights](#design-highlights)

## Key Sections

The homepage features these sequential sections:

| Section | ID | Description |
|---------|-----|-------------|
| **Hero** | `#top` | Main headline: "The right room changes everything." with call-to-action buttons |
| **Marquee** | `#marquee` | Scrolling tagline/brand awareness |
| **About** | `#about` | The core philosophy - "Quality over quantity", curated relationships |
| **Access** | `#access` | How to join / invitation process |
| **People** | `#people` | Community members |
| **Experiences** | `#experiences` | Past events and gatherings |
| **Spaces** | `#spaces` | Physical/digital meeting spaces |
| **Opportunities** | `#opportunities` | Jobs, collaborations, projects |
| **Network** | `#the-room` | The community network overview |
| **Membership** | `#membership` | Membership details and benefits |
| **Standard** | `#standard` | Community standards and values |
| **Gallery** | `#gallery` | Visual showcase of events and members |
| **Vision** | `#vision` | Future direction and roadmap |
| **Apply** | `#apply` | Invitation request form |
| **FAQ** | `#faq` | Frequently asked questions |

## Navigation

- **Primary nav**: About, The Room, Experiences, People, Membership, FAQ
- **Footer explore links**: Same as primary nav
- **Footer involvement links**: Request an invitation, The standard, Inside the room

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Custom CSS tokens + CSS Modules (no Tailwind)
- **UI Components**: Radix UI primitives, Lucide React icons
- **Forms**: React Hook Form + Zod validation
- **Images**: Next.js Image component with optimization
- **Validation**: Zod
- **Testing**: Vitest (unit), Playwright (e2e)
- **SEO**: Next.js Metadata, JSON-LD structured data
- **Fonts**: Space Grotesk (display), PT Serif Italic (editorial)
- **Deployment**: Vercel-ready (standalone output)

## Getting Started

### Prerequisites

- Node.js >= 22.13.0
- npm or pnpm

### Installation

```bash
cd Website
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site locally.

### Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

The site warns in production if `NEXT_PUBLIC_SITE_URL` is not set, as canonical URLs, Open Graph data, and the sitemap will use `http://localhost:3000` as the fallback.

### Build & Export

```bash
npm run build
npm start
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server (`next dev`) |
| `build` | Build the production site (`next build`) |
| `postbuild` | Prepare standalone output |
| `start` | Run the production server |
| `lint` | Run ESLint |
| `typecheck` | Run TypeScript type checking |
| `format` | Format with Prettier |
| `format:check` | Check formatting |
| `test` | Run Vitest unit tests |
| `test:watch` | Run Vitest in watch mode |
| `test:coverage` | Run Vitest with coverage |
| `test:e2e` | Run Playwright e2e tests |
| `test:e2e:ui` | Run Playwright e2e tests with UI |
| `validate` | Run full validation (typecheck + lint + format + test + build) |

## Project Structure

```
Website/
├── src/
│   ├── app/           # Next.js App Router pages & layout
│   ├── components/
│   │   ├── layout/    # SiteHeader, SiteFooter
│   │   ├── sections/  # Page sections (Hero, About, Apply, etc.)
│   │   └── ui/        # Reusable UI components (Button, Brand, etc.)
│   ├── lib/           # Utility functions & configurations
│   │   ├── site.ts    # Site config (SITE_NAME, NAV_ITEMS, SITE_URL)
│   │   ├── seo.ts     # SEO & JSON-LD generation
│   │   ├── faq.ts     # FAQ items
│   │   ├── enquiry-*.ts  # Enquiry-related logic
│   │   └── cn.ts      # Class name composition utility
│   └── hooks/         # Custom React hooks (use-active-section, use-media-query, use-scrolled)
├── public/            # Static assets (favicon, og-image, etc.)
├── package.json       # Dependencies & scripts
├── tsconfig.json      # TypeScript config
├── next.config.ts     # Next.js configuration
└── vite.config.ts     # Vite configuration (if present)
```

## Design Highlights

- **Color palette**: Dark theme (`#04100b` ink, `#07170f` surface) with green accent (`#00d966`)
- **Typography**: Space Grotesk for headlines/navigation, PT Serif Italic for editorial content
- **Spacing scale**: Consistent 4-token scale (--space-1 through --space-10)
- **Border**: Subtle line var(--line) used for dividers and links
- **Shadows**: Soft depth with `--shadow` and `--shadow-soft`
- **Responsive**: Mobile-first breakpoints at 479px, 767px, 1023px
- **Motion**: CSS transitions using `--easing` variable, respects `prefers-reduced-motion`
- **Accessibility**: Skip links, focus-visible styles, ARIA labels, inert mode for mobile menus

## SEO & Structured Data

The homepage generates JSON-LD structured data including:

- **Organization** schema for TUF Networks
- **Website** schema
- **FAQ** schema with all FAQ items

Metadata includes Open Graph and Twitter Card tags with configurable og-image (`/og-image.jpg`).

## License

Private project — TUF Networks