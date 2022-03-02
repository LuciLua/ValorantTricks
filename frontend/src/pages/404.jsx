// Styles
import styles from "../styles/404.module.scss";
// Next imports
import Image from "next/image";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Nada encontrado - Valorant Tricks</title>
      </Head>
      <div className={styles.container}>
        <p>Desculpe, pagina nao encontrada</p>
        <div className={styles.image}>
          <Image src={"/valorant_agents_01.png"} layout="fill" />
        </div>
      </div>
    </>
  );
}
