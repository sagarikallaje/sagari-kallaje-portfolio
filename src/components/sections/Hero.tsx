'use client'

import { motion } from 'framer-motion'
import { MapPin, Sparkles, Code, Cpu, Zap } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const rotateVariants = {
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  const slideVariants = {
    slide: {
      x: [-20, 20, -20],
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const waveVariants = {
    wave: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const glowVariants = {
    glow: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.3)",
        "0 0 40px rgba(59, 130, 246, 0.6)",
        "0 0 20px rgba(59, 130, 246, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 pt-20">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Main gradient orbs with enhanced animations */}
        <motion.div 
          variants={pulseVariants}
          animate="pulse"
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        ></motion.div>
        <motion.div 
          variants={pulseVariants}
          animate="pulse"
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-sky-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animation-delay-2000"
        ></motion.div>
        <motion.div 
          variants={pulseVariants}
          animate="pulse"
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animation-delay-4000"
        ></motion.div>
        <motion.div 
          variants={pulseVariants}
          animate="pulse"
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animation-delay-6000"
        ></motion.div>
        
        {/* Additional floating orbs with slide animations */}
        <motion.div 
          variants={slideVariants}
          animate="slide"
          className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40"
        ></motion.div>
        <motion.div 
          variants={slideVariants}
          animate="slide"
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animation-delay-3000"
        ></motion.div>
        
        {/* New decorative elements */}
        <motion.div 
          variants={rotateVariants}
          animate="rotate"
          className="absolute top-1/4 right-1/3 w-24 h-24 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        ></motion.div>
        <motion.div 
          variants={rotateVariants}
          animate="rotate"
          className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-indigo-100 to-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animation-delay-1000"
        ></motion.div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Enhanced Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={waveVariants}
          animate="wave"
          className="absolute top-1/4 left-1/4 text-blue-500 opacity-60 z-0"
        >
          <Code size={24} />
        </motion.div>
        <motion.div
          variants={waveVariants}
          animate="wave"
          className="absolute top-1/3 right-1/3 text-sky-500 opacity-60 z-0"
        >
          <Cpu size={28} />
        </motion.div>
        <motion.div
          variants={waveVariants}
          animate="wave"
          className="absolute bottom-1/3 left-1/3 text-indigo-500 opacity-60 z-0"
        >
          <Zap size={26} />
        </motion.div>
        <motion.div
          variants={waveVariants}
          animate="wave"
          className="absolute bottom-1/4 right-1/4 text-cyan-500 opacity-60 z-0"
        >
          <Sparkles size={22} />
        </motion.div>
        
        {/* Enhanced floating elements with better animations */}
        <motion.div 
          variants={pulseVariants}
          animate="pulse"
          className="absolute top-1/5 left-1/5 w-3 h-3 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full"
        ></motion.div>
        <motion.div 
          variants={pulseVariants}
          animate="pulse"
          className="absolute top-2/5 right-1/5 w-4 h-4 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full animation-delay-1000"
        ></motion.div>
        <motion.div 
          variants={pulseVariants}
          animate="pulse"
          className="absolute bottom-2/5 left-2/5 w-3 h-3 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full animation-delay-2000"
        ></motion.div>
        <motion.div 
          variants={pulseVariants}
          animate="pulse"
          className="absolute bottom-1/5 right-2/5 w-5 h-5 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full animation-delay-3000"
        ></motion.div>
        
        {/* New decorative stars */}
        <motion.div 
          variants={rotateVariants}
          animate="rotate"
          className="absolute top-1/6 right-1/6 w-2 h-2 bg-sky-300 rounded-full opacity-60"
        ></motion.div>
        <motion.div 
          variants={rotateVariants}
          animate="rotate"
          className="absolute bottom-1/6 left-1/6 w-2 h-2 bg-indigo-300 rounded-full opacity-60 animation-delay-1000"
        ></motion.div>
      </div>

          <div className="container-custom relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center space-x-3 text-blue-600 font-medium text-base font-sans"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <MapPin size={20} />
                  </motion.div>
                    <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                      Bangalore, India
                    </span>
                </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-sky-100 backdrop-blur-sm border border-blue-200 text-blue-800 text-sm font-medium rounded-full mb-4 shadow-lg font-sans"
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block mr-2"
                    >
                      👋
                    </motion.span>
                    Welcome to my portfolio
                  </motion.span>
              </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-sans"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="block text-gray-700 font-light"
                  >
                    Hi, I'm
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="block bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent font-semibold"
                  >
                    Sagari P. Kallaje
                  </motion.span>
                </motion.h1>
              
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="inline-block text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium font-sans"
                  >
                    CSE Undergraduate
                  </motion.span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="h-1.5 bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 mt-3 rounded-full shadow-lg"
                  ></motion.div>
              </motion.div>
              
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mb-10 font-sans font-normal"
              >
                Passionate about{' '}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="font-semibold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent"
                  >
                    web development
                  </motion.span>
                  ,{' '}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="font-semibold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent"
                  >
                    AI/ML
                  </motion.span>
                  , and creating{' '}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent"
                  >
                    user-centric solutions
                  </motion.span>
                . Currently pursuing B.E. in Computer Science & Engineering with a focus on 
                modern technologies and innovative problem-solving.
              </motion.p>
            </motion.div>

                {/* CTA Button */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-6 mb-10"
                >
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-blue-600 font-semibold text-base rounded-xl shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-500 hover:text-white hover:border-transparent transition-all duration-300 backdrop-blur-sm font-sans"
                  >
                    <span className="relative z-10">Get In Touch</span>
                    <motion.span
                      className="ml-2 relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </motion.div>

          </div>

          {/* Right Column - Large Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end z-10"
          >
            {/* Large profile image - half page size, no animations */}
            <div className="relative w-full max-w-2xl h-[50vh] min-h-[500px] overflow-hidden shadow-2xl">
              <img
                src="/profile-image.jpg"
                alt="Sagari P. Kallaje"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center text-blue-600 bg-gradient-to-br from-blue-100 to-blue-200">
                        <div class="text-6xl font-bold mb-2">SP</div>
                        <div class="text-sm text-blue-500">Profile Image</div>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero
