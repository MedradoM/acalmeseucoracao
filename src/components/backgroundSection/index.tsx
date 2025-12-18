"use client";

import { useScrollContext } from "@/context/scrollContext";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import * as THREE from "three";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SplitTextAnimation from "../ui/split-text";

function WaterSurface() {
  const meshRef = useRef<THREE.Mesh>(null);
  const clockRef = useRef<THREE.Clock>(null);
  const { isScrolled } = useScrollContext();

  const ripples = useRef<
    { x: number; y: number; startTime: number; delay: number }[]
  >([]);
  const rippleTriggered = useRef(false);

  useEffect(() => {
    if (isScrolled && !rippleTriggered.current) {
      const now = clockRef.current?.getElapsedTime() || 0;
      ripples.current.push({
        x: 0.3,
        y: 2,
        startTime: now,
        delay: 0,
      });

      rippleTriggered.current = true;
    }

    if (!isScrolled) {
      rippleTriggered.current = false;
    }
  }, [isScrolled]);

  useFrame(({ clock }) => {
    clockRef.current = clock;
    const mesh = meshRef.current;
    if (!mesh || !mesh.geometry.attributes.position) return;

    const time = clock.getElapsedTime();
    const position = mesh.geometry.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);

      let z = Math.sin(x * x + y * y + time) * 0.01;

      ripples.current.forEach(({ x: rx, y: ry, startTime, delay }) => {
        const localTime = time - startTime - delay;

        const dx = x - rx;
        const dy = y - ry;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const speed = 1.5;
        const frequency = 1;
        const amplitude = 0.08;

        const radius = localTime * speed;
        const diff = dist - radius;
        const decay = Math.exp(-diff * diff * 10);

        const ripple = Math.sin(frequency * decay * diff) * decay * amplitude;

        z += ripple;
      });

      position.setZ(i, z);
    }

    position.needsUpdate = true;
    mesh.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[40, 40, 200, 200]} />
      <MeshReflectorMaterial
        blur={[0, 0]}
        resolution={1024}
        mixBlur={1}
        mixStrength={0.9}
        mixContrast={1}
        mirror={1}
        flatShading={false}
      />
    </mesh>
  );
}

const ImageBackground = () => {
  const { size } = useThree();
  const texture = useLoader(THREE.TextureLoader, "/calmLake.png");

  const imageAspect = texture.image.width / texture.image.height;
  const screenAspect = size.width / size.height;

  const scale =
    screenAspect > imageAspect
      ? [(screenAspect / imageAspect) * 10, 10, 1]
      : [10, (imageAspect / screenAspect) * 10, 1];

  return (
    <mesh position={[0, -0.36, 0]} rotation={[0, 3.14, 0.018]}>
      <planeGeometry args={[scale[0], scale[1]]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

const BackgroundSection = () => {
  const { isScrolled } = useScrollContext();

  return (
    <div className="h-screen w-screen fixed top-0 left-0">
      <div className="flex relative  size-full">
        <Canvas
          camera={{ position: [0, 0.3, -4], fov: 75 }}
          className="w-full h-full "
        >
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <directionalLight intensity={2.5} position={[0, 1.5, 12]} />

            <WaterSurface />

            <ImageBackground />
          </Suspense>
        </Canvas>

        <div className="absolute flex flex-col gap-4 bottom-[4vh] left-[30vw] -translate-x-1/2 ">
          <div id="titulo-acalme" className="flex items-center gap-4">
            <SplitTextAnimation
              className="transition-all font-stretch-[50%] duration-1000 text-[6vw] text-nowrap leading-none tracking-[-0.04em] text-default-white whitespace-nowrap  select-none pointer-events-none"
              text="Acalme seu Coração"
            />
            {/* 
            <h1
              className={twMerge(
                "transition-all font-stretch-[50%] duration-1000 text-[6vw] text-nowrap leading-none tracking-[-0.04em] text-default-white whitespace-nowrap  select-none pointer-events-none"
              )}
            >
              Acalme seu
            </h1>
            <h1
              className={twMerge(
                "transition-all duration-1000 text-[6vw] leading-none tracking-[-0.04em] text-default-white whitespace-nowrap  select-none pointer-events-none"
              )}
            >
              Coração
            </h1> */}
          </div>

          <h4 className={cn("text-[1.8vw] font-light text-default-white")}>
            Liberte-se da ansiedade e abraçe a paz interior
          </h4>
        </div>

        <div
          className={twMerge(
            "absolute flex flex-col gap-4 max-w-[28vw] p-4 bg-default-white/25 backdrop-blur-lg rounded-2xl bottom-8 right-[3vw] border border-default-white/30 ease-[linear(0,-0.004_8.7%,-0.019_16.8%,-0.111_41.5%,-0.13_49.9%,-0.13_54.6%,-0.12_59%,-0.099_63.1%,-0.067_67%,-0.008_71.8%,0.071_76.3%,0.289_84.7%,0.598_92.6%,1)] transition-all  duration-700",
            isScrolled && "-right-[30vw] "
          )}
        >
          <h4 className="text-[1.3vw] font-semibold text-default-white">
            Acabe com a ansiedade
          </h4>
          <p className="text-[0.8vw] font-light text-default-white">
            Juntos podemos alcançar a serenidade e o equilíbrio emocional que
            você deseja.
          </p>

          <Button
            type="button"
            className={twMerge(
              "rounded-full w-fit hover:bg-default-white bg-default-white/90",
              isScrolled && "right-0"
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
  );
};

export default BackgroundSection;
