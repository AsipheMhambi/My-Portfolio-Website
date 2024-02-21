import React from 'react';
import './Skills.css';
import skill1Image from './Images/html&css.jpg';
import skill3Image from './Images/javascript.jpg';
import skill4Image from './Images/react.png';
import skill5Image from './Images/python.jpg';
import skill6Image from './Images/Java.jpg';
import skill7Image from './Images/node.png';

const SkillsSection = () => {
  return (
    <section className='skills-section' id="skills">
      <div className="skill_container">
        <h2 className="skilltitle">My Skills</h2>
  
        <div className="skillImgs">
          <div className="skillItem">
            <img src={skill1Image} alt="" className="skillImg" />
            <div className="hoverText">
              <div className="skillText">          
              </div>
            </div>
          </div>

          <div className="skillItem">
          <img src={skill3Image} alt="" className="skillImg" />
            <div className="hoverText">
              <div className="skillText">   
              </div>
            </div>
          </div>

          <div className="skillItem">
          <img src={skill4Image} alt="" className="skillImg" />
            <div className="hoverText">
              <div className="skillText">              
              </div>
            </div>
          </div>

          <div className="skillItem">
          <img src={skill5Image} alt="" className="skillImg" />
            <div className="hoverText">
              <div className="skillText">              
              </div>
            </div>
          </div>

          <div className="skillItem">
          <img src={skill6Image} alt="" className="skillImg" />
            <div className="hoverText">
              <div className="skillText">
              </div>
            </div>
          </div>

          <div className="skillItem">
            <img src={skill7Image} alt="" className="skillImg" />
            <div className="hoverText">
              <div className="skillText">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
