import React from "react";
import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";

const SkillCategory = ({ category, skills }) => {
  if (skills.length === 0) return null;

  return (
    <div className={styles.category}>
      <h3>{category}</h3>
      <div className={styles.skillGrid}>
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
