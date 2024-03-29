import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <header>
      <a href="#" className="brand">A.M</a>
      <div className={`menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
      </div>
      <div className={`navigation ${isMenuOpen ? 'active' : ''}`}>
        <a href="#main" onClick={() => scrollToSection('main')}>HOME</a>
        <a href="#about" onClick={() => scrollToSection('about')}>ABOUT</a>
        <a href="#skills" onClick={() => scrollToSection('skills')}>SKILLS</a>
        <a href="#projects" onClick={() => scrollToSection('projects')}>PROJECTS</a>
        <a href="#contact" onClick={() => scrollToSection('contact')}>CONTACT</a>
      </div>
    </header>
  );
};

export default Header;
