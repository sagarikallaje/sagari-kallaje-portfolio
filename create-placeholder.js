const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder as a temporary profile image
const svgPlaceholder = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1E40AF;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)"/>
  <circle cx="200" cy="160" r="60" fill="white" opacity="0.9"/>
  <path d="M120 280 Q200 240 280 280 L280 400 L120 400 Z" fill="white" opacity="0.9"/>
  <text x="200" y="320" text-anchor="middle" fill="#1E40AF" font-family="Arial, sans-serif" font-size="24" font-weight="bold">SP</text>
  <text x="200" y="350" text-anchor="middle" fill="#1E40AF" font-family="Arial, sans-serif" font-size="14">Profile Image</text>
</svg>`;

const publicDir = path.join(__dirname, 'public');
const placeholderPath = path.join(publicDir, 'profile-image.jpg');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write the SVG as a temporary placeholder
fs.writeFileSync(placeholderPath.replace('.jpg', '.svg'), svgPlaceholder);

console.log('✅ Created temporary SVG placeholder');
console.log('📁 Location: public/profile-image.svg');
console.log('\n📋 Next steps:');
console.log('1. Replace the SVG with your actual JPG image');
console.log('2. Save your image as "profile-image.jpg" in the public folder');
console.log('3. Make sure it\'s square (1:1 aspect ratio)');
console.log('4. Use high resolution (400x400+ pixels)');
