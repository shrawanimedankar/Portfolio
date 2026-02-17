import styles from "./Projects.module.css";
import Icons from "../../utils/icons";
import projectsData from "../Projects/projectsData";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <Link to={`/project/${project.id}`}>
        <img src={project.image} alt={project.title} />
      </Link>

      <div className={styles.titleRow}>
        <h3 className={styles.title}>{project.title}</h3>

        <div className={styles.linksInline}>
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <Icons.RiBaseStationLine
              style={{ verticalAlign: "middle" }}
              size={30}
            />
            Live
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Icons.RiGithubFill style={{ verticalAlign: "middle" }} size={30} />
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <span className={styles.type}>{project.category}</span>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tech}>
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
