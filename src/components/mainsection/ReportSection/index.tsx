import Title from "@/components/ui/title";
import data from "./comments.json";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const ReportSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  console.log(current);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div id="relatos" className="px-[4%] lg:px-0 flex justify-center">
      <div className="container h-full flex flex-col gap-16 px-[2%] lg:px-[8%]">
        <Title
          title="Relatos"
          description="Veja relatos de pessoas que conhecem o programa e o que elas têm a dizer sobre ele."
        />

        <div className="grid lg:grid-cols-8 grid-cols-1 bg-default-green/10 rounded-xl p-4">
          <div className="lg:col-span-5 col-span-1 flex w-full">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent className="h-[50vh]">
                {data.videos.map((item, index) => (
                  <CarouselItem key={index} className="w-full">
                    <Card className="h-full w-full">
                      <CardContent className="flex h-full w-full flex-col p-6">
                        <iframe
                          className="w-full h-full rounded-lg"
                          src={item.link}
                          title={`Video ${index + 1}`}
                          allowFullScreen
                        ></iframe>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
                {/* 
                <div className="flex justify-end gap-4">
                  <Button type="button" variant="outline">
                    {" "}
                    <ChevronLeft />{" "}
                  </Button>
                  <Button type="button" variant="outline">
                    {" "}
                    <ChevronRight />{" "}
                  </Button>
                </div> */}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportSection;
