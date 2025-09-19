# 🎨 Project Banners Setup Guide

## Overview
Your portfolio now supports banner images for each project! This makes your projects more visually appealing and professional.

## 📁 Directory Structure
```
modern-portfolio/
├── public/
│   └── projects/
│       └── banners/
│           ├── ai-refugee-aid-banner.jpg
│           ├── agro-management-banner.jpg
│           ├── currency-detector-banner.jpg
│           └── medicine-recommender-banner.jpg
```

## 📸 Image Requirements

### File Names (Exact)
- `ai-refugee-aid-banner.jpg` - AI Refugee Aid project
- `agro-management-banner.jpg` - Agro Management project  
- `currency-detector-banner.jpg` - Currency Detector project
- `medicine-recommender-banner.jpg` - Medicine Recommender project

### Specifications
- **Dimensions**: 1200x600 pixels (2:1 aspect ratio)
- **Format**: JPG or PNG
- **File Size**: Under 500KB for optimal loading
- **Quality**: High resolution, clear and professional

### Content Suggestions
- Project screenshots or mockups
- UI/UX designs
- Technology stack visuals
- Project workflow diagrams
- Before/after comparisons
- Key features highlights

## 🚀 How to Upload

### Method 1: Direct Copy
1. Navigate to `modern-portfolio/public/projects/banners/`
2. Copy your banner images with the exact names listed above
3. Run `npm run dev` to see the changes

### Method 2: Using Helper Scripts
1. Run `node upload-project-banners.js` for detailed instructions
2. Or run `upload-banners.bat` on Windows

## ✨ Features

### Automatic Fallback
- If banner images are missing, the system shows a beautiful gradient background
- Fallback includes project icon and title
- No broken images or errors

### Responsive Design
- Banners scale properly on all devices
- Hover effects with subtle zoom
- Professional overlay for text readability

### Performance Optimized
- Next.js Image component for optimal loading
- Lazy loading for better performance
- Automatic format optimization

## 🎯 Project Mapping

| Project | Banner File | Category | Color Theme |
|---------|-------------|----------|-------------|
| AI Refugee Aid | `ai-refugee-aid-banner.jpg` | Mobile App | Blue-Purple |
| Agro Management | `agro-management-banner.jpg` | Web App | Green-Teal |
| Currency Detector | `currency-detector-banner.jpg` | AI/ML | Orange-Red |
| Medicine Recommender | `medicine-recommender-banner.jpg` | Data Science | Purple-Pink |

## 🔧 Customization

### Changing Banner Images
1. Replace the image file in `public/projects/banners/`
2. Keep the same filename
3. Refresh your browser

### Adding New Projects
1. Add project data to `projects` array in `Projects.tsx`
2. Include `banner: '/projects/banners/your-banner.jpg'`
3. Upload the banner image with the specified name

## 🎨 Design Tips

### Best Practices
- Use high-quality, professional images
- Ensure good contrast for text overlay
- Keep consistent style across all banners
- Test on different screen sizes

### Color Coordination
- Match banner colors with project themes
- Use complementary colors for text overlay
- Maintain brand consistency

## 🚀 Next Steps

1. **Upload your banner images** to the banners folder
2. **Run the development server**: `npm run dev`
3. **View your enhanced portfolio** at `http://localhost:3000`
4. **Customize further** as needed

Your portfolio will look much more professional and engaging with these banner images! 🎉
