import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Logo_React.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="reactp__navbar">
      <div className="reactp__navbar-links">
        <div className="reactp__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="reactp__navbar-links_container">
          <p><a href="#home">Αρχική</a></p>
          <p><a href="#wir">Τι είναι η React?</a></p>
          <p><a href="#history">Ιστορία</a></p>
          <p><a href="#features">Πλεονεκτήματα</a></p>
          <p><a href="#blog">Δημοτικότητα</a></p>
          <p><a href="#infoblog">Βήματα</a></p>
        </div>
      </div>
      <div className="reactp__navbar-sign">
        <button type="button">Log out</button>
      </div>
      <div className="reactp__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="reactp__navbar-menu_container scale-up-center">
          <div className="reactp__navbar-menu_container-links">
            <p><a href="#home">Αρχική</a></p>
            <p><a href="#wir">Τι είναι η React?</a></p>
            <p><a href="#history">Ιστορία</a></p>
            <p><a href="#features">Πλεονεκτήματα</a></p>
            <p><a href="#blog">Δημοτικότητα</a></p>
            <p><a href="#infoblog">Βήματα</a></p>
          </div>
          <div className="reactp__navbar-menu_container-links-sign">
            <button type="button">Log out</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
