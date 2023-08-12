"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
export interface CursorProps {}

export default function Cursor({}: CursorProps) {
  const [hover, setHover] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hoverLg, setHoverLg] = useState<boolean>(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  useEffect(() => {
    const mobile = window.innerWidth < 768;
    if (!mobile) {
      setIsMobile(false);
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
      document.addEventListener("mouseover", addHoverEffect);
      return () => {
        document.removeEventListener("mouseover", addHoverEffect);
      };
    } else {
      setIsMobile(true);
    }
  }, []);
  useEffect(() => {
    const mobile = window.innerWidth < 768;
    if (!mobile) {
      const moveCursor = (event: any) => {
        cursorX.set(event.clientX - 8);
        cursorY.set(event.clientY - 8);
      };
      window.addEventListener("mousemove", moveCursor);
      return () => {
        window.removeEventListener("mousemove", moveCursor);
      };
    } else {
      console.log("mobile");
    }
  }, []);
  return isMobile ? null : (
    <motion.div
      id={"cursor"}
      className="cursor"
      animate={{
        scale: hover ? 3 : hoverLg ? 5 : 1,
      }}
      transition={{
        type: "spring",
        damping: 6,
        stiffness: 50,
        restDelta: 0.9,
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
