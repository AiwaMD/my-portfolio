import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Моє портфоліо | Зв'яжіться зі мною:</p>
      <div className="social-links">
        <a href="https://github.com/твій-гітхаб" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://t.me/твій-Телеграм" target="_blank" rel="noopener noreferrer">Telegram</a>
      </div>
    </footer>
  );
}

export default Footer;
