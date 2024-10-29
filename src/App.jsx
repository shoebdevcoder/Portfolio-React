import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import { ThemeProvider } from './assets/Theme/ThemeContext'
// import Footer from './components/Footer'
import { ThemeProvider } from "./context/Theme";

const App = () => {

  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () =>{
    setThemeMode('dark');
  }
  const lightTheme = () =>{
    setThemeMode('dark');
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark,"light')
    document.querySelector('html').classList.remove(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="App mt-5">
        {/* <ThemeProvider> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer/> */}
        {/* </ThemeProvider> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
