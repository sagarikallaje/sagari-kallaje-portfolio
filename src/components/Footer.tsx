'use client'

import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-6"
          >

            {/* Made with love */}
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
              <span className="text-blue-400 font-medium">Sagari P. Kallaje</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
