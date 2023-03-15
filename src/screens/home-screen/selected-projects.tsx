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
      name: "Chatkick webpages",
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
      name: "TalentCRM webpage",
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
      name: "Interview Insights webpage",
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
    <section className="max-w-xs sm:max-w-sm md:max-w-none">
      <Col className="space-y-8">
        <Col className="space-y-8">
          <Col>
            <h3 className="bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-3xl font-extrabold text-transparent md:h-14 md:text-5xl">
              Projects that I've worked on
            </h3>
          </Col>
          <Col className="md:w-1/2 md:text-xl">
            <code>
              I made websites and web applications with a focus on user
              experience. I have worked with a variety of clients, from small
              businesses to large corporations. Check out some of my projects
              below.
            </code>
          </Col>
        </Col>
        <Col className="space-y-8">
          {projects.map((project) => (
            <Col className="group relative overflow-hidden">
              <Image
                src={project.image}
                alt="Selected Projects"
                width={1500}
                height={800}
                className="rounded-xl"
              />
              <Col className="bottom-0 w-full bg-gradient-to-r from-[#161513] via-[#161513]/90 to-[#161513]/50 transition-all duration-200 ease-linear lg:absolute lg:-mb-72 lg:group-hover:-mb-0 ">
                <Col className="space-y-2 py-6 lg:p-20">
                  <p className="text-2xl font-thin lg:text-5xl">
                    {project.name}
                  </p>
                  <p className="text-xl font-thin lg:text-2xl">Tech Stack:</p>
                  <Col className="space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    {project.techStack.map((tech) => (
                      <>
                        <Row className="w-1/2 items-center justify-center whitespace-nowrap rounded-full bg-white bg-gradient-to-br from-[#ee0979] to-[#ff6a00] p-[1px] font-light lg:hidden">
                          <p className="text-lg lg:hidden">{tech}</p>
                        </Row>
                        <Row className="hidden items-center justify-center whitespace-nowrap rounded-full bg-white bg-gradient-to-br from-[#ee0979] to-[#ff6a00] p-[1px] text-lg font-light  lg:flex">
                          <p className="rounded-full bg-[#161513] px-4">
                            {tech}
                          </p>
                        </Row>
                      </>
                    ))}
                  </Col>
                </Col>
              </Col>
            </Col>
          ))}
        </Col>
      </Col>
    </section>
  );
};

export default SelectedProductsSection;
