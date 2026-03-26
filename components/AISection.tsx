'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const AISection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[700px] overflow-hidden">

      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Image
          src="/images/ai.png"
          alt="AI Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

   
      <div className="absolute inset-0 bg-black/60" />

  
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 h-full flex items-center justify-center px-6 md:px-16 text-center"
      >
        <p className="text-[#F1F1F1] text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed">
          You’ll get direct guidance on applying AI in your own business, with feedback,
          frameworks, and systems you can deploy immediately.
        </p>
      </motion.div>

    </div>
  )
}

export default AISection