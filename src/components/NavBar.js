import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="gradient">
      <Link to="/">
        <Logo />
      </Link>
      <button onClick={toggleDropdown}>Menu</button>
      {dropdownVisible && (
        <div className="dropdown">
          <Link to="pokemonpage">Pokemon</Link>
          <Link>Two</Link>
          <Link>Three</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
