import React from "react";
import css from "../Images/CSS.png";
import html from "../Images/HTML.png";
import js from "../Images/JS.png";
import jsx from "../Images/JSX.png";
import typescript from "../Images/Typescript.png";

export default function TechStack() {
  return (
    <section id="tech-stack">
      <div className="container">
        <div className="row">
          <h1 className="main-title">
            This is my <span className="purple-text">technology stack</span>
          </h1>
          <div className="languages">
            <div className="language">
              <figure className="lang_image-wrapper">
                <img className="img-1" src={html} alt="HTML Logo" />
              </figure>
              <span className="language_name">HTML</span>
            </div>
            <div className="language">
              <figure className="lang_image-wrapper">
                <img className="img-1" src={css} alt="CSS Logo" />
              </figure>
              <span className="language_name">CSS</span>
            </div>
            <div className="language">
              <figure className="lang_image-wrapper">
                <img className="img-1" src={js} alt="Javascript Logo" />
              </figure>
              <span className="language_name">Javascript</span>
            </div>
            <div className="language">
              <figure className="lang_image-wrapper">
                <img className="img-1" src={jsx} alt="React Logo" />
              </figure>
              <span className="language_name">React</span>
            </div>
            <div className="language">
              <figure className="lang_image-wrapper">
                <img className="img-1" src={typescript} alt="Typescript Logo" />
              </figure>
              <span className="language_name">Typescript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}