import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    color: 'white'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;

