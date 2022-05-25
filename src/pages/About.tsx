import React from 'react';
import Footer from '../components/Footer';
import IntroductionText from '../components/IntroductionText';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

function About() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="container">
          <Title text="Sobre" />
          <IntroductionText text="Olá!! Meu nome é Anderson Guedes..." />
          <IntroductionText
            text="Sou um Engenheiro de Software Front-End da cidade de Araras/SP,
                trabalhando em Home Office para uma empresa de Recife/PE."
          />
          <IntroductionText
            text="Atualmente estou aperfeiçoando os conhecimentos em Angular e
                TypeScript, além de aprendendo React e NestJS."
          />

          <IntroductionText
            text="Possuo duas graduações um Tecnólogo em Sistemas para Internet na
                Fatec de Araras/SP e um Bacharelado em Engenharia de Produção
                Mecânica na Universidade Paulista de Limeira/SP."
          />

          <IntroductionText
            text="Sempre gostei de tecnologia, mas nunca pensei que um dia estaria
                trabalhando com desenvolvimento de aplicações web. E agora que
                estou aqui não me vejo fazendo outra coisa."
          />

          <div className="row"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
