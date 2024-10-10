import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ThemeProvider } from './assets/Theme/ThemeContext'

const App = () => {
  return (
    <div className='App container mt-5'>
      <ThemeProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
