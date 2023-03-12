import Col from "../../components/col";
import Container from "../../components/container";
import Hero from "./hero";
import SkillsMarquee from "./skills-marquee";
export type HomeScreenProps = {};

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <Col className="w-full">
      <Container>
        <Hero />
      </Container>
      <SkillsMarquee />
    </Col>
  );
};

export default HomeScreen;
