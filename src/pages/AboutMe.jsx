import React from 'react';

function AboutMe() {
  return (
    <div>
      <h1>Про мене</h1>
      <p>Я — початківець веб-розробник. Мене цікавить front-end та створення сучасних сайтів.</p>
      
      <h2>Мої проєкти:</h2>
      <h3>HTML + CSS</h3>
      <a href="https://github.com/твій-гітхаб/проект-html-css" target="_blank" rel="noopener noreferrer">Проєкт 1</a>
      
      <h3>JavaScript</h3>
      <a href="https://github.com/твій-гітхаб/проект-js" target="_blank" rel="noopener noreferrer">Проєкт 2</a>

      <h3>React</h3>
      <a href="https://github.com/твій-гітхаб/проект-react" target="_blank" rel="noopener noreferrer">Проєкт 3</a>
    </div>
  );
}

export default AboutMe;
