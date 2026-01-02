// funçõa padrão que retorna um booleano e recebe duas strings como parâmetro
function login(login: string, senha: string): boolean {

  if (login === "teste123" && senha === "teste1234") {

    return true;
  }

  return false;
}

console.log(login("testefelfjae", "fyeuatr7uaytgefuae"));

const loginSenhaCorretos: boolean = login("teste123", "teste1234");

if (loginSenhaCorretos) {
  console.log("Login efetuado com sucesso!");
} else {
  console.log("Login ou senha inválidos!");
}

type Cliente = {

  nome: string;
  telefone: string;
  email: string;

}

function apresentarCliente(cliente: Cliente): void {
  console.log(cliente.nome);
  console.log(cliente.email);
  console.log(cliente.telefone);
}

apresentarCliente({ nome: "Gabriel", email: "teste@teste.com", telefone: "14998776655" });

function apresentarClienteNovo({ nome, email, telefone }: Cliente): void {
  console.log(nome);
  console.log(telefone);
  console.log(email);
}

const clienteApresentar: Cliente = {
  nome: "Gabriel Rodrigues dos Santos",
  email: "teste1@teste.com",
  telefone: "(14) 998776655"
}

apresentarClienteNovo(clienteApresentar);

function somar(primeiroValor: number, segundoValor: number): number {

  return primeiroValor + segundoValor;
}

const soma: number = somar(22, 10);

console.log("Soma: " + soma);

function subtrair(primeiroValor: number, segundoValor: number): number {

  return primeiroValor - segundoValor;
}

const subtracao: number = subtrair(100, 200);

console.log(subtracao);

// arrow function
const dividir = (primeiroValor: number, segundoValor: number): number => {

  return primeiroValor / segundoValor;
}

const divisao: number = dividir(100, 2);

console.log(divisao);

const multiplicar = function (primeiroValor: number, segundoValor: number): number {

  return primeiroValor * segundoValor;
}

console.log(multiplicar(100, 2));

const cadastrar = (nome: string, telefone: string, email?: string): void => {
  console.log(nome);
  console.log(telefone);

  if (email) {
    console.log(email);
  }

}

cadastrar("Gabriel", "14998776655", "teste@teste.com");
cadastrar("Felipe", "149987876534");

// rest params
const apresentarClientes = (...clientes: string[]): void => {
  console.log(clientes);
}

apresentarClientes("Gabriel", "Pedro", "Felipe");

interface Venda {
  
  valor: number;

}

const calcularTotalVendas = (...vendas: Array<Venda>): number => {
  let somaVendas: number = 0;

  vendas.forEach((venda: Venda) => {
    somaVendas += venda.valor;
  });

  return somaVendas;
}

console.log(calcularTotalVendas(
  { valor: 100 },
  { valor: 200 },
  { valor: 300 },
  { valor: 11.98 }
));