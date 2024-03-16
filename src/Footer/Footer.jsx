import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h1>
          LET'S <span>CONNECT!</span>
        </h1>
        <h2>DROP ME A MESSAGE!</h2>
        <button className="contact">
          <Link to="/Contact Me">Contact Me</Link>
        </button>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/wajeeha-usman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/Wajeeha02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="https://wajeehausman978@gmail.com/">
            <i class="fas fa-envelope"></i> Go to Gmail
          </a>
        </div>
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/AboutMe">About Me</Link>
          </li>
          <li>
            <Link to="/Portfolio">My Projects</Link>
          </li>
          <li>
            <Link to="/ContactMe">Contact Me</Link>
          </li>
        </ul>
        <div className="copyright">
        <p>&copy; 2024 Copyright. All rights reserved</p>
       </div>
        </div>
       
    </div>
  );
}
export default Footer;
