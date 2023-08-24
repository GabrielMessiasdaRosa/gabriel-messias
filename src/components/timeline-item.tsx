"use client";

import { PeriodType } from "@/types/period-type";
import { ParallaxLayer } from "@react-spring/parallax";
import ProjectCards from "./project-cards";

export interface TimelineItemProps {
  period: PeriodType;
  index: number;
  currentPage: number;
}

export default function TimelineItem({
  period,
  index,
  currentPage,
}: TimelineItemProps) {
  return (
    <>
      <ParallaxLayer className="max-w-[100dvw] md:ml-6" speed={0.5} offset={index}>
        <ProjectCards currentPage={currentPage} projects={period.projects} />
      </ParallaxLayer>
    </>
  );
}
