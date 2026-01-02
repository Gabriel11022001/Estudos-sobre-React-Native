"use strict";
// em typescript eu posso definir tipos as variáveis
Object.defineProperty(exports, "__esModule", { value: true });
var nome = "Gabriel"; // tipo string
var sobrenome = "Rodrigues"; // explicitando o tipo
var nomeCompleto = "".concat(nome, " ").concat(sobrenome);
console.log("Nome: " + nome);
console.log("Sobrenome: " + sobrenome);
console.log("Nome completo: " + nomeCompleto);
var telefone = "14998776655";
telefone = "14998897645"; // let pode alterar o valor
var email = "teste@teste.com";
// email = "teste2@teste.com"; contante = não posso reatribuir outro valor
console.log("Telefone: " + telefone);
console.log("E-mail: " + email);
var numeros = [];
numeros.push(2);
numeros.push(21);
// numeros.push("22"); não permite pois o array é um array de
// number
var primeiroValor = 22;
var segundoValor = 11;
var soma = primeiroValor + segundoValor;
console.log("A soma entre ".concat(primeiroValor, " e ").concat(segundoValor, " = ").concat(soma));
// operações com numbers
var subtracao = primeiroValor - segundoValor;
var multiplicacao = primeiroValor * segundoValor;
var divisao = primeiroValor / segundoValor;
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
var salario = 3500.89;
console.log(salario);
console.log(salario.toFixed(2));
var contato = "(14) 998776655";
console.log(typeof (contato));
console.log(contato);
contato = {
    numero: "(14) 998776655"
};
console.log(typeof (contato));
console.log(contato);
// any -> a variável pode ser de qualquer tipo -> evitar utilizar
var valor = "teste";
console.log(valor);
valor = 100;
console.log(valor);
valor = true;
console.log(valor);
// boleano
var possuiCnh = true;
if (possuiCnh) {
    console.log("Possui cnh!");
}
else {
    console.log("Não possui cnh!");
}
// arrays
var valoresNumericos = [11, 22, 334, 12.98];
console.log(valoresNumericos);
// array de objetos
var produtos = [];
produtos.push({ nome: "Produto 1", precoVenda: 11.32 });
produtos.push({ nome: "Produto 2", precoVenda: 20.99 });
produtos.push({ nome: "Produto 3", precoVenda: 100 });
console.log(produtos);
produtos.forEach(function (_a) {
    var nome = _a.nome, precoVenda = _a.precoVenda;
    console.log("Nome: " + nome);
    console.log("Preço de venda: R$" + precoVenda.toFixed(2));
});
var arrayVariosTipos = ["Gabriel", false, 200];
console.log(arrayVariosTipos);
var nomes = ["Gabriel", "Pedro", "Maria", "Eduardo", "Gustavo", "Fernanda"];
// filtrar o array e retornar somente alguns elementos para um array novo
var nomesComecamLetraG = nomes.filter(function (nome) {
    var _a;
    if (((_a = nome[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "g") {
        return nome;
    }
});
console.log(nomes);
console.log(nomesComecamLetraG);
// object
var novoUsuario = {
    id: 1,
    nome: "Gabriel Rodrigues dos Santos",
    email: "teste1@teste.com",
    ativo: true
};
console.log(novoUsuario);
// enum
var Genero;
(function (Genero) {
    Genero[Genero["masculino"] = 0] = "masculino";
    Genero[Genero["feminino"] = 1] = "feminino";
})(Genero || (Genero = {}));
var masculino = Genero.masculino;
var feminino = Genero.feminino;
console.log(masculino);
console.log(feminino);
var Cor;
(function (Cor) {
    Cor["vermelho"] = "red";
    Cor["preto"] = "#000";
    Cor["branco"] = "#fff";
    Cor["amarelo"] = "yellow";
})(Cor || (Cor = {}));
var corPrincipal = Cor.preto;
var corSecundaria = Cor.branco;
var corTerciaria = Cor.vermelho;
var corQuartenaria = Cor.amarelo;
console.log(corPrincipal);
console.log(corSecundaria);
console.log(corTerciaria);
console.log(corQuartenaria);
//# sourceMappingURL=tipos.js.map