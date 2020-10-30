import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/duplicate">
      React + Typescript + Testing
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/duplicate">
            Duplicate
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/last">
            Last
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/unique">
            Unique
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/parseNPMVersion">
            ParseNPMVersion
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/teamArticles">
            TeamArticles
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
