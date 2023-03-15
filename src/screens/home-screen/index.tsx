import Col from "../../components/col";
import Container from "../../components/container";
import HeroSection from "./hero-section";
import SelectedProductsSection from "./selected-projects";
import SkillsMarquee from "./skills-marquee";
export type HomeScreenProps = {};

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <Col className="w-full space-y-16">
      <Container>
        <HeroSection />
      </Container>
      <SkillsMarquee />
      <Container>
        <SelectedProductsSection />
      </Container>
    </Col>
  );
};

export default HomeScreen;
