import React from 'react';
import About from '../../components/about/About';
import Education from '../../components/education/Education';
import Experience from '../../components/experience/Experience';
import Project from '../../components/project/Project';

function Home() {
  return (
    <>
      <About />
      <Education />
      <Experience />
      <Project />
    </>
  );
}

export default Home;
