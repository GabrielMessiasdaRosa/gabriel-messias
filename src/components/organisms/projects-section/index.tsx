import LeftImageProjectDetails from "./left-image-project-details";
import { projects } from "./projects";
import RightImageProjectDetails from "./right-image-project-details";

export interface ProjectsSectionProps {}

export default function ProjectsSection({}: ProjectsSectionProps) {
  return (
    <section
      id="projetos"
      className="p-8 lg:p-36 gap-6 lg:gap-16 border border-b-0 border-t-0 flex flex-col "
    >
      <h3 className="text-2xl lg:text-5xl">~/Projetos</h3>
      <div className="hover-effect w-full space-y-16 ">
        {projects.map((project, index) =>
          index % 2 !== 0 ? (
            <div key={`${project.name}-${index}`}>
              <LeftImageProjectDetails project={project} />
            </div>
          ) : (
            <div key={`${project.name}-${index}`}>
              <RightImageProjectDetails project={project} />
            </div>
          )
        )}
      </div>
    </section>
  );
}
