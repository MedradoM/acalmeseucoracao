"use client";

import PlansSection from "./plansSection";
import QuestionSection from "./questionsSection";
import WhoWeAreSection from "./whoWeAreSection";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import ReportSection from "./ReportSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../footer";
import AboutSection from "./aboutSection";

gsap.registerPlugin(ScrollTrigger);

const MainSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        zIndex: 999,
        yPercent: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="smooth-wrapper w-full gap-28 flex flex-col lg:px-0  bg-default-white"
      >
        <AboutSection />
        <WhoWeAreSection />
        <ReportSection />
        <PlansSection />
        <QuestionSection />
        <Footer />
      </div>
    </>
  );
};

export default MainSection;
