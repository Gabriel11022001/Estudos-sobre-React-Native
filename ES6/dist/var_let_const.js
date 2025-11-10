"use strict";
/**
 * var -> variável
 * let -> variável
 * const -> contante
 */
Object.defineProperty(exports, "__esModule", { value: true });
var nomeCompleto = "Gabriel Rodrigues dos Santos";
var telefone = "14998776565";
nomeCompleto = "Gabriel Rodrigues";
telefone = "14997678086";
console.log("Nome completo: " + nomeCompleto);
console.log("Telefone: " + telefone);
var email = "usuario1@teste.com";
// email = "usuario2@teste.com"; -> não funciona, email é uma constante
var a = "teste a";
var alterarA = function () {
    console.log(a); // consigo acessar
    a = "teste a alterada!"; // consigo alterar o valor
};
alterarA();
console.log(a);
var b = "teste b";
var alterarB = function () {
    console.log(b);
    b = "teste b alterado!"; // consigo alterar em função
};
alterarB();
console.log(b);
//# sourceMappingURL=var_let_const.js.map