import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Nav.css"

function Nav() {
    const location = useLocation();
    return (

       <div className = "navBar">
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/search"
            className={location.pathname === "/search" ? "nav-link active" : "nav-link"}
          >
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className={location.pathname === "" ? "nav-link active" : "nav-link"}
          >
            Trails
          </Link>
          </li>
          <li className="nav-item">
            <Link
            to="/"
            className={location.pathname === "" ? "nav-link active" : "nav-link"}> Sign In

            </Link>
        </li>
        <li className="nav-item">
          <Link
          to="/"
          className={location.pathname === "" ? "nav-link active" : "nav-link"}>Sign Up
          </Link>
        </li>
      </ul>
      </div>
        
  
    );
}

export default Nav;
