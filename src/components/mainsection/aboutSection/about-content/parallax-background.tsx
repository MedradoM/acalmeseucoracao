"use client";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef } from "react";

const ParallaxBackground = () => {
  const chain1 = useRef<HTMLDivElement>(null);
  const chain2 = useRef<HTMLDivElement>(null);
  const text1 = useRef<HTMLHeadingElement>(null);
  const text2 = useRef<HTMLHeadingElement>(null);
  const flower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !chain1.current ||
      !chain2.current ||
      !text1.current ||
      !text2.current ||
      !flower.current
    )
      return;

    const chain1Animation = gsap.fromTo(
      chain1.current,
      { bottom: 0, right: "-30%" },
      {
        bottom: 120,
        right: "-32%",
        scrollTrigger: {
          trigger: ".mainsection",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    const chain2Animation = gsap.fromTo(
      chain2.current,
      { top: 0, right: "-80%" },
      {
        right: "-110%",
        top: 800,
        scrollTrigger: {
          trigger: ".mainsection",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainsection",
        start: "50% bottom",
        end: "50% bottom",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });

    gsap.fromTo(
      text1.current,
      { scale: 1.1 },
      {
        scale: 0.95,
        scrollTrigger: {
          trigger: ".mainsection",
          start: "top top",
          end: "50% bottom",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      text2.current,
      { scale: 0.95 },
      {
        scale: 1.1,
        scrollTrigger: {
          trigger: ".mainsection",
          start: "40% bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    const flowerAnimation = gsap.fromTo(
      flower.current,
      { rotate: 0 },
      {
        rotate: 360,
        ease: "none",
        scrollTrigger: {
          trigger: ".mainsection",
          start: "40% bottom",
          end: "bottom bottom",
          scrub: 12,
        },
      }
    );

    textTl
      .to([text1.current, chain1.current, chain2.current], {
        opacity: 0,
        duration: 1,
        filter: "blur(4px)",
        scale: 0.95,
      })
      .to(
        [text2.current],
        { opacity: 1, duration: 1, filter: "blur(0px)", scale: 1 },
        "<"
      )
      .to(
        flower.current,
        { opacity: 0.2, duration: 1, filter: "blur(0px)" },
        "<"
      );

    return () => {
      chain1Animation.kill();
      chain2Animation.kill();
      textTl.kill();
      flowerAnimation.kill();
    };
  }, []);

  return (
    <div className="h-[500vh] mainsection relative w-full">
      <div className="sticky overflow-hidden top-0 h-screen w-full flex items-center justify-center ">
        <div className="w-[50%] flex items-center justify-center relative">
          <h1 ref={text1} className="text-4xl absolute text-center">
            Você sente que sua vida não tem mais um prósito maior? Sente cansaço
            ou o peso do seu passado te impede de seguir em frente?
          </h1>
          <h1 ref={text2} className="text-4xl absolute text-center opacity-0 ">
            O programa Acalme o seu coração foi criado para te ajudar a
            encontrar um novo sentido na sua vida, superar os desafios
            emocionais e a quebrar as antigas correntes que te impedem de
            construir um futuro mais leve e feliz.
          </h1>
        </div>
        <div
          ref={chain1}
          className="w-full h-32  absolute -rotate-[600deg]"
          style={{
            backgroundImage: "url('/chain.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />

        <div
          ref={chain2}
          className="w-[200%] h-64 opacity-20 absolute top-0 -z-50  rotate-[-120deg]"
          style={{
            backgroundImage: "url('/chain.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />

        <div
          ref={flower}
          className="absolute inset-0 -z-50 opacity-0"
          style={{
            backgroundImage: "url('/flower.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxBackground;
