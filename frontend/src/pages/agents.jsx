import React from "react";
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

function Agents() {
  const listAgents = AgentsAPI();

  return (
    <>
      <main>
        <div className={styles.container}>
          {listAgents.map((agent) => {
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
        </div>
      </main>
    </>
  );
}

export default Agents;
