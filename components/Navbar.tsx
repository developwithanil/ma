'use client'


import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="h-14 flex items-center px-6 md:px-10 bg-white z-20">
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