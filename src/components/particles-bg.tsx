"use client";

import { useCallback } from "react";
import Particles, { ParticlesProps } from "react-particles";
import { loadSlim } from "tsparticles-slim";

import type { Container, Engine } from "tsparticles-engine";
export interface ParticlesBgProps {}

export default function ParticlesBg({}: ParticlesBgProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await container;
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      className="absolute w-full h-full -z-50"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
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
      opacity: 0.2,
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
