import BackgroundSection from "@/components/backgroundSection";
import Header from "@/components/header";
import MainSection from "@/components/mainsection";
import ScrollProvider from "@/context/scrollContext";

export default function Home() {
  return (
    <ScrollProvider>
      <div id="top" className="bg-default-white">
        <Header />
        <div className="relative h-[180vh]">
          <BackgroundSection />
        </div>
        <MainSection />
      </div>
    </ScrollProvider>
  );
}
