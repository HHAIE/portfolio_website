import styles from "../styles/Button.module.scss";

function Buttons() {
  return (
    <div className={styles['button-container']}>
      <a href="#about" className={`${styles.btn} ${styles.pri}`}>
        Learn more
      </a>
      <a href="#contact" className={`${styles.btn} ${styles.sec}`}>
        Get in Touch
      </a>
    </div>
  );
}

export default Buttons;
