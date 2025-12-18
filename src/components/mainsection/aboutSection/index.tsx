"use client";

import AboutContent from "./about-content/about-content";
import ParallaxAboutContent from "./about-content/parallax-about-content";
import ParallaxBackground from "./about-content/parallax-background";

const AboutSection = () => {
  return (
    <div>
      <ParallaxBackground />

      <AboutContent />

      <ParallaxAboutContent />
    </div>
  );
};

export default AboutSection;
