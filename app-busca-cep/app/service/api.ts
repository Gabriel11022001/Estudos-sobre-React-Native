import axios from "axios";

const urlBase: string = "https://viacep.com.br/ws/";

const api = axios.create({ baseURL: urlBase });

export default api;
