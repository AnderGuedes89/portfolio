import React from 'react';
import FooterHome from '../components/FooterHome';
import HeaderHome from '../components/HeaderHome';
import ImageHome from '../components/ImageHome';
import TextHome from '../components/TextHome';
import '../css/home.css';

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <HeaderHome />

          <TextHome />

          <ImageHome />

          <FooterHome />
        </div>
      </div>
    </>
  );
}

export default Home;
