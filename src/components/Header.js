import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(linkData) =>
                linkData.isActive ? "link link-active" : "link"
              }
              to="/books"
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(linkData) =>
                linkData.isActive ? "link link-active" : "link"
              }
              to="/categories"
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
