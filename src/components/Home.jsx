import React from 'react'
import image from '../assets/profilepicture.jpg'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

//import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Home = () => {
  //const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    /*<div className='`mt-24 mb-4 flex justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`'>*/
    <div className='md:mt-24 mt-16 mb-12 flex flex-col md:flex-row justify-center items-center'>
      <div className='md:mr-16 md:mt-18 flex flex-col items-center'>
        <p className='my-4 font-extrabold text-4xl text-center md:text-5xl md:pl-6'>VAISHNAVI KADAM</p>
        <p className='my-4 font-bold text-2xl text-center '>FRONT END DEVELOPER</p>

        <span className='my-4 flex'>
          <a href="https://twitter.com/vkadam" className='px-8'><FaSquareXTwitter size={32}/></a>
          <a href="https://github.com/ash413" className='px-8'><FaGithub size={32}/></a>
          <a href="https://www.linkedin.com/in/vaishnavikadam4/" className='px-8'><FaLinkedin size={32}/></a>
        </span>

        <p className='mt-2 text-center md:mt-4 md:text-left'>Final year engineering student that prioritizes results</p>
        <p className='text-center md:text-left'>and has a flexible approach to problem-solving.</p> 
        <p className='text-center md:text-left'>Adept in picking up new skills.</p>
      </div>
      <div className='w-64 h-64 md:w-96 md:h-96 mt-8 md:mt-0'>
        <img src={image} alt="" className='w-full h-full object-cover rounded-full' />
      </div>
    </div>
  )
}

export default Home