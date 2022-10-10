import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import img from '../../images/devMazed.png'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-bg">
        <div className="container">
          <Link className="navbar-brand fw-bold text-primary opacity-75" to="/">Quiz Hero</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="topics">Topics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="statistics">Statistics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="blog">Blog</Link>
              </li>
            </ul>
            <span className="navbar-text">
              <Link className="navbar-brand ms-2 me-0" to="/">
                <img src={img} alt="" width="30" height="28"
                  className="d-inline-block align-text-top rounded-pill" />
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
