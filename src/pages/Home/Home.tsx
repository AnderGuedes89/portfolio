import React from 'react';
import About from '../../components/about/About';
import Education from '../../components/education/Education';
import Experience from '../../components/experience/Experience';
import Footer from '../../components/footer/Footer';
import Project from '../../components/project/Project';
import Skill from '../../components/skill/Skill';

function Home() {
  return (
    <>
      <About />
      <Education />
      <Skill />
      <Experience />
      <Project />
      <Footer />
    </>
  );
}

export default Home;
