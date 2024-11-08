"use client";

import { socialMediaItems } from "@/constants/social-media-items";
import ParticlesBg from "../molecules/particles-bg";
export interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  const handleDownloadCV = () => {
    window.open("/files/front-end-gabriel-messias-da-rosa-curriculo.pdf");
  };

  return (
    <div className="relative h-[80dvh] px-8" id="top">
      <header className="header relative h-[80dvh] flex  items-center justify-center ">
        <ParticlesBg />
        <div className="invisible lg:visible absolute w-full top-[50%] -left-56 rotate-45 -z-50 ">
          <div className="flex  flex-col  gap-5 relative">
            <div className="border-b-1 border-t-1 w-full h-5 border-gray-300" />
            <div className="border-b-1 border-t-1 w-full h-5 border-gray-300" />
            <div className="border-b-1 border-t-1 w-full h-5 border-gray-300" />
            <div className="border-b-1 border-t-1 w-full h-5 border-gray-300" />
            <div className="bg-black w-40 h-60 -right-10 rotate-45 absolute"></div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-primary-500 font-prompt text-4xl lg:text-8xl hover-effect-lg">
            Gabriel Messias da Rosa
          </h1>
          <h2>
            <span className="font-prompt text-2xl lg:text-6xl hover-effect-lg text-gradient-animate">
              Fullstack Developer
            </span>
          </h2>
          <div className="flex space-x-4 mt-2">
            {socialMediaItems
              .map((item, index) => (
                <a
                  key={`${item.label}-hero-${index}`}
                  className="flex w-fit justify-center items-center"
                  href={item.href}
                  target="_blank"
                >
                  <div className="w-8 h-8">{item.icon}</div>
                  <h5 className="text-primary-500 font-prompt text-lg lg:text-2xl hover-effect">
                    {item.label}
                  </h5>
                </a>
              ))
              .slice(0, 2)}
          </div>
        </div>
        {/* <div className="flex px-8 gap-y-3 flex-col lg:flex-row flex-1 max-w-7xl items-center justify-center ">
          <div className="lg:w-1/2 flex flex-col text-center lg:text-start justify-center h-1/2 font-extrabold text-4xl">
            <h1 className="text-primary-500 font-prompt text-4xl lg:text-8xl hover-effect-lg">
              Gabriel Messias da Rosa
            </h1>
            <h2>
              <span className="text-gray-300 font-prompt text-2xl lg:text-4xl hover-effect-lg">
                Front-end Developer
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2 gap-8 flex flex-col items-start lg:text-start">
            <p className="lg:text-3xl text-xl text-center lg:text-start">
              Unindo{" "}
              <span className="text-[#b881ff] font-prompt">criatividade</span> e{" "}
              <span className="text-[#ff9950] font-prompt">código</span> para
              criar{" "}
              <span className="font-prompt text-2xl lg:text-4xl text-gradient-animate">
                soluções únicas!
              </span>
            </p>
            <div className="flex flex-col md:flex-row w-full lg:w-auto gap-2 md:gap-8 items-center justify-evenly">
               <Button
                onClick={handleDownloadCV}
                className="rounded-sm hover-effect"
                color="success"
              >
                CV Formal (PDF)
              </Button>
              <div className="flex items-center justify-center space-x-4 mt-2">
                {socialMediaItems
                  .map((item, index) => (
                    <a
                      key={`${item.label}-hero-${index}`}
                      className="flex w-fit"
                      href={item.href}
                      target="_blank"
                    >
                      <div className="w-8 h-8">{item.icon}</div>
                      <h5 className="text-primary-500 font-prompt text-lg lg:text-xl hover-effect">
                        {item.label}
                      </h5>
                    </a>
                  ))
                  .slice(0, 2)}
              </div>
            </div>
          </div>
        </div> */}
      </header>{" "}
      {/*  <div className="absolute w-full text-gray-900 custom-shape-divider-bottom-1691727814">
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
      </div> */}
    </div>
  );
}
