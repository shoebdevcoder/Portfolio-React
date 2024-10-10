import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";

const Main = () => {
  return (
    <div className="Main">
      <div className="edu">
        <h1>Education</h1>
        <Education />
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <Skills/>
      </div>
      <div className="projects">
        <h1>Projects</h1>
        <Projects/>
      </div>
    </div>
  );
};

export default Main;
