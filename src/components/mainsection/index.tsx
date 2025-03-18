"use client";

import PlansSection from "./plansSection";
import ImageSection from "./imageSection";
import QuestionSection from "./questionsSection";
import WhoWeAreSection from "./whoWeAreSection";
import { useEffect } from "react";
import Lenis from "lenis"; // Adjust the import path as necessary

const MainSection = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="smooth-wrapper w-full gap-28 flex flex-col lg:px-0 mb-28 bg-default-white">
      <ImageSection />
      <div className=" bg-black"></div>
      <WhoWeAreSection />
      <div className=" bg-black"></div>
      <PlansSection />
      <QuestionSection />
    </div>
  );
};

export default MainSection;
