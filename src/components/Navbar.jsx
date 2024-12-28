import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="container navbar">
        <div className="logo-container">
          <Link to="/">
            <p className="logo-text">nxtup</p>
          </Link>
        </div>
        <div className="links-container">
          <ul className="links">
            <li className="link">
              <FaFacebookF />
            </li>
            <li className="link">
              <FaInstagram />
            </li>
            <li className="link">
              <BsTwitterX />
            </li>
            <li className="link">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
