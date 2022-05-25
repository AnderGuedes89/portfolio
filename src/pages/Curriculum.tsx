import React from 'react';
import Footer from '../components/Footer';
import IntroductionText from '../components/IntroductionText';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

function Curriculum() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="container">
          <Title text="Currículo" />
          <IntroductionText
            text="Conheça melhor meu currículo, minhas experiências, graduações e
            lugares que trabalhei."
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Curriculum;
