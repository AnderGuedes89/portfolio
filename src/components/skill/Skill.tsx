import React from 'react';
import SkillCard from './skillCard/SkillCard';
import './skill.css';
import { skillsData } from '../../data/skillsData';

function Skill() {
  return (
    <>
      {skillsData.length > 0 && (
        <div className="skills">
          <div className="skills__header">
            <h1>Habilidades</h1>
          </div>
          <div className="skills__body">
            <div className="skills__body--container">
              {skillsData.map((skill) => (
                <SkillCard
                  key={skill.id}
                  id={skill.id}
                  title={skill.title}
                  icon={skill.icon}
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
