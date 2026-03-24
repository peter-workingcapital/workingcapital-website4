# Deployment Guide - WorkingCapital Website

## Quick Start

1. **Install Node.js 18+** from [nodejs.org](https://nodejs.org/)
2. **Run the setup script**:
   ```bash
   ./scripts/setup.sh
   ```
3. **Open your browser** to [http://localhost:3000](http://localhost:3000)

## Manual Setup

If the setup script doesn't work:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Production Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your GitHub repository

### Option 2: Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `out` folder** to Netlify

3. **Set build command**: `npm run build`
4. **Set publish directory**: `out`

### Option 3: Traditional Hosting

1. **Build the project**:
   ```bash
   npm run build
   npm run export
   ```

2. **Upload the `out` folder** to your web server

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=peter@workingcapitalou.com
NEXT_PUBLIC_CONTACT_PHONE=+34627717137
```

## Performance Optimization

### Before Deployment

1. **Optimize images**:
   - Use WebP format when possible
   - Compress images to reduce file size
   - Use appropriate dimensions

2. **Test performance**:
   ```bash
   npm run build
   npm run start
   ```
   Then test with [PageSpeed Insights](https://pagespeed.web.dev/)

3. **Enable compression** on your server

### After Deployment

1. **Set up analytics** (Google Analytics, etc.)
2. **Configure CDN** for static assets
3. **Set up monitoring** (Uptime monitoring, error tracking)

## SEO Checklist

- [ ] Update meta tags in `src/app/layout.tsx`
- [ ] Add Google Analytics tracking code
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google My Business listing
- [ ] Add structured data for local business
- [ ] Test with Google's Rich Results Test

## Contact Form Integration

The contact form currently logs to console. To make it functional:

1. **Add form handling service** (Formspree, Netlify Forms, etc.)
2. **Update the form submission** in `ContactSection.tsx`
3. **Add email notifications** for new submissions

## Domain Setup

1. **Purchase domain** (workingcapitalou.com)
2. **Configure DNS** to point to your hosting provider
3. **Set up SSL certificate** (usually automatic with modern hosting)
4. **Update environment variables** with production URL

## Maintenance

### Regular Updates

- Update dependencies monthly
- Monitor performance metrics
- Review and update content
- Check for broken links

### Monitoring

- Set up uptime monitoring
- Monitor Core Web Vitals
- Track conversion rates
- Monitor form submissions

## Support

For technical support or questions about the website:

- **Email**: peter@workingcapitalou.com
- **Phone**: +34 627 71 7137

## Troubleshooting

### Common Issues

1. **Build fails**: Check Node.js version (18+ required)
2. **Images not loading**: Verify image paths and formats
3. **Animations not working**: Check Framer Motion installation
4. **Form not submitting**: Verify form handling setup

### Performance Issues

1. **Slow loading**: Optimize images and enable compression
2. **Large bundle size**: Check for unused dependencies
3. **Poor mobile performance**: Test on actual devices

## Security

- Keep dependencies updated
- Use HTTPS in production
- Validate all form inputs
- Implement rate limiting for forms
- Regular security audits
