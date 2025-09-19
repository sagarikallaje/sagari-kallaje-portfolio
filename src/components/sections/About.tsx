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
      icon: BookOpen,
      title: 'Reading & Learning',
      description: 'Passionate about reading tech blogs, books, psychology, business aspects, philosophy, and staying updated with industry trends',
    },
    {
      icon: Palette,
      title: 'Creative Projects & Open Source',
      description: 'Working on personal creative projects, contributing to open source communities, and developing designing and editing abilities',
    },
    {
      icon: Brain,
      title: 'Exploring New Advancements',
      description: 'Always curious about emerging technologies and latest trends in the tech world',
    },
    {
      icon: Award,
      title: 'Art & Craft',
      description: 'Love sketching, painting, and various art forms as creative outlets',
    },
    {
      icon: Users,
      title: 'Entertainment & Music',
      description: 'Enjoy binge watching shows and listening to music for relaxation',
    },
    {
      icon: Code,
      title: 'Outdoor Sports',
      description: 'Chess and badminton are my favorite outdoor activities and hobbies',
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

          {/* Key Skills Preview */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional & Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-lg font-bold text-primary-600 mb-2">Programming</div>
                <div className="text-sm text-gray-600">Python, C, JavaScript, HTML, CSS, SQL (MySQL)</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-lg font-bold text-primary-600 mb-2">UI/UX Design</div>
                <div className="text-sm text-gray-600">Figma, wireframes, prototypes, user-centered design</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-lg font-bold text-primary-600 mb-2">Data & Analytics</div>
                <div className="text-sm text-gray-600">Power BI, basic machine learning (NumPy, Pandas, scikit-learn)</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-lg font-bold text-primary-600 mb-2">Tools & Methods</div>
                <div className="text-sm text-gray-600">Git/GitHub, VS Code, Agile basics</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Python', 'C', 'JavaScript', 'HTML', 'CSS', 'SQL (MySQL)',
                'Figma', 'Wireframes', 'Prototypes', 'User-centered Design',
                'Power BI', 'NumPy', 'Pandas', 'Scikit-learn', 'Machine Learning',
                'Git/GitHub', 'VS Code', 'Agile', 'Data Analysis'
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white text-primary-700 text-sm font-medium rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default About
