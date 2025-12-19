import data from "./comments.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { Card, CardContent } from "@/components/ui/card";

const CommentsCarousel = () => {
  return (
    <div className="lg:col-span-3 col-span-1">
      <Carousel
        opts={{ loop: true, dragFree: true }}
        plugins={[AutoScroll({ speed: 0.3, playOnInit: true })]}
        orientation="vertical"
        className="size-full"
      >
        <CarouselContent className="h-[70vh] mt-0">
          {data.comments.map((item, index) => (
            <CarouselItem key={index} className="basis-1/4 h-full">
              <Card className="size-full flex items-center">
                <CardContent className="flex flex-col gap-4 h-full w-full p-6">
                  <div className="flex flex-col">
                    <span className="font-semibold text-default-black ">
                      {item.name}
                    </span>
                    <span className="text-default-golden text-xs">
                      {item.description}
                    </span>
                  </div>

                  <p className="text-default-black text-[clamp(1rem,1vw,1rem)] leading-relaxed">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CommentsCarousel;
