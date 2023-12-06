// Footer.js
import React from 'react';
import './home.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
        
          <img src={'./inst.jpg'} alt="Logo" /> 
          
          <img src={'./youtube.png'} alt="Logo" />
          <img src={'./twiitter.png'} alt="Logo" />
          <img src={'./whatsapp.jpg'} alt="Logo" />
        </div>
        <div className="text">
             Enter Email  <input type='text' />
        
        </div>
      </div>
    </footer>
  );
}

export default Footer;
