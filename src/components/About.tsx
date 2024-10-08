"use client";
import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

function About() {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className="text-white text-6xl max-w-[280px] mx-auto font-semibold my-12">
        <span className="text-orange-400 ">&lt;</span>
        About
        <span className="text-orange-400 ">&#47;</span>
        <span className="text-orange-400 ">&gt;</span>
      </h1>

      {/* We gonna have 4-containers and 2-per-line. And one will take 5 cols and second will take 5  */}
      <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 ">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80 ">About Me</h2>
              <p className="text-lg text-white/70 mt-2">
                I hold a Degree of BTech CSE & I&apos;m eager to learn new
                Technologies
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="flex flex-row p-6 ">
            <Image src={pc} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80 ">
                Problem-Solving
              </h2>
              <p className="text-lg text-white/70 mt-2">
                I approach the prblem with the Top-Down approach
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 ">
            <Image src={finance} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80 ">
                Technical Skills
              </h2>
              <p className="text-lg text-white/70 mt-2">
                I&apos;m specialized in React JS, Next JS and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="flex flex-row p-6 ">
            <Image src={card} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80 ">Experience</h2>
              <p className="text-lg text-white/70 mt-2">
                I had done several Internhsips and had done open source
                contribution
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default About;
