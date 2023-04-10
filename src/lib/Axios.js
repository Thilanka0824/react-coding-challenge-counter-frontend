import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 2000
})

export default Axios