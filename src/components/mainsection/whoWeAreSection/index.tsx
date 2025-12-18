import persons from "./persons.json";
import Image from "next/image";
import fer from "@/fer.png";
import SplitLineAnimation from "@/components/ui/split-line";
import Link from "next/link";

const WhoWeAreSection = () => {
  return (
    // <div id="quem-somos" className="px-[4%] lg:px-0 flex justify-center">
    //   <div className="container h-full flex flex-col gap-16 px-[2%] lg:px-[8%]">
    //     <Title
    //       title="Quem somos"
    //       description="Descubra mais sobre os terapeutas por trás do projeto"
    //     />

    //     <div className="flex flex-col w-full gap-8">
    //       {persons.map((person) => (
    //         <div
    //           key={`terapeuta-${person.id}`}
    //           className="cards w-full flex flex-col lg:flex-row lg:last:flex-row-reverse hover:scale-105 transition-all duration-300 bg-default-green/10 rounded-lg"
    //         >
    //           <div
    //             className={twMerge(
    //               "lg:w-1/2 relative rounded-t-lg h-[500px] bg-default-green justify-center flex overflow-hidden",
    //               person.id === 1 ? "lg:rounded-l-lg" : "lg:rounded-r-lg"
    //             )}
    //           >
    //             <Image style={{ transform: `translateY( ${0.05 * (scroll ?? 0) - ( person.id === 1 ? 50 : 80)}px )`,  }} className="transition-all ease-out" src={"/fer.png"} alt={person.name} width={300} height={500} />
    //           </div>
    //           <div className="flex p-8 lg:w-1/2 flex-col justify-between gap-8">
    //             <div className="flex flex-col gap-4">
    //               <h2 className="text-4xl font-bold">{person.name}</h2>

    //               <span className="w-1/6 h-0 border border-default-green rounded-full" />

    //               <p className="text-default-golden">{person.resume}</p>

    //               <p className="text-sm">{person.description}</p>
    //             </div>

    //             <Link
    //               href={person.link}
    //               type="button"
    //               className="border w-fit px-5 py-2 text-sm rounded-lg border-default-black bg-default-green hover:bg-default-green/90 text-default-black"
    //             >
    //               Saiba mais sobre {person.id && { 2: "o", 1: "a" }[person.id]}{" "}
    //               {person.name.split(" ")[0]}
    //             </Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col items-cecnter w-full gap-32 bg-default-green/10 py-32">
      <SplitLineAnimation
        className="text-default-black text-[clamp(4rem,3vw,4rem)] mx-auto leading-[3vw]"
        text="Conheça os terapeutas"
      />

      {persons.map((person) => (
        <div
          key={`terapeuta-${person.id}`}
          className="w-full grid grid-cols-2 group max-w-[60vw] gap-[6vw] mx-auto items-center"
        >
          <div className="relative h-[60vh] group-odd:order-2 order-1 bg-default-green w-full ">
            <Image
              src={person.image === "fer" ? fer : ""}
              alt={person.name}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col w-full gap-4 group-odd:order-1 order-2">
            <SplitLineAnimation
              className="text-[clamp(2.5vw,1.6vw,4vw)] leading-[3vw] text-default-black"
              text={person.name}
            />
            {/* <h2 className="text-[clamp(3rem,1.6vw,4rem)] leading-[3vw] text-default-black">
              {person.name}
            </h2> */}

            <span className="w-1/6 h-0 border border-default-green rounded-full" />

            <SplitLineAnimation
              className="text-default-golden text-[clamp(0.5vw,2vw,1vw)]"
              text={person.resume}
            />
            {/* 
            <p className="text-default-golden text-[clamp(1rem,1.2vw,2rem)]">
              {person.resume}
            </p> */}

            <SplitLineAnimation
              className="text-[clamp(0.5vw,0.8vw,1vw)] my-4 text-justify text-default-black"
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
