import styles from "../styles/About.module.scss";
import Qualification from "./qualification";

function About() {
  return (
    <div id="about" className={styles["about-container"]}>
      <Qualification />
    </div>
  );
}
export default About;
