import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/about">Про мене</Link></li>
          <li><Link to="/my-city">Моє місто</Link></li>
          <li><Link to="/my-future">Моє майбутнє</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
