"use client";

import { periods } from "@/constants/periods";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TimelineItem from "./timeline-item";

export interface TimelineListProps {}

export default function TimelineList({}: TimelineListProps) {
  const targetRef = useRef(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    // @ts-ignore
    return targetRef.current.scrollTo(currentPage);
  }, [currentPage]);
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Parallax
        config={{ duration: 0, decay: 1, mass: 0.4, tension: 0.4 }}
        ref={targetRef}
        pages={periods.length}
        className="max-w-[95dvw] of-hidden  max-h-[80dvh] md:px-8"
      >
        {periods.map((timelinePeriod, index) => {
          return (
            <TimelineItem
              currentPage={currentPage}
              key={index}
              index={index}
              period={timelinePeriod}
            />
          );
        })}
        <ParallaxLayer
          className="max-w-fit pb-6 md:pb-0 justify-end md:justify-center flex flex-col"
          sticky={{
            start: 0,
            end: periods.length,
          }}
        >
          <div>
            <button
              onClick={() =>
                setCurrentPage((prev) => {
                  setDirection("up");
                  if (prev === 0) return prev;
                  return prev - 1;
                })
              }
              className="bg-black w-10 h-14 md:w-12 md:h-16  transition-all hover:scale-105 hover:bg-primary-500 active:scale-100 hover-effect arrow-up"
            />

            <div className="flex flex-col">
              <div className="bg-black w-10 h-10 md:w-12 md:h-12 items-center justify-center flex rounded-full">
                <motion.p
                  initial={{
                    opacity: 0,
                    translateX: direction === "up" ? -100 : 100,
                  }}
                  animate={{
                    opacity: 1,
                    translateX: 0,
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                  key={currentPage}
                  className="text-white mix-blend-difference text-sm md:text-base font-bold"
                >
                  {
                    {
                      0: "2021",
                      1: "2022",
                      2: "2023",
                    }[currentPage]
                  }
                </motion.p>
              </div>
            </div>
            <button
              onClick={() => {
                setCurrentPage((prev) => {
                  setDirection("down");
                  if (prev === periods.length - 1) return prev;
                  return prev + 1;
                });
              }}
              className="bg-black w-10 h-14 md:w-12 md:h-16  transition-all hover:scale-105 hover:bg-primary-500 active:scale-100 hover-effect arrow-down"
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
