"use client";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";

const ParticlesEffect = ({ id }: { id: string }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log("Particles Loaded:", container);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: true,
        detectRetina: true,
        background: { color: "" },
        particles: {
          number: { value: 100 },
          color: { value: "#FFD700" }, // Cor dourada
          shape: { type: "circle" },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 2, max: 4 },
            animation: {
              enable: true,
              speed: 10,
              minimumValue: 0.1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "top",
            outModes: { default: "destroy" },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "trail",
            },
          },
          modes: {
            trail: {
              delay: 0.05,
              quantity: 5,
              particles: {
                color: { value: "#FFD700" },
                opacity: {
                  value: 1,
                  animation: {
                    enable: true,
                    speed: 0.2,
                    minimumValue: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: { min: 2, max: 5 },
                  animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false,
                  },
                },
              },
            },
          },
        },
      }}
    />
  );
};

export default ParticlesEffect;
