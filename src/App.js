import "./styles.css";
import AboutMe from "./Components/AboutMe";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <AboutMe />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}
