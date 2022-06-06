import React from 'react';
import './footer.css';

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <div className="footer">
        <p>2019-{year} Anderson Guedes | Portfólio</p>
      </div>
    </>
  );
}

export default Footer;
