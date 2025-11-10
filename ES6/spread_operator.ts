// unindo arrays
const nomes: string[] = ["Gabriel", "Pedro", "José"];

const sobrenomes: Array<string> = ["Rodrigues", "Roberto", "Bonifácio"];

const pessoas: Array<string> = [ ...nomes, ...sobrenomes ];

console.log(pessoas);

// unindo objetos
const endereco: object = {
  cep: "17690-999",
  logradouro: "teste",
  complemento: "teste"
}

const cliente: object = {
  nome: "cliente de teste",
  email: "emailteste@teste.com"
}

const clienteCompleto: object = { ...cliente, ...endereco };

console.log(clienteCompleto);