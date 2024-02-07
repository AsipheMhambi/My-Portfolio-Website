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
          I am a Junior Software Developer specializing in
        </h2>
        <div className="animated-text">
          <h3>Web Designer</h3>
          <h3>Web Developer</h3>
          <h3>App Developer</h3>
        </div>
        <div className="media-icons">
          <a href="https://www.facebook.com/profile.php?id=100092504071844">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://github.com/AsipheMhambi?tab=repositories">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="abtImage">
        <img src={image} alt="Asiphe Mhambi" />
        </div>
    </section>
  );
};

export default MainSection;
