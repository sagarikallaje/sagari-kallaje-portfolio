@echo off
REM Sagari P. Kallaje Portfolio - Installation Script for Windows

echo 🚀 Setting up Sagari P. Kallaje Portfolio...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully
) else (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

REM Create necessary directories
echo 📁 Creating project directories...
if not exist "public\projects" mkdir "public\projects"
if not exist "src\lib" mkdir "src\lib"

echo ✅ Project directories created

REM Check for placeholder files
if not exist "public\profile-image.jpg" (
    echo 📸 Please add your profile image as 'public\profile-image.jpg' (400x400px recommended)
)

if not exist "public\resume.pdf" (
    echo 📄 Please add your resume as 'public\resume.pdf'
)

echo.
echo 🎉 Portfolio setup complete!
echo.
echo Next steps:
echo 1. Add your profile image to 'public\profile-image.jpg'
echo 2. Add your resume to 'public\resume.pdf'
echo 3. Add project screenshots to 'public\projects\'
echo 4. Customize the content in the component files
echo 5. Run 'npm run dev' to start the development server
echo.
echo Happy coding! 🚀
pause
