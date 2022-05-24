import React from 'react';
import '../css/home.css';

function HeaderHome() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h3 className="home__hello">Olá!! Meu nome é</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h1 className="home__name">Anderson Guedes</h1>
        </div>
      </div>
    </>
  );
}

export default HeaderHome;
