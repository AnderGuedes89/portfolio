import React from 'react';
import SkillCard from './skillCard/SkillCard';
import './skill.css';
import { HiArrowRight } from 'react-icons/hi';

export const skillsData = [
  {
    id: 1,
    title: 'HTML',
    icon: <HiArrowRight />,
  },
  {
    id: 2,
    title: 'CSS',
    icon: <HiArrowRight />,
  },
  {
    id: 3,
    title: 'JavaScript',
    icon: <HiArrowRight />,
  },
  {
    id: 4,
    title: 'Angular',
    icon: <HiArrowRight />,
  },
  {
    id: 5,
    title: 'React',
    icon: <HiArrowRight />,
  },

  {
    id: 6,
    title: 'TypeScript',
    icon: <HiArrowRight />,
  },
  {
    id: 7,
    title: 'GitHub',
    icon: <HiArrowRight />,
  },
];

function Skill() {
  return (
    <>
      {skillsData.length > 0 && (
        <div className="skills">
          <div className="skills__header">
            <h1>Habilidades</h1>
          </div>
          <div className="skills__body">
            <p>
              These are some of the services I offer. Reach out to me if I can
              help you with any!
            </p>
            <div className="skills__body--container">
              {skillsData.map((services) => (
                <SkillCard
                  key={services.id}
                  id={services.id}
                  title={services.title}
                  icon={services.icon}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Skill;
