"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TitleText from "./TitleText";
import { textVarient } from "../app/utils/motion";
import Image from 'next/image'

// Sample data for categories and work (projects)
const categories = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "Mobile Apps" },
  { id: 3, name: "UI/UX Design" },
  { id: 4, name: "DevOps" },
];

const work = [
  {
    id: 1,
    name: "Zipline Control System",
    description: "A system for controlling zipline rides with real-time monitoring.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    categoryId: 1,
    githubLink: "https://github.com/user/zipline-system",
    liveLink: "https://zipline-live-demo.com",
    image: "/images/zipline.jpg", // Example image path
  },
  {
    id: 2,
    name: "Mobile Ride Tracker",
    description: "An app to track zipline rides using GPS for mobile devices.",
    techStack: ["React Native", "Firebase"],
    categoryId: 2,
    githubLink: "https://github.com/user/mobile-ride-tracker",
    liveLink: "https://ride-tracker-app.com",
    image: "/images/mobile-ride-tracker.jpg", // Example image path
  },
  {
    id: 3,
    name: "Bridge AI Platform",
    description: "AI-powered platform for site analysis of bridges.",
    techStack: ["Python", "TensorFlow", "Flask"],
    categoryId: 3,
    githubLink: "https://github.com/user/bridge-ai-platform",
    liveLink: "https://bridge-ai-platform.com",
    image: "/images/bridge-ai.jpg", // Example image path
  },
  {
    id: 4,
    name: "Real-time Chat Application",
    description: "A real-time messaging app built with WebSockets for instant communication.",
    techStack: ["React", "Node.js", "WebSocket", "MongoDB"],
    categoryId: 1,
    githubLink: "https://github.com/user/chat-app",
    liveLink: "https://chat-app.com",
    image: "/images/chat-app.jpg",
  },
  {
    id: 5,
    name: "E-commerce Website",
    description: "A full-stack e-commerce platform with payment gateway integration.",
    techStack: ["React", "Node.js", "Express", "Stripe", "MongoDB"],
    categoryId: 1,
    githubLink: "https://github.com/user/e-commerce-site",
    liveLink: "https://e-commerce-live.com",
    image: "/images/e-commerce-site.jpg",
  },
  {
    id: 6,
    name: "Mobile Fitness Tracker",
    description: "A mobile app to track fitness data and provide workout recommendations.",
    techStack: ["React Native", "MongoDB", "Firebase"],
    categoryId: 2,
    githubLink: "https://github.com/user/fitness-tracker",
    liveLink: "https://fitness-tracker-app.com",
    image: "/images/fitness-tracker.jpg",
  },
];

const Experience = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(0);

  const filteredWork = selectedCategoryId
    ? work.filter((product) => product.categoryId === selectedCategoryId)
    : work;

  return (
    <>
      <div className="px-6 sm:px-12 md:px-24" id="projects">
        <TitleText title="My Projects" />
        <motion.div variants={textVarient} initial="hidden" whileInView="show">
          <p className="text-white text-center text-lg p-10 md:px-[25%]">
            We bring your ideas to life by creating unique and inspiring web and mobile projects.
          </p>


          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            {filteredWork.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 p-5 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                {/* Project Image */}
                {/* <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-md mb-5"
                /> */}
                 <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-5"
                />

                {/* Project Title and Description */}
                <h3 className="text-white text-2xl font-semibold">{project.name}</h3>
                <p className="text-gray-300 text-sm mt-2">{project.description}</p>

                {/* Tech Stack */}
                <div className="mt-4">
                  <h4 className="text-gray-200 text-lg font-medium">Tech Stack:</h4>
                  <ul className="flex flex-wrap gap-3 mt-2">
                    {project.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-blue-600 text-white py-1 px-3 rounded-md text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="mt-5 flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500 transition-all"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-500 transition-all"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Experience;
