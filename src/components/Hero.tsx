'use client'

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"

const Hero = () => {
    return (
        <section className="py-20 flex flex-col justify-center items-center px-6">
            <motion.div
                initial={{ opacity:0, y:20 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:0.5 }}
                className="text-center"
            >
                <h1 className="text-6xl font-bold mb-6">
                    <span className="bg-gradient-light bg-clip-text text-transparent">
                        VAISHNAVI KADAM
                    </span>
                </h1>
                <TypeWriter />
                <div className="flex justify-center gap-8 mt-8">
                    <SocialLink href="https://www.linkedin.com/in/vaishnavikadam4/" icon={<FaLinkedin size={32}/>} />
                    <SocialLink href="https://github.com/ash413" icon={<FaGithub size={32} />} />
                    <SocialLink href="https://twitter.com/vaishkadam" icon={<FaSquareTwitter size={32} />} />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 max-w-5xl mx-auto text-lg text-gray-800 dark:text-gray-300"
                >
                    <p className="font-bold py-2">👋 Hey, I&apos;m Vaishnavi Kadam! </p>

                    <p className="py-2">I&apos;m a <strong>software engineer</strong> and <strong>full-stack developer</strong> passionate about building 
                    scalable, user-centric applications. Currently pursuing my <strong>Master&apos;s in Computer Science</strong> at 
                    Syracuse University, I specialize in <strong>React.js, Node.js, Python</strong>, and cloud technologies like 
                    <strong>AWS</strong> and <strong>Google Cloud</strong>. My experience includes developing full-stack applications, 
                    AI-driven projects, and scalable systems, with a strong foundation in <strong>data structures, algorithms, 
                    and system design</strong>. </p> 

                    <p className="py-2"> I&apos;ve built <strong>Forkfolio</strong>—a social platform for food lovers, and developed <strong>PPTBuddy</strong>, 
                    an AI-powered PDF-to-PPT converter. Whether it&apos;s crafting <strong>seamless user experiences</strong> or optimizing 
                    <strong>backend performance</strong>, I love turning ideas into reality.</p>

                    💡 Open to <strong>internships, collaborations, and networking opportunities</strong>—let&apos;s connect! 🚀
                </motion.p>
            </motion.div>
        </section>
    )
}

const TypeWriter = () => {
    const titles = ['FULL STACK DEVELOPER', 'SOFTWARE ENGINEER', 'MACHINE LEARNING ENTHUSIAST']
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
        }, 500); //delay before switching titles
        return () => clearTimeout(delay);
        }
    }, [currentTitleIndex, charIndex, displayText]);

    return (
        <p className="text-2xl font-bold text-orange-400 dark:text-orange">
            {displayText}
        </p>
    )
}

const SocialLink = ( {href, icon}: { href: string, icon: React.ReactNode } ) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale:1.1 }}
        whileTap={{ scale:0.95 }}
        className="text-gray-600 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-400 transition-colors"
    >
        {icon}
    </motion.a>
)

export default Hero