// src/components/ProjectSlider.js
import React from 'react';
import Slider from 'react-slick';


const projects = [
  { id: 1, title: 'Project 1', image: 'img/image1.png' },
  { id: 2, title: 'Project 2', image: 'img/image2.png' },
  { id: 3, title: 'Project 3', image: 'img/image3.png' },
  { id: 4, title: 'Project 4', image: 'img/image4.png' },
  { id: 5, title: 'Project 5', image: 'img/image5.png' },
];

const ProjectSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="project-slider">
      <h2>My Projects</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
