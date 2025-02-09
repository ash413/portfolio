// components/SkillsGrid.tsx
import { 
    FaReact, FaNode, FaPython, FaJava, FaAws, FaGithub,
    FaHtml5,
  } from 'react-icons/fa';
  import { IoLogoFirebase } from "react-icons/io5";
  import { 
    SiTypescript, SiTailwindcss, SiJavascript, SiCplusplus, 
    SiPostgresql, SiMongodb, SiExpress, SiFlask, 
    SiTensorflow, SiPandas
  } from 'react-icons/si';
  import { IconType } from 'react-icons';
  
  interface Skill {
    name: string;
    icon: IconType;
    color: string;
    category: string;
  }
  
  const SkillsGrid = () => {
    const skills: Skill[] = [
      // Programming Languages
      { name: 'Python', icon: FaPython, color: '#3776AB', category: 'Languages' },
      { name: 'Java', icon: FaJava, color: '#ED8B00', category: 'Languages' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Languages' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Languages' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C', category: 'Languages' },
  
      // Frontend
      { name: 'React', icon: FaReact, color: '#61DAFB', category: 'Development' },
      { name: 'HTML/CSS', icon: FaHtml5, color: '#E34F26', category: 'Development' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'Development' },
  
      // Backend & Databases
      { name: 'Node.js', icon: FaNode, color: '#539E43', category: 'Development' },
      { name: 'Express.js', icon: SiExpress, color: '#000000', category: 'Development' },
      { name: 'Flask', icon: SiFlask, color: '#000000', category: 'Development' },
      { name: 'Firebase', icon: IoLogoFirebase, color: '#FFCA28', category: 'Development' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'Development' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Development' },
  
      // AI & Data Science
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', category: 'AI & Data' },
      { name: 'Pandas', icon: SiPandas, color: '#150458', category: 'AI & Data' },
  
      // Cloud & DevOps
      { name: 'AWS', icon: FaAws, color: '#232F3E', category: 'Cloud & DevOps' },
      { name: 'Git/GitHub', icon: FaGithub, color: '#181717', category: 'Cloud & DevOps' },
    ];
  
    // Get unique categories
    const categories = Array.from(new Set(skills.map(skill => skill.category)));
  
    return (
      <div className="w-full max-w-6xl mx-auto p-6 flex flex-col justify-center">
        {categories.map(category => (
          <div key={category} className="mb-8">
            {/*<h3 className="text-xl font-bold mb-4 text-gray-800">{category}</h3>*/}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skills
                .filter(skill => skill.category === category)
                .map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <button
                      key={skill.name}
                      className="flex items-center justify-center gap-3 p-2 rounded-lg border border-gray-200 
                               hover:border-gray-300 bg-white shadow-sm hover:shadow-md 
                               transition-all duration-300 group"
                    >
                      <Icon
                        className="w-6 h-6 transition-transform group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="font-medium text-gray-700 text-sm">{skill.name}</span>
                    </button>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default SkillsGrid;