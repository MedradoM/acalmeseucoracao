"use client";

import { useScrollContext } from "@/context/scrollContext";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import * as THREE from "three";

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
      <div className="flex relative size-full">
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

        <div
          className={twMerge(
            "absolute  lg:mt-[20%] mt-[100%] transition-all flex justify-center w-full",
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
    </div>
  );
};

export default BackgroundSection;
