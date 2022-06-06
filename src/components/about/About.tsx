import React from 'react';
import { aboutData } from '../../data/aboutData';
import './about.css';

function About() {
  return (
    <>
      <div className="about">
        <div className="about__divider">
          <div
            className="about__divider--circle"
            style={{ backgroundColor: '#20968b' }}
          ></div>
          <div
            className="about__divider--circle"
            style={{ backgroundColor: '#20968b' }}
          ></div>
          <div
            className="about__divider--line"
            style={{ backgroundColor: '#20968b' }}
          ></div>
        </div>
        <div className="about__body">
          <div className="about__description">
            <h2>{aboutData.title}</h2>
            <p>
              {aboutData.description1}
              <br />
              <br />
              {aboutData.description2}
              <br />
              <br />
              {aboutData.description3}
            </p>
          </div>
          <div className="about__image">
            <img src={aboutData.image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
