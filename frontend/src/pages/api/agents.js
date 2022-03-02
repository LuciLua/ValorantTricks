import axios from "axios";
import { useEffect, useState } from "react";

function loadData() {

    // const [agents, setAgents] = useState([])

    // useEffect(() => {
    //     axios.get("https://valorantricks.herokuapp.com/agents")
    //         .then(resp => resp = resp.data)
    //         .then(data => setAgents(data))
    // }, [])

    const res = axios.get("https://valorantricks.herokuapp.com/agents")
    const data = res.then(res => res.data)

    // const data = [
    //     {
    //         id: 1,
    //         name: "Sova",
    //         image: "/agents/valorant_agent_sova.png",
    //         type: "iniciador"
    //     },
    //     {
    //         id: 2,
    //         name: "Yoru",
    //         image: "/agents/valorant_agent_yoru.png",
    //         type: "duelista"
    //     }
    // ]

    return data
}

export default loadData