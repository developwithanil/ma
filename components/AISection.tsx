'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface AISectionProps {
  onApplyNow?: () => void
}

const AISection = ({ onApplyNow }: AISectionProps) => {
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
  className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-16 text-center"
>
  <p className="text-[#F1F1F1] text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed">
    You’ll get direct guidance on applying AI in your own business, with feedback,
    frameworks, and systems you can deploy immediately.
  </p>

 
  <div className="mt-6">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onApplyNow}
      className="relative w-[170px] md:w-[210px] h-[38px] md:h-[47px] lg:h-[53px] bg-white rounded-md text-[#371A6B] transition"
    >
      <span className="absolute top-2 left-3 text-sm md:text-base">
        Apply Now
      </span>

      <span className="absolute bottom-2 right-3">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 6.66675L13.3334 10.0001L10 13.3334" stroke="#371A6B" strokeWidth="1.33334" strokeLinecap="round"/>
          <path d="M2.66626 2.66675V7.33342C2.66626 8.04067 2.94721 8.71894 3.44731 9.21903C3.9474 9.71914 4.62568 10.0001 5.33292 10.0001H13.3329" stroke="#371A6B" strokeWidth="1.33334" strokeLinecap="round"/>
        </svg>
      </span>
    </motion.button>
  </div>
</motion.div>
    </div>
  )
}

export default AISection