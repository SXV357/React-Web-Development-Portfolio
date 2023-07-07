import React from "react";
import logo from "../Images/Website Logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="row footer_row">
        <a href="#about-me" className="footer-anchor">
          <figure className="footer-logo">
            <img className="footer-img" src={logo} alt="Website Logo" />
          </figure>
          <span className="footer-logo-popup">
            Top
            <i className="fa-solid fa-arrow-up"></i>
          </span>
        </a>
        <div className="footer_social-links">
          <a
            target="_blank"
            rel="noreferrer"
            className="footer-social-link link-hover-white"
            href="https://github.com/SXV357"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="footer-social-link link-hover-white"
            href="https://www.linkedin.com/in/shrevis/"
          >
            Linkedln
          </a>
          <a
            className="footer-social-link link-hover-white"
            href="mailto:shreyasviswanathan1@gmail.com"
          >
            Email
          </a>
          <a
            className="footer-social-link link-hover-white"
            href="https://drive.google.com/file/d/1_Qaf4p9jlVYzEFA4lYgvgIFdfvG2_XJQ/view?usp=sharing"
            download
          >
            Resume
          </a>
        </div>
        <div className="footer_copyright">
          Copyright © 2023 Shreyas Viswanathan
        </div>
      </div>
    </footer>
  );
}
