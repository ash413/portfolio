import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';


const Navbar = () => {

const [toggleMenu, setToggleMenu] = useState(false);

return (
    <div className='flex justify-center py-4'>
        <div className='flex flex-row'>
            <p className='px-5'><a href="#about">About</a></p>
            <p className='px-5'><a href="#projects">Projects</a></p>
            <p className='px-5'><a href="#skills">Skills</a></p>
            <p className='px-5'><a href="#contact">Contact</a></p>
        </div>
    <div className=''>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
        <div className=''>
            <div className=''>
                <p className='px-5'><a href="#about">About</a></p>
                <p className='px-5'><a href="#projects">Projects</a></p>
                <p className='px-5'><a href="#skills">Skills</a></p>
                <p className='px-5'><a href="#contact">Contact</a></p>
            </div>
        </div>
        )}
        </div>
    </div>
    )
}

export default Navbar