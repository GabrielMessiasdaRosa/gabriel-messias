"use client";

import { PeriodType } from "@/types/period-type";
import { ParallaxLayer } from "@react-spring/parallax";
import ProjectCards from "./project-cards";

export interface TimelineItemProps {
  period: PeriodType;
  index: number;
}

export default function TimelineItem({ period, index }: TimelineItemProps) {
  return (
    <>
      <ParallaxLayer
        className="max-w-[100dvw] md:ml-6"
        speed={0.5}
        offset={index}
      >
        <ProjectCards projects={period.projects} />
      </ParallaxLayer>
    </>
  );
}
