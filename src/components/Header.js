import React from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="header-container row">
        <Link to="/" className="logo">
          Book store CMS
        </Link>
        <Navbar />
        <span className="user">
          <BsFillPersonFill className="icon" />
        </span>
      </div>
    </header>
  );
}

export default Header;
