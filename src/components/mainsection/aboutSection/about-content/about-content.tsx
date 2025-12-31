import { Button } from "@/components/ui/button";
import SplitLineAnimation from "@/components/ui/split-line";
import SplitTextAnimation from "@/components/ui/split-text";
import Link from "next/link";

const AboutContent = () => {
  return (
    <div className="py-32 bg-default-green px-8 lg:px-16 gap-16 items-center justify-end flex ">
      <div className="flex flex-col gap-8 justify-center lg:w-[80%] h-full">
        <div className="flex flex-col lg:gap-0 gap-8">
          <SplitTextAnimation
            text="Quem somos"
            className="text-default-white lg:text-[1vw] text-[4.5vw] leading-[3vw] "
          />

          <SplitTextAnimation
            text={`O Acalme Seu Coração nasceu para ser um espaço seguro, ético e eficaz de cuidado emocional.
            
            Um lugar onde sentir é permitido e acolhido.

            Acreditamos que a ansiedade, o cansaço emocional e a desconexão interior não são fraquezas — são sinais de que algo precisa de atenção.

            O Acalme Seu Coração, foi criado para apoiar você em diferentes momentos da sua jornada emocional.
            Não se trata de “consertar” emoções, mas de aprender a escutá-las, acolhê-las e cuidar de si com mais consciência e gentileza.

            Um programa de cuidado emocional para quem deseja viver com mais presença, equilíbrio e alegria.
           `}
            className="text-default-white lg:text-[clamp(2rem,3vw,4rem)] text-[6vw] leading-[9vw] lg:leading-[3vw] "
          />
        </div>

        <SplitLineAnimation
          className="text-default-white whitespace-pre-line lg:text-[clamp(2rem,3vw,4rem)] text-[6vw] leading-[9vw] lg:leading-[3vw] "
          text={`Para quem é:

• Para quem sente ansiedade, tensão ou cansaço emocional
• Para quem deseja aprender a lidar melhor com as emoções
• Para quem busca mais presença e clareza no dia a dia
• Para quem quer se cuidar emocionalmente com profundidade e leveza

O que você desenvolve ao longo do programa:

• Mais calma e regulação emocional
• Inteligência emocional
• Presença no momento presente
• Autonomia emocional
`}
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
