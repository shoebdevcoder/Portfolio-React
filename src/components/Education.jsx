import React from "react";
import eng from "../assets/images/Animation - 1728544147139.gif";
import twelfth from "../assets/images/Animation - 1728544416801.gif";
import tenth from "../assets/images/Animation - 1728544519800.gif";

const Education = () => {
  return (
    <div className="Education">
      <div className="education-main">
        <h3>B.Tech</h3>
        <h4 className="text-secondary">Information Technology</h4>
        <span>
          <b>MGM's College of Engineering, Nanded</b>
        </span>
        <span className="text-info m-5 txt">2024</span>
        <div className="img">
          <img src={eng} alt="" />
        </div>
      </div>
      <div className="education-main">
        <h3>
          12<sup>th</sup> HSC
        </h3>
        <h4 className="text-secondary">Maharashtra State Board</h4>
        <span>
          <b>Blue Bells Jr. College, Nanded</b>
        </span>
        <span className="text-info m-5 txt">2019</span>
        <div className="img">
          <img src={twelfth} alt="" />
        </div>
      </div>
      <div className="education-main">
        <h3>
          10<sup>th</sup> SSC
        </h3>
        <h4 className="text-secondary">Maharashtra State Board</h4>
        <span>
          <b>Sana High School, Nanded</b>
        </span>
        <span className="text-info m-5 txt">2017</span>
        <div className="img">
          <img src={tenth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Education;
