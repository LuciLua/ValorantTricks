// React
import React from "react";
// Styles
import styles from "../styles/tricks.module.scss";
// Next imports
import Head from "next/head";

function Tricks() {
  return (
    <>
      <Head>
        <title>Dicas - Valorant Tricks</title>
      </Head>
      <main>
        <p className={styles.container}>Tricks</p>
      </main>
    </>
  );
}

export default Tricks;
