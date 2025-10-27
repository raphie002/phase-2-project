
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const navBarStyles = {
    backgroundColor: 'var(--bg-dark)', 
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'center', 
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const linkStyle = {
    padding: "15px 20px",
    textDecoration: "none",
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: "600",
    transition: 'color 0.3s, background-color 0.3s'
  };

  const activeStyle = {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    borderBottom: `3px solid var(--primary-color)` 
  };

  return (
    <nav style={navBarStyles}>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}
      >
        Home
      </NavLink>
      <NavLink 
        to="/movies" 
        style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}
      >
        View Movies
      </NavLink>
      <NavLink 
        to="/new" 
        style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}
      >
        Add New Movie
      </NavLink>
    </nav>
  );
}

export default NavBar;
