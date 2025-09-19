const fs = require('fs');
const path = require('path');

console.log('🎨 Project Banner Images Upload Guide');
console.log('=====================================\n');

console.log('📁 Create the following folder structure:');
console.log('modern-portfolio/public/projects/banners/\n');

console.log('📸 Upload your project banner images with these exact names:');
console.log('1. ai-refugee-aid-banner.jpg (or .png)');
console.log('2. agro-management-banner.jpg (or .png)');
console.log('3. currency-detector-banner.jpg (or .png)');
console.log('4. medicine-recommender-banner.jpg (or .png)\n');

console.log('💡 Recommended banner specifications:');
console.log('- Dimensions: 1200x600 pixels (2:1 aspect ratio)');
console.log('- Format: JPG or PNG');
console.log('- File size: Under 500KB for optimal loading');
console.log('- Content: Project screenshots, mockups, or relevant visuals\n');

console.log('🚀 After uploading images, run: npm run dev');
console.log('   to see your project banners in action!\n');

// Create the banners directory if it doesn't exist
const bannersDir = path.join(__dirname, 'public', 'projects', 'banners');
if (!fs.existsSync(bannersDir)) {
  fs.mkdirSync(bannersDir, { recursive: true });
  console.log('✅ Created banners directory: public/projects/banners/');
} else {
  console.log('✅ Banners directory already exists: public/projects/banners/');
}

console.log('\n📋 Project Banner Mapping:');
console.log('┌─────────────────────────┬─────────────────────────────────┐');
console.log('│ Project Name            │ Banner Image File              │');
console.log('├─────────────────────────┼─────────────────────────────────┤');
console.log('│ AI Refugee Aid          │ ai-refugee-aid-banner.jpg      │');
console.log('│ Agro Management         │ agro-management-banner.jpg     │');
console.log('│ Currency Detector       │ currency-detector-banner.jpg   │');
console.log('│ Medicine Recommender    │ medicine-recommender-banner.jpg│');
console.log('└─────────────────────────┴─────────────────────────────────┘');
