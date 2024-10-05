import React from 'react'
import { FaLinkedin, FaInstagram, FaTwitterSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
      
      <h1 className='text-2xl font-bold'>Ritesh Biswas</h1>

      <div className='flex space-x-6 mt-4 '>
        <a href="https://www.linkedin.com/in/ritesh-biswas-810640224/" className='hover:text-gray-300'><FaLinkedin/></a>

        <a href="https://www.instagram.com/luse_biswas_/" className='hover:text-gray-300'><FaInstagram/></a>

        <a href="https://x.com/lusebiswas" className='hover:text-gray-300'><FaTwitterSquare/></a>
      </div>
    </div>
  )
}

export default Footer
