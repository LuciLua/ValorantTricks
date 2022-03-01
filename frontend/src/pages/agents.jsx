import React, { useEffect, useState } from "react";
import Image from "next/image";
// Styles
import styles from "../styles/agents.module.scss";

// API
import AgentsAPI from "./api/agents";

// Assets
import {
  GiStarMedal,
  GiCrossedSwords,
  GiStrikingArrows,
  GiCherish,
} from "react-icons/gi";

import Head from "next/head";
import SkeletonAgents from "../components/Skeletons/SkeletonAgents";

function Agents() {
  const listAgents = AgentsAPI();

  const [agents, setAgents] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const list = listAgents;
      setAgents(list);
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
            listAgents.map((agent) => {
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
                    </span>{" "}
                    <span type={`${agent.type}`} className={styles.typeName}>
                      {agent.type}
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
