"use client";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef } from "react";

const ParallaxBackground = () => {
  const text1 = useRef<HTMLHeadingElement>(null);
  const text2 = useRef<HTMLHeadingElement>(null);
  const flower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!text1.current || !text2.current || !flower.current) return;

    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainsection",
        start: "50% bottom",
        end: "50% bottom",
        toggleActions: "play none none reverse",
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
      .to([text1.current], {
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
      textTl.kill();
      flowerAnimation.kill();
    };
  }, []);

  return (
    <div className="h-[250vh] mainsection relative w-full">
      <div className="sticky overflow-hidden top-0 h-screen w-full flex items-center justify-center ">
        <div className="lg:w-[50%] w-[80%] flex items-center justify-center relative">
          <h1 ref={text1} className="lg:text-4xl text-xl absolute text-center">
            Você sente que a mente não desacelera, o corpo vive em tensão, as
            emoções vêm intensas demais, não sabe o que fazer quando vem aquele
            desânimo e ansiedade… sente que precisa volta a sentir alegria na
            vida?
            <br />
            <br />
            Você não está sozinha(o). E não precisa continuar assim.
          </h1>

          <h1
            ref={text2}
            className="lg:text-4xl text-xl absolute text-center opacity-0"
          >
            O Acalme Seu Coração oferece um caminho de cuidado emocional que
            integra presença, consciência, acolhimento das emoções e práticas
            simples para o dia a dia. Aqui, você não aprende a ignorar o que
            sente.
            <br />
            Aprende a escutar, acolher e transformar sua relação com as emoções.
            <br />
            <br />
            • Sem julgamentos <br />
            • Sem cobranças <br />
            • No seu ritmo <br />• Com acompanhamento e direção
            <br />
            <br />
            Se algo em você sentiu um “sim” ao chegar até aqui, talvez esse seja
            o seu momento.
          </h1>
          {/* 
          <h1
            ref={text3}
            className="lg:text-4xl text-xl absolute text-center opacity-0"
          >
            
          </h1> */}
        </div>

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
