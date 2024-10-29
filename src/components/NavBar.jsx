import React, { useContext, useState } from "react";
import { FaWpforms } from "react-icons/fa";
import { GiMoon } from "react-icons/gi";
import { MdHomeFilled, MdPermContactCalendar } from "react-icons/md";
import { Link } from "react-router-dom";
// import ThemeContext from "../assets/Theme/ThemeContext";
// import logo from "../assets/images/s.svg";
import { BiMenu, BiUser } from "react-icons/bi";
import useTheme from "../context/Theme";
import Resume from "./Resume";
// import { ThemeProvider } from "../context/Theme";
import Footer from "../components/Footer.jsx";

const NavBar = () => {
  // const { theme, toggleTheme } = useContext();
  // const { theme, toggleTheme } = useContext(ThemeContext);
  // const [theme, setTheme] = useState('light');

  // const changeTheme = () => {
  //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : "light"));
  // }

  // useEffect(() => {
  //   document.body.classList = `${theme} - theme`;
  // }, [theme]);

  const {themeMode, lightTheme, darkTheme} = useTheme();

  const onChangeBtn = (e) =>{
    const darkModeStatus = e.currentTarget.checked
    if(darkModeStatus){
      darkTheme()
    }else{
      lightTheme()
    }
  }


  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResumeModal = () => setIsResumeOpen(true);
  const closeResumeModal = () => setIsResumeOpen(false);

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
            <div>Home</div>
          </Link>
        </div>
        <div className="icons">
          <Link to="/">
            <MdPermContactCalendar />
            <div>Contact</div>
          </Link>
        </div>
        <div className="icons">
          <Link onClick={openResumeModal} className="resume-btn"> 
            <FaWpforms />
            <div>Resume</div>
          </Link>
          <Resume isOpen={isResumeOpen} onRequestClose={closeResumeModal} />
        </div>
        {/* <div
          className={`icons ${
            theme === "dark" ? "body.dark-theme" : "body.light-theme"
          }`}
        > */}
        <div
          className="icons"
        >
          {/* <Link onClick={toggleTheme}>
            <GiMoon />
            {theme === "light" ? "Dark" : "Light"}
          </Link> */}
          {/* <Link onClick={toggleTheme}>
            <GiMoon />
            {theme === "light" ? "Dark" : "Light"}
          </Link> */}
          <button type="button" value="" onChange={onChangeBtn} checked={themeMode === 'dark'}>
            <GiMoon />
          </button>
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
