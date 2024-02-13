import React from 'react';
import './Skills.css';

const Skill = ({ name, percentage }) => {
  return (
    <div className="skill">
      <div className="circular-progress" style={{ background: `conic-gradient(#7d2ae8 ${percentage * 3.6}deg, #ededed 0deg)` }}>
        <span className="progress-value">{`${percentage}%`}</span>
      </div>
      <span className="text">{name}</span>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <div className="title reveal">
        <h2 className="section-title">My Skills</h2>
      </div>
      <div className="content">
        <div className="column col-left reveal">
          <h2 className="content-title">Front-end Skills</h2>
          <div className="front-end-skills">
            <Skill name="HTML & CSS" percentage={95} />
            <Skill name="JavaScript" percentage={80} />
          </div>
          <div className="react-node">
            <Skill name="React" percentage={75} />
          </div>
        </div>
        <div className="column col-right reveal">
          <h2 className="content-title">Back-end Skills</h2>
          <div className="back-end-skills">
            <Skill name="Java" percentage={85} />
            <Skill name="Python" percentage={80} />
          </div>
          <div className="node-node">
            <Skill name="Node.js" percentage={70} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
