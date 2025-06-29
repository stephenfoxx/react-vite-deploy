import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";


export default function App() {

 


  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
