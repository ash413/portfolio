import React from 'react';
import { RiJavascriptFill, RiHtml5Fill, RiFirebaseFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql, SiFlask } from "react-icons/si";

const skillsData = [
  { icon: RiJavascriptFill, name: "JavaScript" },
  { icon: TbBrandCpp, name: "C++" },
  { icon: FaPython, name: "Python" },
  { icon: RiHtml5Fill, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaReact, name: "React" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiFlask, name: "Flask" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: RiFirebaseFill, name: "Firebase" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" }
];

const Skills = () => {
  return (
    <div id="skills" className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center dark:text-white">
          Skills
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 hover:transform hover:scale-110 transition-transform duration-200"
            >
              <skill.icon className="text-4xl text-gray-700 dark:text-gray-200" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;