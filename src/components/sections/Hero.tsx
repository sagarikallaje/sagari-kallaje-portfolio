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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black pt-20">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Main gradient orbs with enhanced animations */}
        <motion.div 
          variants={pulseVariants}
          animate="pulse"
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>
        <motion.div 
          variants={pulseVariants}
          animate="pulse"
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animation-delay-2000"
        ></motion.div>
        <motion.div 
          variants={pulseVariants}
          animate="pulse"
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animation-delay-4000"
        ></motion.div>
        <motion.div 
          variants={pulseVariants}
          animate="pulse"
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animation-delay-6000"
        ></motion.div>
        
        {/* Additional floating orbs with slide animations */}
        <motion.div 
          variants={slideVariants}
          animate="slide"
          className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
        ></motion.div>
        <motion.div 
          variants={slideVariants}
          animate="slide"
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animation-delay-3000"
        ></motion.div>
        
        {/* New decorative elements */}
        <motion.div 
          variants={rotateVariants}
          animate="rotate"
          className="absolute top-1/4 right-1/3 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15"
        ></motion.div>
        <motion.div 
          variants={rotateVariants}
          animate="rotate"
          className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-indigo-400 to-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animation-delay-1000"
        ></motion.div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)`,
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
              

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-sans"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="block text-gray-300 font-light"
                  >
                    Hi, I'm
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="block bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent font-semibold"
                  >
                    SAGARI P KALLAJE
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
                    className="inline-block text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium font-sans"
                  >
                    CSE Undergraduate
                  </motion.span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="h-1.5 bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 mt-3 rounded-full shadow-lg"
                  ></motion.div>
                  
                  {/* Stylish Tagline */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="mt-6"
                  >
                    <motion.span
                      animate={{ 
                        backgroundPosition: ['0%', '100%', '0%']
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-semibold italic tracking-wide"
                      style={{
                        backgroundSize: '200% 100%'
                      }}
                    >
                      Transforming Ideas into Digital Experiences
                    </motion.span>
                  </motion.div>
              </motion.div>
              
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
                    className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-300 font-semibold text-base rounded-xl shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-500 hover:text-white hover:border-transparent transition-all duration-300 backdrop-blur-sm font-sans"
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
                      <div class="w-full h-full flex flex-col items-center justify-center text-blue-300 bg-gradient-to-br from-gray-800 to-gray-900">
                        <div class="text-6xl font-bold mb-2">SP</div>
                        <div class="text-sm text-blue-400">Profile Image</div>
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
