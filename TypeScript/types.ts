type IDUsuario = string | number | null;

const apresentarIdUsuario = (idUsuario: IDUsuario): void => {
  console.log(idUsuario);
}

apresentarIdUsuario("1234");
apresentarIdUsuario(12345);
apresentarIdUsuario(null);

// posso criar um type igual a uma interface
type Cliente = {

  id: number;
  nome: string;
  telefone: string;

}

const cliente: Cliente = {
  id: 1,
  nome: "Gabriel Rodrigues dos Santos",
  telefone: "14998776655"
}

console.log(cliente);

// intersection
type Produto = {
  nome: string;
  precoVenda: number;
}

type ProdutoInfo = {
  status: boolean;
}

type ProdutoFinal = Produto & ProdutoInfo;

const produto: ProdutoFinal = {
  nome: "produto de teste 1",
  precoVenda: 200,
  status: true
}

console.log(produto);