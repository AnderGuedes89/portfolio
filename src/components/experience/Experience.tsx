import React from 'react';
import './experience.css';
import ExperienceCard from './ExperienceCard';
import FocusedWorking from '../../assets/images/focused_working.png';
import { experienceData } from '../../data/experienceData';

function Experience() {
  return (
    <>
      <div className="experience">
        <div className="experience__body">
          <div className="experience__image">
            <img src={FocusedWorking} alt="" />
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
