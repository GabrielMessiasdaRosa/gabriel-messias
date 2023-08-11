"use client";

import { useCallback } from "react";
import { Particles, ParticlesProps } from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { Button } from "./next-ui-exports";
export interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <div className="relative h-[80dvh]">
      <header className="header relative finisher-header  h-[80dvh] flex  items-center justify-center hero-bg-pattern">
        <Particles
          id="tsparticles"
          className="absolute w-full h-full -z-50"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
        />
        <div className="flex px-8 flex-col lg:flex-row flex-1 max-w-7xl items-center justify-center ">
          <div className="lg:w-1/2 flex flex-col text-center lg:text-start justify-center h-1/2 font-extrabold text-4xl">
            <h1 className="text-primary-500 font-prompt text-4xl lg:text-8xl hover-effect">
              Gabriel Messias da Rosa
            </h1>
            <h2>
              <span className="text-cyan-500 font-extralight text-xl lg:text-4xl hover-effect">
                desenvolvedor front-end
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2 gap-8 flex flex-col items-start lg:text-start">
            <p className="lg:text-3xl">
              Descubra como a criatividade e o código se unem para criar
              soluções únicas.
            </p>
            <div className="flex w-full lg:w-auto gap-8 items-center justify-evenly">
              <Button className="rounded-none hover-effect" color="success">
                Download CV
              </Button>
              <Button
                className="transition-all rounded-none text-white hover-effect"
                color="primary"
                variant="bordered"
              >
                Linkedin
              </Button>
            </div>
          </div>
        </div>
      </header>{" "}
      <div className="absolute w-full text-gray-900 bottom-0 custom-shape-divider-bottom-1691727814">
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

const particlesOptions: ParticlesProps["options"] = {
  fullScreen: false,
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          force: 60,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 2,
      },
    },
  },
  particles: {
    color: {
      value: "#FFF",
    },
    links: {
      color: "#FFF",
      distance: 100,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 300,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: true,
};
