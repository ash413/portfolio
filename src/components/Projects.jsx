import React from 'react'
import netflixclone from '../assets/netflixclone.png';
import pptbuddy from '../assets/pptbuddy.jpeg'

const projects = [
  {
    id: 1,
    title: "PptBuddy",
    description: "A website which uses python to genrate a ppt out of pdf documents",
    image: pptbuddy,
    link: "https://github.com/ash413/pptbuddy"
  },
  {
    id: 3,
    title: "Netflix Clone",
    description: "Clone of Netflix - mainly uses react, firebase",
    image: netflixclone,
    link: "https://netflix-react-8aaee.web.app/"
  }
];

const Projects = () => {
  return (
    <div id='projects' className='m-4 py-12 bg-redish rounded-xl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className="text-3xl font-extrabold mb-6">Projects</h2>
        <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
          {projects.map((project) => (
            <div key={project.id} className='bg-whitish shadow-md rounded-lg overflow-hidden '>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover ' />
              <div className='p-6'>
                <h3 className='text-lg font-semibold '>
                  {project.title}
                </h3>
                <p className='mt-2 '>
                  {project.description}
                </p>
                <a href={project.link} className='mt-4 inline-block hover:text-maroon'>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects