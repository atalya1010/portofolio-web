import React from 'react';
import '../App.css';

const Skills = () => {
  return (
    <section id="skills" className="main-container">
    <div className="skill">
      <h1 className="section-titles-skills">Experiences & Skills</h1>

      <div className="skills-grid">
        {/* Left Grid: Experiences */}
        <div className="skills-left">
          {/* Experience 1 */}
          <div className="experience">
            <div className="line"></div>
            <div className="experience-info">
            <h4 className="experience-titl"> Mobile Application "Tangani Kekerasan Perempuan dan Anak"</h4>
            <p><strong>Institut Teknologi Del</strong></p>
            <h5>UI/UX Designer</h5>
            <p>
            As a UI/UX Designer, I analyze problems and identify the features that users need. I create a site map to outline the information structure and layout of the website being developed. Additionally, I design the components for the product, focusing on both visual design and the design system. I conduct testing and evaluation of the prototype and the launched application to ensure that all functions are operating correctly.
          </p>
              <h4 className="experience-date">Jan-2024</h4>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="experience">
            <div className="line"></div>
            <div className="experience-info">
              <h4 className="experience-title">Digit Recognizer Using CNN Algorithm</h4>
              <p><strong>Institut Teknologi Del</strong></p>
              <h5>Programmer</h5>
              <p>
                 Developed algorithms and systems to classify handwritten digits from the MNIST dataset using Convolutional Neural Networks (CNN). The focus was on implementing and optimizing CNN models and other classification methods to enhance the accuracy of digit recognition. Utilized Python for both the development and evaluation of algorithms, ensuring high performance in digit classification tasks.
              </p>
              <h4 className="experience-date">Nov 2023 to Dec 2023</h4>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="experience">
            <div className="line"></div>
            <div className="experience-info">
              <h4 className="experience-title">Booku Shop Website</h4>
              <p><strong>Institut Teknologi Del</strong></p>
              <h5>Web Developer</h5>
              <p>
                 Designed and built a functional website for Booku Shop using Laravel and PHP. Developed the backend infrastructure, implemented features for book purchasing, and integrated payment gateways. Responsibilities included coding the website, setting up the database, and ensuring scalability and performance for a seamless user experience.
             </p>
             <h5>Data Analyst</h5>
                 <p>
                     Analyzed and managed data related to user interactions and sales on the Booku Shop website. Developed reports and insights to improve website performance and enhance the user experience.
                </p>
              <h4 className="experience-date">Apr 2022 to May 2022</h4>
            </div>
          </div>
        </div>

        {/* Right Grid: Skills */}
        <div className="skills-right">
          <p>
            Through my journey in web development, UI/UX design, and data analysis, I have developed the following skills:
          </p>
          <div className="skills-list">
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>PHP & MySQL</li>
              <li>Figma & Adobe XD (UI/UX Tools)</li>
              <li>Data Analysis (Excel, Python)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Skills;
