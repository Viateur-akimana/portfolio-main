"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVarient } from "../app/utils/motion";

const TitleText = ({ title }: { title: string }) => {
  return (
    <motion.h2
      variants={textVarient}
      initial="hidden"
      whileInView="show"
      className="mt-20 mb-5 text-transparent text-4xl lg:text-7xl bg-clip-text text-blue-500 font-bold md:text-[64px] text-center"
    >
      {title}
    </motion.h2>
  );
};

export default TitleText;