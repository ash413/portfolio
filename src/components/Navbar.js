import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

import { smoothScroll } from '../smoothScroll'; 

const Navbar = () => {

const [toggleMenu, setToggleMenu] = useState(false);

const handleScroll = (targetId) => {
    smoothScroll(targetId);
    setToggleMenu(false); // Close the menu if it's open
};

return (
    <div className='flex justify-center items-center bg-darkgreen dark:text-whitish py-4 px-5 '>
        <div className='hidden md:flex flex-row space-x-10'>
            <p ><a href="#projects" onClick={() => handleScroll('projects')}>Projects</a></p>
            <p ><a href="#skills" onClick={() => handleScroll('skills')}>Skills</a></p>
            <p ><a href="#contact" onClick={() => handleScroll('contact')}>Contact</a></p>
        </div>
        <div className='md:hidden absolute right-5 '>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
        <div className='absolute top-0 right-0 bg-darkgreen text-white p-5 mt-16 md:hidden'>
            <div className='flex flex-col space-y-5'>
                <p ><a href="#projects" onClick={() => handleScroll('projects')}>Projects</a></p>
                <p ><a href="#skills" onClick={() => handleScroll('skills')}>Skills</a></p>
                <p ><a href="#contact" onClick={() => handleScroll('contact')}>Contact</a></p>
            </div>
        </div>
        )}
        </div>
    </div>
    )
}

export default Navbar