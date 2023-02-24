import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="header-container row">
        <Link to="/" className="logo">
          Book store CMS
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
