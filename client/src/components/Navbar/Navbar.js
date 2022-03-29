import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineLineHeight } from "react-icons/ai";
import "./navbar.css";
import "./utils.css"
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar container">
      <div className="logo">
        <AiOutlineLineHeight color="#0a1930" size={33} />
        <p className="logo-text">
          H<span>B</span>
        </p>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <Link to="/" onClick={toggleMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={toggleMenu}>
              A Propos
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/service" onClick={toggleMenu}>
              Service
            </Link>
          </li>
          <li>
            <Link to="#subscribe" onClick={toggleMenu}>
              Subscribe
            </Link>
          </li>

          <li className="nav-btn">
            <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"} />
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#0a1930" size={30} />
        ) : (
          <AiOutlineBars color="#0a1930" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
