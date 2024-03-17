
import React from 'react';
import logo from '../images/dental-time-logo.png';

const Footer = () => {
  return (
    <footer className='footer-box'>
      <div className='footer-content'>
        <img className="logo" src={logo} alt="Logo de la clínica dental" />
          <div className='clinic-info'>
            <p>Dental Time SL</p>
            <p>Carretera Bordeta 40 44 P 1 PTA 3. 08014, Barcelona, España</p>
            <p>Teléfono 93 555 13 02</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
