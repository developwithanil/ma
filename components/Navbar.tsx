'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="h-14 flex items-center px-6 md:px-10 bg-[#F1F1F1] z-20 max-w-[96rem] mx-auto w-full"
    >
      <Image
        src="/images/logo1.png"
        alt="logo"
        width={200}
        height={260}
        priority
      />
    </motion.div>
  )
}

export default Navbar