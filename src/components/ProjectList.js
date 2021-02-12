import React from 'react';

export default function ProjectList({projects}) {
  
  return (
    <ul className="project-list">
      {
        projects.map((project, index) => 
          <li className="project" key={index}>
            <img src={project.img} alt=""/>
          </li>)
      }
    </ul>
  )
}
