import React from "react";
import logo from "../Images/Website Logo.png";

export default function Footer() {
  return (
    <footer>
      <div class="row footer_row">
        <a href="#about-me" class="footer-anchor">
          <figure class="footer-logo">
            <img class="footer-img" src={logo} />
          </figure>
          <span class="footer-logo-popup">
            Top
            <i class="fa-solid fa-arrow-up"></i>
          </span>
        </a>
        <div class="footer_social-links">
          <a
            target="_blank"
            rel="noreferrer"
            class="footer-social-link link-hover-white"
            href="https://github.com/SXV357"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            class="footer-social-link link-hover-white"
            href="https://www.linkedin.com/in/shrevis/"
          >
            Linkedln
          </a>
          <a class="footer-social-link link-hover-white" href="form.html">
            Email
          </a>
          <a
            class="footer-social-link link-hover-white"
            href="https://drive.google.com/file/d/1Bo3AtKXjQs8blmLdhqJ4we9T3_do7zFq/view?usp=sharing"
            download
          >
            Resume
          </a>
        </div>
        <div class="footer_copyright">Copyright © 2022 Shreyas Viswanathan</div>
      </div>
    </footer>
  );
}
