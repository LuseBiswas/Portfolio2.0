"use client";
import React from 'react'
import Image from 'next/image';
import music from '../assets/Music.png';
import books from '../assets/books.png'
import { motion} from "framer-motion"
import profilePic2 from '../assets/progile.png';
function Hero() {
  return (
    <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#BF5C55_60%,#DBAF6E_80%)]'>
      <div className='absolute rounded-[50%] w-[3000px] h-[1300px]  top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'>

      </div>
      <div className='relative'>
        <div className='text-8xl font-bold text-center'>
            <h1 className='text-[#98B4CE]'>Hi, I am</h1>
            <h1 className='text-[#E48A57]'>Ritesh Biswas</h1>
        </div>

        <motion.div
        className='hidden md:block absolute left-[180px] top-[170px]'
        drag
        >
            <Image src={music} height="170" width="170" alt='cursor' className='' draggable='false'/>
        </motion.div>

        <motion.div
        className='hidden md:block absolute right-[170px] top-[70px]'
        drag
        >
            <Image src={books} height="170" width="170" alt='cursor' className='' draggable='false'/>
        </motion.div>
      

      <p className='text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80'>
      Want to know more about me ?. Scroll down.
      </p>
      <Image src={profilePic2} alt='profile' className='h-auto w-auto mx-auto'/>
      </div>
    </div>
  )
}

export default Hero
