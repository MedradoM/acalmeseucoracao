"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { ClassNameValue } from "tailwind-merge";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type SplitTextProps = {
  text: string;
  className?: ClassNameValue;
};

const SplitTextAnimation = ({ text, className }: SplitTextProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitText(textRef.current, {
        type: "words",
      });

      gsap.fromTo(
        split.words,
        {
          filter: "blur(4px)",
          y: 100,
          opacity: 0,
          rotationX: -100,
        },
        {
          filter: "blur(0px)",
          y: 0,
          rotationX: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top bottom",
            end: "top top",
          },
        }
      );

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }
  }, []);

  return (
    <p ref={textRef} className={cn(className)}>
      {text.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
};

export default SplitTextAnimation;
