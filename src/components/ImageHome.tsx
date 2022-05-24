import React from 'react';
import '../css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function ImageHome() {
  return (
    <>
      <div className="row home__row--image">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <FontAwesomeIcon
            icon={faCoffee}
            className="home__image float-right"
          />
        </div>
      </div>
    </>
  );
}

export default ImageHome;
