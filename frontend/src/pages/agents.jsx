// React imports and Hooks
import React, { useEffect, useState } from "react";
import Image from "next/image";
// Styles
import styles from "../styles/agents.module.scss";
// API
import loadData from "./api/agents";
// Assets
import {
  GiStarMedal,
  GiCrossedSwords,
  GiStrikingArrows,
  GiCherish,
} from "react-icons/gi";
// Next
import Head from "next/head";
// Skeletons
import SkeletonAgents from "../components/Skeletons/SkeletonAgents";

// getStaticProps So roda no lado do servidor
export async function getStaticProps(ctx){
  const data = await loadData()
  return{
    props: {
      agentsProps: data
    },
    // revalidate: 60*5 // 5 minutos
    revalidate: 60 // 1 minuto
  }
}

// o Next.js busca esse arquivo JSON (pré-calculado no momento da compilação) e o usa como adereços para o componente da página. Isso significa que as transições de página do lado do cliente não serão chamadas getStaticProps, pois apenas o JSON exportado é usado.


function Agents({ agentsProps }) {
  
  const agentsList = agentsProps
  
  const [agents, setAgents] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setAgents({
        agentsProps
      })
    }, 2000);
  });

  return (
    <>
      <Head>
        <title>Agentes - Valorant Tricks</title>
      </Head>
      <main>
        <div className={styles.container}>
          {agents &&
            agentsList.map((agent) => {
              return (
                <div
                  className={styles.agent}
                  key={agent.id}
                  type={`${agent.type}`}
                >
                  <span className={styles.titleAgent}>{agent.name}</span>
                  <div className={styles.types}>
                    <span type={`${agent.type}`} className={styles.typeIcon}>
                      {agent.type == "controlador" ? <GiStarMedal /> : ""}
                      {agent.type == "duelista" ? <GiCrossedSwords /> : ""}
                      {agent.type == "iniciador" ? <GiStrikingArrows /> : ""}
                      {agent.type == "sentinela" ? <GiCherish /> : ""}
                    </span>
                    <span type={`${agent.type}`} className={styles.typeName}>
                      {agent.type}
                    </span>
                  </div>
                  <div className={styles.biography}>
                    <span>
                      {agent.biography}
                    </span>
                  </div>
                  <div className={styles.agentImage}>
                    <Image src={agent.image} layout="fill" />
                  </div>
                </div>
              );
            })}

          {!agents &&
            [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((n) => (
                <SkeletonAgents theme="light" key={n} />
            ))}
        </div>
      </main>
    </>
  );
}

export default Agents;
