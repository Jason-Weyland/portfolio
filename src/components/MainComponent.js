import React, { useState } from 'react';
import NavBar from './NavbarComponent';
import About from "./AboutComponent";
import Footer from './FooterComponent';
import Skills from "./SkillsComponent";
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import {SkillsList} from '../shared/skills';
import {projects as ProjectsList} from '../shared/projects';

const Main = () => {
  const [skills, setSkills] = useState(SkillsList)
  const [projects, setProjects] = useState(ProjectsList)
  
  return (
    <>
      <NavBar/>
        <About/>
        <Projects projectList={projects}/>
        <Skills skillsList={skills}/>
        <Contact/>
        <Footer/>
    </>
  );
};

export default Main;
