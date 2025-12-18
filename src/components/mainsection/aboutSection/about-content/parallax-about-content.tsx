import Image from "next/image";
import florestImg from "../../../../../public/about-section/florest.png";
import img2 from "../../../../../public/about-section/2.png";
import img3 from "../../../../../public/about-section/3.png";
import img4 from "../../../../../public/about-section/4.png";
import img5 from "../../../../../public/about-section/5.png";
import img6 from "../../../../../public/about-section/6.png";
import ScrollTrigger from "gsap/all";
import { useEffect } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const textsAbout = [
  {
    id: 1,
    title: "Teste de titulo",
    description:
      "Descrição de teste para saber se está tudo certo com o layout",
  },
  {
    id: 2,
    title: "Teste de titulo",
    description:
      "Descrição de teste para saber se está tudo certo com o layout",
  },
  {
    id: 3,
    title: "Teste de titulo",
    description:
      "Descrição de teste para saber se está tudo certo com o layout",
  },
  {
    id: 4,
    title: "Teste de titulo",
    description:
      "Descrição de teste para saber se está tudo certo com o layout",
  },
  {
    id: 5,
    title: "Teste de titulo",
    description:
      "Descrição de teste para saber se está tudo certo com o layout",
  },
  {
    id: 6,
    title: "Teste de titulo",
    description:
      "Descrição de teste para saber se está tudo certo com o layout",
  },
];

const ParallaxAboutContent = () => {
  useEffect(() => {
    const images = [
      document.getElementById("img0"),
      document.getElementById("img1"),
      document.getElementById("img2"),
      document.getElementById("img3"),
      document.getElementById("img4"),
      document.getElementById("img5"),
    ];

    if (images.some((img) => !img)) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallaxsection",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    images.forEach((img, i) => {
      if (i === 0) return;

      tl.to(
        images[i - 1],
        {
          opacity: 0,
          duration: 1,
          ease: "none",
        },
        i
      );

      tl.to(
        img,
        {
          opacity: 1,
          duration: 1,
          ease: "none",
        },
        i
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="h-[450vh] parallaxsection relative grid grid-cols-2 gap-24 w-full p-24">
      <div className="h-full flex flex-col justify-around">
        {textsAbout.map((text) => (
          <div key={text.id} className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">{text.title}</h2>
            <p className="text-base leading-relaxed">{text.description}</p>
          </div>
        ))}
      </div>
      <div className="sticky top-[9vh] w-full h-[88vh] rounded-xl overflow-hidden">
        <Image id="img0" fill src={florestImg} alt="Pesosa feliz" />
        <Image
          id="img1"
          fill
          src={img2}
          alt="Pesosa feliz"
          className="opacity-0"
        />
        <Image
          id="img2"
          fill
          src={img3}
          alt="Pesosa feliz"
          className="opacity-0"
        />
        <Image
          id="img3"
          fill
          src={img4}
          alt="Pesosa feliz"
          className="opacity-0"
        />
        <Image
          id="img4"
          fill
          src={img5}
          alt="Pesosa feliz"
          className="opacity-0"
        />
        <Image
          id="img5"
          fill
          src={img6}
          alt="Pesosa feliz"
          className="opacity-0"
        />
      </div>
    </div>
  );
};

export default ParallaxAboutContent;
