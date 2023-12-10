import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" flex min-h-screen bg-[#121212] mx-auto flex-col">
      <Navbar></Navbar>
      <div className="container mx-auto p-8 mt-10 md:px-12  py-4">
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
      </div>
    </main>
  );
}
