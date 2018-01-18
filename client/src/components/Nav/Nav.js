import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';





const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          React Recipes
        </a>
      </div>
    </div>
 <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
         <li className="nav-item">
          <Link className="nav-link" to="/saved">
            Saved
          </Link>
        </li>
      </ul>
    </div>
    
  </nav>
);

export default Nav;
