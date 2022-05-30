import React from 'react';
import './education.css';
import EducationCard from './EducationCard';
import Programming from '../../assets/images/programming.png';

export const educationData = [
  {
    id: 1,
    institution: 'Fatec Araras',
    course: 'Sistemas para Internet',
    startYear: '2017',
    endYear: '2020',
  },
  {
    id: 2,
    institution: 'Unip',
    course: 'Engenharia de Produção Mecânica',
    startYear: '2010',
    endYear: '2015',
  },
  {
    id: 3,
    institution: 'Masai School of Coding',
    course: 'Fullstack Web-Development',
    startYear: '2021',
    endYear: 'Present',
  },
];

function Education() {
  return (
    <>
      <div className="education">
        <div className="education__body">
          <div className="education__description">
            <h1>Educação</h1>
            {educationData.map((edu) => (
              <EducationCard
                key={edu.id}
                id={edu.id}
                institution={edu.institution}
                course={edu.course}
                startYear={edu.startYear}
                endYear={edu.endYear}
              />
            ))}
          </div>
          <div className="education__image">
            <img src={Programming} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
