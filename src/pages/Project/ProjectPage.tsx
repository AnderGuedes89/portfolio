import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/project/projectCard/ProjectCard';
import { projectsData } from '../../data/projectsData';
import './projectPage.css';

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
