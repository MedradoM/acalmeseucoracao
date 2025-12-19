import persons from "./persons.json";
import Image from "next/image";
import fer from "@/fer.png";
import SplitLineAnimation from "@/components/ui/split-line";
import Link from "next/link";

const WhoWeAreSection = () => {
  return (
    <div className="flex flex-col items-cecnter w-full gap-32 bg-default-green/10 py-32">
      <SplitLineAnimation
        className="text-default-black text-center text-[clamp(4rem,3vw,4rem)] mx-auto leading-[12vw] lg:leading-[3vw]"
        text="Conheça os terapeutas"
      />

      {persons.map((person) => (
        <div
          key={`terapeuta-${person.id}`}
          className="w-full grid lg:grid-cols-2 group max-w-[80vw] lg:max-w-[60vw] gap-[6vw] mx-auto items-center"
        >
          <div className="relative h-[40vh] lg:h-[60vh] lg:group-odd:order-2 lg:order-1 bg-default-green w-full ">
            <Image
              src={person.image === "fer" ? fer : ""}
              alt={person.name}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col w-full gap-4 lg:gap-4 lg:group-odd:order-1 lg:order-2">
            <SplitLineAnimation
              className="lg:text-[clamp(2.5vw,1.6vw,4vw)] text-[6vw] leading-[3vw] text-default-black"
              text={person.name}
            />
            {/* <h2 className="text-[clamp(3rem,1.6vw,4rem)] leading-[3vw] text-default-black">
              {person.name}
            </h2> */}

            <span className="w-1/6 h-0 border border-default-green rounded-full" />

            <SplitLineAnimation
              className="text-default-golden text-[3.5vw] lg:text-[clamp(0.5vw,2vw,1vw)]"
              text={person.resume}
            />
            {/* 
            <p className="text-default-golden text-[clamp(1rem,1.2vw,2rem)]">
              {person.resume}
            </p> */}

            <SplitLineAnimation
              className="lg:text-[clamp(0.5vw,0.8vw,1vw)] text-[2.6vw] lg:my-4 text-justify text-default-black"
              text={person.description}
            />
            {/* 
            <p className="text-[clamp(1rem,0.8vw,2rem)] my-4 text-justify text-default-black">
              {person.description}
            </p> */}

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
  );
};

export default WhoWeAreSection;
