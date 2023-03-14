import Marquee from "react-fast-marquee";
import Col from "../../components/col";
import Row from "../../components/row";
export type SkillsMarqueeProps = {};

const SkillsMarquee = ({}: SkillsMarqueeProps) => {
  const skills = [
    "SEO",
    "Front-end Development",
    "API consumption",
    "Best practices",
    "Performance",
    "Accessibility",
    "Clean code",
  ];
  return (
    <Col className="h-24 w-full justify-center bg-gradient-to-tr from-[#ee0979] to-[#ff6a00]">
      <Row className="-ml-20 h-2/3 min-w-[2000px] -rotate-[2deg] items-center justify-center border bg-gray-50 ">
        <Marquee gradient speed={100}>
          {skills.map((skill, index) => (
            <Row
              key={index}
              className="m-auto items-center justify-center space-x-5  text-3xl font-bold text-black"
            >
              <span className="text-4xl">&#10024;</span>
              <span>{skill}</span>
            </Row>
          ))}
        </Marquee>
      </Row>
    </Col>
  );
};

export default SkillsMarquee;
