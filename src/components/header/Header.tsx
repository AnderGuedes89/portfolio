import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import './header.css';

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__container--left">
            <div className="hcl--content">
              {socialsData.linkedIn && (
                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                  <FaLinkedin className="header--social" />
                </a>
              )}
              {socialsData.github && (
                <a href={socialsData.github} target="_blank" rel="noreferrer">
                  <FaGithub className="header--social" />
                </a>
              )}
              {socialsData.twitter && (
                <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                  <FaTwitter className="header--social" />
                </a>
              )}
            </div>
          </div>
          <img src={headerData.image} alt="" className="header--image" />
          <div className="header__container--right">
            <div className="hcr--content">
              <h6>{headerData.title}</h6>
              <h1>{headerData.name}</h1>
              <p>{headerData.desciption}</p>
              <p>{headerData.desciption2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
