# 📸 Profile Image Setup Guide

## How to Add Your Profile Picture

### Step 1: Prepare Your Image
1. **Choose a high-quality photo** of yourself
2. **Recommended specifications:**
   - Size: 400x400px or larger (square aspect ratio)
   - Format: JPG, PNG, or WebP
   - Quality: High resolution, well-lit
   - Background: Clean, professional background works best

### Step 2: Replace the Placeholder
1. **Navigate to:** `modern-portfolio/public/profile-image.jpg`
2. **Replace the file** with your actual photo
3. **Keep the same filename:** `profile-image.jpg`

### Step 3: Alternative Image Sources
If you want to use a different image source, update the Hero component:

```tsx
// In src/components/sections/Hero.tsx, line 238
<Image
  src="/your-image-name.jpg"  // Change this path
  alt="Sagari P. Kallaje - Computer Science Student"
  width={400}
  height={400}
  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
  priority
/>
```

### Step 4: Image Optimization Tips
- **Use online tools** like TinyPNG to compress the image
- **Ensure good lighting** in the original photo
- **Consider professional headshots** for the best results
- **Test on different devices** to ensure it looks good

## 🎨 Enhanced Hero Section Features

### Visual Enhancements Added:
1. **Animated Border**: Rotating gradient border around the profile image
2. **Floating Tech Badges**: CS, AI, ML, WEB badges with animations
3. **Connection Lines**: Animated SVG path connecting elements
4. **Multiple Background Layers**: Depth and visual interest
5. **Hover Effects**: Scale and rotation on hover
6. **Status Indicators**: Small colored dots on floating badges

### Animation Details:
- **Profile Image**: Hover to scale and rotate slightly
- **Floating Elements**: Smooth up/down movement with rotation
- **Border**: Continuous 360° rotation
- **Connection Lines**: Animated path drawing
- **Background Elements**: Pulsing gradient orbs

## 🚀 Quick Setup Commands

```bash
# Navigate to the project directory
cd modern-portfolio

# Install dependencies (if not already done)
npm install

# Start the development server
npm run dev

# Open in browser
# Go to http://localhost:3000
```

## 📱 Responsive Design
The hero section is fully responsive and will look great on:
- **Desktop**: Full layout with side-by-side content
- **Tablet**: Adjusted spacing and sizing
- **Mobile**: Stacked layout with optimized image size

## 🎯 Pro Tips
1. **Professional Look**: Use a clean, well-lit headshot
2. **Consistent Branding**: Match your photo style with your overall brand
3. **High Quality**: Ensure the image is crisp and clear
4. **Square Format**: The image will be cropped to a circle, so center your face
5. **Test Different Images**: Try a few options to see what looks best

## 🔧 Troubleshooting
- **Image not showing**: Check the file path and name
- **Poor quality**: Use a higher resolution image
- **Wrong aspect ratio**: The image will be cropped to fit the circle
- **Slow loading**: Optimize the image size before adding

Your profile image will be the centerpiece of your hero section, so choose wisely! 🎨✨
