import React, { useState, useEffect } from 'react'
import styles from "../styles/Nav.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {

  // const [clicked, setClicked] = useState(false);
  let changeactive = () => {
    let Icons = document.querySelectorAll(`.${styles.icon}`);
    Icons.forEach((icon) => {
      icon.classList.remove(styles['active-nav']);
    });
  }
  let activate = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
      changeactive();
      (e.target as Element).classList.add(styles['active-nav']);
  };

  return (
    <div className={styles.navigation}>
      <a href="#home">
        <AiOutlineHome className={`${styles.icon} ${styles['active-nav']}`} onClick={activate}/>
      </a>
      <a href="#about">
        <AiOutlineUser className={styles.icon} onClick={activate} />
      </a>
      <a href="#members">
        <TiGroupOutline className={styles.icon} onClick={activate}/>
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className={styles.icon} onClick={activate} />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className={styles.icon} onClick={activate}/>
      </a>
    </div>
  );
}

export default Navbar;
