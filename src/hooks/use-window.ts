import { useEffect, useState } from "react";

const useWindow = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: typeof window !== "undefined" ? window.pageXOffset : 0,
    y: typeof window !== "undefined" ? window.pageYOffset : 0,
  });

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: typeof window !== "undefined" ? window.pageXOffset : 0,
        y: typeof window !== "undefined" ? window.pageYOffset : 0,
      });
    };

    const handleResize = () => {
      setWindowSize({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
      });
    };

    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    if (windowSize.width < 768) {
      setIsMobile(true);
      setIsTablet(false);
      setIsDesktop(false);
    } else if (windowSize.width >= 768 && windowSize.width < 1024) {
      setIsMobile(false);
      setIsTablet(true);
      setIsDesktop(false);
    } else {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    }
  }, [windowSize]);
  return {
    scrollPosition,
    windowSize,
    mousePosition,
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useWindow;
