"use client";

import { useScrollContext } from "@/context/scrollContext";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const ImageSection = () => {
  const { isScrolled } = useScrollContext();

  return (
    <div className="w-full m-0 p-0 h-[145vh] relative snap-start">
      <Image
        alt="MainImage"
        className="lg:object-fill pointer-events-none  object-cover"
        quality={100}
        src={"/mainImg.png"}
        fill={true}
      />
      <div
        className={twMerge(
          "absolute lg:mt-[20%] mt-[100%] transition-all flex justify-center w-full",
          isScrolled ? "pl-0" : "lg:pl-52"
        )}
      >
        <div className="flex flex-col items-center text-default-white">
          <h1
            className={twMerge(
              "transition-all duration-1000 text-5xl text-default-white"
            )}
          >
            Acalme seu
          </h1>
          <h1
            className={twMerge(
              "transition-all duration-1000 arsenal_sc text-6xl text-default-white"
            )}
          >
            CORAÇÃO
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
