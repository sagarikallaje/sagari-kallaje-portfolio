'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  BookOpen,
  Building2,
  Code,
  Brain,
  Users,
  BarChart3,
  Database,
  Cpu,
  Python,
  Cloud
} from 'lucide-react'

const Experience = () => {
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

  const internships = [
    {
      title: 'Microsoft AINSI - AICTE Internship',
      company: 'Microsoft & Edunat Foundation',
      duration: 'Jan - March 2025',
      location: 'Virtual',
      description: 'Collaborated with industry experts on real-world AI projects. Covered core ML concepts, data analysis, and practical AI applications in collaboration with Microsoft.',
      highlights: [
        'Worked on real-world AI projects with industry experts',
        'Gained hands-on experience with core ML concepts',
        'Learned advanced data analysis techniques',
        'Applied AI solutions to practical problems'
      ],
      icon: Building2,
      color: 'from-blue-500 to-blue-700',
      type: 'Internship'
    },
    {
      title: 'AI with Green Technology',
      company: 'Edunet Foundation (Shell)',
      duration: 'April - May 2025',
      location: 'Virtual',
      description: '4-week virtual internship focused on Artificial Intelligence with Green Technology by iShell, learning AI fundamentals and their applications in sustainable solutions.',
      highlights: [
        'Focused on AI applications in green technology',
        'Learned sustainable AI solutions',
        'Gained understanding of environmental tech applications',
        'Completed comprehensive AI fundamentals course'
      ],
      icon: Brain,
      color: 'from-green-500 to-teal-600',
      type: 'Internship'
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      field: 'Computer Science & Engineering',
      institution: 'Dr. Ambedkar Institute of Technology',
      location: 'Bangalore, India',
      duration: '2021 - 2025',
      cgpa: '8.1',
      status: 'Ongoing',
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-700',
      highlights: [
        'Strong foundation in computer science fundamentals',
        'Active participation in tech clubs and events',
        'Consistent academic performance',
        'Hands-on project experience'
      ]
    },
    {
      degree: 'Senior Secondary (12th Grade)',
      field: 'Science Stream',
      institution: 'Expert Pre-University College',
      location: 'Mangalore, India',
      duration: '2019 - 2021',
      percentage: '90%',
      status: 'Completed',
      icon: BookOpen,
      color: 'from-orange-500 to-orange-700',
      highlights: [
        'Excellent performance in science subjects',
        'Strong foundation in mathematics and physics',
        'Active participation in extracurricular activities'
      ]
    },
    {
      degree: 'Secondary School (SSLC)',
      field: 'General Studies',
      institution: 'K.V.G. International Public School',
      location: 'Sullia, India',
      duration: '2017 - 2019',
      percentage: '93.7%',
      status: 'Completed',
      icon: Award,
      color: 'from-green-500 to-green-700',
      highlights: [
        'Outstanding academic performance',
        'Strong foundation in core subjects',
        'Active participation in school activities'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Microsoft-LinkedIn Data Analytics Certification',
      issuer: 'Microsoft & LinkedIn',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'IBM SkillsBuild: Prompt Engineering',
      issuer: 'IBM',
      icon: Brain,
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'Data Analytics Job Simulation by Accenture',
      issuer: 'Accenture',
      icon: Database,
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Fundamentals of AI & ML by Infosys Springboard',
      issuer: 'Infosys',
      icon: Cpu,
      color: 'from-orange-500 to-orange-700'
    },
    {
      name: 'Complete Web Development (Udemy)',
      issuer: 'Udemy',
      icon: Code,
      color: 'from-red-500 to-red-700'
    },
    {
      name: '360 Days Python Bootcamp (Udemy)',
      issuer: 'Udemy',
      icon: Python,
      color: 'from-yellow-500 to-yellow-700'
    }
  ]

  const extracurriculars = [
    {
      title: 'Event Coordinator',
      organization: 'Sanskruthi Intercollege Fest',
      description: 'Organized and coordinated large-scale intercollege cultural and technical events',
      icon: Users,
      color: 'from-pink-500 to-pink-700'
    },
    {
      title: 'Student Volunteer',
      organization: 'Drait Tech Club',
      description: 'Active member contributing to technical workshops and community events',
      icon: Code,
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Student Volunteer',
      organization: 'GDG Cloud (Google Developer Group)',
      description: 'Participated in Google Developer Group activities and cloud technology workshops',
      icon: Cloud,
      color: 'from-green-500 to-green-700'
    }
  ]

  const TimelineItem = ({ item, index, isLast }: { item: any, index: number, isLast: boolean }) => (
    <motion.div
      variants={itemVariants}
      className="relative flex items-start space-x-6"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-300"></div>
      )}
      
      {/* Icon */}
      <div className={`relative z-10 p-3 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}>
        <item.icon size={24} className="text-white" />
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${item.color} mt-2 sm:mt-0`}>
            {item.duration}
          </span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600 mb-2">
          <Building2 size={16} />
          <span className="font-medium">{item.company || item.institution}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <MapPin size={16} />
          <span>{item.location}</span>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">
          {item.description}
        </p>

        {item.highlights && (
          <ul className="space-y-2">
            {item.highlights.map((highlight: string, idx: number) => (
              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {item.cgpa && (
          <div className="mt-4 p-3 bg-primary-50 rounded-lg">
            <div className="text-sm text-gray-600">CGPA</div>
            <div className="text-2xl font-bold text-primary-600">{item.cgpa}</div>
          </div>
        )}

        {item.percentage && (
          <div className="mt-4 p-3 bg-primary-50 rounded-lg">
            <div className="text-sm text-gray-600">Percentage</div>
            <div className="text-2xl font-bold text-primary-600">{item.percentage}</div>
          </div>
        )}
      </div>
    </motion.div>
  )

  return (
    <section id="experience" className="section-padding bg-gray-50">
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
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My journey through internships, education, and continuous learning that has shaped my 
              technical expertise and professional growth.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Internships */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h3>
            <div className="space-y-8">
              {internships.map((internship, index) => (
                <TimelineItem 
                  key={internship.title} 
                  item={internship} 
                  index={index} 
                  isLast={index === internships.length - 1} 
                />
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Educational Background</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <TimelineItem 
                  key={edu.degree} 
                  item={edu} 
                  index={index} 
                  isLast={index === education.length - 1} 
                />
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications & Learning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color}`}>
                      <cert.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Extracurricular Activities */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Extracurricular Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {extracurriculars.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center`}>
                    <activity.icon size={32} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{activity.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{activity.organization}</p>
                  <p className="text-sm text-gray-500">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
