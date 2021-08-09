import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const[isActive, setIsActive] = useState(false);
  return (
    <nav
      className="navbar has-background-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h3 className="title">PayDoni</h3>
        </Link>

        <button
          className={isActive ? "navbar-burger is-active" : "navbar-burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="navigation-bar"
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navigation-bar" className={isActive ?"navbar-menu has-background-info-light is-active":"navbar-menu"} onClick={() => setIsActive(false)}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <Link className="navbar-item" to="/about">
            About
          </Link>          
        </div>
        <div className="navbar-end my-2 mr-4">
        <Link to="/donate" className="navbar-item button is-primary is-light">
            Donate Now
          </Link> 
        </div>
      </div>
    </nav>
  );
};

