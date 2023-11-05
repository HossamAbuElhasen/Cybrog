import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/imgs/logo.png';
import NavItem from '../../component/navitem/NavItem';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      setIsMenuOpen(false);
    }
  }, [isDropdownOpen]);


  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <div className="search-box">
          <input type="text" placeholder="search... " />
          <i className="fa fa-search"><FaSearch /></i>
        </div>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="mainmenu"
        >

          
          <ul className="navbar-nav ms-auto">
            <NavItem className="nav-item">
              <Link to="/" className="nav-link" onClick={closeDropdown}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Broswer" className="nav-link" onClick={closeDropdown}>
                Browse
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Details" className="nav-link" onClick={closeDropdown}>
                Details
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Profile" className="nav-link" onClick={closeDropdown}>
                Profile
              </Link>
            </NavItem>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
