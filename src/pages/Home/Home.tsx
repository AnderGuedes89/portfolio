import React from 'react';
import About from '../../components/about/About';
import Education from '../../components/education/Education';
import Experience from '../../components/experience/Experience';

function Home() {
  return (
    <>
      {/* <h1>Home</h1> */}
      <About />
      <Education />
      <Experience />
    </>
  );
}

export default Home;
