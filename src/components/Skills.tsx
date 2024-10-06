
import React from 'react'
import { FaHtml5,FaReact,FaCss3,FaGitAlt, FaAws, FaJira , FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiTailwindcss, SiGooglecloud, SiPostgresql, SiSelenium, SiExpress, SiPostman  } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { PiFileCppBold } from "react-icons/pi";

function Skills() {
    const skillIcons = [
        {icon: <PiFileCppBold size={140}/>, label:"C++"},
        {icon: <FaHtml5 size={140}/>, label:"HTML"},
        {icon: <FaCss3 size={140}/>, label:"CSS"},
        {icon: <SiJavascript size={140}/>, label:"Javascript"},
        {icon: <RiNextjsFill size={140}/>, label:"NextJS"},
        {icon: <FaNodeJs size={140}/>, label:"NodeJS"},
        {icon: <SiExpress size={140}/>, label:"Express"},
        {icon: <FaReact size={140}/>, label:"React"},
        {icon: <SiTailwindcss size={140}/>, label:"Tailwind"},
        {icon: <SiMongodb size={140}/>, label:"MongoDB"},
        {icon: <IoLogoFirebase size={140}/>, label:"Firebase"},
        {icon: <SiPostgresql size={140}/>, label:"PostgreSql"},
        {icon: <SiSelenium size={140}/>, label:"Selenium"},
        {icon: <SiGooglecloud size={140}/>, label:"Google Cloud Platform"},
        {icon: <FaAws size={140}/>, label:"AWS"},
        {icon: <FaJira size={140}/>, label:"Jira"},
        {icon: <FaGitAlt size={140}/>, label:"Git"},
        {icon: <FaGithub size={140}/>, label:"GitHub"},
        {icon: <SiPostman size={140}/>, label:"Postman"},
        
        
    ]
  return (
    <div className='bg-[linear-gradient(to_top,#000,#38a5f_80%)] py-32'>
        <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
        <h1 className="text-white text-6xl max-w-[400px] mx-auto font-semibold my-12">
      <span className="text-orange-400 ">&lt;</span>
      WhatIDo
      <span className="text-orange-400 ">&#47;</span> 
        <span className="text-orange-400 ">&gt;</span>
      </h1>
            <div className='grid grid-cols-2 md:grid-cols-4  gap-6  '>
                {
                    skillIcons.map((skills,index)=>(
                        <div key={index} className='h-[160px] w-[160px] md:h-[180px] md:w-[180px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                            {skills.icon}
                            <p className='mt-2'>{skills.label}</p>


                        </div>
                    ))
                }
            </div>

        </div>
      
    </div>
  )
}

export default Skills
