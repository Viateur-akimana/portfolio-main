"use client";
import React, { useState } from "react";
import TitleText from "./TitleText";
import { textVarient } from "../app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    name: "React",
    image: "/images/react-logo.svg", 
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    image: "/images/tailwind-logo.svg", 
    category: "Frontend",
  },
  {
    name: "Next.js",
    image: "/images/nextjs-logo.svg", 
    category: "Frontend",
  },
  {
    name: "TypeScript",
    image: "/images/typescript-logo.svg", 
    category: "Frontend",
  },

  // Backend Technologies
  {
    name: "Node.js",
    image: "/images/nodejs-logo.svg", 
    category: "Backend",
  },
  {
    name: "Express.js",
    image: "/images/express-logo.svg", 
    category: "Backend",
  },
  {
    name: "Python",
    image: "/images/python-logo.svg", 
    category: "Backend",
  },
  {
    name: "MongoDB",
    image: "/images/mongodb-logo.svg", 
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    image: "/images/postgresql-logo.svg", 
    category: "Backend",
  },

  // Mobile Technologies
  {
    name: "Flutter",
    image: "/images/flutter-logo.svg", 
    category: "Mobile",
  },
  {
    name: "React Native",
    image: "/images/react-native-logo.svg", 
    category: "Mobile",
  },

  // DevOps Technologies
  {
    name: "Docker",
    image: "/images/docker-logo.svg", 
    category: "DevOps",
  },
  {
    name: "Kubernetes",
    image: "/images/kubernetes-logo.svg", 
    category: "DevOps",
  },
  {
    name: "Jenkins",
    image: "/images/jenkins-logo.svg", 
    category: "DevOps",
  },
  {
    name: "Terraform",
    image: "/images/terraform-logo.svg", 
    category: "DevOps",
  },

  // Cloud Technologies
  {
    name: "AWS",
    image: "/images/aws-logo.svg", 
    category: "Cloud",
  },
  {
    name: "Azure",
    image: "/images/azure-logo.svg", 
    category: "Cloud",
  },
  {
    name: "Google Cloud",
    image: "/images/gcp-logo.svg", 
    category: "Cloud",
  },


  {
    name: "MySQL",
    image: "/images/mysql-logo.svg",
    category: "Database",
  },
  {
    name: "Redis",
    image: "/images/redis-logo.svg", 
    category: "Database",
  },
  {
    name: "SQLite",
    image: "/images/sqlite-logo.svg", 
    category: "Database",
  },

  {
    name: "Git",
    image: "/images/git-logo.svg", 
    category: "Tools",
  },
  {
    name: "Nginx",
    image: "/images/nginx-logo.svg", 
    category: "Tools",
  },
  {
    name: "Figma",
    image: "/images/figma-logo.svg", 
    category: "Tools",
  },
  {
    name: "VS Code",
    image: "/images/vscode-logo.svg",
    category: "Tools",
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <div className="text-center" id="skills">

      <TitleText title="Technical skills" />

      <div className="flex justify-center gap-5 mt-5">
        {["Frontend", "Backend", "Mobile", "DevOps", "Cloud", "Database", "Tools"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            } transition duration-300 ease-in-out`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        variants={textVarient}
        initial="hidden"
        whileInView="show"
        className="flex gap-10 items-center justify-center flex-wrap mt-10"
      >
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-5"
          >
            <div className="flex flex-col justify-center items-center bg-gray-800 border-2 border-gray-700 w-24 h-24 p-5 rounded-full hover:bg-gray-600/80 transition duration-500 ease-in-out">
              <Image
                src={skill.image}
                className="w-12 h-12 object-contain"
                alt={skill.name}
                width="48"
                height="48"
              />
            </div>
            <h2 className="text-gray-300 font-bold text-lg">{skill.name}</h2>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
