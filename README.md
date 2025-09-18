# Sagari P. Kallaje - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and experience as a Computer Science Engineering student.

## 🚀 Features

- **Modern Design**: Clean, minimal, and visually appealing layout with smooth scrolling
- **Responsive**: Fully responsive for desktop, tablet, and mobile devices
- **Interactive**: Smooth animations and micro-interactions using Framer Motion
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **Fast Loading**: Optimized images and code splitting for excellent performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
modern-portfolio/
├── public/
│   ├── profile-image.jpg          # Profile photo
│   ├── resume.pdf                 # Downloadable resume
│   └── projects/                  # Project screenshots
│       ├── refugee-aid.jpg
│       ├── agro-management.jpg
│       ├── currency-detector.jpg
│       └── medicine-recommender.jpg
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   └── components/
│       ├── Navigation.tsx        # Navigation component
│       ├── Footer.tsx            # Footer component
│       └── sections/
│           ├── Hero.tsx          # Hero section
│           ├── About.tsx         # About section
│           ├── Skills.tsx        # Skills section
│           ├── Projects.tsx      # Projects showcase
│           ├── Experience.tsx    # Experience & Education
│           └── Contact.tsx       # Contact form
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sagarikallaje/portfolio.git
   cd modern-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/sections/Hero.tsx`)
   - Name, title, and bio
   - Contact information
   - Social media links

2. **About Section** (`src/components/sections/About.tsx`)
   - Professional summary
   - Educational background
   - Key interests and skills

3. **Skills Section** (`src/components/sections/Skills.tsx`)
   - Technical skills and proficiency levels
   - Soft skills
   - Certifications

4. **Projects Section** (`src/components/sections/Projects.tsx`)
   - Project details and descriptions
   - Technologies used
   - GitHub and demo links

5. **Experience Section** (`src/components/sections/Experience.tsx`)
   - Work experience and internships
   - Education timeline
   - Certifications and achievements

6. **Contact Section** (`src/components/sections/Contact.tsx`)
   - Contact information
   - Social media links

### Images

Replace the placeholder images in the `public/` directory:

- `profile-image.jpg` - Your professional photo (400x400px recommended)
- `resume.pdf` - Your downloadable resume
- `projects/*.jpg` - Project screenshots (800x600px recommended)

### Styling

The portfolio uses a custom color scheme defined in `tailwind.config.js`. You can modify:

- Primary colors (blue theme)
- Secondary colors (gray theme)
- Typography settings
- Animation configurations

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

### Other Platforms

The portfolio can also be deployed to:
- Netlify
- AWS Amplify
- Railway
- Any platform that supports Next.js

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for optimal loading

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0369a1)
- **Secondary**: Gray scale (#f8fafc to #0f172a)
- **Accent**: Various gradients for different sections

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, gradient text
- **Body**: Regular weight, excellent readability

### Animations
- **Framer Motion**: Smooth page transitions and micro-interactions
- **Hover Effects**: Subtle scale and color transitions
- **Scroll Animations**: Elements animate into view

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sagarikallaje/portfolio/issues).

## 📞 Contact

**Sagari P. Kallaje**
- Email: sagarikallaje5159@gmail.com
- Phone: +91 90360 95159
- Location: Bangalore, India
- GitHub: [@sagarikallaje](https://github.com/sagarikallaje)
- LinkedIn: [Sagari P. Kallaje](https://linkedin.com/in/sagarikallaje)

---

⭐ If you found this portfolio helpful, please give it a star!
