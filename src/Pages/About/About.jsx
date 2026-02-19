import styles from "./About.module.css";
import profilePic from "../../assets/profile.jpg";
import Icons from "../../utils/icons";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.header}>
        <h2>About Me</h2>
        <p>
          Get to know my story, the projects I build, my expertise and
          interests, and what inspires me to create meaningful web experiences.
        </p>
      </div>

      <div className={styles.content}>
        {/* Left Side */}
        <div className={styles.left}>
          <div className={styles.imageBox}>
            <img src={profilePic} alt="profile" />
          </div>

          <div className={styles.stats}>
            <div className={styles.card}>
              <h3>MERN Stack </h3>
              <p>Developer</p>
            </div>

            <div className={styles.card}>
              <h3> React Specialist</h3>
              <p>Developer</p>
            </div>

            <div className={styles.card}>
              <h3>10+</h3>
              <p>Projects Built</p>
            </div>

            {/* <div className={styles.card}>
              <h3>2+</h3>
              <p>Years of Experience</p>
            </div> */}

            <div className={styles.card}>
              <h3>Available</h3>
              <p>For Work</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.right}>
          <h3>Full Stack Developer | Pune, India.</h3>
          <p>
            Hi everyone! I'm Shrawani Medankar from Pune. I hold a BCA degree
            (GPA 8.5) from MES Garware College of Commerce. During my academic
            journey, I cultivated a deep interest in building web applications
            and mastering the MERN stack and modern web technologies. Continuous
            learning and creating innovative solutions motivate me every day.
          </p>
          <p>
            I love turning ideas into interactive web experiences, building
            clean and responsive interfaces, writing efficient code, and
            exploring new technologies. My long-term goal is to grow as a
            full-stack developer and contribute to meaningful digital solutions.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new tech tools, watching
            tutorials, listening to tech podcasts, and learning from
            international shows that introduce me to different cultures and
            lifestyles. I also love traveling and discovering new places, which
            keeps me inspired and creative.
          </p>
          {/* Qualities */}
          <div className={styles.points}>
            <span>
              <Icons.RiCheckboxFill style={{ verticalAlign: "middle" }} />
              Continuous Learner
            </span>
            <span>
              <Icons.RiCheckboxFill style={{ verticalAlign: "middle" }} />
              Creative Thinker
            </span>
            <span>
              <Icons.RiCheckboxFill style={{ verticalAlign: "middle" }} />
              Always Evolving
            </span>
            <span>
              <Icons.RiCheckboxFill style={{ verticalAlign: "middle" }} />
              Self-Motivated
            </span>
            <span>
              <Icons.RiCheckboxFill style={{ verticalAlign: "middle" }} />
              Adaptable & Flexible
            </span>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className={styles.techStack}>
        <h4>Tech Stack</h4>

        <div className={styles.tags}>
          {[
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Tailwind CSS",
            "Material UI",
            "Node.js",
            "Express.js",
            "RESTful APIs",
            "MongoDB",
            "SQL",
            "Git",
            "GitHub",
            "Docker",
            "Kubernetes",
          ].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
