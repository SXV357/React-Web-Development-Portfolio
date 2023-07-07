import React from "react";
import tenzies from "../Images/Tenzies.png";
import quiz from "../Images/Quizzical.png";
import notesApp from "../Images/NotesApp.png";
import TicTacToe from "../Images/TicTacToe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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
                  src={TicTacToe}
                  alt="Meme Generator"
                />
                <div className="project_description">
                  <h3 className="project_description--title">Tic Tac Toe</h3>
                  <h4 className="project_description--subtitle">React</h4>
                  <p className="project_description--paragraph">
                    This application is a modified version of Tic Tac Toe where
                    the user is able to travel in time to either view the moves
                    that they made in the past, or the moves that they made in
                    the future. This project will soon be updated with
                    functionalities such as viewing exact move locations, being
                    able to sort them, and winning squares being highlighted.
                  </p>
                  <div className="project_description--links">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/SXV357/React-Tic-Tac-Toe"
                      className="project_description--link"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://react-tic-tac-toe-8xlp-qfosydh8c-shrevis2018-gmailcom.vercel.app/"
                      className="project_description--link"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project-wrapper">
                <img
                  className="project_image_1"
                  src={notesApp}
                  alt="Notes App"
                />
                <div className="project_description">
                  <h3 className="project_description--title2">
                    Markdown Notes App
                  </h3>
                  <h4 className="project_description--subtitle2">React</h4>
                  <p className="project_description--paragraph2">
                    A notes app powered by React Markdown that allows the user
                    to access basic word formatting features, including the
                    ability to add images and quotes. The user also has the
                    ability to switch views at any time, from the editing mode
                    to the preview mode and vice-versa.
                  </p>
                  <div className="project_description--links2">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/SXV357/React-Markdown-Notes-App---Scrimba-Learn-React-Capstone-Project"
                      className="project_description--link2"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://react-markdown-notes-app-scrimba-learn-react-capstone-project.vercel.app"
                      className="project_description--link2"
                    >
                      <FontAwesomeIcon icon={faLink} />
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
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://react-tenzies-game-23ouls8up-shrevis2018-gmailcom.vercel.app/"
                      className="project_description--link3"
                    >
                      <FontAwesomeIcon icon={faLink} />
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
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://quizzical-scrimba-learn-react-final-project.vercel.app/"
                      className="project_description--link4"
                    >
                      <FontAwesomeIcon icon={faLink} />
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