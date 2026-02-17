import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo-link">
        <img src={logo} alt="logo" className="logo-img" />
        <h2 className="logo">Shrawi</h2>
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/skills" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        {/* <li>
          <Link to="/certifications" onClick={() => setIsOpen(false)}>
            Certifications
          </Link>
        </li> */}
        <li>
          <Link to="/resume" onClick={() => setIsOpen(false)}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
