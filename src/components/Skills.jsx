import React from "react";
import react from "../assets/images/react.gif";
import html from "../assets/images/html.gif";
import css from "../assets/images/css.gif";
import js from "../assets/images/javascript.svg";
import node from "../assets/images/node-js.svg";
import exp from "../assets/images/Express-js.png";
import mdb from "../assets/images/mongodb.png";
import bts from "../assets/images/bootstrap.png";
import rdx from "../assets/images/redux.png";
import tld from "../assets/images/Tailwind CSS.png";
import vite from "../assets/images/Vitejs-logo.svg.png";
import git from "../assets/images/git.svg";
import github from "../assets/images/github.svg";
import vscode from "../assets/images/visual-studio-code.svg";
import sass from "../assets/images/sass.png";
import psm from "../assets/images/postman.svg";
import npm from "../assets/images/icons8-npm-48.png";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="skill-origin">
        <h4>Top Skills</h4>
        <div className="skills-main">
          <img src={react} alt="" />
          <h5>React JS</h5>
        </div>
        <div className="skills-main">
          <img src={html} alt="" />
          <h5>HTML</h5>
        </div>
        <div className="skills-main">
          <img src={css} alt="" />
          <h5>CSS</h5>
        </div>
        <div className="skills-main">
          <img src={js} alt="" />
          <h5>JavaScript</h5>
        </div>
        <div className="skills-main">
          <img src={node} alt="" />
          <h5>Node JS</h5>
        </div>
        <div className="skills-main">
          <img src={exp} alt="" />
          <h5>Express JS</h5>
        </div>
        <div className="skills-main">
          <img src={mdb} alt="" />
          <h5>Mongo DB</h5>
        </div>
      </div>
      <div className="skill-origin">
        <h4>Frameworks</h4>
        <div className="skills-main">
          <img src={bts} alt="" />
          <h5>Bootstrap</h5>
        </div>
        <div className="skills-main">
          <img src={rdx} alt="" />
          <h5>Redux</h5>
        </div>
        <div className="skills-main">
          <img src={tld} alt="" />
          <h5>Tailwind</h5>
        </div>
        <div className="skills-main">
          <img src={vite} alt="" />
          <h5>Vite</h5>
        </div>
        <div className="skills-main">
          <img src={sass} alt="" />
          <h5>Sass</h5>
        </div>
      </div>
      <div className="skill-origin">
        <h4>Tools</h4>
        <div className="skills-main">
          <img src={git} alt="" />
          <h5>git</h5>
        </div>
        <div className="skills-main">
          <img src={github} alt="" />
          <h5>GitHub</h5>
        </div>
        <div className="skills-main">
          <img src={vscode} alt="" />
          <h5>Vs Code</h5>
        </div>
        <div className="skills-main">
          <img src={psm} alt="" />
          <h5>Postman</h5>
        </div>
        <div className="skills-main">
          <img src={npm} alt="" />
          <h5>NPM</h5>
        </div>
      </div>
    </div>
  );
};

export default Skills;
