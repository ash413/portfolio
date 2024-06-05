import React from 'react'
import { Navbar, Home, About, Skills, Projects, Contact } from './components'

const App = () => {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App