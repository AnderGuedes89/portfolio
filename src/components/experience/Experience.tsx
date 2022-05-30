import React from 'react';
import './experience.css';
import ExperienceCard from './ExperienceCard';
import Programming from '../../assets/images/programming.png';

export const experienceData = [
  {
    id: 1,
    company: 'Procenge',
    jobtitle: 'Engenheiro de Software Front-End',
    startYear: '2021',
    endYear: 'Atual',
  },
  {
    id: 2,
    company: 'VR Software',
    jobtitle: 'Programador Full-Stack Júnior',
    startYear: '2021',
    endYear: '2021',
  },
  {
    id: 3,
    company: 'Luxfacta',
    jobtitle: 'Programador Front-End Júnior',
    startYear: '2020',
    endYear: '2020',
  },
  {
    id: 4,
    company: 'Luxfacta',
    jobtitle: 'Estagiário em Desenvolvimento Web',
    startYear: '2019',
    endYear: '2019',
  },
];

function Experience() {
  return (
    <>
      <div className="experience">
        <div className="experience__body">
          <div className="experience__image">
            <img src={Programming} alt="" />
          </div>
          <div className="experience__description">
            <h1>Experiências</h1>
            {experienceData.map((exp) => (
              <ExperienceCard
                key={exp.id}
                id={exp.id}
                jobtitle={exp.jobtitle}
                company={exp.company}
                startYear={exp.startYear}
                endYear={exp.endYear}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
