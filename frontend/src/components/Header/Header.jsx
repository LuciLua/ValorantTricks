import React from 'react'
// Styles
import styles from "./header.module.scss";
// Components
import Li from "./ItemList/Li";
// Assets
import { HiMenu, HiUser, HiHome } from "react-icons/hi";
import { GiThink, GiMagickTrick } from "react-icons/gi";
import User from './ItemList/User';

function Header() {
  return (
      <header className={`${styles.header} container`}>
        <div className={styles.logo}>
          <span>Valorant</span>
        </div>
        <nav className={styles.menu}>
          <ul>
            <Li href="/" icon={<HiHome/>}>Home</Li>
            <Li href="/agents" icon={<GiThink/>}>Agentes</Li>
            <Li href="/tricks" icon={<GiMagickTrick/>}>Dicas</Li>
            <Li href="/profile" user="user" icon={<User/>}>Himpero</Li>
            <Li href="/" icon={<HiMenu/>}>Menu</Li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
