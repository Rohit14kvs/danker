import React from "react";
import logo from "../images/troll-face.png";
const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <div className="logo__section">
          <img src={logo} alt="Logo" className="header__img" />
          <h2>Danker</h2>
        </div>
        <h4 className="heading">Make Denk MEMES</h4>
      </nav>
    </header>
  );
};

export default Navbar;
