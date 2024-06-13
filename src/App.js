import React from 'react'
import { Navbar, Home, Skills, Projects, Contact } from './components'
import { DarkModeProvider } from './components/DarkModeContext'

const App = () => {

  return (
    <div>
      <DarkModeProvider >
        <Navbar />
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </DarkModeProvider>
    </div>
  )
}

export default App