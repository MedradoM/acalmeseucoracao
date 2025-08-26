import Title from "@/components/ui/title";
import persons from "./persons.json";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useScrollContext } from "@/context/scrollContext";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAreSection = () => {
  const { scroll } = useScrollContext()
  
  useEffect(() => {
    const allCards = gsap.utils.toArray<HTMLElement>(".cards");
    const width = document.body.clientWidth;

    allCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: (width ?? 0) > 640 ? (index === 0 ? 100 : -100) : -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power4.out",
          scrollTrigger: {
            // markers: true,
            trigger: card,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div id="quem-somos" className="px-[4%] lg:px-0 flex justify-center">
      <div className="container h-full flex flex-col gap-16 px-[2%] lg:px-[8%]">
        <Title
          title="Quem somos"
          description="Descubra mais sobre os terapeutas por trás do projeto"
        />

        <div className="flex flex-col w-full gap-8">
          {persons.map((person) => (
            <div
              key={`terapeuta-${person.id}`}
              className="cards w-full flex flex-col lg:flex-row lg:last:flex-row-reverse hover:scale-105 transition-all duration-300 bg-default-green/10 rounded-lg"
            >
              <div
                className={twMerge(
                  "lg:w-1/2 relative rounded-t-lg h-[500px] bg-default-green justify-center flex overflow-hidden",
                  person.id === 1 ? "lg:rounded-l-lg" : "lg:rounded-r-lg"
                )}
              >
                <Image style={{ transform: `translateY( ${0.05 * (scroll ?? 0) - ( person.id === 1 ? 50 : 80)}px )`,  }} className="transition-all ease-out" src={"/fer.png"} alt={person.name} width={300} height={500} />
              </div>
              <div className="flex p-8 lg:w-1/2 flex-col justify-between gap-8">
                <div className="flex flex-col gap-4">
                  <h2 className="text-4xl font-bold">{person.name}</h2>

                  <span className="w-1/6 h-0 border border-default-green rounded-full" />

                  <p className="text-default-golden">{person.resume}</p>

                  <p className="text-sm">{person.description}</p>
                </div>

                <Link
                  href={person.link}
                  type="button"
                  className="border w-fit px-5 py-2 text-sm rounded-lg border-default-black bg-default-green hover:bg-default-green/90 text-default-black"
                >
                  Saiba mais sobre {person.id && { 2: "o", 1: "a" }[person.id]}{" "}
                  {person.name.split(" ")[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
