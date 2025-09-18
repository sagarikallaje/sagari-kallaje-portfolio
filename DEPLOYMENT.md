# 🚀 Deployment Guide

This guide will help you deploy your portfolio to various platforms.

## Vercel (Recommended)

Vercel is the easiest and most reliable platform for Next.js applications.

### Automatic Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Custom Domain

1. **Add Domain in Vercel**
   - Go to your project dashboard
   - Click "Domains" tab
   - Add your custom domain

2. **Update DNS**
   - Add the CNAME record provided by Vercel
   - Wait for DNS propagation (up to 24 hours)

## Netlify

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder
   - Your site is live!

### Git-based Deployment

1. **Connect Repository**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `out`

## AWS Amplify

1. **Connect Repository**
   - Go to [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
   - Connect your GitHub repository
   - Select the main branch

2. **Configure Build**
   - Build command: `npm run build`
   - Output directory: `out`

## Railway

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Railway will auto-detect Next.js

## Environment Variables

If you need environment variables, create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Performance Optimization

### Image Optimization

1. **Use Next.js Image Component**
   ```tsx
   import Image from 'next/image'
   
   <Image
     src="/profile-image.jpg"
     alt="Profile"
     width={400}
     height={400}
     priority
   />
   ```

2. **Optimize Images**
   - Use WebP format when possible
   - Compress images before uploading
   - Use appropriate sizes

### SEO Optimization

1. **Update Metadata**
   - Edit `src/app/layout.tsx`
   - Update title, description, and Open Graph tags

2. **Add Structured Data**
   ```tsx
   const structuredData = {
     "@context": "https://schema.org",
     "@type": "Person",
     "name": "Sagari P. Kallaje",
     "jobTitle": "Computer Science Student",
     "url": "https://your-domain.com"
   }
   ```

## Monitoring

### Analytics

1. **Google Analytics**
   - Add GA4 tracking code
   - Monitor user behavior and performance

2. **Vercel Analytics**
   - Built-in analytics for Vercel deployments
   - Real-time performance metrics

### Error Monitoring

1. **Sentry**
   - Add Sentry for error tracking
   - Monitor production errors

## Maintenance

### Regular Updates

1. **Dependencies**
   ```bash
   npm update
   ```

2. **Content Updates**
   - Update project information
   - Add new skills and experiences
   - Refresh project screenshots

### Backup

1. **Code Backup**
   - Regular Git commits
   - Push to multiple remotes

2. **Content Backup**
   - Backup images and documents
   - Export contact form submissions

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check for TypeScript errors
   - Verify all imports are correct
   - Ensure all required files exist

2. **Image Loading Issues**
   - Check file paths
   - Verify image formats
   - Ensure proper Next.js Image usage

3. **Styling Issues**
   - Check Tailwind CSS configuration
   - Verify class names
   - Ensure proper imports

### Support

If you encounter issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Check the [Framer Motion documentation](https://www.framer.com/motion/)

## Success! 🎉

Your portfolio is now live and ready to showcase your work to the world!

Remember to:
- Keep your content updated
- Monitor performance
- Gather feedback
- Continuously improve

Happy coding! 🚀
