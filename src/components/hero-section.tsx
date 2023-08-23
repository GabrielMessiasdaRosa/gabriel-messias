"use client";

import { Button } from "./next-ui-exports";
import ParticlesBg from "./particles-bg";
export interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  const handleDownloadCV = () => {
    window.open("/front-end-gabriel-messias-da-rosa-curriculo.pdf");
  };

  return (
    <div className="relative h-[80dvh]">
      <header className="header relative h-[80dvh] flex  items-center justify-center">
        <ParticlesBg />
        <div className="flex px-8 gap-y-3 flex-col lg:flex-row flex-1 max-w-7xl items-center justify-center ">
          <div className="lg:w-1/2 flex flex-col text-center lg:text-start justify-center h-1/2 font-extrabold text-4xl">
            <h1 className="text-primary-500 font-prompt text-4xl lg:text-8xl hover-effect-lg">
              Gabriel Messias da Rosa
            </h1>
            <h2 className="-mt-4 lg:-mt-2">
              <span className=" font-bold font-prompt text-2xl lg:text-4xl hover-effect-lg">
                desenvolvedor front-end
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2 gap-8 flex flex-col items-start lg:text-start">
            <p className="lg:text-3xl text-xl text-center lg:text-start">
              Descubra como eu uso a{" "}
              <span className="text-[#b881ff] font-prompt">criatividade</span> e
              o <span className="text-[#ff9950] font-prompt">código</span> para
              criar{" "}
              <span className="font-prompt text-2xl lg:text-4xl text-gradient-animate">
                soluções únicas !
              </span>
            </p>
            <div className="flex w-full lg:w-auto gap-8 items-center justify-evenly">
              <Button
                onClick={handleDownloadCV}
                className="rounded-sm hover-effect"
                color="success"
              >
                CV Formal (PDF)
              </Button>
              <a
                href="https://www.linkedin.com/in/gabriel-messias-rosa/"
                target="_blank"
              >
                <Button
                  className="transition-all rounded-sm text-white bg-black hover-effect"
                  color="primary"
                  variant="bordered"
                >
                  Linkedin
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>{" "}
      <div className="absolute w-full text-gray-900 custom-shape-divider-bottom-1691727814">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          className="fill-current text-gray-100 bottom-1"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
