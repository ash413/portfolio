import React from 'react'

const projects = [
  {
    id: 1,
    title: "PptBuddy",
    description: "Some desc",
    /*image: pptbuddy,*/
    link: "https://github.com/ash413/pptbuddy"
  },
  {
    id: 1,
    title: "MinorProject",
    description: "Some desc",
    /*image: minorproject,*/
    link: "https://github.com/simran-022/Minor-Project"
  },
  {
    id: 3,
    title: "Netflix Clone",
    description: "Some desc",
    /*image: netflixclone,*/
    link: "https://netflix-react-8aaee.web.app/"
  }
];

const Projects = () => {
  return (
    <div className=''>
      <div className=''>
        Projects
      </div>
      <div className=''>
        {projects.map((project) => (
          <div key={project.id} className=''>
            <img src={project.image} alt={project.title} className='' />
            <div>
              <h3 className=''>
                {project.title}
              </h3>
              <p className=''>
                {project.description}
              </p>
              <a href={project.link} className=''>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects