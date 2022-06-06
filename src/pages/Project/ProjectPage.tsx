import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/project/projectCard/ProjectCard';
import './projectPage.css';

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
  {
    id: 6,
    projectName: 'FeedGet',
    projectDesc:
      'Widget para feedbacks, desenvolvido durante a NLW Return da Rocketseat',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    code: 'https://github.com/AnderGuedes89/FeedGet',
    demo: '',
    image: '',
  },
];

function ProjectPage() {
  const [search, setSearch] = useState('');

  const filteredProject = projectsData.filter((project) => {
    const content = project.projectName + project.projectDesc + project.tags;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="project__page">
        <div className="project__page--header">
          <Link to="/">
            <HiArrowRight />
          </Link>
          <h1>Projetos</h1>
        </div>
        <div className="project__page--container">
          <div className="project__page--search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Procurar..."
            />
          </div>
          <div className="project__container">
            <Grid
              className="project__grid"
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              {filteredProject.map((project) => (
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
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
