import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const ForestBackground = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      const element = imageRef.current;
      element.style.backgroundImage = `url('/florest.png')`;
      const getRatio = (el: HTMLImageElement) =>
        window.innerHeight / (window.innerHeight + el.offsetHeight);

      gsap.fromTo(
        element,
        {
          backgroundPosition: () => "50% 0px",
          backgroundSize: "cover",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(element))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: () => "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        ".blackBG",
        { opacity: 0.6 },
        {
          opacity: 0.8,
          scrollTrigger: {
            trigger: element,
            start: () => "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div
      ref={imageRef}
      className="px-[4%] w-full h-screen bg-default-green lg:px-0 flex relative justify-center overflow-hidden"
    >
      <div className="overlay blackBG absolute top-0 left-0 w-full h-full bg-black opacity-60 blur-md" />
      <div className="container relative h-full flex flex-col gap-16 px-[2%] text-default-white lg:px-[8%] ">
        <div className="flex absolute inset-0 items-center justify-center">
          <div
            ref={circleRef}
            className="lg:w-[32%] bg-default-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-[10%] border border-default-white rounded-full aspect-square"
          >
            <h1 className="text-[250%] text-center w-2/3">Viva mais leve</h1>

            <p className="text-center text-[90%] w-[80%]">
              O acalme seu coração é um programa Terapêutico Online onde você
              Supera a <strong> Ansiedade</strong> e Alcança a{" "}
              <strong> Paz Interior</strong>.
            </p>

            <Button
              asChild
              type="button"
              variant="outline"
              className="bg-transparent text-[90%]"
            >
              <Link href="#planos">Quero fazer parte!</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestBackground;
