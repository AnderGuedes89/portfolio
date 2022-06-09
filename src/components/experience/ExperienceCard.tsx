import React from 'react';
import './experience.css';
import Experience from '../../assets/svg/experience.svg';

function ExperienceCard({ id, company, jobtitle, startYear, endYear }: any) {
  return (
    <>
      <div key={id} className="experience__card">
        <div className="experience__card--image">
          <img src={Experience} alt="" />
        </div>
        <div className="experience__card--details">
          <h6>
            {startYear} - {endYear}
          </h6>
          <h4>{jobtitle}</h4>
          <h5>{company}</h5>
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
