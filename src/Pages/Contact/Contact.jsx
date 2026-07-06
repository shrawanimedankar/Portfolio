import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Icons from "../../utils/icons";
import styles from "./Contact.module.css";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const form = formRef.current;

    const newErrors = {};
    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name) newErrors.name = "Please enter your name.";
    else if (name.length < 3)
      newErrors.name = "Name must be at least 3 characters.";

    if (!email) newErrors.email = "Please enter your name.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email";

    if (!subject) newErrors.subject = "Please add a subject.";

    if (!message) newErrors.message = "Please enter your message.";
    else if (message.length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) return; // stop if invalid

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_AUTOREPLY_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY,
        );

        setStatus("Your message has been sent!");
        setErrors({});
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("Sorry, we couldn't send your message. Try again.");
      });
  };

  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      <h1 className={styles.bigTitle}>
        Let's Build Something Amazing Together
      </h1>
      <p>
        Interested in collaborating or starting a new project? Let’s talk about
        how we can make it happen. I am open to exploring new projects,
        innovative ideas, and professional opportunities.
      </p>

      {/* Left */}
      <div className={styles.container}>
        <div className={styles.formSection}>
          <form ref={formRef} onSubmit={sendEmail} className={styles.formCard}>
            <h2 className={styles.formTitle}>Send a Message</h2>
            <hr className={styles.formDivider} />

            <div className={styles.formGrid}>
              <div className={styles.fieldHalf}>
                <label htmlFor="name">Name</label>
                <input
                  name="user_name"
                  type="text"
                  placeholder="Your name"
                  id="name"
                />
                {errors.name && (
                  <p className={styles.fieldError}>{errors.name}</p>
                )}
              </div>

              <div className={styles.fieldHalf}>
                <label htmlFor="email">Email</label>
                <input
                  name="user_email"
                  type="email"
                  placeholder="Your email"
                  id="email"
                />
                {errors.email && (
                  <p className={styles.fieldError}>{errors.email}</p>
                )}
              </div>

              <div className={styles.fieldFull}>
                <label htmlFor="subject">Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  id="subject"
                />
                {errors.subject && (
                  <p className={styles.fieldError}>{errors.subject}</p>
                )}
              </div>

              <div className={styles.fieldFull}>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message…"
                  id="message"
                />
                {errors.message && (
                  <p className={styles.fieldError}>{errors.message}</p>
                )}
              </div>
            </div>

            <button type="submit" className={styles.centerBtn}>
              Send
            </button>

            {status && (
              <p
                className={`${styles.status} ${
                  status.includes("sent")
                    ? styles.statusSuccess
                    : styles.statusError
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Right */}
        <div className={styles.infoSection}>
          <h2 className={styles.contactTitle}>
            <Icons.RiContactsFill />
            <span>Contact Details</span>
          </h2>

          <p>I do my best to reply within 24-48 hours.</p>

          <hr className={styles.formDivider} />

          <div className={styles.infoItem}>
            <a href="mailto:shrawanimedankar@email.com">
              <Icons.RiMailLine className={styles.infoIcon} />
              shrawanimedankar@email.com
            </a>
          </div>

          <div className={styles.infoItem}>
            <a
              href="https://www.linkedin.com/in/shrawanimedankar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.RiLinkedinFill className={styles.infoIcon} />
              linkedin.com/in/shrawanimedankar
            </a>
          </div>

          <div className={styles.infoItem}>
            <a
              href="https://www.instagram.com/_.shrawi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.RiInstagramLine className={styles.infoIcon} />
              instagram.com/_.shrawi
            </a>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.row}>
              <Icons.RiMapPinLine className={styles.infoIcon} />
              Pune, Maharashtra, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
