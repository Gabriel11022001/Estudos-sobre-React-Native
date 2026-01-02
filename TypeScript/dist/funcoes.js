"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// funçõa padrão que retorna um booleano e recebe duas strings como parâmetro
function login(login, senha) {
    if (login === "teste123" && senha === "teste1234") {
        return true;
    }
    return false;
}
console.log(login("testefelfjae", "fyeuatr7uaytgefuae"));
var loginSenhaCorretos = login("teste123", "teste1234");
if (loginSenhaCorretos) {
    console.log("Login efetuado com sucesso!");
}
else {
    console.log("Login ou senha inválidos!");
}
function apresentarCliente(cliente) {
    console.log(cliente.nome);
    console.log(cliente.email);
    console.log(cliente.telefone);
}
apresentarCliente({ nome: "Gabriel", email: "teste@teste.com", telefone: "14998776655" });
function apresentarClienteNovo(_a) {
    var nome = _a.nome, email = _a.email, telefone = _a.telefone;
    console.log(nome);
    console.log(telefone);
    console.log(email);
}
var clienteApresentar = {
    nome: "Gabriel Rodrigues dos Santos",
    email: "teste1@teste.com",
    telefone: "(14) 998776655"
};
apresentarClienteNovo(clienteApresentar);
function somar(primeiroValor, segundoValor) {
    return primeiroValor + segundoValor;
}
var soma = somar(22, 10);
console.log("Soma: " + soma);
function subtrair(primeiroValor, segundoValor) {
    return primeiroValor - segundoValor;
}
var subtracao = subtrair(100, 200);
console.log(subtracao);
// arrow function
var dividir = function (primeiroValor, segundoValor) {
    return primeiroValor / segundoValor;
};
var divisao = dividir(100, 2);
console.log(divisao);
var multiplicar = function (primeiroValor, segundoValor) {
    return primeiroValor * segundoValor;
};
console.log(multiplicar(100, 2));
var cadastrar = function (nome, telefone, email) {
    console.log(nome);
    console.log(telefone);
    if (email) {
        console.log(email);
    }
};
cadastrar("Gabriel", "14998776655", "teste@teste.com");
cadastrar("Felipe", "149987876534");
// rest params
var apresentarClientes = function () {
    var clientes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        clientes[_i] = arguments[_i];
    }
    console.log(clientes);
};
apresentarClientes("Gabriel", "Pedro", "Felipe");
var calcularTotalVendas = function () {
    var vendas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vendas[_i] = arguments[_i];
    }
    var somaVendas = 0;
    vendas.forEach(function (venda) {
        somaVendas += venda.valor;
    });
    return somaVendas;
};
console.log(calcularTotalVendas({ valor: 100 }, { valor: 200 }, { valor: 300 }, { valor: 11.98 }));
//# sourceMappingURL=funcoes.js.map