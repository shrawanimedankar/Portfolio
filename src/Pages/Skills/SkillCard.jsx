import styles from "./Skills.module.css";

const SkillCard = ({ name, icon }) => {
  return (
    <div className={styles.skillCard}>
      <span>{name}</span>
      <img src={icon} alt={name} className={styles.icon} />
    </div>
  );
};

export default SkillCard;
