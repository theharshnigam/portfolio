import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/AboutMe/About'
import ParticlesAround from './components/ParticlesAround'


const App = () => {
  return (
    <>
      <ParticlesAround/>
      <Navbar/>
      <Header/>
      <About/>
    </>
  )
}
  
export default App;