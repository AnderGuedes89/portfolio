import React from 'react';
import './about.css';
import Programming from '../../assets/images/programming.png';

function About() {
  const aboutData = {
    title: 'Quem Sou Eu?',
    description1: 'Olá!! Meu nome é Anderson',
    description2:
      'Sou um Engenheiro de Software Front-End da cidade de Araras/SP, trabalhando em Home Office para uma empresa de Recife/PE. Atualmente estou aperfeiçoando os conhecimentos em Angular e TypeScript, além de aprendendo React e NestJS',
    description3:
      'Possuo duas graduações um Tecnólogo em Sistemas para Internet na Fatec de Araras/SP e um Bacharelado em Engenharia de Produção Mecânica na Universidade Paulista de Limeira/SP.',
    image: Programming,
  };

  return (
    <>
      <div className="about">
        <div className="about__divider">
          <div
            className="about__divider--circle"
            style={{ backgroundColor: '#20968b' }}
          ></div>
          <div
            className="about__divider--circle"
            style={{ backgroundColor: '#20968b' }}
          ></div>
          <div
            className="about__divider--line"
            style={{ backgroundColor: '#20968b' }}
          ></div>
        </div>
        <div className="about__body">
          <div className="about__description">
            <h2>{aboutData.title}</h2>
            <p>
              {aboutData.description1}
              <br />
              <br />
              {aboutData.description2}
              <br />
              <br />
              {aboutData.description3}
            </p>
          </div>
          <div className="about__image">
            <img src={aboutData.image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
