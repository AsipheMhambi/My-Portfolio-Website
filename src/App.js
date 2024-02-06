// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const App = () => {
  const toggleMenu = () => {
    console.log('Toggle menu clicked');
  };

  return (
    <div>
      
      <Header toggleMenu={toggleMenu}/>
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
    
  );
};


export default App;
