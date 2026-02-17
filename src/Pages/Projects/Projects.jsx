import { useState } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import projectsData from "../Projects/projectsData";

export default function Projects() {
  const [category, setCategory] = useState("all"); //Tracks which category button is selected (all, frontend, backend, fullstack)
  const [search, setSearch] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchCategory = category === "all" || project.category === category;

    const matchSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.tech.join("").toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className={styles.projects}>
      <h2>My Projects</h2>
      <p>
        View my work showcasing my technical skills and hands-on experience.
      </p>

      {/* Filters */}
      <div className={styles.filters}>
        {["all", "frontend", "backend", "fullstack"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={category === item ? styles.active : ""}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        className="search"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Grid */}
      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
