'use client'


import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="h-14 flex items-center px-6 md:px-10 bg-[#F1F1F1] z-20 max-w-[96rem] mx-auto w-full ">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={40}
        height={40}
        priority
      />
    </div>
  )
}

export default Navbar