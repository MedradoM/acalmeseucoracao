import data from "./comments.json";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const VideosCarousel = () => {
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
    <div className="lg:col-span-5 col-span-1 flex relative w-full justify-center">
      <Carousel setApi={setApi} className="size-full">
        <CarouselContent className="lg:h-[70vh]">
          {data.videos.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full aspect-square lg:aspect-auto h-full"
            >
              <Card className="w-full h-full">
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
        </CarouselContent>
      </Carousel>
      <div className="bg-default-white p-1 rounded-full  flex items-center absolute bottom-8">
        {data.videos.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              current === index + 1
                ? "bg-default-black/50"
                : "bg-default-black/10"
            }`}
            onClick={() => api?.scrollTo(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default VideosCarousel;
