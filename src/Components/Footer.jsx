import styles from "./Footer.module.css";
import Icons from "../utils/icons";


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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          {/* <li><a href="/certifications">Certifications</a></li> */}
          {/* <li><a href="/experience">Experience</a></li> */}
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* Right */}
        <div className={styles.social}>
          <a href="mailto:shrawanimedankar@email.com">
            <Icons.RiMailLine />
          </a>
          <a href="https://www.linkedin.com/in/shrawanimedankar">
            <Icons.RiLinkedinFill />
          </a>
          <a href="https://github.com/shrawanimedankar">
            <Icons.RiGithubFill />
          </a>
          <a href="https://www.instagram.com/_.shrawi">
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
