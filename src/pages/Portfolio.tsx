import React from 'react';
import Footer from '../components/Footer';
import IntroductionText from '../components/IntroductionText';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="container">
          <Title text="Portfólio" />
          <IntroductionText
            text="Selecionei alguns de meus trabalhos e projetos para mostrar a
            vocês, grande parte deles foram desenvolvidos na Fatec e outros
            realizados para aprender novas tecnologias."
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
