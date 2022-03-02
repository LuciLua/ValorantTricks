// React
import React from "react";
// Styles
import styles from "./footer.module.scss";
// Components
import Li from "./items/Li";
// Assets
// import { GiThink, GiMagickTrick } from "react-icons/gi";

function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.ulPages}>
        <h1>Pages</h1>
        <ul>
          <Li label="Home" href="/" />
          <Li label="Agentes" href="/agents" />
          <Li label="Dicas" href="/tricks" />
          <Li label="Perfil" href="/profile" />
        </ul>
      </div>
      <div className={styles.ulConheca}>
        <h1>Conheça</h1>
        <ul>
          <Li label="GitHub" href="https://github.com/LuciLua" />
          <Li label="Portfólio" href="https://luci-lua.tk/" />
          <Li
            label="LinkedIn"
            href="https://www.linkedin.com/in/l%C3%BAcia-guelber-837a50185/"
          />
        </ul>
      </div>
      <div className={styles.logo}>
        <span>Valorant Tricks</span>
      </div>
    </footer>
  );
}

export default Footer;
