#!/bin/bash

# Sagari P. Kallaje Portfolio - Installation Script

echo "🚀 Setting up Sagari P. Kallaje Portfolio..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create necessary directories
echo "📁 Creating project directories..."
mkdir -p public/projects
mkdir -p src/lib

echo "✅ Project directories created"

# Copy placeholder images (if they don't exist)
if [ ! -f "public/profile-image.jpg" ]; then
    echo "📸 Please add your profile image as 'public/profile-image.jpg' (400x400px recommended)"
fi

if [ ! -f "public/resume.pdf" ]; then
    echo "📄 Please add your resume as 'public/resume.pdf'"
fi

echo ""
echo "🎉 Portfolio setup complete!"
echo ""
echo "Next steps:"
echo "1. Add your profile image to 'public/profile-image.jpg'"
echo "2. Add your resume to 'public/resume.pdf'"
echo "3. Add project screenshots to 'public/projects/'"
echo "4. Customize the content in the component files"
echo "5. Run 'npm run dev' to start the development server"
echo ""
echo "Happy coding! 🚀"
