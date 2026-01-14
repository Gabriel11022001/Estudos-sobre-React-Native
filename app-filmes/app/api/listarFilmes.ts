import axios from "axios";

/**
 * vou utilizar o axios para consumir a api
 * essa função vai bater no endpoint https://sujeitoprogramador.com/r-api/?api=filmes
 * e me retornar um array contendo objetos que vão representar os meus filmes
 */

const api = axios.create({
  baseURL: "https://sujeitoprogramador.com/"
});

const listarFilmesService = async () => {
  const resp = await api.get("r-api/?api=filmes");

  return resp;
}

export default listarFilmesService;