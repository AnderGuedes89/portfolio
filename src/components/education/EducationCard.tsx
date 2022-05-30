import React from 'react';
import './education.css';
import { FaBeer } from 'react-icons/fa';

function EducationCard({ id, institution, course, startYear, endYear }: any) {
  return (
    <>
      <div key={id} className="education__card">
        <div className="education__card-image">
          <FaBeer  />
        </div>
        <div className="education__card--details">
          <h6>
            {startYear}-{endYear}
          </h6>
          <h4>{course}</h4>
          <h5>{institution}</h5>
        </div>
      </div>
    </>
  );
}

export default EducationCard;
