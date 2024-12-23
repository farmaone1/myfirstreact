import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '1c170d500db84efdb064811e4021d733'
    }
}) 