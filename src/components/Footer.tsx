import React from 'react';
import '../css/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <span className="footer__copyright">
                &copy; 2019-2021 Anderson Guedes | Portfólio
              </span>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <ul className="list-inline footer__social-buttons">
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/AnderGuedes89"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faCoffee} className="footer__icon" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/AnderGuedes89"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faCoffee} className="footer__icon" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/anderson-guedes-mg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faCoffee} className="footer__icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
