// src/components/Footer.js
import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer>
    <div className="footer-icons">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="img/instagram.png" alt="Instagram Icon" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="img/twitter.png" alt="Twitter Icon" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="img/linkedin.png" alt="LinkedIn Icon" />
      </a>
    </div>
    <p>&#169; 2024 All Rights Reserved - Atalya Saragih</p>
  </footer>
  );
};

export default Footer;
