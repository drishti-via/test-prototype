# Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live in seconds!

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Self-Hosted

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

3. **Use a process manager** (like PM2) for production:
   ```bash
   npm install -g pm2
   pm2 start npm --name "calcmaster" -- start
   ```

## Environment Setup

No environment variables are required for basic functionality. For advanced features:

Create a `.env.local` file:

```env
# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=

# Optional: Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Docker Deployment (Optional)

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t calcmaster .
docker run -p 3000:3000 calcmaster
```

## CI/CD

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      # Add your deployment step here
```

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test the calculator functionality
- [ ] Check mobile responsiveness
- [ ] Verify keyboard shortcuts work
- [ ] Test navigation between pages
- [ ] Check SEO metadata
- [ ] Verify sitemap is accessible at `/sitemap.xml`
- [ ] Check robots.txt at `/robots.txt`

## Monitoring

Consider setting up:
- **Analytics**: Google Analytics, Vercel Analytics
- **Error Tracking**: Sentry
- **Uptime Monitoring**: UptimeRobot

## Performance

The site is optimized for performance:
- Static page generation
- CSS-in-JS with Tailwind
- Optimized images and fonts
- Minimal JavaScript footprint

## Support

For deployment issues:
1. Check the [Next.js deployment docs](https://nextjs.org/docs/deployment)
2. Review the [README.md](./README.md)
3. Check console for errors