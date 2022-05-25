import React from 'react';
import Footer from '../components/Footer';
import IntroductionText from '../components/IntroductionText';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="container">
          <Title text="Contato" />
          <IntroductionText
            text="Gostou do meu trabalho e quer saber mais ou quer apenas trocar uma
            ideia..."
          />
          <IntroductionText text="Entre em contato comigo, sempre estou online." />
          <IntroductionText text="Ou me adicione nas redes sociais." />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
