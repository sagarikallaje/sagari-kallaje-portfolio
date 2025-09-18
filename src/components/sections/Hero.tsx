'use client'

import { motion } from 'framer-motion'
import { Download, ChevronDown, Github, Linkedin, Mail, MapPin, MessageSquare } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-secondary-500 to-secondary-700 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-gradient-to-r from-primary-300 to-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-6000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary-400 rounded-full animate-bounce animation-delay-3000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary-300 rounded-full animate-bounce animation-delay-5000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-purple-400 rounded-full animate-bounce animation-delay-7000"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-2 text-primary-600 font-medium"
              >
                <MapPin size={16} />
                <span>Bangalore, India</span>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 text-sm font-medium rounded-full mb-4"
                >
                  👋 Welcome to my portfolio
                </motion.span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4"
              >
                Hi, I'm{' '}
                <span className="text-gradient bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent">
                  Sagari P. Kallaje
                </span>
              </motion.h1>
              
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="inline-block text-2xl sm:text-3xl text-gray-700 font-semibold"
                >
                  Computer Science Engineering Student
                </motion.span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-1 bg-gradient-to-r from-primary-500 to-primary-700 mt-2 rounded-full"
                ></motion.div>
              </motion.div>
              
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mb-8"
              >
                Passionate about <span className="font-semibold text-primary-600">web development</span>,{' '}
                <span className="font-semibold text-secondary-600">AI/ML</span>, and creating{' '}
                <span className="font-semibold text-purple-600">user-centric solutions</span>. 
                Currently pursuing B.E. in Computer Science & Engineering with a focus on 
                modern technologies and innovative problem-solving.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download size={20} className="relative z-10 mr-2" />
                <span className="relative z-10">Download Resume</span>
              </motion.a>
              
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                <span>Get In Touch</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6"
            >
              <motion.a
                href="https://github.com/sagarikallaje"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-primary-600"
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/sagarikallaje"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-primary-600"
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                href="https://wa.me/919036095159"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-green-600"
              >
                <MessageSquare size={24} />
              </motion.a>
              
              <motion.a
                href="mailto:sagarikallaje5159@gmail.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-primary-600"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Enhanced Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Multiple background decorations for depth */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-15 blur-2xl"></div>
              
              {/* Profile image container with enhanced styling */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl bg-white p-3 border-4 border-white"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/profile-image.jpg"
                    alt="Sagari P. Kallaje - Computer Science Engineering Student"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    priority
                  />
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                
                {/* Animated border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-border"
                  style={{
                    background: 'linear-gradient(45deg, #0ea5e9, #8b5cf6, #ec4899)',
                    padding: '2px',
                    borderRadius: '50%'
                  }}
                />
              </motion.div>
              
              {/* Enhanced floating elements with more variety */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-xl border-2 border-primary-100"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CS</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-xl border-2 border-secondary-100"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-secondary-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              </motion.div>

              {/* Additional floating tech badges */}
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/4 -left-8 bg-white rounded-full p-3 shadow-lg border-2 border-purple-100"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">ML</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                className="absolute bottom-1/4 -right-8 bg-white rounded-full p-3 shadow-lg border-2 border-green-100"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">WEB</span>
                </div>
              </motion.div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <motion.path
                  d="M 200 50 Q 300 100 350 200 Q 300 300 200 350 Q 100 300 50 200 Q 100 100 200 50"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 1 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-primary-600"
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
