"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
export interface CursorProps {}
const OFFSET = 8;
const BREAKPOINT_TABLET = 768;

export default function Cursor({}: CursorProps) {
  const [hover, setHover] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hoverLg, setHoverLg] = useState<boolean>(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const mobile = window.innerWidth < BREAKPOINT_TABLET;
    if (!mobile) {
      const addHoverEffect = (event: any) => {
        const element = event.target;
        if (element.classList.contains("hover-effect")) {
          setHover(true);
        } else if (element.classList.contains("hover-effect-lg")) {
          setHoverLg(true);
        } else {
          setHover(false);
          setHoverLg(false);
        }
      };
      const moveCursor = (event: MouseEvent) => {
        cursorX.set(event.clientX - OFFSET);
        cursorY.set(event.clientY - OFFSET);
      };
      document.addEventListener("mouseover", addHoverEffect);
      window.addEventListener("mousemove", moveCursor);
      return () => {
        document.removeEventListener("mouseover", addHoverEffect);
        window.removeEventListener("mousemove", moveCursor);
      };
    } else {
      setIsMobile(true);
    }
  }, []);
  return isMobile ? null : (
    <motion.div
      id={"cursor"}
      className="cursor"
      animate={{
        scale: hover ? 3 : hoverLg ? 8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.3,
        mass: 1,
        restDelta: 0.01,
        restSpeed: 10,
        delay: 0.1,
      }}
      style={{
        zIndex: 9999,
        translateX: cursorX,
        translateY: cursorY,
        position: "fixed",
        left: "0",
        top: "0",
        width: "16px",
        height: "16px",
        borderRadius: "100%",
        mixBlendMode: "difference",
        backgroundColor: "white",
        pointerEvents: "none",
      }}
    />
  );
}
