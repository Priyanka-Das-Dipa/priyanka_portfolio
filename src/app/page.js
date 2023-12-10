import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" flex min-h-screen bg-[#121212] flex-col">
      <Navbar></Navbar>
      <div className="container mx-auto md:px-12  py-4">
        <HeroSection></HeroSection>
      </div>
    </main>
  );
}
