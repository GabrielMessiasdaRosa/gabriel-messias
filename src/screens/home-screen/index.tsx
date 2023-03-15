import Col from "../../components/col";
import Container from "../../components/container";
import AboutMeSection from "./about-me-section";
import HeroSection from "./hero-section";
import SelectedProductsSection from "./selected-projects";
import SkillsMarquee from "./skills-marquee";
import TechExp from "./tech-expericence";
export type HomeScreenProps = {};

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <Col className="w-full space-y-16">
      <Container>
        <HeroSection />
      </Container>
      <SkillsMarquee />
      <Container>
        <Col className="space-y-24">
          <Col className="items-center space-y-24">
            <SelectedProductsSection />
            <AboutMeSection />
          </Col>
          <TechExp />
        </Col>
      </Container>
    </Col>
  );
};

export default HomeScreen;
