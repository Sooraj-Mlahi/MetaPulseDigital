# MetaPulse Digital - Next.js Application

A modern AI marketing intelligence platform built with Next.js, TypeScript, and Tailwind CSS.

## Overview

MetaPulse Digital showcases AI-powered marketing intelligence solutions with features including:
- Interactive demo dashboard with B2B/DTC simulations
- Company information and mission
- Contact form
- Responsive design with dark theme
- Smooth animations and transitions

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Build for Production

```bash
npm run build
npm run start
```

## Configuration

### Contact Form Setup

The contact form requires a Web3Forms API key to function. To set it up:

1. Sign up for a free account at [Web3Forms](https://web3forms.com)
2. Get your access key
3. Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` in `app/contact/page.tsx` with your actual API key

Alternatively, use environment variables:

Create a `.env.local` file:
```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

Then update `app/contact/page.tsx`:
```typescript
access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
```

## Project Structure

```
├── app/                   # Next.js App Router pages
│   ├── layout.tsx        # Root layout with providers
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles and theme
│   ├── demo/             # Demo dashboard page
│   ├── about/            # About page
│   └── contact/          # Contact page
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── Navigation.tsx   # Main navigation
│   ├── Hero.tsx         # Hero section
│   ├── Footer.tsx       # Footer component
│   ├── ThemeProvider.tsx # Theme provider wrapper
│   └── ...
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
└── public/              # Static assets
```

## Features

### Pages
- **Home**: Hero section, AI panel carousel, modules grid, and about preview
- **Demo**: Interactive dashboard with B2B SaaS and DTC eCommerce simulations
- **About**: Company mission, approach, vision, and statistics
- **Contact**: Contact form with social links and information

### Design
- Responsive design that works on all device sizes
- Dark theme with teal and orange accent colors
- Gradient effects and glow animations
- Custom typography using Space Grotesk and Inter fonts

### Interactivity
- Client-side navigation with Next.js routing
- Animated page transitions with Framer Motion
- Interactive demo dashboard with real-time metrics
- Mobile-responsive navigation menu

## Deployment

This application is deployed on Vercel:

- **Live Site**: [MetaPulse Digital](https://metapulsedigital.com)
- **Build Command**: `npm run build`
- **Framework**: Next.js (Auto-detected)
- **Environment Variables**: Configured in Vercel dashboard
- **Custom Domain**: metapulsedigital.com

## Development Notes

- All interactive components use the `"use client"` directive
- Navigation uses Next.js App Router (Link and usePathname)
- Components follow shadcn/ui patterns
- All interactive elements include data-testid attributes for testing

## License

All rights reserved © MetaPulse Digital
