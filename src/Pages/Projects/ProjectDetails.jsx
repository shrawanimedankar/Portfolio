import { useParams, Link } from "react-router-dom";
import projectsData from "../Projects/projectsData";
import styles from "./ProjectDetails.module.css";
import Icons from "../../utils/icons";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) return <p>Project not found!</p>;

  return (
    <div className={styles.container}>
      <Link to="/projects" className={styles.backLink}>
        &larr; Back to Projects
      </Link>

      {/* Top Image */}
      <img src={project.image} alt={project.title} className={styles.pimage} />

      {/* Title + Key Features + Sidebar Card */}
      <div className={styles.topSection}>
        <div className={styles.titleDesc}>
          <h1>{project.title}</h1>
          {project.keyFeatures ? (
            <div className={styles.keyFeatures}>
              <h3>Key Features:</h3>
              <ul>
                {project.keyFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            
          ) : (
            <p className={styles.shortDesc}>{project.description}</p>
          )}
        </div>
        

        <div className={styles.sidebarCard}>
          <h3>Project Details</h3>
          <p className={styles.date}>
            Date: {project.date || "September 2025"}
          </p>
          <hr className={styles.divider} />
          <h4>Technologies Used</h4>
          <div className={styles.techList}>
            {project.tech.map((t, i) => (
              <span key={i} className={styles.techItem}>
                {t}
              </span>
            ))}
          </div>

          <div className={styles.buttons}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnCode}
            >
              <Icons.RiGithubFill
                style={{ verticalAlign: "middle" }}
                size={30}
              /> View Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnLive}
            >
              <Icons.RiBaseStationLine
                style={{ verticalAlign: "middle" }}
                size={30}
              /> Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      {project.projectOverview && (
        <section className={styles.section}>
          <h2>Project Overview</h2>
          <p>{project.projectOverview}</p>
        </section>
      )}

      {/* Future Improvements */}
      {project.futureImprovements && (
        <section className={styles.section}>
          <div className={styles.keyFeatures}>
          <h3>Future Improvements:</h3>
          <ul>
            {project.futureImprovements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          </div>
        </section>
      )}
    </div>
  );
}
