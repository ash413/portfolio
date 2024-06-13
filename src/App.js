import React from 'react'
import { Navbar, Home, Skills, Projects, Contact } from './components'

const App = () => {

  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App