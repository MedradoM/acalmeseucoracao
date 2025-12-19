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
    img: florestImg,
  },
  {
    id: 2,
    title: "Teste de titulo",
    description:
      "Descrição de teste para saber se está tudo certo com o layout",
    img: img2,
  },
  {
    id: 3,
    title: "Teste de titulo",
    description:
      "Descrição de teste para saber se está tudo certo com o layout",
    img: img3,
  },
  {
    id: 4,
    title: "Teste de titulo",
    description:
      "Descrição de teste para saber se está tudo certo com o layout",
    img: img4,
  },
  {
    id: 5,
    title: "Teste de titulo",
    description:
      "Descrição de teste para saber se está tudo certo com o layout",
    img: img5,
  },
  {
    id: 6,
    title: "Teste de titulo",
    description:
      "Descrição de teste para saber se está tudo certo com o layout",
    img: img6,
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
    <div className="lg:h-[450vh] parallaxsection relative grid lg:grid-cols-2 gap-24 w-full lg:px-24 py-24 px-8">
      <div className="h-full flex flex-col justify-around lg:gap-0 gap-24">
        {textsAbout.map((text) => (
          <div key={text.id} className="flex flex-col gap-4">
            <div className="w-full lg:hidden h-[30vh] relative rounded-xl overflow-hidden">
              <Image src={text.img} alt={text.title} fill />
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">{text.title}</h2>
              <p className="text-base leading-relaxed">{text.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky top-[9vh] w-full lg:h-[88vh] rounded-xl overflow-hidden">
        <Image
          className="lg:block hidden"
          id="img0"
          fill
          src={florestImg}
          alt="Pesosa feliz"
        />
        <Image
          id="img1"
          fill
          src={img2}
          alt="Pesosa feliz"
          className="opacity-0 lg:block hidden"
        />
        <Image
          id="img2"
          fill
          src={img3}
          alt="Pesosa feliz"
          className="opacity-0 lg:block hidden"
        />
        <Image
          id="img3"
          fill
          src={img4}
          alt="Pesosa feliz"
          className="opacity-0 lg:block hidden"
        />
        <Image
          id="img4"
          fill
          src={img5}
          alt="Pesosa feliz"
          className="opacity-0 lg:block hidden"
        />
        <Image
          id="img5"
          fill
          src={img6}
          alt="Pesosa feliz"
          className="opacity-0 lg:block hidden"
        />
      </div>
    </div>
  );
};

export default ParallaxAboutContent;
