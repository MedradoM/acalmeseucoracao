"use client";

import PlansSection from "./plansSection";
import ImageSection from "./imageSection";
import QuestionSection from "./questionsSection";
import WhoWeAreSection from "./whoWeAreSection";

const MainSection = () => {
  return (
    <div className="w-full gap-28 flex flex-col lg:px-0 mb-28 bg-default-white">
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
