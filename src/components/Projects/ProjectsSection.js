import React from 'react';
import './Projects.css';





const ProjectsSection = () => {
  const projects = [
    { image: ('images/game.jpg'), type: 'Game', name: 'Game Project' },
    { image: ('images/financial.png'), type: 'Financial Calculator', name: 'Financial Calculator Project' },
    { image: ('./tax.jpg'), type: 'Tax Calculator', name: 'Tax Calculator Project' },
    { image: ('images/company.jpg'), type: 'Company Website', name: 'Company Website Project' },
    { image: ('images/chat.jpg'), type: 'Chat App', name: 'Chat App Project' },
    { image: ('images/bank.jpg'), type: 'Bank App', name: 'Bank App Project' }
  ];

  return (
    <section className="projects" id="projects">
      <div className="card-list">
        {projects.map((project, index) => (
          <a href="#" className="card-item" key={index}>
            <img src={project.image.default} alt={`${project.type} images`} />
            <span className="project-type">{project.type}</span>
            <h3>{project.name}</h3>
            <div className="arrow">
              <i className="fas fa-arrow-right card-icon"></i>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
