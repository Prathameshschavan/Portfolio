import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Name from './components/Name'
import Aboutme from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar /> 
       <Name />
       <Aboutme />
       <Projects />
       <Contact />
       <Footer />
    </>
  )
}

export default App
