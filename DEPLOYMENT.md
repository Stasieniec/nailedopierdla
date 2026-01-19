# 🚀 Deployment Guide - Cloudflare Pages

This guide will help you deploy "Na ile do pierdla?" to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier works!)
- Git repository (GitHub, GitLab, or Bitbucket)
- Your code pushed to the repository

## Method 1: Deploy via Cloudflare Dashboard (Recommended)

### Step 1: Push to Git

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** in the left sidebar
3. Click **Create application**
4. Select **Pages** tab
5. Click **Connect to Git**

### Step 3: Configure Your Project

1. Select your repository from the list
2. Configure build settings:
   - **Project name:** `nailedopierdla` (or your preferred name)
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty)

### Step 4: Environment Variables (Optional)

No environment variables are required for this project.

### Step 5: Deploy

1. Click **Save and Deploy**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be available at: `https://nailedopierdla.pages.dev`

### Step 6: Custom Domain (Optional)

1. Go to your Pages project
2. Click **Custom domains**
3. Add your domain and follow the DNS setup instructions

## Method 2: Deploy via Wrangler CLI

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

This will open a browser window for authentication.

### Step 3: Build Your Project

```bash
npm run build
```

### Step 4: Deploy

```bash
wrangler pages deploy dist
```

Follow the prompts:
- Enter project name: `nailedopierdla`
- Production branch: `main`

Your site will be deployed and you'll get a URL like: `https://nailedopierdla.pages.dev`

## Continuous Deployment

Once connected to Git, Cloudflare Pages will automatically:
- ✅ Deploy on every push to `main` (production)
- ✅ Create preview deployments for pull requests
- ✅ Provide unique URLs for each preview

## Build Settings Reference

```yaml
Build command: npm run build
Build output directory: dist
Node version: 18 (or higher)
Environment: production
```

## Troubleshooting

### Build Fails

1. Check Node version is 18 or higher in Cloudflare Pages settings
2. Verify `package.json` has all dependencies
3. Check build logs in Cloudflare Dashboard

### TypeScript Errors

The project uses TypeScript in `.astro` files. Make sure:
- TypeScript is properly configured
- No type errors in `src/pages/index.astro`

### Tailwind CSS Not Loading

Make sure:
- `@tailwindcss/vite` is in `package.json`
- `global.css` is imported in your Astro page
- Build command is `npm run build`, not `astro build`

## Performance Optimization

Cloudflare Pages provides:
- 🚀 Global CDN distribution
- ⚡ HTTP/3 and Brotli compression
- 🔒 Free SSL certificates
- 📊 Web analytics (optional)

## Monitoring

After deployment, monitor your site:
1. Go to Cloudflare Dashboard → Pages
2. Select your project
3. View analytics and deployment history

## Rollback

If something goes wrong:
1. Go to your Pages project
2. Click **Deployments**
3. Find a working deployment
4. Click **Rollback to this deployment**

## Custom 404 Page (Optional)

Create `src/pages/404.astro` for a custom error page.

## Security Headers (Optional)

Add custom headers via `public/_headers`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

## Need Help?

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Astro Documentation](https://docs.astro.build/)
- [Astro Cloudflare Adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)

---

Happy deploying! 🎉
