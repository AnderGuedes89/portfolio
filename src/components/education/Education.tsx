import React from 'react';
import './education.css';
import EducationCard from './EducationCard';
import School from '../../assets/images/school.png';
import { educationData } from '../../data/educationData';

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
            <img src={School} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
