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
              My expertise in HTML and CSS enables me to create responsive, 
              visually appealing websites, 
              blending content structuring with creative design for seamless user experiences.          
              </div>
            </div>
          </div>

          <div className="skillItem">
          <img src={skill3Image} alt="" className="skillImg" />
            <div className="hoverText">
              <div className="skillText">
              My proficiency in JavaScript enhances my web development skills, 
              allowing me to build interactive, efficient web applications that provide dynamic user experiences.   
              </div>
            </div>
          </div>

          <div className="skillItem">
          <img src={skill4Image} alt="" className="skillImg" />
            <div className="hoverText">
              <div className="skillText">
              Skilled in React, I excel at developing highly interactive and stateful web applications, 
              leveraging component-based architecture for reusable and efficient UIs              
              </div>
            </div>
          </div>

          <div className="skillItem">
          <img src={skill5Image} alt="" className="skillImg" />
            <div className="hoverText">
              <div className="skillText">
              Proficient in Python, I leverage its simplicity and versatility to develop robust applications, 
              automate tasks, and analyze data with efficiency and ease.              
              </div>
            </div>
          </div>

          <div className="skillItem">
          <img src={skill6Image} alt="" className="skillImg" />
            <div className="hoverText">
              <div className="skillText">
              Experienced in Java, I utilize its strong object-oriented principles to develop scalable and reliable applications, 
              ensuring high performance and maintainability.
              </div>
            </div>
          </div>

          <div className="skillItem">
            <img src={skill7Image} alt="" className="skillImg" />
            <div className="hoverText">
              <div className="skillText">
              Skilled in Node.js, I harness the power of JavaScript on the server side to build fast, 
              scalable network applications, excelling in real-time data processing and APIs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
