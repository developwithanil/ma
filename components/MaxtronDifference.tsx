"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: <svg width="40" height="23" viewBox="0 0 40 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.1428 1.5H38.5714V12.9286" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M38.5713 1.5L22.4285 17.6429C22.1614 17.9046 21.8024 18.0512 21.4285 18.0512C21.0545 18.0512 20.6955 17.9046 20.4285 17.6429L13.857 11.0714C13.59 10.8097 13.231 10.6631 12.857 10.6631C12.4831 10.6631 12.1241 10.8097 11.857 11.0714L1.42847 21.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
,
    title: "Diverse Course Categories",
    desc: "Choose from a wide range of subjects and disciplines.",
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5004 5.5C32.358 5.50017 36.1664 9.29384 36.1664 14.167C36.1663 17.1442 34.8286 19.8928 32.3734 22.8965C29.9127 25.907 26.3818 29.1122 22.0804 33.0127V33.0137L19.9994 34.9072L17.9203 33.0137L17.9193 33.0127L14.8422 30.21C11.9193 27.5217 9.47186 25.1543 7.62634 22.8965C5.1712 19.8928 3.83347 17.1442 3.83337 14.167C3.83337 9.29373 7.64258 5.5 12.5004 5.5C15.249 5.5001 17.8954 6.78214 19.6205 8.79199L20.0004 9.23438L20.3793 8.79199C22.1045 6.78197 24.7516 5.5 27.5004 5.5Z" fill="white" stroke="white"/>
</svg>
,
    title: "Self-Paced Learning",
    desc: "Study on your schedule, no time constraints.",
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0.5C30.7698 0.5 39.5 9.23015 39.5 20V20.001C39.5062 24.2841 38.0961 28.4492 35.4893 31.8477L35.3379 32.0459L35.3428 32.0635L34.8066 32.6885C33.7098 33.9679 32.4519 35.1006 31.0654 36.0586C27.8141 38.3064 23.9537 39.5073 20.001 39.5H20C17.1865 39.5025 14.4056 38.8946 11.8496 37.7188C9.29377 36.543 7.02305 34.8273 5.19434 32.6895L5.19336 32.6885L4.65625 32.0635L4.66211 32.0459L4.51074 31.8477C1.90374 28.4492 0.493616 24.2841 0.5 20.001V20C0.5 9.23015 9.23016 0.5 20 0.5ZM20 3.5C17.1142 3.49949 14.2785 4.2556 11.7764 5.69336C9.27413 7.13121 7.19296 9.2007 5.74023 11.6943C4.28759 14.1878 3.5138 17.0186 3.49707 19.9043C3.48042 22.7902 4.22166 25.6304 5.64551 28.1406L6.0166 28.7959L6.47656 28.1992C7.363 27.0472 8.50219 26.114 9.80664 25.4727C11.111 24.8313 12.5455 24.4985 13.999 24.5H26.001C27.4545 24.4985 28.889 24.8313 30.1934 25.4727C31.4978 26.114 32.637 27.0472 33.5234 28.1992L33.9834 28.7959L34.3545 28.1406C35.7783 25.6304 36.5196 22.7902 36.5029 19.9043C36.4862 17.0186 35.7124 14.1878 34.2598 11.6943C32.807 9.2007 30.7259 7.13121 28.2236 5.69336C25.8777 4.34539 23.2387 3.59667 20.54 3.50879L20 3.5ZM20 8.5C21.4587 8.5 22.8572 9.07988 23.8887 10.1113C24.9201 11.1428 25.5 12.5413 25.5 14C25.5 15.4587 24.9201 16.8572 23.8887 17.8887C22.8572 18.9201 21.4587 19.5 20 19.5C18.5413 19.5 17.1428 18.9201 16.1113 17.8887C15.0799 16.8572 14.5 15.4587 14.5 14C14.5 12.5413 15.0799 11.1428 16.1113 10.1113C17.1428 9.07988 18.5413 8.5 20 8.5Z" fill="white" stroke="white"/>
</svg>
,
    title: "Certified Instructors",
    desc: "Learn from experts and industry professionals.",
  },
];

export default function MaxtronDifference() {
  return (
    <section className="w-full bg-[#F8F8F8] py-16 md:py-20 px-5">
      <div className="max-w-[96rem] mx-auto text-center">

        
        <h2 className="text-[28px] md:text-[36px] font-medium text-[#0E061D]">
          The Maxtron Difference
        </h2>

     
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-center max-w-6xl mx-auto">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-xl px-6 py-8 flex flex-col items-center text-center shadow-sm "
            >
             
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#331568] text-white text-lg mb-4 p-3">
                {item.icon}
              </div>

           
              <h3 className="text-[14px] font-semibold text-[#0E061D]">
                {item.title}
              </h3>

             
              <p className="mt-2 text-[12px] text-[#6B6B6B] max-w-[200px]">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

       
        <div className="mt-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-[170px] md:w-[210px] h-[38px] md:h-[47px] lg:h-[53px] bg-[#331568] rounded-md text-white hover:bg-black/90 transition"
          >
            <span className="absolute top-2 left-3 text-sm md:text-base">
              Apply Now
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
    </section>
  );
}