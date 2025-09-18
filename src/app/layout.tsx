import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sagari P. Kallaje - Computer Science Student & Developer',
  description: 'Portfolio of Sagari P. Kallaje, a Computer Science Engineering student passionate about web development, AI/ML, and creating user-centric solutions. Specializing in Python, JavaScript, React, and modern web technologies.',
  keywords: 'Sagari Kallaje, portfolio, computer science student, web developer, AI/ML, Python, JavaScript, React, Next.js, Bangalore, India',
  authors: [{ name: 'Sagari P. Kallaje' }],
  creator: 'Sagari P. Kallaje',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sagarikallaje.vercel.app',
    title: 'Sagari P. Kallaje - Computer Science Student & Developer',
    description: 'Portfolio showcasing modern web development, AI/ML projects, and innovative solutions. Computer Science Engineering student from Bangalore, India.',
    siteName: 'Sagari P. Kallaje Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagari P. Kallaje - Computer Science Student & Developer',
    description: 'Portfolio showcasing modern web development, AI/ML projects, and innovative solutions.',
    creator: '@sagarikallaje',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}