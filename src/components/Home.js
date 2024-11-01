// src/components/Home.js
import React from 'react';
import '../App.css';

const Home = () => {
  return (
        <section id="home">
            <div class="home-left">
                <h3 class="pre-title">Hello Everyone, I Am</h3>
                <h1 class="home-name">ATALYA ROULINA SARAGIH</h1>
                <p>I am currently a Software Engineering Technology student at Institut Teknologi Del, class of 2021. 
                   I'm passionate about designing user-friendly websites and apps, and I have experience in both UI/UX design and 
                   project management. Besides my academic pursuits, I enjoy drawing, coloring, singing, and web/app design. 
                   I am also exploring opportunities in the tech field through my internship at Infinite Learning, where I'm working on an 
                   e-commerce platform related to hydroponics.</p>
                <a href="resume.pdf">
                    <button class="btn">My Resume</button>
                </a>
            </div>
            <div class="home-right">
                <img src="img/atalya.png" alt="Photo of Atalya" />
            </div>
        </section>
  );
};

export default Home;
