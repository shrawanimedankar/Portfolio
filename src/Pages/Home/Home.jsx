import styles from "./Home.module.css";
import profilePic from "../../assets/profile.jpg";
import Icons from "../../utils/icons";
import resumePDF from "../Resume/Shrawani_Medankar_Resume.pdf";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.homeContainer}>
        {/* Left side: text */}
        <div className={styles.homeContent}>
          <p className={styles.greet}>👋 Hi, I'm </p>
          <p className={styles.name}>Shrawani Medankar</p>
          <h2 className={styles.titleRotate}>
            <span>MERN Stack Developer</span>
            <span>React Developer</span>
            <span>Software Developer</span>
            <span>Frontend Developer</span>
          </h2>

          <p className={styles.para}>
            I create web apps that don't just shine visually, they're as
            functional as they are gorgeous. I love turning code into seamless,
            interactive experiences. My focus is on building modern, responsive,
            and easy-to-use web applications.
          </p>

          <div className={styles.homeButtons}>
            <a href={resumePDF} download className={styles.btn}>
              <Download style={{ verticalAlign: "middle" }} /> Download Resume
            </a>

            <Link to="/contact" className={`${styles.btn} ${styles.outline}`}>
              <Icons.RiMessage2Fill size={25} /> Reach Out Anytime
            </Link>
          </div>
        </div>

        {/* Right side: image */}
        <div className={styles.homeImage}>
          <div className={styles.imageWrapper}>
            <span className={styles.statusBadge}>Open to Opportunities</span>
            <img src={profilePic} alt="Shrawani" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
