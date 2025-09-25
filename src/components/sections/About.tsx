'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Brain, Users, Award, BookOpen, MapPin } from 'lucide-react'

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
      description: 'Enthusiastic about discovering and understanding emerging technologies and digital trends. Enjoy applying cutting-edge tech insights to improve projects and workflows',
    },
    {
      icon: Award,
      title: 'Art, Craft & Entertainment',
      description: 'Love sketching, painting, various art forms, binge watching shows, and listening to music for creative expression and relaxation',
    },
    {
      icon: MapPin,
      title: 'Exploring Places & Cultures',
      description: 'Passionate about traveling to new places, learning about different cultures, traditions, and gaining knowledge about their unique specialties and heritage',
    },
    {
      icon: Code,
      title: 'Outdoor Enthusiast',
      description: 'Passionate about trekking and hiking, with experience exploring diverse trails and natural landscapes. Also enjoy chess and badminton as favorite activities and hobbies',
    },
  ]

  return (
    <section id="about" className="section-padding bg-gray-900">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  I'm an ambitious Computer Science Engineering undergraduate at Dr. Ambedkar Institute of Technology, 
                  Bangalore, blending analytical skills with a flair for web development and user-focused product design.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  I'm passionate about leveraging technical skills and design thinking to create user-centric, 
                  impactful solutions while continuously learning and adapting to new technologies. I'm eager to 
                  contribute to dynamic, cross-functional teams and make a meaningful impact in the tech industry.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  Driven by an insatiable curiosity, I'm a lifelong learner with a love for tech, innovation, and growth. 
                  My interest in computer science is profound, and I am always eager to explore the frontiers of artificial 
                  intelligence, machine learning, and data science. I thrive on solving real-world problems and believe that 
                  my technical skills combined with a relentless drive to learn will empower me to contribute meaningfully 
                  to the future of tech. As an engineer, I'm committed to stay up-to-date with current industry trends, 
                  tools, and technological breakthroughs, ensuring I remain adaptable and forward-thinking in this 
                  ever-evolving field.
                </p>
              </div>

              {/* Key Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 pt-6"
              >
                <div className="text-center p-6 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl">
                  <div className="text-3xl font-bold text-blue-300 mb-2">8.1</div>
                  <div className="text-sm text-gray-300 font-medium">Current CGPA</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl">
                  <div className="text-3xl font-bold text-gray-300 mb-2">4+</div>
                  <div className="text-sm text-gray-300 font-medium">Major Projects</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Interests & Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">What I'm Passionate About</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg">
                        <interest.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-100 mb-2">{interest.title}</h4>
                        <p className="text-sm text-gray-300 leading-relaxed">{interest.description}</p>
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
            className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">Professional & Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-700 rounded-xl shadow-sm">
                <div className="text-lg font-bold text-blue-400 mb-2">Programming</div>
                <div className="text-sm text-gray-300">Python, C, JavaScript, HTML, CSS, SQL (MySQL)</div>
              </div>
              <div className="text-center p-4 bg-gray-700 rounded-xl shadow-sm">
                <div className="text-lg font-bold text-blue-400 mb-2">UI/UX Design</div>
                <div className="text-sm text-gray-300">Figma, wireframes, prototypes, user-centered design</div>
              </div>
              <div className="text-center p-4 bg-gray-700 rounded-xl shadow-sm">
                <div className="text-lg font-bold text-blue-400 mb-2">Data & Analytics</div>
                <div className="text-sm text-gray-300">Power BI, basic machine learning (NumPy, Pandas, scikit-learn)</div>
              </div>
              <div className="text-center p-4 bg-gray-700 rounded-xl shadow-sm">
                <div className="text-lg font-bold text-blue-400 mb-2">Tools & Methods</div>
                <div className="text-sm text-gray-300">Git/GitHub, VS Code, Agile basics</div>
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
                  className="px-3 py-1 bg-gray-600 text-blue-300 text-sm font-medium rounded-full shadow-sm"
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
