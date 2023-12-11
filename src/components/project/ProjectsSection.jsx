import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Technology and Electronics",
    image: "/image/1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eligendi! Voluptas esse alias iure culpa nisi nostrum magnam saepe earum?",
  },
  {
    id: 2,
    title: "Summer Sale",
    image: "/image/2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eligendi! Voluptas esse alias iure culpa nisi nostrum magnam saepe earum?",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-4 text-center ">My Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          ></ProjectCard>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
