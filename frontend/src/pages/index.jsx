import Image from "next/image";
import React from "react";
// Styles
import styles from "../styles/home.module.scss";

function Home() {
  return (
    <main>
      <div className={styles.titleContent}>
        <div className={styles.outdoor}>
          <Image src={"/valorant_agents_01.png"} layout="fill" />
        </div>
        <div className={styles.subtitleAndButtons}>
          <h2>O que você sabe sobre</h2>
          <h3>Valorant?</h3>
          <div className={styles.buttonsGroup}>
            <button>Quero aprender</button>
            <button>Enviar Sugestão</button>
          </div>
        </div>
      </div>
      <p className={styles.container}>Home</p>
    </main>
  );
}

export default Home;
