import React from "react";
import "./Footer.css";
import { FaApple, FaFacebook, FaGooglePlay, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="column">
          <p className="footer-logo">FinanzApp</p>
        </div>
        <div className="column column-2">
          <p>Seguinos:</p>
          <ul className="footer-icons footer-social-logos">
            <li><a href="#" target="blank"><FaLinkedin size={30}/></a></li>
            <li><a href="#" target="blank"><FaFacebook size={30}/></a></li>
            <li><a href="#" target="blank"><FaInstagram size={30}/></a></li>
          </ul>
        </div>
        <div className="column">
          <ul className="footer-icons footer-store-icons">
            <li><FaGooglePlay size={20}/></li>
            <li><FaApple size={20}/></li>
          </ul>
        </div>
      </div>
      <p>Copyright 2023. FinanzApp</p>
    </footer>
  );
}

export default Footer;
