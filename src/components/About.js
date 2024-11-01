import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section id="about" className="main-container">
      <h2>About Me</h2>
      <p>
        I am a student who is passionate about technology, especially in web development, user interface (UI/UX) design, and data analysis. With experience in various projects, I have the ability to design innovative and user-focused digital solutions. I always strive to continue learning and developing my skills in this dynamic world of technology.
      </p>
      <br />
      <div className="about-grid">
        <div className="about-item">
          <div className="about-icon">
            <img src="img/design.png" alt="UI/UX Designer Icon" />
          </div>
          <h4>UI/UX Designer</h4>
          <p>
            I have experience in designing smart and user-friendly interfaces for various digital platforms. My focus is on creating designs that are not only visually appealing, but also make it easy for users to interact with the product. I always try to understand user needs and apply effective design principles to achieve the best solution.
          </p>
        </div>

        <div className="about-item">
          <div className="about-icon">
            <img src="img/web.png" alt="Web Developer Icon" />
          </div>
          <h4>Web Developer</h4>
          <p>
            As a web developer, I am used to working with front-end and back-end technologies to create dynamic and responsive websites. I focus on creating efficient and reliable code, with the goal of delivering an optimal user experience. I enjoy exploring the latest technologies and always strive to update my technical skills to deliver innovative solutions.
          </p>
        </div>

        <div className="about-item">
          <div className="about-icon">
            <img src="img/analysis.png" alt="Data Analysis Icon" />
          </div>
          <h4>Data Analysis</h4>
          <p>
            As a data analyst, I have expertise in collecting, processing, and analyzing data to generate valuable insights. I use various analytical tools to identify trends and patterns that can help companies in strategic decision making. I believe that good data can be the key to creating more effective business strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
