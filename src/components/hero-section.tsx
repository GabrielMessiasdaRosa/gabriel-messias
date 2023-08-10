"use client";

import Background from "./background";

export interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <header className="header finisher-header flex h-[80dvh] items-center justify-center hero-bg-pattern">
      <Background />
      <div className="flex flex-col lg:flex-row flex-1 debug max-w-7xl items-center justify-center ">
        <div className="lg:w-1/2 flex flex-col text-center lg:text-start justify-center h-1/2 font-extrabold text-4xl">
          <h1 className="">
            Oi, meu nome é{" "}
            <span className="text-cyan-500">Gabriel Messias da Rosa</span>
          </h1>
          <h2>
            <span className="text-cyan-500">desenvolvedor front-end</span>
          </h2>
        </div>
        <div className="lg:w-1/2 text-center lg:text-start">
          <p>
            Sou um desenvolvedor front-end que gosta de criar coisas bonitas e
            funcionais para a web.
          </p>
        </div>
      </div>
    </header>
  );
}
