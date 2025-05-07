import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Shopping Cart",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sapiente.",
      img: "/project.png",
      link: "",
    },
    // { title: "Tekisky Portal" },
  ];

  return (
    <div className="Projects">
      {projects.map((project) => {
        return (
          <div className="project_lists" key={project.id}>
            <img src={project.img} alt="img" />
            <div className="text">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span>Visit:<a href={project.link}>Click Here</a></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
