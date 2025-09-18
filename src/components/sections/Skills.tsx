'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Palette, 
  Database, 
  Wrench, 
  Users, 
  Brain,
  Python,
  C,
  Javascript,
  Html,
  Css,
  Git,
  Figma,
  BarChart3,
  Cpu
} from 'lucide-react'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90, icon: Python, color: 'from-yellow-500 to-orange-500' },
        { name: 'JavaScript', level: 85, icon: Javascript, color: 'from-yellow-400 to-yellow-600' },
        { name: 'C', level: 80, icon: C, color: 'from-blue-500 to-blue-700' },
        { name: 'HTML', level: 95, icon: Html, color: 'from-orange-500 to-red-500' },
        { name: 'CSS', level: 90, icon: Css, color: 'from-blue-400 to-blue-600' },
        { name: 'SQL (MySQL)', level: 85, icon: Database, color: 'from-blue-600 to-blue-800' },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85, icon: Figma, color: 'from-purple-500 to-pink-500' },
        { name: 'Wireframes', level: 80, icon: Palette, color: 'from-indigo-500 to-purple-500' },
        { name: 'Prototypes', level: 75, icon: Palette, color: 'from-pink-500 to-rose-500' },
        { name: 'User-Centered Design', level: 85, icon: Users, color: 'from-green-500 to-teal-500' },
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      skills: [
        { name: 'Power BI', level: 80, icon: BarChart3, color: 'from-yellow-500 to-orange-500' },
        { name: 'NumPy', level: 85, icon: Cpu, color: 'from-blue-500 to-indigo-500' },
        { name: 'Pandas', level: 85, icon: Cpu, color: 'from-green-500 to-blue-500' },
        { name: 'Scikit-learn', level: 80, icon: Brain, color: 'from-orange-500 to-red-500' },
        { name: 'Machine Learning', level: 75, icon: Brain, color: 'from-purple-500 to-pink-500' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Git/GitHub', level: 90, icon: Git, color: 'from-gray-700 to-gray-900' },
        { name: 'VS Code', level: 95, icon: Code, color: 'from-blue-500 to-blue-700' },
        { name: 'Agile Methodologies', level: 70, icon: Users, color: 'from-green-500 to-emerald-500' },
        { name: 'Jupyter Notebook', level: 85, icon: Code, color: 'from-orange-500 to-yellow-500' },
        { name: 'Streamlit', level: 80, icon: Code, color: 'from-red-500 to-pink-500' },
        { name: 'OpenCV', level: 75, icon: Cpu, color: 'from-green-600 to-blue-600' },
      ]
    }
  ]

  const softSkills = [
    'Collaboration & Leadership',
    'Adaptability',
    'Curiosity & Initiative',
    'Problem Solving',
    'Communication',
    'Teamwork'
  ]

  const SkillBar = ({ skill }: { skill: any }) => (
    <motion.div
      variants={itemVariants}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
            <skill.icon size={16} className="text-white" />
          </div>
          <span className="font-medium text-gray-900">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise, design capabilities, and soft skills 
              developed through academic projects, internships, and continuous learning.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Technical Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg">
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Soft Skills</h3>
              <p className="text-gray-600">
                Essential interpersonal and professional skills that complement my technical expertise
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-sm font-medium text-gray-900">{skill}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Preview */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Learning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Microsoft-LinkedIn Data Analytics Certification',
                'IBM SkillsBuild: Prompt Engineering',
                'Data Analytics Job Simulation by Accenture',
                'Fundamentals of AI & ML by Infosys Springboard',
                'Complete Web Development (Udemy)',
                '360 Days Python Bootcamp (Udemy)'
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500"
                >
                  <div className="text-sm font-medium text-gray-900 text-left">{cert}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
