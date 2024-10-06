"use client";
import React from "react";
import { FaBriefcase, FaLaptopCode, FaGithub, FaSchool } from "react-icons/fa";
import Image from "next/image";
import internshipIcon from "../assets/SDE.png";
import internshipIcon2 from "../assets/OpenSource.png";
import internshipIcon3 from "../assets/HR.png";
import internshipIcon4 from "../assets/PaidContributio.png";



function Experience() {
  return (
    <div className="mt-20 max-w-[1200px] mx-auto" id="experience">
      <h1 className="text-white text-6xl max-w-[420px] mx-auto font-semibold p-4 mb-4">
      Career <span className="text-orange-400">Path</span>
      </h1>

      <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">
        {/* Internship 1 */}

        <div className="w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-700 to-purple-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 ">
            <Image src={internshipIcon} alt="internship" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80 ">SDE Intern</h2>
              <p className="text-lg text-white/70 mt-2">
                Worked at Solar Secure Solutions where I worked on some government projects to understand the complex and light weight structure.
              </p>
            </div>
          </div>
        </div>

        {/* Internship 2 */}
        <div className="w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="flex flex-row p-6 ">
          <Image src={internshipIcon2} alt="internship" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80 ">Open Source Contributor</h2>
              <p className="text-lg text-white/70 mt-2">
              Contributed to open-source projects on GitHub, improving performance and fixing bugs in React libraries, including resolving 3 issues in MaterialUI.
              </p>
            </div>
          </div>
        </div>

        {/* Internship 3 */}
        <div className="w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="flex flex-row p-6 ">
          <Image src={internshipIcon3} alt="internship" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80 ">HR-Intern</h2>
              <p className="text-lg text-white/70 mt-2">
                Working as a HR Intern for Uiversal Tribes. Which helps me to improve my communication skills and boost my confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Experience */}
        <div className="w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-blue-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 ">
          <Image src={internshipIcon4} alt="internship" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80 ">Contract Work</h2>
              <p className="text-lg text-white/70 mt-2">
                Currently I am contributor on Earthfeild Project. Which is a platform to meet the retailer to the big MNC. To full fill the Supply and Demand in market.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Experience;
