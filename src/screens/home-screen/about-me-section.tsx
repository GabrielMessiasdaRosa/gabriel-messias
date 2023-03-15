import Col from "../../components/col";

export type AboutMeSectionProps = {};

const AboutMeSection = ({}: AboutMeSectionProps) => {
  return (
    <section className="max-w-xs sm:max-w-sm md:max-w-none">
      <Col className="space-y-16">
        <Col className="xl:flex-row">
          <Col className="w-full xl:w-1/2">
            <p className="bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text font-poiret text-3xl font-extrabold text-transparent">
              Gabriel Messias da Rosa
            </p>
            <p className="text-6xl">Front-end Developer</p>
          </Col>
          <Col className="w-full space-y-4 pt-6 xl:w-1/2">
            <Col className="">
              <p>
                I am a front-end developer passionate about creating attractive
                and interactive user interfaces.
              </p>
            </Col>
            <Col>
              <p>
                I am a creative problem solver who is always looking for ways to
                improve the efficiency of my work while maintaining the quality
                and usability of the end product. If you are looking for an
                experienced and committed front-end developer, I would be happy
                to discuss my skills and experience further.
              </p>
            </Col>
            <Col className="justify-between space-y-3 md:flex-row md:space-y-0">
              <Col>
                <p className="bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-2xl text-transparent">
                  Projects done
                </p>
                <span className="text-4xl">6</span>
              </Col>
              <Col>
                <p className="bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-2xl text-transparent">
                  Experience
                </p>
                <span className="text-4xl">2 years</span>
              </Col>
              <Col>
                <p className="bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-2xl text-transparent">
                  Screens done
                </p>
                <span className="text-4xl">100+</span>
              </Col>
            </Col>
          </Col>
        </Col>
      </Col>
    </section>
  );
};

export default AboutMeSection;
