import React from 'react'
import image from '../assets/profilepicture.jpg'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDarkMode } from '../DarkModeContext';

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    /*<div className='`mt-24 mb-4 flex justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`'>*/
    <div className={`mt-24 mb-4 flex justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className='mr-16 mt-20 '>
        <p className='my-4 font-extrabold text-5xl'>VAISHNAVI KADAM</p>
        <p className='my-4 font-bold text-2xl pl-12'>FRONT END DEVELOPER</p>

        <span className='my-6 ml-16 flex'>
          <a href="https://twitter.com/vkadam" className='px-8'><FaSquareXTwitter /></a>
          <a href="https://github.com/ash413" className='px-8'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vaishnavikadam4/" className='px-8'><FaLinkedin /></a>
        </span>

        <p className='mt-4'>Final year engineering student that prioritizes results</p>
        <p className=''>and has a flexible approach to problem-solving.</p> 
        <p className=''>Adept in picking up new skills.</p>
      </div>
      <div className='w-96 h-96'>
        <img src={image} alt="" className='w-full h-full object-cover rounded-full' />
      </div>
      <div>
        <DarkModeSwitch
          style={{ marginBottom: '2rem' }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={50}
        />
      </div>
    </div>
  )
}

export default Home