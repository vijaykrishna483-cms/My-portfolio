import React from 'react'
import './project.css' // You can define styles here for a more customized look

const projects = [
  {
    name: "Saarang Competition Portal",
    description: "A portal for managing Saarang's competitions, including registration and tracking.",
    link: "https://yourprojectlink.com"
  },
  {
    name: "Saarang Ambassador Portal",
    description: "A portal for managing Saarang Ambassadors, tracking their activities and engagement.",
    link: "https://yourprojectlink.com"
  },
  {
    name: "Tensors Aarogplus VC Website",
    description: "Website development for the Tensors Aarogplus VC project focused on healthcare and technology.",
    link: "https://yourprojectlink.com"
  },
  {
    name: "Saarang Sales Portal",
    description: "A sales portal for Saarang fest with a focus on ticket sales and merchandise.",
    link: "https://yourprojectlink.com"
  },
  {
    name: "Tensors Jr. Olympiad Website",
    description: "A website for the Tensors Jr. Olympiad with information and registration for the event.",
    link: "https://yourprojectlink.com"
  },
  {
    name: "Fshaastra Conference Portal",
    description: "Conference portal for Fshaastra, enabling smooth conference management.",
    link: "https://yourprojectlink.com"
  },
  {
    name: "Shaastra JMT Portal",
    description: "JMT portal for Shaastra, for team management and event scheduling.",
    link: "https://yourprojectlink.com"
  },
  {
    name: "Tensors MP Portal (Ongoing)",
    description: "A digitalization project for the MP Office to streamline their operations (Ongoing).",
    link: "https://yourprojectlink.com"
  }
]

const ProjectCard = ({ name, description, link }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{name}</h3>
      <p className="project-description">{description}</p>
      <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  )
}

const ProjectPage = () => {
  return (
    <div className="projects-container">
      <h1 className="page-title">My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            name={project.name} 
            description={project.description} 
            link={project.link} 
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
