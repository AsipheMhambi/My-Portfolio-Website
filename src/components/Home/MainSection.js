import React from 'react';
import image from './images/abt.jpg';
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import styled from 'styled-components';

const Section = styled.section`
  /* Your section styles */
  @media screen and (max-width: 768px) {
    /* Adjust styles for smaller screens */
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const MainSection = () => {
  return (
    <Section className="main" id="main">
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
        <div className='linkedin'><a href='www.linkedin.com/in/asiphe-mhambi-81504525a'><FaLinkedin  style={{color: '#3b5998', fontSize: '40px'}}/></a>
        </div>
      </div>
      <div className='abtImageContainer'>
        <div className="abtImage">
          <img src={image} alt="Asiphe Mhambi" />
          <div className="hire">
            <a href="#">Hire me</a>
          </div>
        </div>
      </div> 
    </Section>
  );
};

export default MainSection;
