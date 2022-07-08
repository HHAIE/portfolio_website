import styles from '../styles/Home.module.scss';
import Buttons from './button';
import { BsMouse } from 'react-icons/bs';
import Image from 'next/image';

function Home() {
  let activate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    (e.target as Element).classList.toggle(styles.active);
  };
  
  return (
    <div id='home' className={styles['home-container']}>
      <div className={styles['logo']}>
        <div className={styles['hover-show']} onClick={activate}>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
        </div>

        <Image src={require('../props/Pimg.jpg')} alt='' layout='fill'/>
      </div>

      <a href='#footer' className={styles['scroll-down']}>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className={styles.scroll} />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id
          quos deserunt, maxime sint sunt tempore quidem ad praesentium itaque,
          aspernatur, magnam culpa iste adipisci?
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
