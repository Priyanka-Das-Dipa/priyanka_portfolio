import AboutMe from "@/components/AboutMe";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import ProjectsSection from "@/components/project/ProjectsSection";

export default function Home() {
  return (
    <main className=" flex min-h-screen bg-[#121212] mx-auto  flex-col px-5 md:px-0">
      <Navbar></Navbar>
      <div className="container mx-auto  mt-10 md:px-12 my-10 py-4">
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <ProjectsSection></ProjectsSection>
        <EmailSection></EmailSection>
      </div>
      <Footer></Footer>
    </main>
  );
}
