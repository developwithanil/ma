'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const data = [
  {
    title: "AI Revenue Systems",
    description:
      "Deploy AI workflows that directly impact sales, conversions, and customer acquisition.",
    image: "/images/airevenue.jpg",
  },
  {
    title: "Automation Infrastructure",
    description:
      "Replace repetitive manual work with scalable AI systems across operations and teams.",
    image: "/images/automation.png",
  },
  {
    title: "Intelligent Business Ops",
    description:
      "Turn your processes into data-driven, self-improving systems powered by AI.",
    image: "/images/intelligence.jpg",
  },
]

export default function OurEdge() {
  return (
    <section className="w-full bg-[#E6E6E6] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        
        <h2 className="text-[30px] md:text-[38px] font-medium text-[#0E061D] mb-16">
          Our Edge
        </h2>

        <div className="flex flex-col gap-10 max-6xl">

          {data.map((item, index) => {
            

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-2 md:gap-10 `}
              >

              
                <div className="w-full md:w-[38%]">

                  <p className="text-[18px] lg:text-[24px] font-medium  italic text-[#0E061D] mb-4">
                    {item.title}
                  </p>

                  <p className="text-[13px] text-[#6B6B6B] leading-relaxed max-w-[260px]">
                    {item.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative mt-6 w-[140px] h-[34px] bg-[#331568] rounded text-white text-[11px]"
                  >
                    <span className="absolute top-[6px] left-3">
                      Apply Now
                    </span>

                    <span className="absolute bottom-[6px] right-2">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M10 6.66675L13.3334 10.0001L10 13.3334" stroke="#F1F1F1" strokeWidth="1.2"/>
                        <path d="M2.66626 2.66675V7.33342C2.66626 8.04067 2.94721 8.71894 3.44731 9.21903C3.9474 9.71914 4.62568 10.0001 5.33292 10.0001H13.3329" stroke="#F1F1F1" strokeWidth="1.2"/>
                      </svg>
                    </span>
                  </motion.button>

                </div>

              
                <div className="w-full md:w-[50%]">
                  <div className="relative w-full h-[200px] md:h-[240px] lg:h-[260px] rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}