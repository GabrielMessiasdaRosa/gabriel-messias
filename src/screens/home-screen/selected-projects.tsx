import Image from "next/image";
import Chatkick from "../../../public/images/chatkick.webp";
import InterviewInsights from "../../../public/images/interview-insights.webp";
import TalentCRM from "../../../public/images/talentcrm.webp";
import Col from "../../components/col";
import Row from "../../components/row";
export type SelectedProjectsSectionProps = {};

const SelectedProductsSection = ({}: SelectedProjectsSectionProps) => {
  const projects = [
    {
      name: "Chatkick",
      techStack: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Framer Motion",
        "TypeScript",
        "HealessUI",
      ],
      image: Chatkick,
    },
    {
      name: "TalentCRM",
      techStack: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Framer Motion",
        "TypeScript",
        "HealessUI",
      ],
      image: TalentCRM,
    },
    {
      name: "Interview Insights ",
      techStack: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Framer Motion",
        "TypeScript",
        "HealessUI",
      ],
      image: InterviewInsights,
    },
  ];

  return (
    <section className="max-w-xs  sm:max-w-sm md:max-w-none">
      <Col className="space-y-8">
        <Col className="space-y-8">
          <Col>
            <h3 className="bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-3xl font-extrabold text-transparent md:h-14 md:text-5xl">
              Projects that I've worked on
            </h3>
          </Col>
          <Col className="md:w-4/6 md:text-xl">
            <code>
              I made websites and web applications with a focus on user
              experience. I have worked with a variety of clients, from small
              businesses to large corporations. Check out some of my projects
              below.
            </code>
          </Col>
        </Col>
        <Col className="space-y-16">
          {projects.map((project, index) => {
            const impared = index % 2 === 0;
            return (
              <Col
                key={index}
                className={`h-96 items-center overflow-hidden lg:h-80 lg:flex-row  ${
                  impared ? "" : "lg:flex-row-reverse"
                } `}
              >
                <Image
                  src={project.image}
                  alt="Selected Projects"
                  width={5000}
                  height={5000}
                  className="rounded-xl md:w-1/2"
                />
                <Col className="bottom-0 w-full items-center justify-center">
                  <Col className="space-y-2 py-6 ">
                    <p className="text-2xl font-thin lg:text-5xl">
                      {project.name}
                    </p>
                    <p className="text-xl font-thin lg:text-2xl">Tech Stack:</p>
                    <Col className="grid grid-cols-3 gap-2">
                      {project.techStack.map((tech, index) => (
                        <div key={index}>
                          <Row className="w-full items-center justify-center whitespace-nowrap rounded-full bg-white bg-gradient-to-br from-[#ee0979] to-[#ff6a00] p-[1px] font-light">
                            <p className="flex w-full items-center justify-center rounded-full bg-[#161513] px-2 text-lg ">
                              {tech}
                            </p>
                          </Row>
                        </div>
                      ))}
                    </Col>
                  </Col>
                </Col>
              </Col>
            );
          })}
        </Col>
      </Col>
    </section>
  );
};

export default SelectedProductsSection;
