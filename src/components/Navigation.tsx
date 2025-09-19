'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Sagari</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/sagarikallaje"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sagarikallaje"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://wa.me/919036095159"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              <MessageSquare size={20} />
            </motion.a>
            <motion.a
              href="mailto:sagarikallaje5159@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: 10 }}
                    className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <motion.a
                    href="https://github.com/sagarikallaje"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm">GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/sagarikallaje"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Linkedin size={18} />
                    <span className="text-sm">LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919036095159"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
                  >
                    <MessageSquare size={18} />
                    <span className="text-sm">WhatsApp</span>
                  </motion.a>
                  <motion.a
                    href="mailto:sagarikallaje5159@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Mail size={18} />
                    <span className="text-sm">Email</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
