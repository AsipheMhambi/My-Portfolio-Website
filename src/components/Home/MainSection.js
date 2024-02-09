// src/Main.js
import React from 'react';
import image from './images/abt.jpg';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

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
          I am a Junior Software Developer specializing <br />in
        </h2>
        <div className="animated-text">
          <h3>Web Design</h3>
          <h3>Web Development</h3>
          <h3>App Development</h3>
        </div>
      </div>
      <div className="media-icons">
          <div className='facebook'>
          <a href="https://www.facebook.com/profile.php?id=100092504071844"><FaFacebook style={{ color: '#3b5998', fontSize: '40px' }}/></a>
          </div>
          <div className='github'><a href="https://github.com/AsipheMhambi?tab=repositories"><FaGithub style={{ color: '#24292e', fontSize: '40px' }} /></a>
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