const somar = (primeiroValor: number, segundoValor: number): number => {

  return primeiroValor + segundoValor;
}

const soma: number = somar(11, 22);

console.log(soma);

const soma2 = function (primeiroValor: number, segundoValor: number): number {

  return primeiroValor + segundoValor;
}

console.log(soma2(22, 22));

const soma3 = (primeiroValor: number, segundoValor: number): number => primeiroValor + segundoValor;

console.log(soma3(11, 11));