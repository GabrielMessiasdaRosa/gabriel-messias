"use client";

import { motion } from "framer-motion";

export interface BackgroundProps {}

export default function Background({}: BackgroundProps) {
  return (
    <motion.video
      className="absolute blur-sm filter inset-0 -z-50 w-full h-full object-cover"
      autoPlay
      muted
      loop
      src="/smoke-video.mp4"
    />
  );
}
