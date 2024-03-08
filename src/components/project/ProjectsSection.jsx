import React from "react";
import ProjectCard from "./ProjectCard";
import { Container } from "postcss";

const projectData = [
  {
    id: 1,
    title: "Summer Sale",
    image: "/image/1.png",
    description:"It is a Simple Summer Sale Website. Where user can by product by clicking on the product card. In the banner there is a cupan-code for discount. If the user type the cupan-code the purchase the product user will get 20% discount.",
    liveLink: "https://summer-sale-green.vercel.app/",
    gitHubLink:
      "https://github.com/Priyanka-Das-Dipa/summer-sale",
  },
  {
    id: 2,
    title: "Electronics And Technology",
    image: "/image/2.png",
    description:"It is a server & client side project. At admin side admin can add the electronics product and the user can add to cart the product. In this project i have implement a FIREBASE Authentication for Login and Registration. ",
    liveLink: "https://technology-and-electroni-8514d.web.app/",
    gitHubLink:
      "https://github.com/Priyanka-Das-Dipa/techonology_and_electronics",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <section id="project" className="min-h-screen">
        <h2 className="text-4xl font-bold text-white mb-10  text-center ">
          My Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-10">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              liveLink={project.liveLink}
              gitHubLink={project.gitHubLink}
            ></ProjectCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
