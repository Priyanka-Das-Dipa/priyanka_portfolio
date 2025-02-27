import AboutMe from "@/components/AboutMe";
import EmailSection from "@/components/EmailSection";
import Experience from "@/components/Expreience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MySkill from "@/components/MySkill";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import BlogPage from "./blog/page";

export default function Home() {
  return (
    <main className=" flex h-screen flex-col md:px-0">
      <Navbar></Navbar>
      <div className="bg-[#120321] mt-10 py-4">
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <Experience />
        <MySkill></MySkill>
        <Projects></Projects>
        <BlogPage />
        <EmailSection></EmailSection>
      </div>
      <Footer></Footer>
    </main>
  );
}
