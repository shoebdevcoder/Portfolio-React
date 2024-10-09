import React from "react";
import profile from "../assets/images/p2.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="header-main">
        <div className="img">
          <img src={profile} alt="" />
        </div>
        <div className="info">
          <h1>hello</h1>
          <p>lorem123</p>
        </div>
      </div>
      <div className="social-media">
        <h1>Social Media</h1>
      </div>
    </div>
  );
};

export default Header;
