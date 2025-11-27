type Permissao = {

  nomePermissao: string;

}

interface Usuario {

  id: number;
  nomeCompleto: string;
  email: string;
  senha: string;
  permissoes: Permissao[];

}

const gerarPermissoes = (): Array<Permissao> => {
  const permissoes: Array<Permissao> = [];

  for (let i: number = 0; i < 10; i++) {
    const permissao: Permissao = {
      nomePermissao: "Permissão de teste " + i
    }

    permissoes.push(permissao);
  }

  return permissoes;
}

const permissoes: Array<Permissao> = gerarPermissoes();

function apresentarPermissoes(permissoesApresentar: Array<Permissao>): void {
  permissoesApresentar.forEach((permissaoApresentar: Permissao) => {
    console.log(permissaoApresentar.nomePermissao.toUpperCase());
  });
}

apresentarPermissoes(permissoes);

const emailCorreto: string = "teste@teste.com";
const senhaCorreta: string = "123456";

const usuarios: Array<Usuario> = [
  {
    id: 1,
    email: "usuario1@teste.com",
    senha: "usuario1",
    nomeCompleto: "Usuário 1",
    permissoes: permissoes
  },
  {
    id: 2,
    email: "usuario2@teste.com",
    senha: "usuario2",
    nomeCompleto: "Usuário 2",
    permissoes: permissoes
  }
];

const login = ({ email, senha }: Usuario): boolean => {

  if (email == emailCorreto && senha == senhaCorreta) {

    return true;
  }

  return false;
}

const primeiroUsuario: Usuario | undefined = usuarios[ 0 ];
const segundoUsuario: Usuario | undefined = usuarios[ 1 ];

if (primeiroUsuario != undefined) {

  if (login(primeiroUsuario)) {
    console.log(`Login efetuado com sucesso: ${ primeiroUsuario.nomeCompleto }`);
  } else {
    console.log(`Login ou senha inválidos: ${ primeiroUsuario.nomeCompleto }`);
  }

}

if (segundoUsuario != undefined) {

  if (login(segundoUsuario)) {
    console.log(`Login efetuado com sucesso: ${ segundoUsuario.nomeCompleto }`);
  } else {
    console.log(`Login ou senha inválidos: ${ segundoUsuario.nomeCompleto }`);
  }

}

