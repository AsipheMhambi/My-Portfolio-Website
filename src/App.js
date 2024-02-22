import React, { useState } from 'react';
import './App.css';
import './components/Home/Main.css';
import Header from './components/Home/Header';
import MainSection from './components/Home/MainSection';
import AboutSection from './components/About/AboutSection';
import SkillsSection from './components/Skills/SkillsSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import ContactSection from './components/Contact/ContactSection';


const App = () => {


  return (
    <div>
      <Header />
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;
