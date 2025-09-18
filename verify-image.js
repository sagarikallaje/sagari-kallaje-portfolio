#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🖼️  Profile Image Verification');
console.log('==============================\n');

const profileImagePath = path.join(__dirname, 'public', 'profile-image.jpg');

if (fs.existsSync(profileImagePath)) {
  const stats = fs.statSync(profileImagePath);
  const fileSizeInBytes = stats.size;
  const fileSizeInKB = Math.round(fileSizeInBytes / 1024);
  
  console.log('✅ Profile image found!');
  console.log(`📁 File: ${profileImagePath}`);
  console.log(`📏 Size: ${fileSizeInKB} KB`);
  console.log(`📅 Last modified: ${stats.mtime.toLocaleDateString()}`);
  
  if (fileSizeInKB > 50) {
    console.log('✅ Image size looks good for web use');
  }
  
  console.log('\n🎉 Your profile image is ready!');
  console.log('🚀 Run "npm run dev" to see it in action');
} else {
  console.log('❌ Profile image not found!');
  console.log('📝 Please add your profile image as: public/profile-image.jpg');
}

console.log('\n📖 Next steps:');
console.log('1. Run: npm install (if not done already)');
console.log('2. Run: npm run dev');
console.log('3. Open: http://localhost:3000');
console.log('4. Check the hero section for your profile image!');
