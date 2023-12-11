import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Summer Sale",
    image: "/image/1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eligendi! Voluptas esse alias iure culpa nisi nostrum magnam saepe earum?",
    liveLink: "https://technology-and-electroni-8514d.web.app/",
    gitHubLink:
      "https://github.com/Priyanka-Das-Dipa/techonology_and_electronics",
  },
  {
    id: 2,
    title: "Electronics And Technology",
    image: "/image/2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eligendi! Voluptas esse alias iure culpa nisi nostrum magnam saepe earum?",
    liveLink: "https://technology-and-electroni-8514d.web.app/",
    gitHubLink:
      "https://github.com/Priyanka-Das-Dipa/techonology_and_electronics",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-4 text-center ">
        My Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
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
    </>
  );
};

export default ProjectsSection;
