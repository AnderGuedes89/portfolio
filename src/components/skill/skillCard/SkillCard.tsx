import React from 'react';
import './skillCard.css';

function SkillCard({ id, title, icon }: any) {
  return (
    <>
      <div key={id} className="skill__card">
        <div className="skill__content">
          <img className="skill__icon" src={icon} alt={icon} />
          <h4>{title}</h4>
        </div>
      </div>
    </>
  );
}

export default SkillCard;
