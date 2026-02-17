import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/font.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import ProjectDetails from "./Pages/Projects/ProjectDetails";
import Resume from "./Pages/Resume/Resume";
import Contact from "./Pages/Contact/Contact";
// import Experience from "./Pages/Experience/Experience";
// import Certification from "./Pages/Certification/Certification";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/experience" element={<Experience />} /> */}
        {/* <Route path="/certification" element={<Certification />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
