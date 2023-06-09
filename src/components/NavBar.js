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
          <Link to="counterpage">Counter Page</Link>
          <Link to="pokemonpage">Pokemon</Link>
          <Link to="redirect">Redirect</Link>
          <Link to="fetchpage">Fetch Page</Link>
          <Link to="react-reducer">Reducer Notes Page</Link>
          <Link to="myproductspage"> My Products Page</Link>
          <Link to="classproductspage"> Class Products Page</Link>
          <Link to="login-context-page"> Login Context Page</Link>
          <Link to="homework-usereducer">Homework UseReducer-Api Page</Link>
          <Link to="class-login-page">Class Login Page</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
