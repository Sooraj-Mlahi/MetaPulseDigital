# MetaPulse Digital - AI Marketing Intelligence Platform

## Overview

MetaPulse Digital is an AI-powered marketing intelligence platform built as a modern web application. The platform showcases various AI-driven marketing solutions including demo operations automation (DemoOps), eCommerce reorder acceleration, Answer Engine Optimization (AEO), and multi-touch attribution measurement. The application features an interactive demo dashboard with B2B and DTC simulations, company information pages, and a contact form.

The platform is built as a client-side rendered Next.js application with a focus on rich animations, responsive design, and modern UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
**Next.js 16 with App Router** - The application uses Next.js's modern App Router architecture for routing and page organization. All pages are client-side rendered using the `'use client'` directive, indicating a fully interactive SPA-like experience without server-side rendering for dynamic content.

**Rationale**: Next.js App Router provides modern routing conventions, built-in optimization features, and excellent developer experience while maintaining flexibility for client-side interactivity.

### UI Component System
**shadcn/ui with Radix UI Primitives** - The application uses a comprehensive component library built on Radix UI primitives, providing 40+ pre-built accessible components including accordions, dialogs, forms, tables, navigation menus, and more.

**Styling**: Tailwind CSS with a custom design system defined in `globals.css` using CSS variables for theming. All colors use HSL format for consistency and theme flexibility.

**Rationale**: This combination provides production-ready, accessible components with full customization control. The component library is locally managed rather than installed as a dependency, allowing for complete customization.

### Design System
**Dark Theme with AI-Focused Aesthetics** - The application implements a dark theme with teal (`--glow-teal: 183 75% 40%`) and orange (`--glow-orange: 25 95% 53%`) accent colors. Custom gradients and glow effects create an AI/tech-forward visual identity.

**Typography**: Space Grotesk for headings and general text, Inter as fallback, loaded via Google Fonts.

**Rationale**: The dark theme with vibrant accents creates a modern, technology-focused aesthetic appropriate for an AI platform while ensuring visual hierarchy and readability.

### Animation and Interactions
**Framer Motion** - Used throughout for page transitions, scroll-triggered animations, and interactive element states. Components use `motion` variants with `whileInView` triggers for scroll-based reveals.

**Rationale**: Framer Motion provides declarative animation APIs that integrate seamlessly with React components, enabling sophisticated animations without complex imperative code.

### State Management
**React Hooks and Local State** - The application uses React's built-in hooks (`useState`, `useEffect`) for component-level state management. No global state management library is implemented.

**TanStack Query** - Included in dependencies for potential server state management, though not currently utilized in the visible codebase.

**Rationale**: For a primarily presentational application with limited data fetching needs, React's built-in state management is sufficient. TanStack Query provides a path for future server state requirements.

### Theme Management
**next-themes** - Implements theme switching infrastructure, though currently locked to dark mode (`defaultTheme="dark"` and `enableSystem={false}`).

**Rationale**: next-themes provides a standardized approach to theme management with system preference detection, even when currently using a single theme.

### Form Handling
**React Hook Form with Resolvers** - The contact form uses React Hook Form for form state management and validation, with `@hookform/resolvers` for schema validation integration.

**Rationale**: React Hook Form minimizes re-renders and provides excellent developer experience for form management with built-in validation support.

### Routing Structure
- `/` - Home page with hero, AI panel carousel, modules grid, and about preview
- `/demo` - Interactive demo dashboard with B2B (Acme) and DTC (Nova) simulations
- `/about` - Company mission and information page
- `/contact` - Contact form page

All routes use client-side navigation without server components.

### Page Architecture Pattern
Each page follows a consistent pattern:
1. Client component declaration (`'use client'`)
2. Layout wrapper with Navigation and Footer components
3. Content sections using motion components for animations
4. Card-based layouts for information presentation

**Rationale**: This consistent structure ensures maintainability and predictable user experience across all pages.

### Component Organization
- `/components` - Shared layout components (Navigation, Footer, Hero, etc.)
- `/components/ui` - shadcn/ui component library (40+ components)
- `/app` - Next.js App Router pages and global styles
- `/hooks` - Custom React hooks (`use-mobile`, `use-toast`)
- `/lib` - Utility functions (primarily `cn` for class merging)

### Demo Simulation Logic
The demo page implements a week-by-week simulation system where users can:
- Switch between B2B (Acme) and DTC (Nova) tenant scenarios
- Simulate weekly progression with animated metric updates
- View different KPIs relevant to each business model (demos vs. repeat orders)

**Implementation**: Uses local state with metric calculations and Framer Motion for smooth number transitions during updates.

**Rationale**: This provides an engaging, interactive way to demonstrate the platform's value proposition without requiring backend infrastructure.

## External Dependencies

### Third-Party UI Libraries
- **Radix UI** - Comprehensive collection of accessible, unstyled UI primitives (15+ packages including Dialog, Dropdown Menu, Tabs, Tooltip, etc.)
- **Lucide React** - Icon library for consistent iconography throughout the application
- **Embla Carousel** - Carousel/slider functionality for the AI panel carousel component
- **CMDK** - Command menu component library
- **Input OTP** - OTP input component for potential authentication features

### Styling and CSS
- **Tailwind CSS** - Utility-first CSS framework for styling
- **class-variance-authority** - For creating component variants
- **clsx** - Utility for conditional className composition
- **tailwind-merge** - Merges Tailwind CSS classes while handling conflicts

### Animation
- **Framer Motion** - Production-ready animation library for React

### Utilities
- **date-fns** - Date manipulation and formatting library
- **react-day-picker** - Date picker component (used with Calendar UI component)
- **vaul** - Drawer component primitive

### Form Management
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Validation schema resolvers for React Hook Form
- **Zod** (implied by resolvers) - Schema validation library

### Data Fetching
- **TanStack Query (React Query)** - Server state management library (included but not actively used in current implementation)

### Typography
- **Google Fonts** - Space Grotesk and Inter font families

### Form Submission
**Web3Forms API** - The contact form is configured to submit to Web3Forms (requires `YOUR_WEB3FORMS_ACCESS_KEY` to be configured).

**Note**: The access key placeholder needs to be replaced with an actual API key for the contact form to function.

### Build and Development Tools
- **Next.js 16** - React framework with built-in compilation, bundling, and optimization
- **TypeScript** - Type safety (configured with relaxed settings: `strict: false`, no unused variable checks)
- **PostCSS** - CSS processing with Tailwind and Autoprefixer plugins

### Runtime Environment
- **Node.js 20+** - Required runtime environment
- **Development Server** - Runs on port 5000 (customized from Next.js default)