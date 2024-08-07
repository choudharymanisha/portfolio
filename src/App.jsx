import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Introd from './Components/Introd/Introd'
import Services from './Components/Services/Services'
import Experience from './Components/Experience/Experience'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Toggle from './Components/Toggle/Toggle'

function App() {
  

  return (
    <>
      <Navbar/>
       <Introd/>
       <Services/>
       <Experience/>
       <Portfolio/>
       <Contact/>
       <Footer/>
       
    </>
  )
}

export default App
