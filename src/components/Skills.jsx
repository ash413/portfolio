import React from 'react'

import { RiJavascriptFill, RiHtml5Fill, RiFirebaseFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql, SiFlask } from "react-icons/si";

const skillsData = [
  { icon: RiJavascriptFill, name: "JavaScript", level: 70 },
  { icon: TbBrandCpp, name: "CPP", level: 80 },
  { icon: FaPython, name: "Python", level: 80 },
  { icon: RiHtml5Fill, name: "HTML5", level: 95 },
  { icon: FaCss3Alt, name: "CSS3", level: 90 },
  { icon: FaReact, name: "React", level: 70 },
  { icon: FaNodeJs, name: "Node.js", level: 80 },
  { icon: SiExpress, name: "Express.js", level: 50 },
  { icon: SiFlask, name: "Flask", level: 70 },
  { icon: SiPostgresql, name: "PostgreSQL", level: 70 },
  { icon: SiMongodb, name: "MongoDB", level: 50 },
  { icon: RiFirebaseFill, name: "Firebase", level: 65 },
  { icon: FaGitAlt, name: "Git", level: 90 },
  { icon: FaGithub, name: "GitHub", level: 90 },
];

const Skills = () => {
  return (
    <div id='skills' className='m-4 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h3 className='text-3xl font-extrabold text-gray-900 mb-6 dark:text-whitish'>Skills</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 '>
          {skillsData.map((skill, index) => (
            <div key={index} className='flex flex-col p-4 border rounded-lg dark:text-darkwhitish bg-lightgreen '>
              <div className='flex items-center mb-2'>
                <skill.icon className='text-2xl mr-2 ' />
                <span className='text-xl font-semibold '>{skill.name}</span>
              </div>
              <div className='relative w-full h-4 bg-gray-300 rounded-full'>
                <div
                  className='absolute top-0 left-0 h-4 bg-darkgreen rounded-full'
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills 