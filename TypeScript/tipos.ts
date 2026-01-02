// em typescript eu posso definir tipos as variáveis

let nome = "Gabriel"; // tipo string
let sobrenome: string = "Rodrigues"; // explicitando o tipo

const nomeCompleto: string = `${ nome } ${ sobrenome }`;

console.log("Nome: " + nome);
console.log("Sobrenome: " + sobrenome);
console.log("Nome completo: " + nomeCompleto);

let telefone: string = "14998776655";

telefone = "14998897645"; // let pode alterar o valor

const email: string = "teste@teste.com";

// email = "teste2@teste.com"; contante = não posso reatribuir outro valor

console.log("Telefone: " + telefone);
console.log("E-mail: " + email);

const numeros: number[] = [];

numeros.push(2);
numeros.push(21);
// numeros.push("22"); não permite pois o array é um array de

// number
const primeiroValor: number = 22;
const segundoValor: number = 11;

const soma: number = primeiroValor + segundoValor;

console.log(`A soma entre ${ primeiroValor } e ${ segundoValor } = ${ soma }`);

// operações com numbers
const subtracao: number = primeiroValor - segundoValor;
const multiplicacao: number = primeiroValor * segundoValor;
const divisao: number = primeiroValor / segundoValor;

console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

const salario: number = 3500.89;

console.log(salario);
console.log(salario.toFixed(2));

// union types -> poder atribuir mais de um tipo a uma variavel
type Telefone = {

  numero: string;

}

let contato: string | Telefone = "(14) 998776655"

console.log(typeof(contato));
console.log(contato);

contato = {
  numero: "(14) 998776655"
}

console.log(typeof(contato));
console.log(contato);

// any -> a variável pode ser de qualquer tipo -> evitar utilizar
let valor: any = "teste";

console.log(valor);

valor = 100;

console.log(valor);

valor = true;

console.log(valor);

// boleano
const possuiCnh: boolean = true;

if (possuiCnh) {
  console.log("Possui cnh!");
} else {
  console.log("Não possui cnh!");
}

// arrays
const valoresNumericos: number[] = [11, 22, 334, 12.98];

console.log(valoresNumericos);

interface Produto {

  nome: string;
  precoVenda: number;

}

// array de objetos
const produtos: Array<Produto> = [];

produtos.push({ nome: "Produto 1", precoVenda: 11.32 });
produtos.push({ nome: "Produto 2", precoVenda: 20.99 });
produtos.push({ nome: "Produto 3", precoVenda: 100 });

console.log(produtos);

produtos.forEach(({ nome, precoVenda }: Produto) => {
  console.log("Nome: " + nome);
  console.log("Preço de venda: R$" + precoVenda.toFixed(2));
});

const arrayVariosTipos: Array<string | number | boolean> = ["Gabriel", false, 200];

console.log(arrayVariosTipos);

const nomes: Array<string> = ["Gabriel", "Pedro", "Maria", "Eduardo", "Gustavo", "Fernanda"];

// filtrar o array e retornar somente alguns elementos para um array novo
const nomesComecamLetraG: Array<string> = nomes.filter((nome: string) => {

  if (nome[0]?.toLowerCase() === "g") {

    return nome;
  }

});

console.log(nomes);
console.log(nomesComecamLetraG);

// object
const novoUsuario: object = {
  id: 1,
  nome: "Gabriel Rodrigues dos Santos",
  email: "teste1@teste.com",
  ativo: true
}

console.log(novoUsuario);

// enum
enum Genero {

  masculino,
  feminino

}

const masculino: Genero = Genero.masculino;
const feminino: Genero = Genero.feminino;

console.log(masculino);
console.log(feminino);

enum Cor {

  vermelho = "red",
  preto = "#000",
  branco = "#fff",
  amarelo = "yellow"

}

const corPrincipal: Cor = Cor.preto;
const corSecundaria: Cor = Cor.branco;
const corTerciaria: Cor = Cor.vermelho;
const corQuartenaria: Cor = Cor.amarelo;

console.log(corPrincipal);
console.log(corSecundaria);
console.log(corTerciaria);
console.log(corQuartenaria);