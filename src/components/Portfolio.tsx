"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import project from "../assets/Pro2.png";
import project1 from "../assets/Pro1.png";
import project2 from "../assets/Pro3.png";

const projects = [
  {
    title: "Travel Ginne-AI Based SAAS",
    descriptio:
      "Developed a platform that generates comprehensive trip itineraries using the Google Gemini API, simplifying travel planning.",
    devStack:
      "React, Tailwind, Firebase, ShadcnUI,GCP, NodeJS, Express, Selenium",
    link: "https://travel-ginne.vercel.app/",
    src: project1,
  },

  {
    title: "CUPE(Chandigarh University Placement Experience)",
    descriptio:
      "Developed a website where seniors share campus placement experiences, aiding juniors in preparation.",
    devStack:
      "React,Tailwind, MongoDB, Google Sheet, NodeJS, Express, Selenium",
    link: "https://cupe-frontend.vercel.app/",
    src: project,
  },

  {
    title: "Study Material Platform",
    descriptio:
      "Created a platform for organizing and sharing educational videos recommended by instructors.",
    devStack: "React, Firebase, ChakraUI, GoogleAuth, Selenium",
    link: "https://videoapp69.web.app/",
    src: project2,
  },
];

function Portfolio() {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381A5f] py-18 mt-52"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
      <span className="text-orange-400 ">&lt;</span>
      Projects
      <span className="text-orange-400 ">&#47;</span> 
        <span className="text-orange-400 ">&gt;</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex ${
              index % 2 === 1
                ? "flex-col-reverse md:flex-row-reverse gap-12 "
                : "flex-col md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px] ">
              <h2 className="text-7xl my-4 text-white/70 ">{`0${
                index + 1
              }`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.descriptio}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">
                  Link
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center ">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[500px] object-cover "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
