import React from "react";
import profile from "../Images/new-profile-pic.jpg";
import developer from "../Images/undraw_web_developer_re_h7ie.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
  return (
    <section id="about-me">
      <nav>
        <div class="main-logo">Shreyas Viswanathan</div>
        <ul class="navigation_list">
          <li class="link">
            <a href="#tech-stack" class="navigation_list--anchor link-hover">
              Languages
            </a>
          </li>
          <li class="link">
            <a href="#projects" class="navigation_list--anchor link-hover">
              Projects
            </a>
          </li>
          <li id="contact-btn" class="link">
            <a
              href="form.html"
              class="navigation_list--anchor navigation_list--anchor--main link-hover-contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div class="flex flex-container">
        <div class="about_me--info row">
          <div class="about_me--info--container">
            <figure class="about_me--picture">
              <img src={profile} class="about_me--img" />
            </figure>
            <h1 class="about_me--title">
              Hey! I'm{" "}
              <span class="about_me--info-purple-text">
                Shreyas Viswanathan
              </span>
              &nbsp;<span class="hand">👋</span>
            </h1>
            <p class="about_me--info-paragraph">
              I'm a{" "}
              <strong class="about_me--info-purple-text">web developer</strong>{" "}
              with a passion for building beautiful and responsive websites that
              enhance the overall user experience.
            </p>
            <div class="about_me--socials">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/shrevis/"
                class="about_me--social-link"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SXV357"
                class="about_me--social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="form.html" class="about_me--social-link">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1Bo3AtKXjQs8blmLdhqJ4we9T3_do7zFq/view?usp=sharing"
                class="about_me--social-link"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
          </div>
          <figure class="about_me--info-img">
            <img
              src={developer}
              class="about_me-img-1"
              alt="Work representation"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
