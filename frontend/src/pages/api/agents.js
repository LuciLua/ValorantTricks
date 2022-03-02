// Axios
import axios from "axios";

function loadData() {
    const res = axios.get("https://valorantricks.herokuapp.com/agents")
    const data = res.then(res => res.data)
    return data
}
export default loadData