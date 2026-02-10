# 🚀 Quick Start Guide

Get your Scientific Calculator Website up and running in 3 minutes!

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)

Check versions:
```bash
node --version  # Should be 18.x or higher
npm --version   # Should be 9.x or higher
```

## Installation

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js (React framework)
- React & React DOM
- TypeScript (type safety)
- Tailwind CSS (styling)
- Jest (testing)
- All required dependencies

**Expected time:** 2-3 minutes

### 2. Start Development Server

```bash
npm run dev
```

**Expected output:**
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### 3. Open in Browser

Navigate to: **http://localhost:3000**

That's it! Your website is now running! 🎉

## 📱 Explore the Website

Once running, you'll have access to:

| Page | URL | What You'll See |
|------|-----|-----------------|
| **Home** | `/` | Beautiful landing page with hero section |
| **Calculator** | `/calculator` | Fully functional scientific calculator |
| **Documentation** | `/docs` | Complete documentation index |
| **Blog** | `/blog` | Blog with 4 articles |
| **About** | `/about` | About the project |
| **Contact** | `/contact` | Contact form |
| **Privacy** | `/privacy` | Privacy policy |

## 🧪 Run Tests

```bash
npm test
```

This runs 370+ lines of unit tests covering:
- Basic arithmetic operations
- Trigonometric functions
- Angle mode switching
- Edge cases and error handling

## 🔧 Available Commands

```bash
# Development
npm run dev        # Start dev server with hot-reload

# Production
npm run build      # Build optimized production bundle
npm start          # Start production server

# Code Quality
npm run lint       # Run ESLint
npm test           # Run Jest tests
```

## 📁 What's in Your Project?

```
├── src/
│   ├── app/              # All pages (11+ pages!)
│   ├── components/       # Shared UI components
│   ├── features/         # Calculator module
│   └── styles/           # Design system
├── tests/                # Unit tests
├── public/               # Static files
└── Configuration files
```

## 🎨 Customization

Want to change the colors? Edit:
- `tailwind.config.ts` - Design system colors
- `src/styles/tokens.css` - CSS custom properties

Want to add content?
- Edit files in `src/app/` - Add new pages
- Edit blog content in `src/app/blog/[slug]/page.tsx`
- Add new docs in `src/app/docs/`

## 🚀 Deploy

### Deploy to Vercel (Easiest)

1. Push code to GitHub
2. Import in [vercel.com](https://vercel.com)
3. Click "Deploy"

Done! 🎉

See [deploy.md](./deploy.md) for more deployment options.

## ❓ Common Issues

### Port 3000 Already in Use?

```bash
# Use a different port
PORT=3001 npm run dev
```

### npm install errors?

```bash
# Clear cache and try again
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors in editor?

```bash
# Ensure you're using the right Node version
nvm use 18  # If using nvm
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🎯 Next Steps

1. ✅ **Explore the site** - Click through all pages
2. ✅ **Test the calculator** - Try all functions
3. ✅ **Read the docs** - Learn keyboard shortcuts
4. ✅ **Check the blog** - Read the articles
5. ✅ **Run tests** - Ensure everything works
6. ✅ **Deploy** - Put it live on the web!

---

**Need Help?** Check out:
- [README.md](./README.md) - Full documentation
- [PROJECT_COMPARISON.md](./PROJECT_COMPARISON.md) - What changed
- [deploy.md](./deploy.md) - Deployment guide

Happy coding! 🚀