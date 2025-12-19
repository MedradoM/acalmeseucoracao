import VideosCarousel from "./videos-carousel";
import CommentsCarousel from "./comments-carousel";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SplitTextAnimation from "@/components/ui/split-text";

const ReportSection = () => {
  return (
    <div id="relatos" className="lg:px-0 flex justify-center">
      <div className="container h-full flex flex-col gap-16 px-[2%] lg:px-[8%]">
        {/* <Title
          title="Relatos"
          description="Veja relatos de pessoas que conhecem o programa e o que elas têm a dizer sobre ele."
        /> */}

        <div className="flex flex-col text-center items-center">
          <h4 className="lg:text-[clamp(2rem,3vw,4rem)] text-[9vw]">Relatos</h4>
          <SplitTextAnimation
            className="text-default-black lg:text-[clamp(1rem,1.2vw,2rem)] text-[4vw] max-w-xl lg:max-w-2xl"
            text="Veja relatos de pessoas que conhecem o programa e o que elas têm a
            dizer sobre ele."
          />

          {/* <span className="text-default-black lg:text-[clamp(1rem,1.2vw,2rem)] text-[4vw] max-w-2xl mt-4">
            Veja relatos de pessoas que conhecem o programa e o que elas têm a
            dizer sobre ele.
          </span> */}
        </div>

        <div className="grid gap-4 lg:grid-cols-8 grid-cols-1 bg-default-green/10 rounded-xl p-4">
          <VideosCarousel />

          <CommentsCarousel />

          <div className="lg:col-span-8 items-center rounded-xl flex justify-between p-6 bg-default-green">
            <p className="text-[clamp(1rem,1.2vw,2rem)] text-default-white">
              Seja o proximo a testemunhar uma vida mais leve e feliz
            </p>

            <Button
              type="button"
              className={twMerge(
                "rounded-full w-fit lg:flex hidden hover:bg-default-white bg-default-white/90"
              )}
              asChild
            >
              <Link className="flex items-center gap-2" href={"/#planos"}>
                <span className="text-[0.9vw] font-medium text-default-black">
                  Assinar Agora
                </span>

                <div className="rounded-full bg-default-black p-1">
                  <ArrowUpRight className="size-5 stroke-default-white" />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportSection;
