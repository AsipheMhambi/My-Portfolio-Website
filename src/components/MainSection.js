// src/Main.js
import React from 'react';
import image from '../images/abt.jpg';

const MainSection = () => {
  return (
    <section className="main" id="main">
      <div className="content">
        <h2>
          Hello, I am
          <br />
          <span>Asiphe Mhambi</span>
          <br />
          <br />
          I am a Junior Software Developer specializing in
        </h2>
        <div className="animated-text">
          <h3>Web Design</h3>
          <h3>Web Development</h3>
          <h3>App Development</h3>
        </div>
        <div className="media-icons">
        <a href="https://www.facebook.com/profile.php?id=100092504071844">
            
          </a>
          <a href="https://github.com/AsipheMhambi?tab=repositories">
            
          </a>
        </div>
      </div>
      <div className='abtImageContainer'>
      <div className="abtImage">
        <img src={image} alt="Asiphe Mhambi" />
        <button className="btn">Download CV</button>
        </div>
      </div>   
    </section>
  );
};

export default MainSection;
