interface Calculadora {

  primeiroValor: number;
  segundoValor: number;

}

interface Soma extends Calculadora {

  somar: () => number;

}

interface Subtracao extends Calculadora {

  subtrair: () => number;

}

const soma: Soma = {
  primeiroValor: 11,
  segundoValor: 22,
  somar: function (): number {

    return this.primeiroValor + this.segundoValor;
  }
}

const subtracao: Subtracao = {
  primeiroValor: 11,
  segundoValor: 11,
  subtrair: function (): number {

    return this.primeiroValor - this.segundoValor;
  }
}

console.log(soma.somar());
console.log(subtracao.subtrair());