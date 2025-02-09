'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa";
import { Project } from "@/types/project";
import { projects } from "@/data/projects";

const ProjectCard = ( { project } : { project: Project } ) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex gap-4">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                        >
                            <FaLink className="w-6 h-6 text-white" />
                        </a>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                            >
                                <FaGithub className="w-6 h-6 text-white" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                </p>
                {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span 
                                key={tech}
                                className="px-3 py-1 bg-orange-400 text-sm dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

const Projects = () => {
    const [filter, setFilter] = useState<Project['category'] | 'all'>('all');
  
    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(p => p.category === filter);
  
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Here are some of my recent projects!!
                    </p>
                </motion.div>
  
                <div className="flex justify-center gap-4 mb-12">
                    {['all', 'web', 'mobile', 'backend', 'full-stack'].map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category as typeof filter)}
                        className={`px-4 py-2 rounded-full transition-colors ${
                        filter === category 
                            ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                    ))}
                </div>
  
                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
  
export default Projects;