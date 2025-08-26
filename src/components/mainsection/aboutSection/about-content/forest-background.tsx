import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ForestBackground = () => {
  const imageRef = useRef<HTMLImageElement>(null);

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
            markers: true,
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
      id="sobre"
      ref={imageRef}
      className="px-[4%] w-full h-screen bg-default-green lg:px-0 flex relative justify-center overflow-hidden"
    >
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-30 blur-md" />
      <div className="container h-full flex flex-col gap-16 px-[2%] lg:px-[8%] "></div>
    </div>
  );
};

export default ForestBackground;
