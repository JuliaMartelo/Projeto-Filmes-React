import axios from "axios";

const apiPorta = "5063";

//apiLocal ela recebe o endereço da api
const apiLocal = `http://localhost:${apiPorta}/api/`;
// const apiLocal = `http://localhost:5008/api/`;

const api = axios.create({
    baseURL: apiLocal
});

export default api;