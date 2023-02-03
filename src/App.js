import "./styles.css";
import AboutMe from "./Components/AboutMe";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AboutMe />
        <TechStack />
        <Projects />
        <Routes>
        <Route path="/contactform" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
