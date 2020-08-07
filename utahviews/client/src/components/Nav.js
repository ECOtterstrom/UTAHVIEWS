import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();
    return (


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

        
        //Navigation
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        //     <div className="container">
        //         <a className="navbar-brand" href="#">UTAH VIEWS</a>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarResponsive">
        //             <ul className="navbar-nav ml-auto">
        //                 <li className="nav-item active">
        //                     <a className="nav-link" href="#">Home
        //                         <span className="sr-only">(current)</span>
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">About</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Sign Up</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Login</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
}

export default Nav;
