import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#000000", // Dark background color
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: ["#FFFFFF", "#FF6B6B", "#F9A825", "#00C1D3"], // Add the desired colors to the array
        },
        number: {
          value: 400, // Adjust the number of particles 
        },
        opacity: {
          value: 0.8, // Adjust the opacity of particles
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 2, // Adjust the size of particles
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 0.5, // Adjust the speed of particle movement as desired
          direction: "top",
          random: true,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onhover: {
            enable: false, // Disable hover interaction
          },
        },
      },
      retina_detect: true,
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
