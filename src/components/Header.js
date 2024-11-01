// src/components/Header.js
import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header class="main-container">
    <div class="nav">
        <div class="logo">
            <a href="">Web Profile</a>
        </div>

        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    </header>
  );
};

export default Header;
