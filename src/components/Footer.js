import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="App-footer gradient">
      <Link to="/">
        <p>Home</p>
      </Link>
    </footer>
  );
};

export default Footer;
