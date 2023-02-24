import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink
            className={(linkData) => (linkData.isActive ? "active-link" : "")}
            to="/books"
          >
            Books
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            className={(linkData) => (linkData.isActive ? "active-link" : "")}
            to="/categories"
          >
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
