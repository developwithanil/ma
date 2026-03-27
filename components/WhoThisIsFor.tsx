'use client'
import { motion } from 'framer-motion'

const WhoThisIsFor = () => {
  return (
    <section className="w-full bg-[#E6E6E6] border-y border-[#CFCFCF]">
      <div className="max-w-[96rem] mx-auto px-5 md:px-16">

       
        <div className="grid md:grid-cols-2 items-stretch min-h-[220px] md:min-h-[260px]">

        
          <div className="flex flex-col justify-between py-10 md:py-14 pr-6">
            <h2 className="text-2xl md:text-3xl font-medium text-[#242424]">
              Who This is For
            </h2>

            <div className="flex gap-3 mt-6 text-[#0E061D]">
              <button className="bg-[#F1F1F1] text-xs px-3 py-1 rounded">
                Real Impact
              </button>
              <button className="bg-[#F1F1F1] text-xs px-3 py-1 rounded">
                Build Differently
              </button>
            </div>
          </div>

         
          <div className="relative flex flex-col justify-between py-10 md:py-14 pl-6">

          
            <div className="hidden md:block absolute left-0 top-0 h-full w-[1px] bg-[#CFCFCF]" />

         
            <div className="space-y-4 text-sm md:text-base text-[#242424]">
              <p>Founders looking to scale faster with AI</p>
              <p>Business owners wanting to reduce operational costs</p>
              <p>Leaders exploring AI transformation</p>
              <p>Operators who want real execution, not theory</p>
            </div>

       
            <div className="mt-6">
           <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative top-6 w-[170px] md:w-[210px] h-[38px] md:h-[47px] lg:h-[53px] bg-[#331568] rounded-md text-white hover:bg-black/90 transition"
          >
            <span className="absolute top-2 left-3 text-sm md:text-base">
              All Courses
            </span>

            <span className="absolute bottom-2 right-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 6.66675L13.3334 10.0001L10 13.3334" stroke="#F1F1F1" strokeWidth="1.33334" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.66626 2.66675V7.33342C2.66626 8.04067 2.94721 8.71894 3.44731 9.21903C3.9474 9.71914 4.62568 10.0001 5.33292 10.0001H13.3329" stroke="#F1F1F1" strokeWidth="1.33334" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </motion.button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default WhoThisIsFor