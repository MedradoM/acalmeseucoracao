import { Button } from "@/components/ui/button";
import SplitLineAnimation from "@/components/ui/split-line";
import SplitTextAnimation from "@/components/ui/split-text";
import Link from "next/link";

const AboutContent = () => {
  return (
    <div className="py-32 bg-default-green px-16 gap-16 items-center justify-end flex ">
      <div className="flex flex-col gap-8 justify-center lg:w-[80%] h-full">
        <div className="flex flex-col lg:gap-0 gap-8">
          <SplitTextAnimation
            text="Quem somos"
            className="text-default-white lg:text-[1vw] text-[6.5vw] leading-[3vw] "
          />

          <SplitTextAnimation
            text="O Acalme Seu Coração é um programa Terapêutico Online focado em pessoas, buscando as raízes dos seus conflitos emocionais e promovendo a cura interior."
            className="text-default-white text-justify lg:text-left lg:text-[clamp(2rem,3vw,4rem)] text-[clamp(2rem,2.6vw,3rem)] lg:leading-[3vw] leading-[9vw]"
          />
        </div>

        <SplitLineAnimation
          className="text-default-white text-justify lg:text-left lg:text-[clamp(2rem,3vw,4rem)] text-[clamp(2rem,2.6vw,3rem)] lg:leading-[3vw] leading-[9vw]"
          text="Você vai avançar em todas as áreas da sua vida através de técnicas validadas e comprovadas, como a TFT, Coaching, PNL."
        />

        <Button
          variant={"outline"}
          className="w-fit px-16 h-16 transition-all group bg-transparent border-default-white"
          asChild
        >
          <Link href={"/#planos"}>
            <span className="text-default-white transition-colors group-hover:text-default-black text-lg">
              Quero me inscrever
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AboutContent;
