// forma de tipar as properties de um objeto de forma declarativa
interface Telefone {

  ddd: string;
  telefone: string;

}

enum Genero {

  masculino = "Masculino",
  feminino = "Feminino"

}

interface Cliente {

  nomeCompleto: string;
  email: string;
  telefones: Array<Telefone>;
  genero: Genero;

}

const primeiroCliente: Cliente = {
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
}

console.log(primeiroCliente);

console.log(primeiroCliente.nomeCompleto);
console.log(primeiroCliente.email);
console.log(primeiroCliente.genero);
console.log(primeiroCliente.telefones);


interface Produto {

  nome: string;
  precoVenda: number;
  status: boolean;
  estoque: number;

}

interface Loja {

  nome: string;
  produtos: Array<Produto>;
  apresentar: () => void;

}

const primeiroProduto: Produto = {
  nome: "Coca-Cola de 2 litros",
  estoque: 100,
  status: true,
  precoVenda: 12.99
}

const segundoProduto: Produto = {
  nome: "Fanta Laranja de 2 litros",
  estoque: 200,
  status: true,
  precoVenda: 100
}

const loja: Loja = {
  nome: "Loja de teste 1",
  produtos: [ primeiroProduto, segundoProduto ],
  apresentar: function (): void {
    
    if (this.produtos.length === 0) {
      console.log("Nenhum produto cadastrado...");
    } else {

      this.produtos.forEach(({ nome, precoVenda, status, estoque }: Produto): void => {
        console.log(nome);
        console.log(precoVenda);
        console.log(status);
        console.log(estoque);
      });

    }

  }
}

loja.apresentar();

// array em interfaces
interface ItemVenda {

  produto: Produto;
  unidades: number;

}

interface Venda {

  valorTotalVenda: number;
  items: Array<ItemVenda>;
  calcularValorTotalCarrinho: () => number;

}

const p1: Produto = {
  nome: "produto 1",
  estoque: 100,
  precoVenda: 21,
  status: true
}

const p2: Produto = {
  nome: "produto 2",
  estoque: 200,
  precoVenda: 200,
  status: true
}

const p3: Produto = {
  nome: "produto 3",
  estoque: 23,
  precoVenda: 12.99,
  status: true
}

const primeiroItemVenda: ItemVenda = {
  produto: p1,
  unidades: 20
}

const segundoItemVenda: ItemVenda = {
  produto: p2,
  unidades: 100
}

const venda: Venda = {
  items: [ primeiroItemVenda, segundoItemVenda ],
  valorTotalVenda: 0,
  calcularValorTotalCarrinho: function (): number {
    let total: number = 0;

    this.items.forEach((itemVenda: ItemVenda) => {
      total += itemVenda.produto.precoVenda * itemVenda.unidades;
    });

    return total;
  }
}

venda.valorTotalVenda = venda.calcularValorTotalCarrinho();

console.log(venda);
console.log("Valor total da venda: R$" + venda.valorTotalVenda.toFixed(2)); 

// extendendo uma interface
interface Pessoa {

  id: number;
  nome: string;
  telefone: string;
  email: string;

}

interface PessoaFisica extends Pessoa {

  cpf: string;
  genero: string;

}

interface PessoaJuridica extends Pessoa {

  cnpj: string;
  rendimentoAnual: number;

}

const pessoaFisica: PessoaFisica = {
  id: 1,
  nome: "teste cliente pf 1",
  cpf: "123.456.789-00",
  email: "teste1@teste.com",
  genero: "masculino",
  telefone: "14998776644"
}

const pessoaJuridica: PessoaJuridica = {
  id: 2,
  nome: "pessoa juridica 2",
  cnpj: "123.456.987/097",
  email: "teste2@teste.com",
  rendimentoAnual: 20000000,
  telefone: "14998776655"
}

console.log("pf:");
console.log(pessoaFisica);

console.log("pj:");
console.log(pessoaJuridica);