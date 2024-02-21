import React from "react";
import "./Projects.css";
import project1 from './Images/website.png';
import project2 from './Images/converter.png';
import project3 from './Images/game.jpg';
import project4 from './Images/tax.png';

const ProjectsSection = () => {
  return (
    <section className="projects-section"  id="projects">
      <div className="project_container">
        <h2 className="projecttitle">My Projects</h2>
    
        <div className="projectImgs">
          <div className="projectItem">
            <img src={project1} alt="" className="projectImg" />
            <div className="hoverText">
              <div className="projectText">
                This is a company website whereby we showcase ourselves and capabilities.
              </div>
            </div>
          </div>
          <div className="projectItem">
          <img src={project2} alt="" className="projectImg" />
            <div className="hoverText">
              <div className="projectText">
                This is a unit converter that is made for several conversions.
              </div>
            </div>
          </div>
          <div className="projectItem">
          <img src={project3} alt="" className="projectImg" />
            <div className="hoverText">
              <div className="projectText">
              This a snake game that you can enjoy playing it even if you dont like games but you can enjoy this one.
              </div>
            </div>
          </div>
          <div className="projectItem">
            <img src={project4} alt="" className="projectImg" />
            <div className="hoverText">
              <div className="projectText">
              This is a calculator for investment or bonds, where a user can
                input principal, interest rate, and time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
