"use client";

import { ProjectsType as ProjectType } from "@/types/projects-type";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export interface ProjectCardsProps {
  projects: ProjectType[];
  currentPage: number;
}

export default function ProjectCards({
  projects,
  currentPage,
}: ProjectCardsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [inView, setInView] = useState<"inView" | "notInView">("notInView");

  useEffect(() => {
    if (isInView) {
      setInView("inView");
    } else {
      setInView("notInView");
    }
  }, [isInView]);
  return (
    <div className="flex justify-center" ref={ref}>
      <Parallax pages={projects.length} className="z-50 bg-black max-w-[93%] ">
        {projects.map((project, index) => {
          return (
            <ParallaxLayer
              key={index}
              offset={index}
              speed={0.2}
              className="bg-gray-100 flex-1"
            >
              <div className="flex gap-x-12 items-center p-6 flex-1 h-full">
                <div className="flex-1 gap-6 flex flex-col h-full">
                  <h3 className="text-5xl font-semibold">{project.name}</h3>
                  <p className="text-lg font-light">{project.description}</p>
                  <div className="flex flex-wrap">
                    {project.techStack.map((tech, index) => {
                      return (
                        <motion.div
                          key={index}
                          className="bg-black rounded-sm px-4 py-2 text-sm font-semibold text-gray-100 m-2"
                        >
                          {tech}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex-1">
                  <img src={project.image} alt="" />
                </div>
              </div>
            </ParallaxLayer>
          );
        })}
        <ParallaxLayer
          offset={0}
          speed={2}
          className="items-end py-40 flex justify-center"
        >
          <AnimatePresence>
            <div className="w-40 h-20">
              {inView === "inView" && (
                <motion.div
                  className="w-40 h-20 flex items-center flex-col justify-center"
                  initial={{
                    opacity: 0.5,
                  }}
                  animate={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 2,
                  }}
                >
                  <svg
                    viewBox="0 0 28 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.6166 0.833319H14.3833C17.8415 0.828222 21.1595 2.19974 23.6049 4.64507C26.0502 7.0904 27.4217 10.4084 27.4166 13.8667V26.1333C27.4217 29.5915 26.0502 32.9096 23.6049 35.3549C21.1595 37.8002 17.8415 39.1717 14.3833 39.1667H13.6166C10.1584 39.1717 6.84034 37.8002 4.39501 35.3549C1.94968 32.9096 0.578169 29.5915 0.583266 26.1333V13.8667C0.578169 10.4084 1.94968 7.0904 4.39501 4.64507C6.84034 2.19974 10.1584 0.828222 13.6166 0.833319ZM14.3833 36.2917C19.9892 36.2811 24.5311 31.7392 24.5416 26.1333V13.8667C24.5311 8.26073 19.9892 3.71887 14.3833 3.70832H13.6166C8.01068 3.71887 3.46881 8.26073 3.45827 13.8667V26.1333C3.46881 31.7392 8.01068 36.2811 13.6166 36.2917H14.3833Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.9999 8.97917C13.2104 8.98949 12.5728 9.62707 12.5624 10.4167V20C12.5624 20.7939 13.206 21.4375 13.9999 21.4375C14.7939 21.4375 15.4374 20.7939 15.4374 20V10.4167C15.4271 9.62707 14.7895 8.98949 13.9999 8.97917Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* make a arrow down icon */}
                  <motion.div className="animate-bounce">
                    <svg
                      width="15"
                      height="30"
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.4208 0C18.0166 0 17.6124 0.153685 17.304 0.462106L9.99975 7.76738L2.69553 0.462106C2.07869 -0.153685 1.07869 -0.153685 0.461843 0.462106C-0.153948 1.07895 -0.153948 2.07895 0.461843 2.69579L8.88291 11.1169C9.49975 11.7326 10.4998 11.7326 11.1166 11.1169L19.5377 2.69579C20.1534 2.07895 20.1534 1.07895 19.5377 0.462106C19.2292 0.153685 18.825 0 18.4208 0Z"
                        fill="black"
                      />
                    </svg>
                  </motion.div>
                  <p className="">scroll down</p>
                </motion.div>
              )}
            </div>
          </AnimatePresence>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
