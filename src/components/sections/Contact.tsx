'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Download,
  FileText
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sagarikallaje5159@gmail.com',
      href: 'mailto:sagarikallaje5159@gmail.com',
      color: 'from-blue-500 to-blue-700',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      value: '+91 90360 95159',
      href: 'tel:+919036095159',
      color: 'from-green-500 to-green-700',
      description: 'Call, text, or WhatsApp me'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bangalore, India',
      href: '#',
      color: 'from-purple-500 to-purple-700',
      description: 'Based in Bangalore'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/sagarikallaje',
      icon: Github,
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/sagarikallaje',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Email',
      href: 'mailto:sagarikallaje5159@gmail.com',
      icon: Mail,
      color: 'from-red-500 to-red-700'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-900">
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
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, 
              or simply have a conversation about technology and innovation.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Whether you have a project in mind, want to discuss opportunities, 
                  or just want to say hello, I'd love to hear from you. Feel free to 
                  reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target={info.title === 'WhatsApp' ? '_blank' : undefined}
                    rel={info.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-200">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 text-sm">{info.value}</p>
                      <p className="text-gray-400 text-xs">{info.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Resume Download & LinkedIn Connect */}
              <motion.div variants={itemVariants} className="mt-8 space-y-4">
                <h4 className="text-lg font-semibold text-gray-100 mb-4">Quick Actions</h4>
                
                {/* Resume Download */}
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-white/20 group-hover:scale-110 transition-transform duration-300">
                    <FileText size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-indigo-200 transition-colors duration-200">
                      Download Resume
                    </h4>
                    <p className="text-indigo-100 text-sm">Get my latest CV in PDF format</p>
                  </div>
                  <Download size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </motion.a>

                {/* LinkedIn Connect */}
                <motion.a
                  href="https://linkedin.com/in/sagarikallaje"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-blue-200 transition-colors duration-200">
                      Connect on LinkedIn
                    </h4>
                    <p className="text-blue-100 text-sm">Let's connect and network professionally</p>
                  </div>
                  <Linkedin size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              </motion.div>


            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-700 text-gray-100 placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-700 text-gray-100 placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-700 text-gray-100 placeholder-gray-400"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-400 bg-green-900 p-3 rounded-lg"
                  >
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">Message sent successfully!</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-400 bg-red-900 p-3 rounded-lg"
                  >
                    <AlertCircle size={20} />
                    <span className="text-sm font-medium">Failed to send message. Please try again.</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Contact
