import Title from "@/components/ui/title";
import persons from "./persons.json";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const WhoWeAreSection = () => {
  return (
    <div id="planos" className="px-[4%] lg:px-0 flex justify-center">
      <div className="container h-full flex flex-col gap-16 px-[2%] lg:px-[8%]">
        <Title
          title="Quem somos"
          description="Descubra mais sobre os terapeutas por trás do projeto"
        />

        <div className="flex flex-col w-full gap-8">
          {persons.map((person) => (
            <div
              key={`terapeuta-${person.id}`}
              className="w-full flex last:flex-row-reverse hover:scale-105 transition-all duration-300 bg-default-green/10 rounded-lg"
            >
              <div
                className={twMerge(
                  "w-1/2 relative h-[500px] bg-default-green flex items-center justify-center",
                  person.id === 0 ? "lg:rounded-l-lg" : "lg:rounded-r-lg"
                )}
              >
                <p>imagem aqui</p>
              </div>
              <div className="flex p-4 w-1/2 flex-col gap-4">
                <h2 className="text-4xl font-bold">{person.name}</h2>

                <span className="w-1/6 h-0 border border-default-green rounded-full" />

                <p className="text-sm">{person.description}</p>

                <Link
                  href={person.link}
                  type="button"
                  className="border w-fit px-5 py-2 text-sm rounded-lg border-default-black bg-default-green hover:bg-default-green/90 text-default-black"
                >
                  Saiba mais sobre {person.name.split(" ")[0]}
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
