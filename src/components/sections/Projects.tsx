'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Github, Database, Brain, Smartphone, Globe, Eye, X } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

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


  const projects = [
    {
      title: 'AI Refugee Aid',
      description: 'Developed an AI-powered cross-platform mobile app to connect refugees with food, shelter, and healthcare resources. Integrated a multilingual AI chatbot for real-time assistance using natural-language processing and translation APIs.',
      longDescription: 'This comprehensive mobile application addresses the critical needs of refugee communities by providing real-time access to essential resources. The app features secure authentication, offline data storage, and a responsive UI designed for reliable use in low-connectivity areas.',
      technologies: ['React Native', 'AI/ML', 'NLP', 'Translation APIs', 'Offline Storage'],
      features: [
        'Multilingual AI chatbot for real-time assistance',
        'Resource mapping for food, shelter, and healthcare',
        'Offline functionality for low-connectivity areas',
        'Secure authentication system',
        'Cross-platform compatibility'
      ],
      github: 'https://github.com/sagarikallaje/ai-refugee-aid',
      category: 'Mobile App',
      icon: Smartphone,
      color: 'from-blue-500 to-purple-600',
      highlights: [
        'Real-time multilingual support',
        'Offline-first architecture',
        'AI-powered resource matching'
      ],
      banner: '/projects/banners/ai-refugee-aid-banner.svg'
    },
    {
      title: 'Agro Products Stock Management System',
      description: 'Developed a comprehensive web application for farmers to record and monitor crop and field data. Implemented a modular Flask backend with SQLAlchemy ORM and secure user authentication.',
      longDescription: 'A full-stack web application designed to help farmers efficiently manage their agricultural operations. The system provides data visualization, reporting capabilities, and user-friendly interfaces for tracking crop yields, field conditions, and inventory management.',
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
      category: 'Web Application',
      icon: Globe,
      color: 'from-green-500 to-teal-600',
      highlights: [
        'Full-stack web development',
        'Database design and ORM',
        'User authentication system'
      ],
      banner: '/projects/banners/agro-management-banner.svg'
    },
    {
      title: 'Fake Currency Detector',
      description: 'Built a custom dataset of genuine and counterfeit ₹500/₹2000 notes and pre-processed images with OpenCV. Trained a Convolutional Neural Network (CNN) to classify currency authenticity with high accuracy.',
      longDescription: 'An AI-powered solution for detecting counterfeit currency using computer vision and deep learning. The project involved extensive data collection, image preprocessing, model training, and user interface development for practical deployment.',
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
      category: 'AI/ML Project',
      icon: Brain,
      color: 'from-orange-500 to-red-600',
      highlights: [
        'Computer vision and deep learning',
        'Custom dataset creation',
        'High-accuracy CNN model'
      ],
      banner: '/projects/banners/currency-detector-banner.svg'
    },
    {
      title: 'Medicine Recommender',
      description: 'Built an end-to-end recommendation system leveraging Python, Pandas, and Scikit-learn for data processing and machine learning. Utilized Streamlit for rapid web application development and NLTK for natural language processing.',
      longDescription: 'A comprehensive recommendation system that helps users find appropriate medications based on symptoms and medical history. The system uses advanced NLP techniques and machine learning algorithms to provide accurate and personalized recommendations.',
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
      category: 'Data Science',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      highlights: [
        'Machine learning pipeline',
        'NLP and recommendation systems',
        'Streamlit web interface'
      ],
      banner: '/projects/banners/medicine-recommender-banner.svg'
    }
  ]


  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      variants={itemVariants}
      className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
      onClick={() => setSelectedProject(selectedProject === index ? null : index)}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Project Banner */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.banner}
          alt={`${project.title} banner`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback to gradient background if image fails to load
            e.currentTarget.style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-700 flex items-center justify-center">
                  <div class="text-white text-center">
                    <div class="text-4xl mb-2">${project.icon ? '📱' : '💻'}</div>
                    <div class="text-sm font-medium">${project.title}</div>
                  </div>
                </div>
              `;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        

        {/* View Details Button */}
        <div className="absolute bottom-4 right-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-gray-700/90 backdrop-blur-sm rounded-full text-gray-300 hover:text-blue-400 transition-colors duration-200"
          >
            <Eye size={16} />
          </motion.button>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors duration-200 mb-2">
              {project.title}
            </h3>
          </div>
          <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg`}>
            <project.icon size={24} className="text-white" />
          </div>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Project Highlights */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {project.highlights.slice(0, 2).map((highlight: string, idx: number) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-900 text-blue-300 text-xs font-medium rounded-md"
              >
                {highlight}
              </span>
            ))}
            {project.highlights.length > 2 && (
              <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs font-medium rounded-md">
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
              className="px-3 py-1 bg-gray-600 text-gray-300 text-xs font-medium rounded-full hover:bg-gray-500 hover:text-gray-200 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-500 text-gray-300 text-xs font-medium rounded-full">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* GitHub Button */}
        <div className="flex justify-center">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 font-medium"
          >
            <Github size={18} />
            <span>View on GitHub</span>
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
            className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 h-32 rounded-t-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-t-2xl"></div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-gray-700/90 backdrop-blur-sm rounded-full text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-100 mb-2">{project.title}</h2>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-100 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-100 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-900 text-blue-300 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 font-medium"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <section id="projects" className="section-padding bg-gray-900">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A showcase of my major projects spanning web development, AI/ML, data science, and mobile applications. 
              Each project demonstrates different aspects of my technical skills and problem-solving approach.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mt-6"></div>
          </motion.div>


          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            <AnimatePresence mode="wait">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Modal */}
          {selectedProject !== null && (
            <ProjectModal
              project={projects[selectedProject]}
              isOpen={selectedProject !== null}
              onClose={() => setSelectedProject(null)}
            />
          )}

          {/* Project Statistics */}

        </motion.div>
      </div>
    </section>
  )
}

export default Projects
