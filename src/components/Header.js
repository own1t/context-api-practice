// React
import React from "react";

// React Router Dom
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <div className="header__container">
        <ul className="header__menu">
          <li className="header__items">
            <Link className="header__links" to="/">
              Home
            </Link>
          </li>
          <li className="header__items">
            <Link className="header__links" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
