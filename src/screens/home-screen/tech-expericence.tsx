import Marquee from "react-fast-marquee";
import Col from "../../components/col";
import Row from "../../components/row";

export type TechExpProp = {};

const TechExp = ({}: TechExpProp) => {
  const technologies: {
    name: string;
    image: string;
  }[] = [
    {
      name: "React",
      image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    {
      name: "React Native",
      image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    {
      name: "Next.js",
      image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      name: "Node.js",
      image: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    },
    {
      name: "TypeScript",
      image:
        "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
    },
    {
      name: "JavaScript",
      image: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    },
    {
      name: "HTML5",
      image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
    },
    {
      name: "CSS3",
      image:
        "https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-icon.svg",
    },
    {
      name: "Nest.js",
      image: "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg",
    },
    {
      name: "MongoDB",
      image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    },
    {
      name: "PostgreSQL",
      image: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Figma",
      image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },
  ];
  return (
    <section className="max-w-xs sm:max-w-sm md:max-w-none">
      <Col className="space-y-8">
        <p className="text-2xl md:text-4xl lg:text-6xl">
          Technologies I already worked with:
        </p>
        <Row className="space-x-4">
          <Marquee gradient={false} direction="left" speed={130}>
            {technologies.map((technology, index) => (
              <Col
                key={index}
                className="ml-6 h-56 w-44 items-center justify-center space-y-4 rounded-lg bg-[#1C1C22] p-4"
              >
                <img className="h-28" src={technology.image} alt="HTML5" />
                <span className="whitespace-nowrap text-2xl font-bold">
                  {technology.name}
                </span>
              </Col>
            ))}
          </Marquee>
        </Row>
      </Col>
    </section>
  );
};

export default TechExp;
