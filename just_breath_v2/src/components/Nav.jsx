import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
      <nav>
        <ul className="nav-links">
          <Link to='/dashboard'>
            <li>Dashboard</li>
          </Link>
          <Link to='community'>
            <li>Community</li>
          </Link>
          <Link to='profile'>
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
  );
}

export default Nav;
