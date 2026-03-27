'use client'

import Image from 'next/image'


const data = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 33 33" fill="none">
        <path d="M9.625 11L4.125 16.5L9.625 22" stroke="black" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23.375 11L28.875 16.5L23.375 22" stroke="black" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.2501 5.5L13.5561 26.7504" stroke="black" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
   title: "Learn from Real Operators",
    desc: "Built by practitioners who deploy AI inside real businesses not just theory or demos.",
  },
  {
    icon: (
 <svg xmlns="http://www.w3.org/2000/svg"   width="100%"
  height="100%"
  viewBox="0 0 34 34"
  fill="none">
  <g clipPath="url(#clip0_1_223)">
    <path d="M20.2251 2.05371L20.8891 5.33789L20.9253 5.51465L21.0903 5.58984L25.0551 7.37305L25.2329 7.45215L25.394 7.3457L28.3979 5.3623L31.601 8.53223L29.5844 11.8604L29.5024 11.9951L29.5483 12.1465L30.6294 15.7129L30.6928 15.9229L30.9096 15.958L34.9389 16.6221V21.0166L30.9096 21.6816L30.7426 21.709L30.6596 21.8564L28.8569 25.0664L28.7534 25.252L28.8676 25.4307L31.227 29.0986L28.0561 31.9238L24.6801 29.5859L24.5093 29.4668L24.3227 29.5596L21.4389 30.9863L21.2778 31.0654L21.2475 31.2432L20.5766 35.2285H16.1235L15.4555 31.5947L15.4194 31.4023L15.2378 31.3311L11.6333 29.9043L11.4624 29.8369L11.3091 29.9375L8.30417 31.9189L5.10105 28.75L7.1196 25.4219L7.2114 25.2715L7.14499 25.1074L5.70359 21.541L5.63034 21.3604L5.43894 21.3252L1.76413 20.6641V16.6182L5.43894 15.957L5.63816 15.9219L5.70749 15.7314L7.1489 11.8086L7.2114 11.6396L7.11081 11.4902L5.11081 8.52246L8.29245 5.375L10.9331 7.33398L11.0991 7.45801L11.2876 7.37305L15.2524 5.58984L15.4184 5.51465L15.4536 5.33789L16.1186 2.05371H20.2251ZM17.9917 8.48145C12.7543 8.48145 8.26712 12.9151 8.26706 18.1064C8.26706 23.6632 12.7632 27.7324 17.9917 27.7324C23.2201 27.7323 27.7153 23.6632 27.7153 18.1064C27.7152 12.9152 23.229 8.48154 17.9917 8.48145Z" fill="#535353" stroke="#F1F1F1" strokeWidth="0.705847"/>
  </g>
  <defs>
    <clipPath id="clip0_1_223">
      <rect width="35.2924" height="37.4099" fill="white"/>
    </clipPath>
  </defs>
</svg>
    ),
    title: "Execution-First Approach",
    desc: "From strategy to live deployment, we focus on shipping working AI systems fast.",
  },
  {
    icon: (
     <svg
  xmlns="http://www.w3.org/2000/svg"
  width="100%"
  height="100%"
  viewBox="0 0 34 34"
  fill="none"
>
  <path d="M16.668 18.8992C16.668 18.9872 16.703 19.0717 16.7652 19.134C16.8275 19.1962 16.9119 19.2312 17 19.2312C17.0881 19.2312 17.1725 19.1962 17.2348 19.134C17.297 19.0717 17.332 18.9872 17.332 18.8992C17.332 18.8111 17.297 18.7267 17.2348 18.6644C17.1725 18.6021 17.0881 18.5671 17 18.5671C16.9119 18.5671 16.8275 18.6021 16.7652 18.6644C16.703 18.7267 16.668 18.8111 16.668 18.8992Z" fill="#626263"/>
  <path d="M20.3137 20.4897H13.4971L3.58594 12.9592V13.6266L13.3145 21.0209H20.4863L30.4141 13.6067V12.9426L20.3137 20.4897Z" fill="#626263"/>
  <path d="M23.375 8.52661V5.38892H10.625V8.52661H2.125V28.6145H31.875V8.52661H23.375ZM12.0859 6.84985H21.9141V8.52329H12.0859V6.84985ZM30.4141 27.1536H3.58594V25.5333H30.4141V27.1536ZM30.4141 24.9987H3.58594V9.98755H30.4141V24.9987Z" fill="#39393A"/>
</svg>
    ),
   title: "Business-Focused, Not Technical",
    desc: "We solve revenue, cost, and efficiency problems—not just build complex models.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        <path d="M8 25L18 16L8 7" stroke="#626263" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 25V7" stroke="#626263" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
      title: "Faster, Outcome-Driven",
    desc: "Every solution is tied to measurable impact: time saved, cost reduced, growth unlocked.",
  },
]

const WhySection = () => {
  return (
    <section className="w-full bg-[#F3F3F3] py-12 md:py-20 px-5 md:px-16">

      <div className="max-w-[96rem] mx-auto">

    
        <h2 className="text-center text-[28px] md:text-[36px] font-medium text-[#0E061D] mb-10 md:mb-14">
          You Are Our Priority
        </h2>

      
        <div className="bg-[#ffffff] rounded-2xl p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/images/lady.png"
                alt="lady"
                fill
                className="object-cover"
              />
            </div>

        
            <div className="space-y-6 md:space-y-8">

              {data.map((item, index) => (
                <div key={index} className="flex items-start gap-4">

                
                  <div className="w-6 h-6 flex items-center justify-center text-[#5B3DF5]">
                    {item.icon}
                  </div>

                
                  <div>
                    <p className="text-[14px] md:text-[15px] font-semibold text-[#0E061D]">
                      {item.title}
                    </p>

                    <p className="text-[12px] text-[#6B6B6B] mt-1 leading-relaxed max-w-[420px]">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default WhySection