import React, { useState } from "react";
import styles from "./Skills.module.css";
import SkillCategory from "./SkillCategory";
import {
  reactIcon,
  htmlIcon,
  cssIcon,
  javascript,
  bootstrapIcon,
  tailwindCssIcon,
  materialUiIcon,
  nodeJsIcon,
  expressJsIcon,
  restApiIcon,
  mongoDbIcon,
  sqlIcon,
  gitIcon,
  dockerIcon,
  kubernetesIcon,
} from "./Assets";

const skillData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: reactIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: javascript },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "Tailwind CSS", icon: tailwindCssIcon },
      { name: "Material UI", icon: materialUiIcon },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: nodeJsIcon },
      { name: "Express.js", icon: expressJsIcon },
      { name: "RESTful API", icon: restApiIcon },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: mongoDbIcon },
      { name: "MySQL", icon: sqlIcon },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", icon: gitIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "Kubernetes", icon: kubernetesIcon },
    ],
  },
];

const Skills = () => {
  const [search, setSearch] = useState("");

  return (
    <section className={styles.skillsSection}>
      <div className={styles.header}>
        <h2>MY SKILLS</h2>
        <p>Tools, Technologies & Expertise Behind My Work</p>
        <input
          type="text"
          placeholder="Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
      </div>

      <div className={styles.categories}>
        {skillData.map((category) => (
          <SkillCategory
            key={category.category}
            category={category.category}
            skills={category.skills.filter((skill) =>
              skill.name.toLowerCase().includes(search.toLowerCase()),
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
