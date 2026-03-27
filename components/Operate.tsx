'use client'

import Image from "next/image";
import { motion } from "framer-motion";

type Course = {
  image: string;
  title: string;
  units: string;
  description: string;
};

const courses: Course[] = [
  {
    image: "/images/justice.png",
    title: "AI Legal Expert",
    units: "18 Units",
    description:
      "Understand how AI can assist in legal research, contract analysis, compliance, and risk reduction across business operations.",
  },
  {
    image: "/images/automate.png",
    title: "Automation & Workflows",
    units: "21 Units",
    description:
      "Learn how to design and deploy AI-powered workflows that eliminate manual tasks and improve operational efficiency.",
  },
  {
    image: "/images/business.png",
    title: "AI for Business Strategy",
    units: "23 Units",
    description:
      "Understand where AI fits into your business and how to create a clear roadmap for implementation.",
  },
  {
    image: "/images/marketing.png",
    title: "Marketing & Growth with AI",
    units: "19 Units",
    description:
      "Discover how to use AI for content, targeting, and campaigns to drive consistent growth and higher conversions.",
  },
  {
    image: "/images/selling.png",
    title: "Operations & Scaling",
    units: "22 Units",
    description:
      "Implement AI systems to streamline operations, improve decision-making, and scale your business without increasing overhead.",
  },
];


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface OperateProps {
  onApplyNow?: () => void
}

export default function Operate({ onApplyNow }: OperateProps) {
  return (
    <section className="w-full bg-[#E6E6E6] py-12 md:py-20 md:px-6 lg:px-12">
      <div className="max-w-[96rem] mx-auto px-5">

     
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="max-w-xl">
            <h2 className="text-[32px] font-medium text-[#242424] leading-tight">
              Built for Operators, Not Observers
            </h2>
            <p className="mt-3 text-sm text-[#242424]">
              Work alongside founders, operators, and decision-makers who are already leveraging AI to drive growth.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onApplyNow}
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
        </motion.div>

     
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 md:mt-16 w-full"
        >
          <div
            className="
              grid gap-6 sm:gap-7
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              xl:grid-cols-5
            "
          >
            {courses.map((c) => {
              return (
                <motion.div
                  key={c.title}
                  variants={item}
                  whileHover={{ y: -6 }}
                  className="flex flex-col"
                >
        
                  <div className="bg-white rounded-2xl p-3 shadow-sm">
                    <div className="flex justify-between text-[10px] text-[#6B6B6B] mb-2">
                      <span>Course</span>
                      <span>{c.units}</span>
                    </div>

                    <div className="relative h-[180px] sm:h-[200px] md:h-[220px] rounded-xl overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <p className="mt-2 text-sm text-[#242424]">
                      {c.title}
                    </p>
                  </div>

                
              <div className="mt-2 md:mt-3 bg-white rounded-2xl p-4 shadow-sm flex flex-col h-full">

  {/* CONTENT */}
  <div>
    <p className="text-[11px] text-[#6B6B6B]">
      Module Overview
    </p>

    <p className="mt-1 text-[14px] text-[#242424] leading-relaxed">
      {c.description}
    </p>
  </div>

   <div className="mt-auto pt-2 text-[14px] font-semibold text-[#2B2B2B]">
                      Explore
                      </div>
  <div className="mt-auto pt-2">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onApplyNow}
      className="w-full h-[40px] md:h-[45px] bg-[#331568] rounded-md text-white flex items-center justify-between px-4 transition hover:bg-black/90"
    >
      <span className="text-sm md:text-base">
        Apply Now
      </span>

      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 6.66675L13.3334 10.0001L10 13.3334" stroke="#F1F1F1" strokeWidth="1.33334" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.66626 2.66675V7.33342C2.66626 8.04067 2.94721 8.71894 3.44731 9.21903C3.9474 9.71914 4.62568 10.0001 5.33292 10.0001H13.3329" stroke="#F1F1F1" strokeWidth="1.33334" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.button>
  </div>

</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}