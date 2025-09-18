'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Brain, Users, Award, BookOpen } from 'lucide-react'

const About = () => {
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

  const interests = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building modern, responsive web applications with React, Next.js, and TypeScript',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Exploring AI applications, neural networks, and data science solutions',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating user-centered designs with Figma and design thinking principles',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in cross-functional teams and leading projects',
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'Always eager to learn new technologies and adapt to industry trends',
    },
    {
      icon: BookOpen,
      title: 'Problem Solving',
      description: 'Analytical thinking and innovative approaches to complex challenges',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  I'm an ambitious Computer Science Engineering undergraduate at Dr. Ambedkar Institute of Technology, 
                  Bangalore, blending analytical skills with a flair for web development and user-focused product design.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  I'm passionate about leveraging technical skills and design thinking to create user-centric, 
                  impactful solutions while continuously learning and adapting to new technologies. I'm eager to 
                  contribute to dynamic, cross-functional teams and make a meaningful impact in the tech industry.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  Currently pursuing my B.E. in Computer Science & Engineering with a CGPA of 8.1, I've been 
                  actively involved in various internships, projects, and extracurricular activities that have 
                  shaped my technical expertise and soft skills.
                </p>
              </div>

              {/* Key Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 pt-6"
              >
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 mb-2">8.1</div>
                  <div className="text-sm text-gray-600 font-medium">Current CGPA</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">4+</div>
                  <div className="text-sm text-gray-600 font-medium">Major Projects</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Interests & Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What I'm Passionate About</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg">
                        <interest.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{interest.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{interest.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Educational Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">93.7%</div>
                <div className="text-sm text-gray-600 font-medium">SSLC (CBSE)</div>
                <div className="text-xs text-gray-500">K.V.G. International Public School</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">90%</div>
                <div className="text-sm text-gray-600 font-medium">12th Grade (KSEEB)</div>
                <div className="text-xs text-gray-500">Expert Pre-University College</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">8.1 CGPA</div>
                <div className="text-sm text-gray-600 font-medium">B.E. CSE (Ongoing)</div>
                <div className="text-xs text-gray-500">Dr. Ambedkar Institute of Technology</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
