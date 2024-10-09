import React, { useEffect, useState } from 'react'
import { FaWpforms } from 'react-icons/fa'
import { GiMoon } from 'react-icons/gi'
import { MdHomeFilled, MdPermContactCalendar } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : "light"));
    }

    useEffect(() => {
        document.body.classList = `${theme} - theme`;
    },[theme]);

  return (
    <div className='NavBar'>
      <h1>Hello..</h1>
      <div className="nav">
        <div className="icons">
            <Link><MdHomeFilled id='icon'/>Home</Link>
        </div>
        <div className="icons">
            <Link><MdPermContactCalendar />Contact</Link>
        </div>
        <div className="icons">
            <Link><FaWpforms />Resume</Link>
        </div>
        <div className="icons">
            <Link onClick={changeTheme}><GiMoon />{theme === 'light' ? 'Dark' : 'Light'}</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
