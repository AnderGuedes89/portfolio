import React from 'react';
import { FaCode, FaPlay } from 'react-icons/fa';
import './projectCard.css';

function ProjectCard({ id, name, desc, tags, code, demo, image }: any) {
  return (
    <>
      <div key={id} className="project__card">
        <div className="project__card--content">
          <h2 id={name.replace(' ', '-').toLowerCase()}>{name}</h2>
          <img src={image} alt={name} />
          <div className="project--showcaseBtn">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              aria-labelledby={`${name.replace(' ', '-').toLowerCase()} ${name
                .replace(' ', '-')
                .toLowerCase()}-demo`}
            >
              <FaPlay
                id={`${name.replace(' ', '-').toLowerCase()}-demo`}
                aria-label="Demo"
              />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              aria-labelledby={`${name.replace(' ', '-').toLowerCase()} ${name
                .replace(' ', '-')
                .toLowerCase()}-code`}
            >
              <FaCode
                id={`${name.replace(' ', '-').toLowerCase()}-code`}
                aria-label="Code"
              />
            </a>
          </div>
        </div>
        <p className="project__card--description">{desc}</p>
        <div className="project--lang">
          {tags.map((tag: any, id: any) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
