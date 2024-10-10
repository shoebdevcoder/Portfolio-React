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

const Skills = () => {
  return (
    <div className="Skills">
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
      <div className="skills-main">
        <img src={bts} alt="" />
        <h5>Bootstrap</h5>
      </div>
      <div className="skills-main">
        <img src={rdx} alt="" />
        <h5>Redux</h5>
      </div>
      <div className="skills-main">
        <img src={mdb} alt="" />
        <h5>Express JS</h5>
      </div>
      <div className="skills-main">
        <img src={mdb} alt="" />
        <h5>Express JS</h5>
      </div>
    </div>
  );
};

export default Skills;
