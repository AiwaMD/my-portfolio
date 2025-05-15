import React from 'react';
import './AboutMe.css';  // Підключаємо стилі

function AboutMe() {
  return (
    <div>
      <h1>Про мене</h1>
      <p>Я — початківець веб-розробник. Мене цікавить front-end та створення сучасних сайтів.</p>
      
      <h2>Мої проєкти:</h2>
      
      <h3>HTML + CSS</h3>
      <a
        href="https://github.com/AiwaMD/html-css-landing.git"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        Проєкт 1
      </a>
      
      <h3>JavaScript</h3>
      <a
        href="https://github.com/AiwaMD/js-array.git"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        Проєкт 2
      </a>

      <h3>React</h3>
      <a
        href="https://github.com/AiwaMD/react-props.git"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        Проєкт 3
      </a>
    </div>
  );
}

export default AboutMe;
