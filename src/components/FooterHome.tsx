import React from 'react';
import '../css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function FooterHome() {
  return (
    <>
      <div className="row home__footer">
        <div className=" col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <ul className="float-left">
            <li className="list-inline-item">
              <a
                href="https://twitter.com/AnderGuedes89"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faCoffee} className="home__icon" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://github.com/AnderGuedes89"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faCoffee} className="home__icon" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/anderson-guedes-mg"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faCoffee} className="home__icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className=" col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <ul className="nav float-right">
            <li className="nav-item list-inline-item">
              <Link to="sobre" className="nav-link home__link">
                Sobre
              </Link>
            </li>
            <li className="nav-item list-inline-item">
              <Link to="portfolio" className="nav-link home__link">
                Portfólio
              </Link>
            </li>
            <li className="nav-item list-inline-item">
              <Link to="curriculo" className="nav-link home__link">
                Currículo
              </Link>
            </li>
            <li className="nav-item list-inline-item">
              <Link to="contato" className="nav-link home__link">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterHome;
