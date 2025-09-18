#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎨 Portfolio Profile Image Setup');
console.log('================================\n');

// Check if profile image exists
const profileImagePath = path.join(__dirname, 'public', 'profile-image.jpg');

if (fs.existsSync(profileImagePath)) {
  const stats = fs.statSync(profileImagePath);
  const fileSizeInBytes = stats.size;
  const fileSizeInKB = Math.round(fileSizeInBytes / 1024);
  
  console.log('✅ Profile image found!');
  console.log(`📁 File: ${profileImagePath}`);
  console.log(`📏 Size: ${fileSizeInKB} KB`);
  
  if (fileSizeInKB > 500) {
    console.log('⚠️  Warning: Image is quite large. Consider compressing it for better performance.');
  }
  
  if (fileSizeInKB < 10) {
    console.log('❌ This appears to be a placeholder file. Please replace with your actual photo.');
  }
} else {
  console.log('❌ Profile image not found!');
  console.log('📝 Please add your profile image as: public/profile-image.jpg');
}

console.log('\n🚀 Next steps:');
console.log('1. Replace public/profile-image.jpg with your actual photo');
console.log('2. Run: npm install');
console.log('3. Run: npm run dev');
console.log('4. Open: http://localhost:3000');
console.log('\n📖 For detailed instructions, see: PROFILE_IMAGE_GUIDE.md');

// Check if node_modules exists
if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
  console.log('\n⚠️  Dependencies not installed. Run: npm install');
}
