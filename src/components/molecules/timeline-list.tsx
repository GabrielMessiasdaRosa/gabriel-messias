import { projects } from "@/constants/projects";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ContactButtonCta from "../atom/contact-button-cta";

export interface TimelineListProps {}

export default function TimelineList({}: TimelineListProps) {
  return (
    <div className="flex flex-col relative overflow-y-scroll overflow-x-hidden  w-[90dvw] h-[80dvh] text-black">
      <Parallax
        config={{ duration: 0, decay: 1, mass: 0.4, tension: 0.4 }}
        pages={projects.length}
        className="max-w-[90dvw] max-h-[80dvh]  scrollbar-hide"
      >
        {projects.map((project, index) => (
          <ParallaxLayer
            key={`${project.name}-${index}`}
            offset={index}
            speed={0}
            className="bg-gray-100 flex-1 h-full pt-[4rem]"
          >
            <div className="overflow-y-scroll scrollbar-hide flex flex-col lg:flex-row gap-6 lg:gap-x-12 items-center p-1 md:p-6 flex-1 h-[80dvh]">
              <div className="flex-1 gap-3 md:gap-6 flex flex-col h-full">
                <h3 className="text-2xl md:text-5xl font-semibold">
                  {project.name}
                </h3>
                <p className="text-xs md:text-lg font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap">
                  {project.techStack.map((tech, index) => {
                    return (
                      <div
                        key={`${tech}-${index}`}
                        className="bg-black rounded-sm px-2 py-1 md:px-4 md:py-2 text-sm font-semibold text-gray-100 ml-0 m-[0.1rem]"
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
                <div>
                  <ContactButtonCta />
                </div>
              </div>
              <div className="flex-1">
                <img src={project.image} alt="" />
              </div>
            </div>
          </ParallaxLayer>
        ))}

        <ParallaxLayer
          className="bg-black text-white min-w-[90dvw] max-h-[4rem] text-5xl font-bold items-center flex pl-5"
          sticky={{ start: 0, end: 2 }}
        >
          2021
        </ParallaxLayer>
        <ParallaxLayer
          className="bg-black text-white min-w-[90dvw] max-h-[4rem] text-5xl font-bold items-center flex pl-5"
          sticky={{ start: 2, end: 5 }}
        >
          2022
        </ParallaxLayer>
        <ParallaxLayer
          className="bg-black text-white min-w-[90dvw] max-h-[4rem] text-5xl font-bold items-center flex pl-5"
          sticky={{ start: 5, end: 8 }}
        >
          2023
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
