# CalcMaster - Scientific Calculator Website

A modern, full-featured scientific calculator website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Calculator Application
- **Basic Arithmetic**: Addition, subtraction, multiplication, division
- **Scientific Functions**: sin, cos, tan with support for both degrees and radians
- **Angle Mode Toggle**: Switch between DEG and RAD modes
- **Keyboard Support**: Full keyboard integration for fast input
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Error Handling**: Graceful handling of division by zero and invalid inputs
- **Pi Constant**: Quick access to the mathematical constant π

### Multi-Page Website
- **Home Page**: Marketing overview with feature highlights
- **Calculator Page**: The main scientific calculator tool
- **Documentation Pages**: Comprehensive guides covering:
  - Getting Started
  - Keyboard Shortcuts
  - Scientific Functions
- **Blog Section**: Educational content about mathematics and calculator usage
- **About Page**: Information about the project and team

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: React with TypeScript
- **Testing**: Jest (unit tests included)
- **Code Quality**: ESLint

## 📁 Project Structure

```
.
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── page.tsx             # Home page
│   │   ├── calculator/          # Calculator page
│   │   ├── docs/                # Documentation pages
│   │   ├── blog/                # Blog pages
│   │   ├── about/               # About page
│   │   ├── layout.tsx           # Root layout with header/footer
│   │   ├── globals.css          # Global styles
│   │   └── sitemap.ts           # SEO sitemap
│   ├── components/              # Shared React components
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Site footer
│   ├── features/
│   │   └── calculator/          # Calculator feature module
│   │       ├── engine.ts        # Pure calculator logic (testable)
│   │       ├── CalculatorWidget.tsx  # UI component
│   │       └── calculator.css   # Calculator-specific styles
│   └── styles/
│       └── tokens.css           # Design system tokens
├── tests/                       # Unit tests
│   └── calculator.test.ts       # Calculator engine tests
├── public/                      # Static assets
│   └── robots.txt               # SEO robots file
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── next.config.js               # Next.js configuration
└── README.md                    # This file
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run unit tests (Jest)

## 🧪 Testing

The project includes comprehensive unit tests for the calculator engine:

```bash
npm test
```

Test coverage includes:
- Basic arithmetic operations
- Trigonometric functions (sin, cos, tan)
- Angle mode switching (DEG/RAD)
- Error handling (division by zero)
- Edge cases and floating point precision
- State management

## 🎨 Design System

The project uses a custom design system built with Tailwind CSS:

### Colors
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Secondary**: Purple accents (#a855f7)
- **Dark Theme**: Dark backgrounds (#0f0f1a, #1a1a2e)
- **Action Colors**: Green (#00d4aa), Red (#e74c3c)

### Typography
- Font Family: Inter (Google Fonts)
- Clear hierarchy with responsive sizing

### Component Styles
- Consistent border radius and spacing
- Smooth hover and active states
- Accessible focus indicators

## 📱 Pages Overview

### [Home Page](/)
Marketing landing page featuring:
- Hero section with CTA buttons
- Feature highlights
- Responsive layout

### [Calculator Page](/calculator)
The scientific calculator application:
- Full keyboard support
- Scientific function panel (toggle)
- Angle mode switcher
- Keyboard shortcuts reference

### [Documentation](/docs)
 Comprehensive guides:
- **Getting Started**: Basic usage guide
- **Keyboard Shortcuts**: Efficient calculation tips
- **Scientific Functions**: Trigonometry explanation

### [Blog](/blog)
Educational content:
- Announcements
- Tutorials
- Tips and tricks
- Mathematics insights

### [About Page](/about)
Project information:
- Mission and values
- Technology stack
- Team overview

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Other Platforms

The project works on any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic functionality. You can add:
- `NEXT_PUBLIC_SITE_URL` - Production URL for SEO
- `NEXT_PUBLIC_ANALYTICS_ID` - Analytics tracking

### SEO and Meta Tags
The site includes:
- Dynamic sitemap generation
- Robots.txt configuration
- OpenGraph metadata
- Page-specific titles and descriptions

## 📄 License

This is a prototype project for demonstration purposes.

## 🤝 Contributing

This is a demonstration project showcasing modern web development practices with Next.js, TypeScript, and Tailwind CSS.

## 📞 Support

For issues or questions:
1. Check the [Documentation](/docs)
2. Read the [Blog](/blog) for tips
3. Review the included examples

---

Built with ❤️ using Next.js and TypeScript