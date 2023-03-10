import React from "react";
import meme from "../Images/MemeGen.png";
import tenzies from "../Images/Tenzies.png";
import quote from "../Images/QuoteGen.png";
import quiz from "../Images/Quizzical.png";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="main-title">
            Here are some of my <span className="purple-text">projects</span>
          </h1>
          <ul className="project_list">
            <li className="project">
              <div className="project-wrapper">
                <img
                  className="project_image_1"
                  src={meme}
                  alt="Meme Generator"
                />
                <div className="project_description">
                  <h3 className="project_description--title">Meme Generator</h3>
                  <h4 className="project_description--subtitle">React</h4>
                  <p className="project_description--paragraph">
                    This application fetches memes from an API containing the
                    top 100 memes. Users have the ability to type into the form
                    fields and customize the text that they see on the top and
                    the bottom of the meme image.
                  </p>
                  <div className="project_description--links">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/SXV357/Meme-Generator----Scrimba-Learn-React"
                      className="project_description--link"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://react-memegen.herokuapp.com/"
                      className="project_description--link"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project-wrapper">
                <img
                  className="project_image_1"
                  src={quote}
                  alt="Quote Generator"
                />
                <div className="project_description">
                  <h3 className="project_description--title2">
                    Quote Generator
                  </h3>
                  <h4 className="project_description--subtitle2">React</h4>
                  <p className="project_description--paragraph2">
                    A quote generator made using React that fetches quotes from
                    a random quote API and displays them alongside the author
                    for the user to view.
                  </p>
                  <div className="project_description--links2">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/SXV357/Quote-Generator"
                      className="project_description--link2"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://react-qgen.herokuapp.com/"
                      className="project_description--link2"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project-wrapper">
                <img className="project_image_1" src={tenzies} alt="Tenzies" />
                <div className="project_description">
                  <h3 className="project_description--title3">Tenzies</h3>
                  <h4 className="project_description--subtitle3">React</h4>
                  <p className="project_description--paragraph3">
                    This game application allows the user to roll a set of 10
                    dice repeatedly until all of them have the same value. The
                    user can also track the amount of time it took for them to
                    finish the game and how many times they had to roll the dice
                    in order to do so.
                  </p>
                  <div className="project_description--links3">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/SXV357/Tenzies----Scrimba-Learn-React-Capstone-Project"
                      className="project_description--link3"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://react-tenzies-game-olive.vercel.app/"
                      className="project_description--link3"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="project">
              <div className="project-wrapper">
                <img className="project_image_1" src={quiz} alt="Quizzical" />
                <div className="project_description">
                  <h3 className="project_description--title4">Quizzical</h3>
                  <h4 className="project_description--subtitle4">React</h4>
                  <p className="project_description--paragraph4">
                    A React quiz application that allows the user to take a quiz
                    and score their answers. The user can also view the results
                    of the quiz and the amount of time it took them to complete
                    the quiz.
                  </p>
                  <div className="project_description--links3">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/SXV357/Quizzical----Scrimba-Learn-React-Final_Project"
                      className="project_description--link4"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://quizzical-scrimba-learn-react-final-project.vercel.app/"
                      className="project_description--link4"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
