"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Genero;
(function (Genero) {
    Genero["masculino"] = "Masculino";
    Genero["feminino"] = "Feminino";
})(Genero || (Genero = {}));
var primeiroCliente = {
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    email: "teste1@teste.com",
    genero: Genero.masculino,
    telefones: [
        {
            ddd: "14",
            telefone: "998776655"
        },
        {
            ddd: "14",
            telefone: "998787654"
        }
    ]
};
console.log(primeiroCliente);
console.log(primeiroCliente.nomeCompleto);
console.log(primeiroCliente.email);
console.log(primeiroCliente.genero);
console.log(primeiroCliente.telefones);
var primeiroProduto = {
    nome: "Coca-Cola de 2 litros",
    estoque: 100,
    status: true,
    precoVenda: 12.99
};
var segundoProduto = {
    nome: "Fanta Laranja de 2 litros",
    estoque: 200,
    status: true,
    precoVenda: 100
};
var loja = {
    nome: "Loja de teste 1",
    produtos: [primeiroProduto, segundoProduto],
    apresentar: function () {
        if (this.produtos.length === 0) {
            console.log("Nenhum produto cadastrado...");
        }
        else {
            this.produtos.forEach(function (_a) {
                var nome = _a.nome, precoVenda = _a.precoVenda, status = _a.status, estoque = _a.estoque;
                console.log(nome);
                console.log(precoVenda);
                console.log(status);
                console.log(estoque);
            });
        }
    }
};
loja.apresentar();
var p1 = {
    nome: "produto 1",
    estoque: 100,
    precoVenda: 21,
    status: true
};
var p2 = {
    nome: "produto 2",
    estoque: 200,
    precoVenda: 200,
    status: true
};
var p3 = {
    nome: "produto 3",
    estoque: 23,
    precoVenda: 12.99,
    status: true
};
var primeiroItemVenda = {
    produto: p1,
    unidades: 20
};
var segundoItemVenda = {
    produto: p2,
    unidades: 100
};
var venda = {
    items: [primeiroItemVenda, segundoItemVenda],
    valorTotalVenda: 0,
    calcularValorTotalCarrinho: function () {
        var total = 0;
        this.items.forEach(function (itemVenda) {
            total += itemVenda.produto.precoVenda * itemVenda.unidades;
        });
        return total;
    }
};
venda.valorTotalVenda = venda.calcularValorTotalCarrinho();
console.log(venda);
console.log("Valor total da venda: R$" + venda.valorTotalVenda.toFixed(2));
var pessoaFisica = {
    id: 1,
    nome: "teste cliente pf 1",
    cpf: "123.456.789-00",
    email: "teste1@teste.com",
    genero: "masculino",
    telefone: "14998776644"
};
var pessoaJuridica = {
    id: 2,
    nome: "pessoa juridica 2",
    cnpj: "123.456.987/097",
    email: "teste2@teste.com",
    rendimentoAnual: 20000000,
    telefone: "14998776655"
};
console.log("pf:");
console.log(pessoaFisica);
console.log("pj:");
console.log(pessoaJuridica);
//# sourceMappingURL=interfaces.js.map