import React from 'react'

import {useEffect, useState} from 'react';

import image from '../assets/profilepicture.jpg'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDarkMode } from '../DarkModeContext';

const TypingAnimation = () => {
  const titles = ['FRONTEND DEVELOPER', 'MACHINE LEARNING ENTHUSIAST', 'SOFTWARE DEVELOPER']
  const [displayText, setDisplayText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    if (charIndex < currentTitle.length){
      const timeOut = setTimeout(() => {
        setDisplayText(displayText + currentTitle[charIndex]);
        setCharIndex(charIndex + 1);
      }, 150);
      return () => clearTimeout(timeOut)
    } else if (charIndex === currentTitle.length){
      const delay = setTimeout(() => {
        setCharIndex(0);
        setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
        setDisplayText('');
      }, 1000); //delay before switching titles
      return () => clearTimeout(delay);
    }
  }, [currentTitleIndex, charIndex, displayText]);

  return (
    <p className="my-2 font-bold text-2xl text-center min-h-[40px]">
      {displayText}
    </p>
  );
}; 

const Home = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className='md:mt-24 mt-16 mb-12 flex flex-col md:flex-row justify-center items-center'>
      <DarkModeSwitch 
        className='absolute top-0 left-0 md:ml-8 md:mt-2'
        checked = {isDarkMode}
        onChange = {toggleDarkMode}
        size={32}
      />
      <div className='md:mr-16 md:mt-18 flex flex-col items-center'>

        <p className='my-4 font-extrabold text-4xl text-center md:text-5xl md:pl-6'>VAISHNAVI KADAM</p>
        
        <TypingAnimation/> 

        <span className='my-4 flex'>
          <a href="https://www.linkedin.com/in/vaishnavikadam4/" className='px-8'><FaLinkedin size={32}/></a>
          <a href="https://github.com/ash413" className='px-8'><FaGithub size={32}/></a>
          <a href="https://twitter.com/vkadam" className='px-8'><FaSquareXTwitter size={32}/></a>
        </span>

        <div className='max-w-3xl mx-auto px-4 mt-2'> 
          <p classname='mt-2 text-center md: text-left'> Hi! I'm Vaishnavi and I'm a passionate software engineer with a strong background in web development, 
            data structures, and algorithms. Currently pursuing my Master’s in Computer Science from Syracuse University, 
            I have hands-on experience with technologies like JavaScript, React, and Python, and 
            I've worked on various exciting projects, from front-end interfaces to back-end systems. 
            My goal is to leverage technology to create intuitive, efficient, and impactful solutions. </p>
            <p className='mt-1'>Welcome to my portfolio, where you can explore my journey, projects, and passion for building scalable and innovative software. </p>
            <p className='mt-1'>Feel free to connect with me if you share similar interests or have exciting collaboration opportunities! </p>
        </div>
      </div>
      <div className='w-64 h-64 md:w-96 md:h-96 mt-8 md:mt-0'>
        <img src={image} alt="" className='w-full h-full object-cover rounded-full' />
      </div>
    </div>
  )
}

export default Home