/**
 * var -> variável
 * let -> variável
 * const -> contante
 */

var nomeCompleto: string = "Gabriel Rodrigues dos Santos";
let telefone: string = "14998776565";

nomeCompleto = "Gabriel Rodrigues";
telefone = "14997678086";

console.log("Nome completo: " + nomeCompleto);
console.log("Telefone: " + telefone);

const email: string = "usuario1@teste.com";

// email = "usuario2@teste.com"; -> não funciona, email é uma constante

var a: string = "teste a";

const alterarA = (): void => {
  console.log(a); // consigo acessar
  a = "teste a alterada!"; // consigo alterar o valor
}

alterarA();

console.log(a);

let b: string = "teste b";

const alterarB = (): void => {
  console.log(b);
  b = "teste b alterado!"; // consigo alterar em função
}

alterarB();

console.log(b);