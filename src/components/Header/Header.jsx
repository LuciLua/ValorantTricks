import React from 'react'
// Styles
import styles from "./header.module.scss";
// Components
import Li from "./ItemList/Li";
// Assets
import { HiHome } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import { GiThink, GiMagickTrick } from "react-icons/gi";

function Header() {
  return (
      <header className={`${styles.header} container`}>
        <div className={styles.logo}>
          <span>Valorant</span>
        </div>
        <nav className={styles.menu}>
          <ul>
            <Li href="/" icon={<HiHome/>}>Home</Li>
            <Li href="/agents" icon={<GiThink/>}>Agents</Li>
            <Li href="/tricks" icon={<GiMagickTrick/>}>Tricks</Li>
            <Li href="/" icon={<HiMenu/>}>Menu</Li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
