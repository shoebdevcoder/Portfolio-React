import React from "react";
import profile from "../assets/images/p2.png";
import Typewriter from "typewriter-effect";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className="Header">
      <div className="header-main">
        <div className="img">
          <img src={profile} alt="" />
        </div>
        <div className="info">
          {/* <h1>Hi... I am Shoeb</h1> */}
          <h1>
            <Typewriter
              options={{
                strings: ["Hi... I am Shoeb"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          {/* <p>
            <Typewriter
              options={{
                strings: [
                  `Passionate software engineer specializing in full-stack development,
            with expertise in MERN stack technologies. Excited about tackling
            complex challenges and contributing to innovative projects. Let's
            connect and explore opportunities in the dynamic world of web
            development!`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p> */}
          <p>
            Passionate software engineer specializing in full-stack development,
            with expertise in MERN stack technologies. Excited about tackling
            complex challenges and contributing to innovative projects. Let's
            connect and explore opportunities in the dynamic world of web
            development!
          </p>
        </div>
      </div>
      <div className="social-media">
        <h1>Social Media</h1>
        <div className="social-icons-main">
          <div className="social-icons">
            <BsInstagram />
          </div>
          <div className="social-icons">
            <FaFacebook />
          </div>
          <div className="social-icons">
            <BsGithub />
          </div>
          <div className="social-icons">
            <MdEmail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
