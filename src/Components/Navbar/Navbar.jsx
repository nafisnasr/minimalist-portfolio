import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar my-2 navbar-expand-lg navbar-light p-2">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Me
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-list mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link  active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Playground
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled"  href="#">
                Work
              </a>
            </li>
          </ul>
        </div>
        </div>
    </nav>
  );
}
