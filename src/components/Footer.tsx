'use client'

import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/sagarikallaje',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/sagarikallaje',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:sagarikallaje5159@gmail.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold">Sagari P. Kallaje</span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 text-sm leading-relaxed"
              >
                Computer Science Engineering undergraduate passionate about web development, 
                AI/ML, and creating user-centric solutions that make a difference.
              </motion.p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg font-semibold"
              >
                Get In Touch
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-primary-400" />
                  <span className="text-gray-300 text-sm">Bangalore, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary-400" />
                  <a
                    href="mailto:sagarikallaje5159@gmail.com"
                    className="text-gray-300 text-sm hover:text-primary-400 transition-colors duration-200"
                  >
                    sagarikallaje5159@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary-400" />
                  <a
                    href="tel:+919036095159"
                    className="text-gray-300 text-sm hover:text-primary-400 transition-colors duration-200"
                  >
                    +91 90360 95159
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg font-semibold"
              >
                Connect With Me
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex space-x-4"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-secondary-800 rounded-lg hover:bg-primary-600 transition-all duration-300 group"
                  >
                    <link.icon size={20} className="text-gray-300 group-hover:text-white transition-colors duration-200" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          >
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Sagari P. Kallaje. All rights reserved.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-1 text-gray-400 text-sm"
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500" />
              </motion.span>
              <span>by</span>
              <span className="text-primary-400 font-medium">Sagari Kallaje</span>
              <span>using Next.js & Tailwind CSS</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
