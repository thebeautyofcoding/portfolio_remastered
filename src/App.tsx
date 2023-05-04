
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
import Contact from './components/Contact'
import { WebGLRenderer } from 'three'
import { Suspense, useState } from 'react'


function App() {
  const bgColor = ({ gl }:{gl:WebGLRenderer}) => {
    gl.setClearColor('#000000',1)
}
const [isLoaded,setIsLoaded]=useState(false)

window.onload = () => {
    setIsLoaded(true)
}  
  return (

      <><Canvas style={{position:'fixed'}} onCreated={bgColor}    camera={{ position: [20, 3, 5], fov: 25 }}>
      <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
        <spotLight intensity={3} color={0x61dbfb} position={[0, 5, 5]} />
      <directionalLight position={[0, 10, 5]} intensity={0.5} />
      <Suspense fallback={null}>
                    <ReactLogo />
                    <Earth/>
        </Suspense>
      <StarsAnimated />
 
    </Canvas>
 <Socials/>
      <Header isLoded={isLoaded} />
      <AboutMe />
      <Skills/>
      <Projects />
 <Contact/>

 

       
 
    </>
  
  )
}

export default App
