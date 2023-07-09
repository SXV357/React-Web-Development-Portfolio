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
                  alt="Tic Tac Toe Application"
                />
                <div className="project_description">
                  <h3 className="project_description--title">Tic Tac Toe</h3>
                  <h4 className="project_description--subtitle">React</h4>
                  <p className="project_description--paragraph">
                    A dynamic reimagining of the Tic Tac Toe game included in React's official tutorial. 
                    This version offers enhanced features including time travel, 
                    allowing players to revisit past moves and peek into future ones. 
                    Additional functionalities include precise grid location tracking, 
                    sorting moves in ascending or descending order, highlighting winning squares, 
                    and draw status tracking, providing an enriched gameplay experience.
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
                      href="https://react-tic-tac-toe-jplg-194zuk7yk-shrevis2018-gmailcom.vercel.app/"
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
                  <h4 className="project_description--subtitle2">React, Firebase Authentication, Firestore</h4>
                  <p className="project_description--paragraph2">
                  An intuitive Markdown Notes App, enabling rich text editing with built-in image and quote insertion capabilities, 
                  and seamless switching between editing and preview modes. Firebase authentication enables 
                  multi-user support, with notes fetched based on the signed-in user and note creation 
                  prompts for new users. The application features robust validation to handle authentication 
                  errors and restricts interaction with the editor and view switchers when no notes are present, 
                  ensuring a smooth user experience. Users also have the liberty to sign out at their convenience.
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
                      href="https://react-markdown-notes-app-scrimba-learn-react-capston-4ogd6ztkx.vercel.app/"
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
                  An engaging digital rendition of the Tenzies dice game, allowing users to roll 
                  10 dice until all share the same value. The game tracks time and roll count for 
                  each completed round, storing users' best times and rolls for competitive play. 
                  Interaction with a die is disabled when its 'held' property is true, and dice show 
                  actual dot values, enhancing game authenticity. The application features a customized 
                  results page and prevents dice rolls until the timer has started, ensuring fair play.
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
                      href="https://react-tenzies-game-olive.vercel.app/"
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
                  A feature-rich Quiz Application, equipped with a user-friendly dark mode, providing 
                  an engaging user experience. The application keeps track of and displays users' best 
                  times across all games, offering a competitive edge. Users have the flexibility to 
                  customize their quiz experience by selecting the question type, number, category, 
                  and difficulty level. The application includes true/false questions and ensures that 
                  users answer all questions before checking their answers, promoting comprehensive engagement.
                  </p>
                  <div className="project_description--links4">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/SXV357/SXV357-Quizzical----Scrimba-Learn-React-Final-Project"
                      className="project_description--link4"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://sxv-357-quizzical-scrimba-learn-react-final-project.vercel.app/"
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