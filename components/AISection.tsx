'use client'

import Image from 'next/image'

const AISection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[700px] overflow-hidden">

      <Image
        src="/images/ai.png"
        alt="AI Background"
        fill
        className="object-cover"
        priority
      />


      <div className="absolute inset-0 bg-black/60" />

 
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-16 text-center">
        <p className="text-[#F1F1F1] text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed">
          You’ll get direct guidance on applying AI in your own business, with feedback,
          frameworks, and systems you can deploy immediately.
        </p>
      </div>
    </div>
  )
}

export default AISection