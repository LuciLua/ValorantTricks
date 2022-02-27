import axios from "axios";
import { useEffect, useState } from "react";

function Agents(req, res) {

    const [agents, setAgents] = useState([])

    useEffect(() => {
        axios.get("https://valorantricks.herokuapp.com/agents")
            .then(resp => resp = resp.data)
            .then(data => setAgents(data))
    }, [])

    return agents
}

export default Agents