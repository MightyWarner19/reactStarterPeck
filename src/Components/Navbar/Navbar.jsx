import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" />
        <h1>My Website</h1>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <div className='navbar-dropdown'>        
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <div className="dropdown-content">
            <Link to="/about/about1" onClick={toggleMenu}>
              About 1
            </Link>
            <Link to="/about/about2" onClick={toggleMenu}>
              About 2
            </Link>
            <Link to="/about/about3" onClick={toggleMenu}>
              About 3
            </Link>
          </div>
        </div>
        <div className="navbar-dropdown">
          <Link to="/services" onClick={toggleMenu}>
            Services
          </Link>
          <div className="dropdown-content">
            <Link to="/services/service1" onClick={toggleMenu}>
              Service 1
            </Link>
            <Link to="/services/service2" onClick={toggleMenu}>
              Service 2
            </Link>
            <Link to="/services/service3" onClick={toggleMenu}>
              Service 3
            </Link>
          </div>
        </div>
        <Link to="/portfolio" onClick={toggleMenu}>
          Portfolio
        </Link>
        <div className='navbar-dropdown'>

        <Link to="/jobBoard" onClick={toggleMenu}>
          Job Board
        </Link>
        <div className="dropdown-content">
          <Link to="/jobBoard" onClick={toggleMenu}>Job Board</Link>
          <Link to="/careers" onClick={toggleMenu}>Careers</Link>
        </div>
        </div>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
