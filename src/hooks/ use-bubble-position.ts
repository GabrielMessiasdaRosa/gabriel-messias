import useWindow from "./use-window";

const useBubblePosition = () => {
  const { windowSize, scrollPosition, isMobile, isTablet } = useWindow();

  const isInHeroSection = scrollPosition.y < 359;

  const isInProjectsSection =
    scrollPosition.y >= 360 && scrollPosition.y <= 719;

  const isInProjetc1Section =
    scrollPosition.y >= 720 && scrollPosition.y < 1079;

  const isInProjetc2Section =
    scrollPosition.y >= 1080 && scrollPosition.y < 1499;

  const isInProjetc3Section =
    scrollPosition.y >= 1500 && scrollPosition.y < 1899;

  const isInAboutMeSection = scrollPosition.y >= 1900;

  const heroSectionAnimatePositionX = isMobile
    ? windowSize.width / 12
    : isTablet
    ? windowSize.width / 4
    : windowSize.width / 2.5;
  const heroSectionAnimatePositionY = isMobile ? -50 : isTablet ? -50 : -50;

  const projectsSectionAnimatePositionX = isMobile
    ? windowSize.width / 5
    : isTablet
    ? windowSize.width / 5
    : windowSize.width / 5;
  const projectsSectionAnimatePositionY = isMobile ? 800 : isTablet ? 940 : 800;

  const project1SectionAnimatePositionX = isMobile
    ? windowSize.width / 1.7
    : isTablet
    ? windowSize.width / 2.5
    : windowSize.width / 1.7;
  const project1SectionAnimatePositionY = isMobile
    ? 950
    : isTablet
    ? 1200
    : 950;

  const project2SectionAnimatePositionX = isMobile
    ? windowSize.width / 5
    : isTablet
    ? windowSize.width / 5
    : windowSize.width / 5;
  const project2SectionAnimatePositionY = isMobile
    ? 1350
    : isTablet
    ? 1650
    : 1350;

  const project3SectionAnimatePositionX = isMobile
    ? windowSize.width / 1.7
    : isTablet
    ? windowSize.width / 2.5
    : windowSize.width / 1.7;
  const project3SectionAnimatePositionY = isMobile
    ? 1900
    : isTablet
    ? 2100
    : 1700;

  const aboutMeSectionAnimatePositionX = isMobile
    ? windowSize.width / 5
    : isTablet
    ? windowSize.width / 16
    : windowSize.width / 5;
  const aboutMeSectionAnimatePositionY = isMobile
    ? 2400
    : isTablet
    ? 2500
    : 2100;

  const animateX = isInHeroSection
    ? heroSectionAnimatePositionX
    : isInProjectsSection
    ? projectsSectionAnimatePositionX
    : isInProjetc1Section
    ? project1SectionAnimatePositionX
    : isInProjetc2Section
    ? project2SectionAnimatePositionX
    : isInProjetc3Section
    ? project3SectionAnimatePositionX
    : aboutMeSectionAnimatePositionX;

  const animateY = isInHeroSection
    ? heroSectionAnimatePositionY
    : isInProjectsSection
    ? projectsSectionAnimatePositionY
    : isInProjetc1Section
    ? project1SectionAnimatePositionY
    : isInProjetc2Section
    ? project2SectionAnimatePositionY
    : isInProjetc3Section
    ? project3SectionAnimatePositionY
    : aboutMeSectionAnimatePositionY;

  return {
    animateX,
    animateY,
    isInHeroSection,
    isInProjectsSection,
    isInProjetc1Section,
    isInProjetc2Section,
    isInProjetc3Section,
    isInAboutMeSection,
  };
};
export default useBubblePosition;
