import styles from "../styles/About.module.scss";
import Qualifications from "./qualifications";

function About() {
  return (
    <div id="about" className={styles["about-container"]}>
      <Qualifications />
    </div>
  );
}
export default About;
