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
  // const TopSkills = [
  //   {
  //     title: "Top Skills",
  //     items: [
  //       { name: "React", img: react },
  //       { name: "HTML", img: html },
  //       { name: "CSS", img: css },
  //       { name: "JavaScript", img: js },
  //       { name: "Node.js", img: node },
  //       { name: "Express.js", img: exp },
  //       { name: "MongoDB", img: mdb },
  //     ],
  //   },
  // ];

  // const Frameworks = [
  //   {
  //     title: "Frameworks",
  //     items: [
  //       { name: "Redux", img: rdx },
  //       { name: "Tailwind CSS", img: tld },
  //       { name: "Vite", img: vite },
  //       { name: "Bootstrap", img: bts },
  //       { name: "SASS", img: sass },
  //     ],
  //   },
  // ];

  // const Tools = [
  //   {
  //     title: "Tools",
  //     items: [
  //       { name: "Git", img: git },
  //       { name: "GitHub", img: github },
  //       { name: "Postman", img: psm },
  //       { name: "VS Code", img: vscode },
  //       { name: "npm", img: npm },
  //     ],
  //   },
  // ];

  return (
    <div className="Skills">
      {/* <h4>Top Skills</h4>
      <div className="skill-origin">
        <div className="skills-main item1">
          <img src={react} alt="" />
          <h5>React JS</h5>
        </div>
        <div className="skills-main item2">
          <img src={html} alt="" />
          <h5>HTML</h5>
        </div>
        <div className="skills-main item3">
          <img src={css} alt="" />
          <h5>CSS</h5>
        </div>
        <div className="skills-main item4">
          <img src={js} alt="" />
          <h5>JavaScript</h5>
        </div>
        <div className="skills-main item5">
          <img src={node} alt="" />
          <h5>Node JS</h5>
        </div>
        <div className="skills-main item6">
          <img src={exp} alt="" />
          <h5>Express JS</h5>
        </div>
        <div className="skills-main item7">
          <img src={mdb} alt="" />
          <h5>Mongo DB</h5>
        </div>
      </div>
      <h4>Frameworks</h4>
      <div className="skill-origin">
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
      <h4>Tools</h4>
      <div className="skill-origin">
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
      </div> */}

      {/* Sliding Skills */}

      {/* <div className="parent-skill">
        <div className="child-skill"></div>
      </div> */}

      {/* <div className="skill_one">
        {TopSkills.map((section, index) => (
          <>
            <h2 className="text-primary">{section.title}</h2>
            <div className="items" key={index}>
              {section.items.map((item, i) => (
                <div key={i} className="itm">
                  <img src={item.img} alt="" />
                </div>
              ))}
            </div>
          </>
        ))}
      </div> */}

      <div className="skill_one">
      <h2 className="text-primary">TOP SKILLS</h2>
        <div className="items">
          <div className="itm itm1">
            <img src={react} alt="" />
          </div>
          <div className="itm itm2">
            <img src={html} alt="" />
          </div>
          <div className="itm itm3">
            <img src={css} alt="" />
          </div>
          <div className="itm itm4">
            <img src={js} alt="" />
          </div>
          <div className="itm itm5">
            <img src={node} alt="" />
          </div>
          <div className="itm itm6">
            <img src={exp} alt="" />
          </div>
          <div className="itm itm7">
            <img src={mdb} alt="" />
          </div>
        </div>
      </div>

      <div className="skill_two">
        <h2 className="text-primary">FRAMEWORKS</h2>
        <div className="items">
          <div className="itm itm1">
            <img src={rdx} alt="" />
          </div>
          <div className="itm itm2">
            <img src={tld} alt="" />
          </div>
          <div className="itm itm3">
            <img src={vite} alt="" />
          </div>
          <div className="itm itm4">
            <img src={bts} alt="" />
          </div>
          <div className="itm itm5">
            <img src={sass} alt="" />
          </div>
        </div>
      </div>

      <div className="skill_three">
        <h2 className="text-primary">TOOLS</h2>
        <div className="items">
          <div className="itm itm1">
            <img src={git} alt="" />
          </div>
          <div className="itm itm2">
            <img src={github} alt="" />
          </div>
          <div className="itm itm3">
            <img src={psm} alt="" />
          </div>
          <div className="itm itm4">
            <img src={vscode} alt="" />
          </div>
          <div className="itm itm5">
            <img src={npm} alt="" />
          </div>
        </div>
      </div>

      {/* {skills.map((section, index) => (
        <div key={index} className="skill-section">
          <h2 className="section-title">{section.title}</h2>
          <div className="slider">
            <div className="slide-track">
              {section.items.concat(section.items).map((item, i) => (
                <div className="slide" key={i}>
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Skills;
