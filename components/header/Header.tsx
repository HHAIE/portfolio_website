import styles from '../styles/_Header.module.scss';

function Header() {
  return (
    <div id={styles.home} className={styles.header}>
      <h3>
        <p>
          I<span>'</span>m
        </p>
        Hazim Hussein
      </h3>
      <h2>Junior Developer</h2>
    </div>
  );
}
export default Header;