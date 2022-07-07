import styles from "../styles/Qualification.module.scss";

const Qualifications = () => {
  return (
    <div>
      <span className={styles["quali-text"]}>My Qualifications</span>
      <div className={styles["qualifications-container"]}>
        <div className={styles.qualification}>
          <div className={`${styles.content} ${styles.html}`}></div>
          <h1>html</h1>
        </div>
        <div className={styles.qualification}>
          <div className={`${styles.content} ${styles.css}`}></div>
          <h1>css</h1>
        </div>
        <div className={styles.qualification}>
          <div className={`${styles.content} ${styles.javascript}`}></div>
          <h1>javascript</h1>
        </div>
        <div className={styles.qualification}>
          <div className={`${styles.content} ${styles.bootstrap}`}></div>
          <h1>bootstrap</h1>
        </div>
        <div className={styles.qualification}>
          <div className={`${styles.content} ${styles.react}`}></div>
          <h1>react</h1>
        </div>
        <div className={styles.qualification}>
          <div className={`${styles.content} ${styles['c-plus-plus']}`}></div>
          <h1>c++</h1>
        </div>
        <div className={styles.qualification}>
          <div className={`${styles.content} ${styles['c-sharp']}`}></div>
          <h1>c#</h1>
        </div>
        <div className={styles.qualification}>
          <div className={`${styles.content} ${styles.kotlin}`}></div>
          <h1>kotlin</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
