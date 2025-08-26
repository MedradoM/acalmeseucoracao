"use client";

import dynamic from "next/dynamic";

const BackgroundSection = dynamic(
  () => import("@/components/backgroundSection"),
  {
    ssr: false,
  }
);

const RenderBackground = () => {
  return <BackgroundSection />;
};

export default RenderBackground;
