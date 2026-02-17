import styles from "./Resume.module.css";
import resumePDF from "./Shrawani_Medankar_Resume.pdf";
import { Download } from "lucide-react";


const Resume = () => {
  return (
    <section className={styles.resumeSection} id="resume">
      <a href={resumePDF} download className={styles.downloadBtn}>
        <Download style={{ verticalAlign: "middle" }} /> Download Resume
      </a>

      <div className={styles.resumeCard}>
        <iframe //embeds another file inside the page.
          src={resumePDF + "#toolbar=0"} // hides toolbar
          title="Resume"
          width="100%"
          style={{ height: "80vh", minHeight: "500px"  }}
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
