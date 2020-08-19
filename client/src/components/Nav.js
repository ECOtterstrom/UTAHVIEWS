import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Nav.css"

function Nav() {
  const location = useLocation();
  return (

    <div className="row">
      <div className="navBar col-md-8">
        <ul className="nav nav-tabs">

          <li className="title">UTAH VIEWS</li>
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
              Find a Trail
          </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/favorites"
              className={location.pathname === "/favorites" ? "nav-link active" : "nav-link"}
            >
              Favorite Trails
          </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/favorites"
              className={location.pathname === "/favorites" ? "nav-link active" : "nav-link"}
            >
              Favorites
        </Link>
          </li> */}

        </ul>

      </div>

      <div className="navBar col-md-4">
        <ul className="nav nav-tabs">
          <li className="nav-item">

            <Link
              to="/login"
              className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Log In
        </Link>
          </li>
          <li className="nav-item userlogin">

            <Link
              to="/signup"
              className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Sign Up
      </Link>
          </li>
        </ul>
      </div>
    </div>
  );

}

export default Nav;
