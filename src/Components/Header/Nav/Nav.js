import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <div className="col-3">
            <a className="navbar-brand" href="/#">
              <img src="img/Logo.png" alt="logo" />
            </a>
          </div>

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
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/#" className="nav-link active " aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link text-white">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link text-white">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link text-white">
                  Video
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link text-white">
                  Prices
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link text-white">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link text-white">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
