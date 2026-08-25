"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";
export const ParticlesBG = () => {

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = async (container?: any) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none -z-10"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#141416",
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
              mode: "repulse",
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            enable: false,
          },
          move: {
            direction: "bottom",
            drift: 0.25,
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: { min: 0.1, max: 0.2 },
            straight: true,
          },
          number: {
            density: {
              enable: true,
            },
            value: 200,
          },
          opacity: {
            value: { min: 0.12, max: 0.32 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shadow: {
            blur: 5,
            color: "#ffffff",
            enable: true,
            offset: {
              x: 0,
              y: 0,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
