"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var primeiroCliente = {
    id: 1,
    nome: "Gabriel",
    email: "gabriel@teste.com",
    telefone: "(14) 998776655"
};
/**
 * desestruturar um objeto obtendo
 * variaveis com os valores das propriedades
 * do objeto
 */
var id = primeiroCliente.id, nome = primeiroCliente.nome, telefone = primeiroCliente.telefone, email = primeiroCliente.email;
console.log(id);
console.log(nome);
console.log(email);
console.log(telefone);
var contatoCliente = { idContato: 1, tipo: "telefone", contato: "14998987654" };
var idContato = contatoCliente.idContato, tipo = contatoCliente.tipo, contato = contatoCliente.contato;
idContato = 22; // posso alterar pois é let
console.log(idContato);
console.log(contatoCliente); // não altera a propriedade do objeto, pois criou uma variável nova com o valor da propertie
//# sourceMappingURL=destructing.js.map