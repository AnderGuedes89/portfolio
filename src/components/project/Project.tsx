import React from 'react';
import ProjectCard from './projectCard/ProjectCard';
import './project.css';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { projectsData } from '../../data/projectsData';

function Project() {
  return (
    <>
      {projectsData.length > 0 && (
        <div className="projects">
          <div className="projects__header">
            <h1>Projetos</h1>
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
                <Link to="/projetos">
                  <button className="projects__viewAll--button">
                    Ver mais
                    <HiArrowRight className="projects__viewAll--icon" />
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
