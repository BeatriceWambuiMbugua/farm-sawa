import Link from "next/link";
import Card from "./card";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center justify-center flex-col text-center px-4 gap-6 text-slate-50 z-50 w-full h-full relative bg-[url('/assets/hero-background.svg')] bg-cover bg-center h-[80vh]">
        <h1 className="text-6xl font-bold font-mono">
          Buy the home, not the hazard.
        </h1>
        <p className="text-3xl font-medium italic font-mono">
          Assess climate hazards before investing - AI- powered property risk
          insights
        </p>
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-xl font-mono text-3xl font-semibold hover:bg-black/90 transition">
          <Link href={"/signin"}>Get Climate Risk Report</Link>
        </button>
         <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="flex items-center justify-center py-8 gap-10">

        <Card image="/assets/drought.png" text="Drought" />
        <Card image="/assets/drainage-image.svg" text="Drainage" />
        <Card image="/assets/flood.svg" text="Flood" />
      </div>
    </div>
  );
};

export default HeroSection;
