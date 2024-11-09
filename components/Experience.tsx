"use client";
import React from "react";
import TitleText from "./TitleText";
import { motion } from "framer-motion";
import { textVarient } from "../app/utils/motion";
import { BackgroundGradient } from "./ui/background-gradient";

// Sample experience data
const experience = [
  {
    id: 1,
    title: "Frontend Developer",
    startDate: "January 2022",
    endDate: "Present",
    description:
      "Developed and maintained front-end web applications using React, TypeScript, and Tailwind CSS, ensuring high performance and responsiveness.",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    startDate: "June 2021",
    endDate: "December 2021",
    description:
      "Worked on backend development using Node.js and Express, integrated APIs, and assisted with database management using MongoDB.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    startDate: "March 2020",
    endDate: "May 2021",
    description:
      "Designed user interfaces and user experiences for web and mobile applications, focusing on creating intuitive, user-friendly designs using Figma and Adobe XD.",
  },
  {
    id: 4,
    title: "Junior Web Developer",
    startDate: "August 2019",
    endDate: "February 2020",
    description:
      "Worked with a team to build and deploy client-facing websites, focusing on both frontend and backend using HTML, CSS, JavaScript, and PHP.",
  },
];

const Experience = () => {
  return (
    <div className="px-6 sm:px-12 md:px-24" id="experience">
      <TitleText title="My Work Experience" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {experience?.map((exp) => (
          <motion.div
            key={exp.id}
            variants={textVarient}
            initial="hidden"
            whileInView="show"
            className="transition-all duration-500 hover:scale-105"
          >
            <BackgroundGradient className="rounded-[22px] p-6 bg-zinc-900 shadow-xl">
              <p className="text-base sm:text-xl text-gray-300 mt-4 mb-2">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-lg font-semibold text-gray-200">{exp.title}</p>
              <p className="text-sm text-gray-400 mt-2">{exp.description}</p>
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
