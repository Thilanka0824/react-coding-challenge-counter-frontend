import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="menu">Menu</Link>
    </nav>
  );
};

export default NavBar;
