'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeroProps {
  onApplyNow?: () => void
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const StatsItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <motion.div
      variants={item}
      className="border-b border-white/30 pb-3"
    >
      <div className="flex justify-between items-center text-xs text-gray-300 mb-1">
        <span>{title}</span>

        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="3" cy="8" r="1" fill="#F1F1F1" />
          <circle cx="8" cy="8" r="1" fill="#F1F1F1" />
          <circle cx="13" cy="8" r="1" fill="#F1F1F1" />
        </svg>
      </div>

      <h2 className="text-lg md:text-2xl font-semibold">{value}</h2>
    </motion.div>
  )
}

const Hero = ({ onApplyNow }: HeroProps) => {
  return (
    <div className="relative flex-1 w-full overflow-hidden">

      <Image
        src="/images/herosection.jpg"
        alt="hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(249deg, #000 0%, rgba(0,0,0,0) 48.52%, #000 96.94%)",
        }}
      />

   
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 h-full flex flex-col justify-between px-5 md:px-16 pt-14 pb-4 md:py-12 text-[#F1F1F1] max-w-[96rem] mx-auto"
      >

    
        <div className="flex justify-end">
          <div className="w-[160px] md:w-[220px] space-y-4">
            <StatsItem title="Businesses Impacted" value="120+" />
            <StatsItem title="Founders & Leaders Trained" value="300+" />
            <StatsItem title="AI Workflows Implemented" value="500+" />
          </div>
        </div>


        <motion.div variants={item} className="max-w-lg lg:max-w-xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
            AI Transformation for <br /> Real Business Growth
          </h1>

          <p className="mt-3 text-xs sm:text-sm md:text-base">
            Learn directly from founders and CEOs who are actively using AI to
            increase revenue, reduce costs, and scale operations.
          </p>
        </motion.div>

 
        <motion.div
          variants={item}
          className="mt-0 md:mt-0 md:absolute md:right-16 md:bottom-12 flex justify-end"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onApplyNow}
            className="relative w-[140px] md:w-[160px] h-[60px] md:h-[60px] lg:h-[70px] bg-white/10 backdrop-blur-md rounded-md text-white hover:bg-white/20 transition"
          >
            <span className="absolute top-3 left-4 text-sm md:text-base">
              Apply Now
            </span>

            <span className="absolute bottom-3 right-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 6.66675L13.3334 10.0001L10 13.3334"
                  stroke="#F1F1F1"
                  strokeWidth="1.33334"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.66626 2.66675V7.33342C2.66626 8.04067 2.94721 8.71894 3.44731 9.21903C3.9474 9.71914 4.62568 10.0001 5.33292 10.0001H13.3329"
                  stroke="#F1F1F1"
                  strokeWidth="1.33334"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.button>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Hero