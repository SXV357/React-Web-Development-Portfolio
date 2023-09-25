import React from "react";
import profile from "../Images/new-profile-pic.jpg";
import developer from "../Images/undraw_web_developer_re_h7ie.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

export default function AboutMe() {
  return (
    <section id="about-me">
      <nav>
        <div className="main-logo">Shreyas Viswanathan</div>
        <ul className="navigation_list">
          <li className="link">
            <a
              href="#tech-stack"
              className="navigation_list--anchor link-hover"
            >
              Languages
            </a>
          </li>
          <li className="link">
            <a href="#projects" className="navigation_list--anchor link-hover">
              Projects
            </a>
          </li>
          <li id="contact-btn" className="link">
            <a
              href="mailto:shreyasviswanathan1@gmail.com"
              className="navigation_list--anchor navigation_list--anchor--main link-hover-contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-container">
        <div className="about_me--info row">
          <div className="about_me--info--container">
            <figure className="about_me--picture">
              <img
                src={profile}
                className="about_me--img"
                alt = ""
              />
            </figure>
            <h1 className="about_me--title">
              Hey! I'm{" "}
              <span className="about_me--info-purple-text">
                Shreyas Viswanathan
              </span>
              &nbsp;<span className="hand">👋</span>
            </h1>
            <p className="about_me--info-paragraph">
              I'm a{" "}
              <strong className="about_me--info-purple-text">
                web developer
              </strong>{" "}
              with a passion for building beautiful and responsive websites that
              enhance the overall user experience.
            </p>
            <div className="about_me--socials">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/shrevis/"
                className="about_me--social-link"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SXV357"
                className="about_me--social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="mailto:shreyasviswanathan1@gmail.com"
                className="about_me--social-link"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1xt20NaRs4DCrI9is_qtG1geEsWPkB_I7/view?usp=sharing"
                className="about_me--social-link"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
          </div>
          <figure className="about_me--info-img">
            <img
              src={developer}
              className="about_me-img-1"
              alt = ""
            />
          </figure>
        </div>
      </div>
    </section>
  );
}