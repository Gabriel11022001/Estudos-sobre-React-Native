interface Cliente {

  id: number;
  nome: string;
  email: string;
  telefone: string;

}

const primeiroCliente: Cliente = {
  id: 1,
  nome: "Gabriel",
  email: "gabriel@teste.com",
  telefone: "(14) 998776655"
}

/**
 * desestruturar um objeto obtendo
 * variaveis com os valores das propriedades
 * do objeto
 */
const { id, nome, telefone, email } = primeiroCliente;

console.log(id);
console.log(nome);
console.log(email);
console.log(telefone);

// id = 22; -> cria constantes, então não é possível alterar o valor

type Contato = {

  idContato: number;
  tipo: string;
  contato: string;

}

const contatoCliente: Contato = { idContato: 1, tipo: "telefone", contato: "14998987654" }

let { idContato, tipo, contato } = contatoCliente;

idContato = 22; // posso alterar pois é let

console.log(idContato);

console.log(contatoCliente); // não altera a propriedade do objeto, pois criou uma variável nova com o valor da propertie