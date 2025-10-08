# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run astro` - Run Astro CLI commands

### Package Management
- Uses `pnpm` as package manager (see `.npmrc`)
- Lock file: `pnpm-lock.yaml`

## Project Architecture

### Tech Stack
- **Framework**: Astro 5.x with React integration
- **Styling**: Tailwind CSS with custom configuration
- **UI Components**: NextUI, Radix UI primitives, custom components
- **State Management**: Zustand with persistence
- **Analytics**: Vercel Analytics, Meta Pixel
- **Deployment**: Vercel adapter configured

### Directory Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui style)
│   └── *.tsx           # Page-specific components
├── sections/           # Page sections (mix of .astro and .tsx)
├── pages/              # Astro pages and API routes
│   └── api/            # API endpoints
├── layouts/            # Astro layout components
├── lib/                # Utility libraries and API functions
├── config/             # Configuration files and utilities
├── stores/             # Zustand state stores
├── types/              # TypeScript type definitions
└── utils/              # General utility functions
```

### Key Architecture Patterns

#### Component Strategy
- **Astro Components** (.astro): Used for static sections, layouts, and pages
- **React Components** (.tsx): Used for interactive components requiring state
- **Hybrid Approach**: Astro pages can import React components with `client:` directives

#### State Management
- **Zustand Store** (`src/stores/servicio.ts`): Manages quote form state with persistence
- **Persistent State**: Quote data is stored in localStorage via Zustand middleware

#### Styling Approach
- **Tailwind CSS**: Primary styling framework with custom config
- **Global Styles**: Defined in Layout.astro with custom CSS variables
- **Component Variants**: Uses `class-variance-authority` for component styling

#### API Structure
- **Internal APIs**: Located in `src/pages/api/`
- **External Integrations**: Meta Pixel tracking, email services via Resend

### Business Logic

#### Quote System
- **Fixed Pricing**: Service cost is set to Q35 (see `src/stores/servicio.ts:81`)
- **Service Types**: COD (Cash on Delivery) and ESTANDAR (Standard)
- **Coverage Areas**: Guatemala City, Mixco, Villa Nueva, and surrounding municipalities
- **Package Types**: Sobre (envelope), Paquete Pequeño (small), Paquete Mediano (medium)

#### Form Management
- **React Hook Form**: Used for form validation and handling
- **Zustand Integration**: Form state is managed through the quote store
- **PDF Generation**: Uses jsPDF for generating quote documents

### Development Notes

#### Theme System
- **Dark/Light Mode**: Implemented via Tailwind classes with localStorage persistence
- **Theme Toggle**: Handled in Layout.astro with MutationObserver

#### Client-Side Hydration
- Use `client:load` for components needed immediately
- Use `client:visible` for components that should hydrate when in viewport
- Most components can remain server-rendered unless interactivity is required

#### TypeScript Configuration
- Configured for Astro with React support
- Type definitions in `src/types/` for business logic types
- Uses `@/*` path mapping for imports

### Key Files to Understand
- `src/layouts/Layout.astro` - Main layout with theme system and Meta Pixel
- `src/stores/servicio.ts` - Quote management and pricing logic
- `src/config/site.ts` - Configuration data and static content
- `astro.config.mjs` - Astro configuration with integrations