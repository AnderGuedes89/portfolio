import React from 'react';
import ProjectCard from './projectCard/ProjectCard';
import './project.css';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

export const projectsData = [
  {
    id: 1,
    projectName: 'YouTube - Clone',
    projectDesc: 'Clone da página inicial do site "https://www.youtube.com"',
    tags: ['React', 'Material UI'],
    code: 'https://github.com/AnderGuedes89/youtube-clone',
    demo: '',
    image: '',
  },
  {
    id: 2,
    projectName: 'T-Shirt Store',
    projectDesc: 'Sistema de carrinho de compras para uma loja de camisas',
    tags: ['React', 'Material UI', 'Redux', 'MongoDB'],
    code: 'https://github.com/AnderGuedes89/t-shirt-store',
    demo: '',
    image: '',
  },
  {
    id: 3,
    projectName: 'Gusto Belissimo',
    projectDesc:
      'Site Institucional de um restaurante fictício no formato One Page desenvolvido para a disciplina "Projeto de Encontrabilidade" do curso Sistemas para Internet na Fatec Araras',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    code: 'https://github.com/AnderGuedes89/gusto-belissimo',
    demo: '',
    image: '',
  },
  {
    id: 4,
    projectName: 'myStock',
    projectDesc:
      'Sistema de estoque para a Paróquia Santa Teresinha de Araras/SP, desenvolvido para a disciplina "Desenvolvimento para Servidores II" do curso Sistemas para Internet na Fatec Araras',
    tags: ['PHP', 'Laravel', 'Bootstrap'],
    code: 'https://github.com/AnderGuedes89/myStock',
    demo: '',
    image: '',
  },
  {
    id: 5,
    projectName: 'Buffalo Burger',
    projectDesc:
      'Site Institucional de uma hamburgueria fictícia desenvolvido para a disciplina "Prática de Design" do curso Sistemas para Internet na Fatec Araras',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    code: 'https://github.com/AnderGuedes89/buffalo-burger',
    demo: '',
    image: '',
  },
];

function Project() {
  return (
    <>
      {projectsData.length > 0 && (
        <div className="projects">
          <div className="projects__header">
            <h1>Projects</h1>
          </div>
          <div className="projects__body">
            <div className="projects__body--container">
              {projectsData.slice(0, 3).map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>
            {projectsData.length > 3 && (
              <div className="projects--viewAll">
                <Link to="/projects">
                  <button>
                    View All
                    <HiArrowRight />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
