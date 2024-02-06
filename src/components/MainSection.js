// src/Main.js
import React from 'react';

const MainSection = () => {
  return (
    <section className="main" id="main">
      <div className="content">
        <h2>
          Hello, I'm
          <br />
          <span>Asiphe Mhambi</span>
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
    </section>
  );
};

export default MainSection;
