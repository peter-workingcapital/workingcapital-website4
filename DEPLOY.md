# 🚀 Deployment Guide

## Quick Deployment to Vercel (Recommended)

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `workingcapital-website`
3. Make it **Public** (for free hosting)
4. Don't initialize with README (we already have one)

### Step 2: Upload Files to GitHub
1. **Upload all files** from this folder to your new repository
2. **Commit and push** the changes

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"New Project"**
3. **Import** your `workingcapital-website` repository
4. Click **"Deploy"** - Vercel will automatically detect Next.js!

### Step 4: Add Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click **"Domains"** tab
3. Add `workingcapitalou.com`
4. Follow DNS instructions from your domain registrar

## Alternative: Netlify Deployment

### Step 1: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `out`
5. Deploy!

## Files to Upload

**Essential files:**
- `app/` folder (all files)
- `components/` folder (all files)
- `lib/` folder (all files)
- `types/` folder (all files)
- `package.json`
- `next.config.js`
- `tsconfig.json`
- `tailwind.config.js`
- `postcss.config.js`
- `README.md`
- `.gitignore`
- `setup.sh`

**Don't upload:**
- `node_modules/` (will be installed automatically)
- `.next/` (build files)
- `package-lock.json` (optional, but recommended)

## Local Development

After uploading to GitHub:

```bash
# Clone your repository
git clone https://github.com/yourusername/workingcapital-website.git
cd workingcapital-website

# Install dependencies
npm install

# Start development server
npm run dev
```

## Troubleshooting

### Build Fails
- Make sure all files are uploaded correctly
- Check that the `app/` directory exists in the root
- Verify `package.json` is in the root directory

### Domain Not Working
- Check DNS settings at your domain registrar
- Wait 24-48 hours for DNS propagation
- Verify domain is added correctly in Vercel/Netlify

### Performance Issues
- Run `npm run build` locally to test
- Check for any console errors
- Verify all images are optimized

## Support

For technical issues:
- **Email**: peter@workingcapitalou.com
- **Phone**: +34 627 71 7137
