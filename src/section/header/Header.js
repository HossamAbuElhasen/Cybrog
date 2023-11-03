import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/imgs/logo.png';
import NavItem from '../../component/navitem/NavItem';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
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
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/Broswer" className="nav-link">Browse</Link>
            </NavItem>
            <NavItem>
              <Link to="/Details" className="nav-link">Details</Link>
            </NavItem>
            <NavItem>
              <Link to="/Profile" className="nav-link">Profile</Link>
            </NavItem>
            <NavItem>
              <Link to="/Palestine" className="nav-link">palestine</Link>
            </NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
