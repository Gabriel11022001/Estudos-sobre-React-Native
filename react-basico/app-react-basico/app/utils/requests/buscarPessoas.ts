import axios from "axios";

/**
 * em react native, nós utilizamos a lib axios
 * para fazer requisições para um back-end
 */

// buscar pessoas no servidor
const buscarPessoasService = async () => {

  // fazer uma requisição com o método http get no servidor
  return axios.get("https://randomuser.me/api/?nat=br&results=10");
}

export default buscarPessoasService;