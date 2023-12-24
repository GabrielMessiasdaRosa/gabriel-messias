"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export interface LeftImageProjectDetailsProps {
  project: {
    name: string;
    description: string;
    techs: string[];
    work: string;
    image: string;
  };
}

export default function LeftImageProjectDetails({
  project,
}: LeftImageProjectDetailsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="lg:min-h-[400px]  min-h-[300px]">
      {isInView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="hover-effect flex flex-col lg:flex-row lg:space-x-20 lg:items-center lg:justify-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hover-effect hidden lg:flex transition-all duration-1000 ease-in-out hover:scale-95"
          >
            <img
              src={project.image}
              alt=""
              className="hover-effect shadow-gray-600 "
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hover-effect lg:w-1/2 lg:text-lg flex flex-col gap-4"
          >
            <span className="hover-effect text-xl lg:text-4xl font-black text-primary-500">
              {project.name}
            </span>
            <span className="hover-effect">{project.description}</span>
            <span className="hover-effect text-lg lg:text-2xl">
              {project.work}
            </span>
            <span>{project.techs.join(" | ")}</span>
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
