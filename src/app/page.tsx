import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/hero-section";
import InteractiveVR from "@/components/interactive-vr";
import OurCreations from "@/components/our-creation";

export default function Home() {
  return (
    <main className="">
      <div className="bg-[#E5EAF1] bg-[url(/images/mobile/image-hero.jpg)] bg-cover bg-no-repeat bg-blend-multiply lg:bg-[url(/images/desktop/image-hero.jpg)]">
        <Header />
        <HeroSection />
      </div>
      <InteractiveVR />
      <OurCreations />
      <Footer />
    </main>
  );
}
