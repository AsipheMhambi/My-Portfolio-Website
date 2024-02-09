// Header.js
import React from 'react';

const Header = () => {
  
  return (
    <header>
      <a href="#" className="brand">A.M</a>
      <div className="menu-btn"></div>
      <div className="navigation">
        <a href="#main">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </div>
    </header>
  );
};

export default Header;
