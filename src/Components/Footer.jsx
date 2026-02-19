import styles from "./Footer.module.css";
import Icons from "../utils/icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.brand}>
          <h2>Shrawani Medankar</h2>
          <p>Full Stack Developer</p>
        </div>

        {/* Middle */}
        <ul className={styles.links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right */}
        <div className={styles.social}>
          <a href="mailto:shrawanimedankar@email.com">
            <Icons.RiMailLine />
          </a>

          <a
            href="https://www.linkedin.com/in/shrawanimedankar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.RiLinkedinFill />
          </a>

          <a
            href="https://github.com/shrawanimedankar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.RiGithubFill />
          </a>

          <a
            href="https://www.instagram.com/_.shrawi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.RiInstagramLine />
          </a>
        </div>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} &nbsp;Shrawani Medankar. &nbsp; All rights
        reserved.
      </p>
    </footer>
  );
}
