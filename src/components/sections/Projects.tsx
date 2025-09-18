'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Calendar, Code, Database, Brain, Smartphone, Globe, Eye, ChevronRight, Star, Zap, Users, Award, X } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState('all')

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

  const filterCategories = [
    { id: 'all', label: 'All Projects', count: 4 },
    { id: 'web', label: 'Web Apps', count: 1 },
    { id: 'ai', label: 'AI/ML', count: 2 },
    { id: 'mobile', label: 'Mobile', count: 1 },
  ]

  const projects = [
    {
      title: 'AI Refugee Aid',
      status: 'Ongoing',
      description: 'Developed an AI-powered cross-platform mobile app to connect refugees with food, shelter, and healthcare resources. Integrated a multilingual AI chatbot for real-time assistance using natural-language processing and translation APIs.',
      longDescription: 'This comprehensive mobile application addresses the critical needs of refugee communities by providing real-time access to essential resources. The app features secure authentication, offline data storage, and a responsive UI designed for reliable use in low-connectivity areas.',
      image: '/projects/refugee-aid.jpg',
      technologies: ['React Native', 'AI/ML', 'NLP', 'Translation APIs', 'Offline Storage'],
      features: [
        'Multilingual AI chatbot for real-time assistance',
        'Resource mapping for food, shelter, and healthcare',
        'Offline functionality for low-connectivity areas',
        'Secure authentication system',
        'Cross-platform compatibility'
      ],
      github: 'https://github.com/sagarikallaje/ai-refugee-aid',
      demo: '#',
      category: 'Mobile App',
      filterCategory: 'mobile',
      icon: Smartphone,
      color: 'from-blue-500 to-purple-600',
      impact: 'High',
      complexity: 'Advanced',
      duration: '6 months',
      teamSize: 'Solo',
      highlights: [
        'Real-time multilingual support',
        'Offline-first architecture',
        'AI-powered resource matching'
      ]
    },
    {
      title: 'Agro Products Stock Management System',
      status: 'Completed',
      description: 'Developed a comprehensive web application for farmers to record and monitor crop and field data. Implemented a modular Flask backend with SQLAlchemy ORM and secure user authentication.',
      longDescription: 'A full-stack web application designed to help farmers efficiently manage their agricultural operations. The system provides data visualization, reporting capabilities, and user-friendly interfaces for tracking crop yields, field conditions, and inventory management.',
      image: '/projects/agro-management.jpg',
      technologies: ['Flask', 'SQLAlchemy', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      features: [
        'Modular Flask backend architecture',
        'SQLAlchemy ORM for database management',
        'Secure user authentication with Flask-Login',
        'Responsive frontend design',
        'Data visualization and reporting',
        'Scalable and maintainable codebase'
      ],
      github: 'https://github.com/sagarikallaje/agro-management',
      demo: '#',
      category: 'Web Application',
      filterCategory: 'web',
      icon: Globe,
      color: 'from-green-500 to-teal-600',
      impact: 'Medium',
      complexity: 'Intermediate',
      duration: '3 months',
      teamSize: 'Solo',
      highlights: [
        'Full-stack web development',
        'Database design and ORM',
        'User authentication system'
      ]
    },
    {
      title: 'Fake Currency Detector',
      status: 'Completed',
      description: 'Built a custom dataset of genuine and counterfeit ₹500/₹2000 notes and pre-processed images with OpenCV. Trained a Convolutional Neural Network (CNN) to classify currency authenticity with high accuracy.',
      longDescription: 'An AI-powered solution for detecting counterfeit currency using computer vision and deep learning. The project involved extensive data collection, image preprocessing, model training, and user interface development for practical deployment.',
      image: '/projects/currency-detector.jpg',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'CNN', 'Tkinter', 'Jupyter'],
      features: [
        'Custom dataset of genuine and counterfeit notes',
        'OpenCV for image preprocessing',
        'CNN model for high-accuracy classification',
        'Tkinter GUI for user interaction',
        'Jupyter Notebook workflow',
        'Real-time detection capabilities'
      ],
      github: 'https://github.com/sagarikallaje/currency-detector',
      demo: '#',
      category: 'AI/ML Project',
      filterCategory: 'ai',
      icon: Brain,
      color: 'from-orange-500 to-red-600',
      impact: 'High',
      complexity: 'Advanced',
      duration: '4 months',
      teamSize: 'Solo',
      highlights: [
        'Computer vision and deep learning',
        'Custom dataset creation',
        'High-accuracy CNN model'
      ]
    },
    {
      title: 'Medicine Recommender',
      status: 'Completed',
      description: 'Built an end-to-end recommendation system leveraging Python, Pandas, and Scikit-learn for data processing and machine learning. Utilized Streamlit for rapid web application development and NLTK for natural language processing.',
      longDescription: 'A comprehensive recommendation system that helps users find appropriate medications based on symptoms and medical history. The system uses advanced NLP techniques and machine learning algorithms to provide accurate and personalized recommendations.',
      image: '/projects/medicine-recommender.jpg',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'NLTK', 'Pickle'],
      features: [
        'End-to-end recommendation pipeline',
        'Natural language processing with NLTK',
        'Machine learning with Scikit-learn',
        'Streamlit web interface',
        'Model serialization with Pickle',
        'Data processing with Pandas'
      ],
      github: 'https://github.com/sagarikallaje/medicine-recommender',
      demo: '#',
      category: 'Data Science',
      filterCategory: 'ai',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      impact: 'Medium',
      complexity: 'Intermediate',
      duration: '2 months',
      teamSize: 'Solo',
      highlights: [
        'Machine learning pipeline',
        'NLP and recommendation systems',
        'Streamlit web interface'
      ]
    }
  ]

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.filterCategory === filter
  )

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
      onClick={() => setSelectedProject(selectedProject === index ? null : index)}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Project Image with Overlay */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Status and Category Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.color} shadow-lg`}>
            {project.status}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-black/60 backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Impact and Complexity Indicators */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Zap size={12} className="text-yellow-500" />
            <span className="text-xs font-medium text-gray-700">{project.impact}</span>
          </div>
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Star size={12} className="text-blue-500" />
            <span className="text-xs font-medium text-gray-700">{project.complexity}</span>
          </div>
        </div>

        {/* View Details Button */}
        <div className="absolute bottom-4 right-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-primary-600 transition-colors duration-200"
          >
            <Eye size={16} />
          </motion.button>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-2">
              {project.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users size={14} />
                <span>{project.teamSize}</span>
              </div>
            </div>
          </div>
          <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg`}>
            <project.icon size={24} className="text-white" />
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Project Highlights */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {project.highlights.slice(0, 2).map((highlight: string, idx: number) => (
              <span
                key={idx}
                className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-md"
              >
                {highlight}
              </span>
            ))}
            {project.highlights.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                +{project.highlights.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded-full">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium flex-1 justify-center"
          >
            <Github size={16} />
            <span>Code</span>
          </motion.a>
          
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200 text-sm font-medium flex-1 justify-center"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )

  const ProjectModal = ({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-primary-600 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{project.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{project.teamSize}</span>
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${project.color}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </motion.a>
                
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200 font-medium"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <section id="projects" className="section-padding bg-white">
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
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A showcase of my major projects spanning web development, AI/ML, data science, and mobile applications. 
              Each project demonstrates different aspects of my technical skills and problem-solving approach.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filterCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  filter === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-primary-100 text-primary-700'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Modal */}
          {selectedProject !== null && (
            <ProjectModal
              project={filteredProjects[selectedProject]}
              isOpen={selectedProject !== null}
              onClose={() => setSelectedProject(null)}
            />
          )}

          {/* Project Statistics */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Project Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">4+</div>
                <div className="text-sm text-gray-600 font-medium">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                <div className="text-sm text-gray-600 font-medium">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Open Source</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
                <div className="text-sm text-gray-600 font-medium">Ongoing Project</div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in My Work?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with like-minded individuals. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Let's Work Together</span>
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
