import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ThemeProvider } from './assets/Theme/ThemeContext'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App mt-5'>
      <ThemeProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      {/* <Footer/> */}
      </ThemeProvider>
    </div>
  )
}

export default App
