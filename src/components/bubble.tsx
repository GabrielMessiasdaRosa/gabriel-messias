import { motion } from "framer-motion";
import useBubblePosition from "../hooks/ use-bubble-position";
export type BubbleProps = {};

const Bubble = ({}: BubbleProps) => {
  const {
    animateX,
    animateY,
    isInHeroSection,
    isInProjectsSection,
    isInProjetc1Section,
    isInProjetc2Section,
    isInProjetc3Section,
    isInAboutMeSection,
  } = useBubblePosition();

  return (
    <>
      <motion.div
        animate={{
          x: animateX,
          y: animateY,
        }}
        className={`absolute -z-50 h-96 w-96 bg-gradient-to-br from-[#ee0979] to-[#ff6a00] opacity-75 transition-all ease-linear  ${
          isInHeroSection
            ? "shape-1"
            : isInProjectsSection
            ? "shape-2"
            : isInProjetc1Section
            ? "shape-3 bg-gradient-to-r from-[#ffc400] to-[#00c9c9]"
            : isInProjetc2Section
            ? "shape-4 bg-gradient-to-b from-[#2a02bb] to-[#ffc400]"
            : isInProjetc3Section
            ? "shape-5 bg-gradient-to-r from-[#2a02bb] to-[#00c9c9]"
            : "shape-6"
        }`}
      />
    </>
  );
};

export default Bubble;
