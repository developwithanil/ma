'use client'

import Image from 'next/image'
import { useState } from 'react'

type Testimonial = {
  image: string
  name: string
  designation: string
  button: string
  description: string
}

const splitName = (name: string) => {
  const parts = name.trim().split(/\s+/g)
  const first = parts.shift() ?? name
  const rest = parts.join(' ')
  return { first, rest }
}

export default function Testimonials({ data }: { data: Testimonial[] }) {
  const [expanded, setExpanded] = useState(false)

  const visibleData = expanded ? data : data.slice(0, 3)

  return (
    <section className="w-full bg-[#E6E6E6]">
      <div className="mx-auto max-w-[96rem] px-5 md:px-16 py-10 md:py-14 lg:py-16">

        {/* TITLE */}
        <h2 className="text-center text-[34px] leading-tight md:text-[40px] font-medium text-[#242424]">
          Learn from Leaders Building with AI
        </h2>

        {/* GRID */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleData.map((item) => {
            const { first, rest } = splitName(item.name)

            return (
              <article
                key={item.name}
                className="relative border border-[#CFCFCF] bg-white px-6 py-6 flex flex-col transition hover:shadow-md"
              >
                
                {/* HEADER */}
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 text-left">
                    <h3 className="text-[24px] font-semibold text-[#242424] leading-[1.05]">
                      <span className="block">{first}</span>
                      <span className="block">{rest}</span>
                    </h3>

                    <p className="mt-1 text-[12px] text-[#523270] font-medium">
                      {item.designation}
                    </p>
                  </div>
                </div>

                {/* TAG */}
                <div className="mt-4 w-[80%] mx-auto bg-[#5C379D] text-white text-center text-[12px] py-2 rounded-[4px]">
                  {item.button}
                </div>

                {/* CONTENT */}
                <div className="relative mt-6 flex-1 pt-2">
                  <p className="text-[30px] font-bold text-[#242424] opacity-90 leading-none">
                    “
                  </p>

                  <p className="text-[16px] text-[#3D3D3D] leading-relaxed text-center px-2">
                    {item.description}
                  </p>

                  <p className="text-right text-[30px] font-bold text-[#242424] opacity-90 leading-none">
                    ”
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* BUTTON */}
        {!expanded && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setExpanded(true)}
              className="bg-[#331568] text-white px-6 py-2 rounded-md text-sm hover:bg-black transition"
            >
              Show More
            </button>
          </div>
        )}

      </div>
    </section>
  )
}