import React, { useContext, useEffect, useState } from "react";
import { FaWpforms } from "react-icons/fa";
import { GiMoon } from "react-icons/gi";
import { MdHomeFilled, MdPermContactCalendar } from "react-icons/md";
import { Link } from "react-router-dom";
import ThemeContext from "../assets/Theme/ThemeContext";
// import logo from "../assets/images/s.svg";
import { BiMenu, BiUser } from "react-icons/bi";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const [theme, setTheme] = useState('light');

  // const changeTheme = () => {
  //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : "light"));
  // }

  useEffect(() => {
    document.body.classList = `${theme} - theme`;
  }, [theme]);

  return (
    <div className="NavBar">
      <div className="nav-left">
        {/* <img src={logo} alt="" /> */}
        <h1><BiUser/>Shoeb Ahmed Siddiqui</h1>
      </div>
      <div className="nav">
        <div className="icons">
          <Link>
            <MdHomeFilled id="icon" />
            Home
          </Link>
        </div>
        <div className="icons">
          <Link>
            <MdPermContactCalendar />
            Contact
          </Link>
        </div>
        <div className="icons">
          <Link>
            <FaWpforms />
            Resume
          </Link>
        </div>
        <div
          className={`icons ${
            theme === "dark" ? "body.dark-theme" : "body.light-theme"
          }`}
        >
          <Link onClick={toggleTheme}>
            <GiMoon />
            {theme === "light" ? "Dark" : "Light"}
          </Link>
        </div>
        <div className="icons menu-icon">
          <Link>
            <BiMenu />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
