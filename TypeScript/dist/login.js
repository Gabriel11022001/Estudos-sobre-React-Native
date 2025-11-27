"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gerarPermissoes = function () {
    var permissoes = [];
    for (var i = 0; i < 10; i++) {
        var permissao = {
            nomePermissao: "Permissão de teste " + i
        };
        permissoes.push(permissao);
    }
    return permissoes;
};
var permissoes = gerarPermissoes();
function apresentarPermissoes(permissoesApresentar) {
    permissoesApresentar.forEach(function (permissaoApresentar) {
        console.log(permissaoApresentar.nomePermissao.toUpperCase());
    });
}
apresentarPermissoes(permissoes);
var emailCorreto = "teste@teste.com";
var senhaCorreta = "123456";
var usuarios = [
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
var login = function (_a) {
    var email = _a.email, senha = _a.senha;
    if (email == emailCorreto && senha == senhaCorreta) {
        return true;
    }
    return false;
};
var primeiroUsuario = usuarios[0];
var segundoUsuario = usuarios[1];
if (primeiroUsuario != undefined) {
    if (login(primeiroUsuario)) {
        console.log("Login efetuado com sucesso: ".concat(primeiroUsuario.nomeCompleto));
    }
    else {
        console.log("Login ou senha inv\u00E1lidos: ".concat(primeiroUsuario.nomeCompleto));
    }
}
if (segundoUsuario != undefined) {
    if (login(segundoUsuario)) {
        console.log("Login efetuado com sucesso: ".concat(segundoUsuario.nomeCompleto));
    }
    else {
        console.log("Login ou senha inv\u00E1lidos: ".concat(segundoUsuario.nomeCompleto));
    }
}
//# sourceMappingURL=login.js.map