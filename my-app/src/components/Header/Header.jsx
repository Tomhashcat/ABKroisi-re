import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
import logo from '../../img/1200x630wa.png'
const Header = () => {
  return (
    <header className="header">
      <div className="container">
      <div className="logo">
          {/* Utilisation de la balise <img> pour afficher le logo */}
          <Link to="/">
            <img src={logo} alt="Logo Croisières" className="logo-image" />
          </Link>
        </div>
     
      </div>
    </header>
  );
};

export default Header;
