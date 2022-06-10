import React from 'react';
import { FaCode } from 'react-icons/fa';
import './projectCard.css';

function ProjectCard({ id, name, desc, tags, code, image }: any) {
  return (
    <>
      <div key={id} className="project__card">
        <div className="project__card--content">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <p className="">{desc}</p>
          <div className="project__card--showcase">
            <a
              href={code}
              className="project__card--iconBtn"
              target="_blank"
              rel="noreferrer"
            >
              <FaCode className="project__card--icon" />
            </a>
          </div>
        </div>
        <div className="project__card--lang">
          {tags.slice(0, 3).map((tag: any, id: any) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
