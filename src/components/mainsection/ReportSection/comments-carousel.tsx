import data from "./comments.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { Card, CardContent } from "@/components/ui/card";

const CommentsCarousel = () => {
  const mobile = window.screen.width > 640 ? false : true;

  return (
    <div className="lg:col-span-3 col-span-1">
      <Carousel
        opts={{ loop: true, dragFree: mobile }}
        plugins={[AutoScroll({ speed: 0.3, playOnInit: true })]}
        orientation={mobile ? "horizontal" : "vertical"}
        className="size-full"
      >
        <CarouselContent className="lg:h-[70vh] h-full mt-0 container">
          {data.comments.map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/4 basis-full">
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
