'use client'

import Image from "next/image"
import { motion } from "framer-motion"

interface CTASectionProps {
  onApplyNow?: () => void
}

const CTASection = ({ onApplyNow }: CTASectionProps) => {
  return (
    <section className="relative w-full h-[300px] md:h-[420px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/aibg.png"
        alt="AI Background"
        fill
        className="object-cover"
        priority
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

     
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="w-full max-full bg-white/10 backdrop-blur-md  py-10 md:py-14 text-center border-y border-white/20">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white text-[22px] md:text-[34px] font-medium"
          >
            Start Your AI Transformation
          </motion.h2>

     
          <div className="mt-6 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={onApplyNow}
              className="relative w-[170px] md:w-[200px] h-[40px] md:h-[50px] bg-[#4B2A84] text-white rounded-md"
            >
              <span className="absolute top-2 left-3 text-sm md:text-base">
                Apply Now
              </span>

              <span className="absolute bottom-2 right-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 6.66675L13.3334 10.0001L10 13.3334" stroke="#fff" strokeWidth="1.3"/>
                  <path d="M2.66626 2.66675V7.33342C2.66626 8.04067 2.94721 8.71894 3.44731 9.21903C3.9474 9.71914 4.62568 10.0001 5.33292 10.0001H13.3329" stroke="#fff" strokeWidth="1.3"/>
                </svg>
              </span>
            </motion.button>
          </div>

        </div>
      </div>

    </section>
  )
}

export default CTASection