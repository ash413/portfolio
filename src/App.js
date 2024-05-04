import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home, About, Skills, Projects, Contact } from './components'



const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App