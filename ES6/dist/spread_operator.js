"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// unindo arrays
var nomes = ["Gabriel", "Pedro", "José"];
var sobrenomes = ["Rodrigues", "Roberto", "Bonifácio"];
var pessoas = __spreadArray(__spreadArray([], nomes, true), sobrenomes, true);
console.log(pessoas);
// unindo objetos
var endereco = {
    cep: "17690-999",
    logradouro: "teste",
    complemento: "teste"
};
var cliente = {
    nome: "cliente de teste",
    email: "emailteste@teste.com"
};
var clienteCompleto = __assign(__assign({}, cliente), endereco);
console.log(clienteCompleto);
//# sourceMappingURL=spread_operator.js.map