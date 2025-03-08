"use client";

import { Check } from "lucide-react";
import Title from "../../ui/title";
import plans from "./plans.json";
import Link from "next/link";
// import ParticlesEffect from "../particlesEffect";
// import { useState } from "react";

const PlansSection = () => {
  // const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div id="planos" className="px-[4%] lg:px-0 flex justify-center">
      <div className="container h-full flex flex-col gap-16 px-[2%] lg:px-[8%]">
        <Title
          title="Planos de Assinatura"
          description="Escolha o período de assinatura que melhor se adapte às suas necessidades e aproveite ao máximo nosso programa de acompanhamento."
        />

        <div className="grid grid-cols-3 w-full gap-4 xl:gap-8">
          {plans.map((item) => (
            <div
              key={`plan-${item.id}`}
              className="flex flex-col max-w-[400px] p-6 rounded-xl border-2 h-full w-full transition-all duration-300 group hover:scale-105 lg:col-span-1 col-span-3 hover:border-default-golden flex-1 justify-between lg:justify-self-auto justify-self-center"
              // onMouseEnter={() => setHoveredCard(index)}
              // onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="gap-4 flex flex-col pb-5">
                <h1 className="text-xl text-default-black font-bold">
                  {item.name}
                </h1>
                <div className="">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">
                      {item.price.toLocaleString("pt-BR", {
                        currency: "BRL",
                        style: "currency",
                      })}
                    </span>
                    <span className="text-default-golden ml-1 mb-1">
                      {item.timeValue}
                    </span>
                  </div>
                  <div className="h-1 w-16 bg-default-golden mt-2 mb-4"></div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-lg text-default-golden">{item.title}</p>
                  <p className="text-default-black text-sm">
                    {item.description}
                  </p>
                  <p className="font-semibold text-default-black">
                    {item.time}
                    <span className="text-default-golden">
                      {item.timeValue}
                    </span>
                  </p>
                </div>

                <ul className="flex flex-col gap-1">
                  {item.features.map((feature) => (
                    <li
                      key={`feature-${feature}`}
                      className="flex items-center gap-1"
                    >
                      <Check className="p-2 rounded-full bg-default-black/10" />
                      <span className="text-default-black">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={item.link}
                target="_blank"
                className="w-full text-center font-semibold text-default-white transition-all rounded-lg py-2 border bg-default-black group-hover:bg-default-golden group-hover:text-default-black"
              >
                {item.name}
              </Link>
              {/* {hoveredCard === index && (
                <div className="absolute inset-0 h-full flex items-end w-full justify-center pointer-events-none">
                  <ParticlesEffect id={`particles-${index}`} />
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansSection;
