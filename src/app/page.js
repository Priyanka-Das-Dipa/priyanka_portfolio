import AboutMe from "@/components/AboutMe";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/project/ProjectsSection";

export default function Home() {
  return (
    <main className=" flex min-h-screen bg-[#121212] mx-auto flex-col">
      <Navbar></Navbar>
      <div className="container mx-auto p-8 mt-10 md:px-12  py-4">
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <ProjectsSection></ProjectsSection>
        <EmailSection></EmailSection>
      </div>
    </main>
  );
}
