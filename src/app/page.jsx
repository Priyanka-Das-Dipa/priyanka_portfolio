import AboutMe from "@/components/AboutMe";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MySkill from "@/components/MySkill";
import Navbar from "@/components/navbar/Navbar";
import ProjectsSection from "@/components/project/ProjectsSection";

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen  flex-col  md:px-0">
      <Navbar></Navbar>
      <div className="container mx-auto bg-black mt-10 px-5 md:px-12 py-4">
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <MySkill></MySkill>
        <ProjectsSection></ProjectsSection>
        <EmailSection></EmailSection>
      </div>
      <Footer></Footer>
    </main>
  );
}
