import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HeroSection from "./components/landing-page/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#DCFFE8]/30">
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </main>
  );
}
