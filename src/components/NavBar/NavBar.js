import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/img/beer-logo.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="d-flex justify-content-center w-100">
          <Link to="/">
            <img src={Logo} width="50" height="40" alt="Beer Icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
