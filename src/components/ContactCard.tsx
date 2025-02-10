'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { LuGithub, LuLinkedin, LuCoffee, LuHeadphones } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";

const ContactCard = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleEmailClick = () => {
        navigator.clipboard.writeText('vaishnavi.kadam413@gmail.com')
        .then(() => {
            toast.success('Email copied to clipboard!');
        })
        .catch(() => {
            toast.error('Failed to copy email');
        });
    }

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = '/vaishnavikadam_resume.pdf'; // This is correct if the file is in `public`
        link.setAttribute('download', 'vaishnavikadam_resume.pdf');
        link.setAttribute('target', '_blank'); // Ensures compatibility
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    };

    return (
        <footer className="w-full py-20 bg-gray-200 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center">
                    <motion.div 
                        className="relative w-full max-w-md h-64 cursor-pointer "
                        onClick={() => setIsFlipped(!isFlipped)}
                        initial={false}
                    >
                        <motion.div
                            className="absolute w-full h-full "
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ 
                                backfaceVisibility: 'hidden',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center text-center bg-gradient-light">
                                <div> 
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Vaishnavi Kadam
                                    </h2>
                                    <p className="text-gray-900 mt-2">
                                        Software Engineer
                                    </p>
                                </div>

                                <div className="flex flex-col items-center gap-3 text-sm text-gray-800 mt-4">
                                    <LuHeadphones className="w-4 h-4" />
                                    <span>Currently listening to: Lo-fi Coding Mix</span>
                                </div>

                                <p className="text-sm text-gray-800 mt-4">
                                    Click to connect →
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute w-full h-full"
                            animate={{ rotateY: isFlipped ? 0 : -180 }}
                            transition={{ duration: 0.6 }}
                            style={{ 
                              backfaceVisibility: 'hidden',
                              transformStyle: 'preserve-3d',
                              rotateY: -180
                            }}
                        >
                            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-black dark:text-white">
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={handleEmailClick}
                                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <HiOutlineMail className="w-5 h-5" />
                                        <span>Email Me</span>
                                    </button>
                                
                                    <a
                                        href="https://www.linkedin.com/in/vaishnavikadam4/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <LuLinkedin className="w-5 h-5" />
                                        <span>LinkedIn</span>
                                    </a>
                                
                                    <a
                                        href="https://github.com/ash413"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <LuGithub className="w-5 h-5" />
                                        <span>GitHub</span>
                                    </a>
                                
                                    <a
                                        href="https://calendly.com/vaishnavi-kadam413"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <LuCoffee className="w-5 h-5" />
                                        <span>Coffee Chat</span>
                                    </a>
                                
                                    <button
                                        onClick={handleDownload}
                                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors col-span-2"
                                    >
                                        <CgFileDocument className="w-5 h-5" />
                                        <span>Download Resume</span>
                                    </button>
                                </div>

                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                                Click to flip back →
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}


export default ContactCard