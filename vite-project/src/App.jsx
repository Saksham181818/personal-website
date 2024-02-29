import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'

function App() {
 

  

  return (
    <>
    <Header/>
   <Banner/>
   <About/>
   <Services/>
   <Expertise/>
   <Footer/>
  
    </>
  )
}

export default App
