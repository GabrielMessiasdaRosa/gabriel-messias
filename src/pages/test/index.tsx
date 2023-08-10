import { motion } from "framer-motion";
import useWindow from "../../hooks/use-window";

export type TestRouteProps = {};

const TestRoute = ({}: TestRouteProps) => {
  const { windowSize, mousePosition, scrollPosition } = useWindow();
  /* console.log("windowSize", {
    windowSize: windowSize,
    mousePosition: mousePosition,
    scrollPosition: scrollPosition,
  }); */

  return (
    <motion.div
      animate={{
        x: mousePosition.x - 20,
        y: mousePosition.y - 20,
      }}
      className="shape-1 absolute h-96 w-96 rotate-3 bg-red-500"
    />
  );
};

export default TestRoute;
