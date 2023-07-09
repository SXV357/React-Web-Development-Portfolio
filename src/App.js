import React, {Fragment} from "react"
import AboutMe from "./Components/AboutMe";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import "./styles.css";

export default function App() {
  return (
    <Fragment>
      <AboutMe />
      <TechStack />
      <Projects />
      <Footer />
    </Fragment>
  );
}