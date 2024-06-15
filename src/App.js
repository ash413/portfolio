/*import React from 'react'
import { Navbar, Home, Skills, Projects, Contact } from './components'
const App = () => {
  return (
    <div className='bg-whitish'>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
export default App*/


import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';

const AppWrapper = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-whitish dark:bg-darkwhitish text-darkwhitish dark:text-whitish min-h-screen">
        <Navbar />
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <DarkModeProvider>
      <AppWrapper />
    </DarkModeProvider>
  );
};

export default App;
