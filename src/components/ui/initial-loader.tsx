"use client";

import { cn } from "@/lib/utils";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

// const prhases = [{ top: "Respira...", bottom: "Expira..." }];

const breathingPhrases = [
  "Respire com gentileza...",
  "Deixe sair tudo aquilo que te incomoda...",
  "Encontre sua paz interior...",
  "Permita-se relaxar...",
  "Seu coração está seguro aqui...",
  "Inspire tranquilidade...",
  "Expire as tensões...",
  "Este é seu momento de calma...",
  "Você merece este cuidado...",
  "Conecte-se com sua essência...",
  "Deixe a serenidade te envolver...",
];

export default function InitialLoader() {
  const { progress } = useProgress();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % breathingPhrases.length);
    }, 2000);

    return () => clearInterval(phraseInterval);
  }, [breathingPhrases.length]);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setFadeOut(true), 2500);

      return () => clearTimeout(timer);
    }
  }, [progress]);

  return visible ? (
    <div className={`fixed inset-0 z-[9999] flex`}>
      <div className="flex relative size-full">
        {/* <div
          className={cn(
            "size-full transition-all bg-default-golden ease-in duration-500",
            fadeOut ? "max-h-0" : "max-h-screen "
          )}
        /> */}

        <div
          onTransitionEnd={() => {
            if (fadeOut) setVisible(false);
          }}
          className={cn(
            "size-full flex flex-col gap-8  items-center justify-center transition-all bg-default-green ease-in-out duration-1000 relative",
            fadeOut ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="gap-4 flex items-center flex-col justify-center">
            {/* <div className="relative flex w-full items-center justify-center mb-12">
              <div
                className="absolute w-32 h-32 rounded-full bg-teal-200/30 animate-pulse"
                style={{ animationDuration: "4s" }}
              />
              <div
                className="absolute w-24 h-24 rounded-full bg-blue-200/40 animate-pulse"
                style={{ animationDuration: "3s", animationDelay: "0.5s" }}
              />
              <div
                className="absolute w-16 h-16 rounded-full bg-stone-300/50 animate-pulse"
                style={{ animationDuration: "2s", animationDelay: "1s" }}
              />
              <div className="w-8 h-8 rounded-full bg-teal-300/60" />
            </div> */}

            <p
              key={currentPhraseIndex}
              className="text-2xl md:text-3xl text-center font-light text-default-white animate-in fade-in duration-1000"
            >
              {breathingPhrases[currentPhraseIndex]}
            </p>
          </div>

          <div className="absolute bottom-2 right-2">
            <span className="text-sm text-default-white font-light">
              {Math.floor(progress)}%
            </span>
          </div>
          {/* <Progress value={progress} className="w-[30%] lg:w-[8%] h-1" /> */}
        </div>

        {/* <div className="grid grid-cols-6 size-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-full h-full bg-default-golden transition-all",
                fadeOut ? "max-h-0" : "max-h-screen "
              )}
              style={{
                transitionDuration: `${
                  ({ 0: 2, 1: 4, 2: 2, 3: 1, 4: 1, 5: 3 }[index as number] ??
                    1) * 600
                }ms`,
              }}
            />
          ))}
        </div> */}
      </div>
    </div>
  ) : null;
}
