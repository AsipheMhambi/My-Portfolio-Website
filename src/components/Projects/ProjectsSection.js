import React from 'react';
import './Projects.css';
import Tax from './Images/tax.png'
import game from './Images/game.jpg'
import Web from './Images/website.png'
import Converter from './Images/converter.png'
import {FaGithub} from 'react-icons/fa'




const ProjectsSection = () => {
  const projects = [
    { image: game, type: 'Game' },
    { image: Converter, type: 'Unit Converter'},
    { image: Web, type: 'Company Website' },
    { image: Tax, type: 'Tax Calculator' }
  ];

  return (
    <section className="projects" id="projects">
      <div className="card-list">
        {projects.map((project, index) => (
          <a href="#" className="card-item" key={index}>
            <img src={project.image} alt={`${project.type} images`} />
            <span className="project-type">{project.type}</span>
            <h3>{project.name}</h3>
            <div className="arrow">
              <i className='github'><a href="https://github.com/AsipheMhambi?tab=repositories"><FaGithub style={{ color: '#24292e', fontSize: '40px' }} /></a></i>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
