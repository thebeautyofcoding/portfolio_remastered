import { useState } from 'react'

import './App.css'
import  Earth  from './components/canvas/Earth'
import { Canvas } from '@react-three/fiber'
import Header from './components/Header'
import ReactLogo from './components/canvas/ReactLogo'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import StarsAnimated from './components/StarsAnimated'
import Socials from './components/Socials'
import PC from './components/canvas/PC'
import Contact from './components/Contact'


function App() {
  const bgColor = ({ gl }) => {
    gl.setClearColor('#000000',1)
}

  return (

      <><Canvas style={{position:'fixed'}} onCreated={bgColor}    camera={{ position: [20, 3, 5], fov: 25 }}>
      <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
        <spotLight intensity={3} color={0x61dbfb} position={[0, 5, 5]} />
      <directionalLight position={[0, 10, 5]} intensity={0.5} />
      <ReactLogo/>
      <Earth  />
      <StarsAnimated />
 
    </Canvas>
 <Socials/>
      <Header />
      <AboutMe />
      <Skills/>
      <Projects />
 <Contact/>

 

       
 
    </>
  
  )
}

export default App
