import TimelineList from "./timeline-list";

export interface TimelineSectionProps {}

export default function TimelineSection({}: TimelineSectionProps) {
  return (
    <section id="projects" className="flex gap-y-4 flex-col text-black">
      <h3
        className="text-center text-3xl hover-effect-lg lg:text-7xl uppercase font-extrabold font-prompt tracking-[1rem] lg:tracking-[2rem]
        bg-clip-text text-transparent bg-gradient-to-b from-primary-400 to-primary-600
      "
      >
        #Trajetória
      </h3>
      <TimelineList />
    </section>
  );
}
