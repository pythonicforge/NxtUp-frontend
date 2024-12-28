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
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </li>
            <li className="link">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li className="link">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <BsTwitterX />
              </a>
            </li>
            <li className="link">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
