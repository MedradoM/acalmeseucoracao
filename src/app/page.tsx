import Footer from "@/components/footer";
import Header from "@/components/header";
import MainSection from "@/components/mainsection";
import ScrollProvider from "@/context/scrollContext";

export default function Home() {
  return (
    <ScrollProvider>
      <div id="top" className=" bg-default-white w-full">
        <Header />
        <MainSection />
        <Footer />
      </div>
    </ScrollProvider>
  );
}
