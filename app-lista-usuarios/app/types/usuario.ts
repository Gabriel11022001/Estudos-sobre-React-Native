export type Usuario = {

  id?: number;
  nome?: string;
  email: string;
  senha: string;
  senhaConfirmar?: string;
  telefone?: string;
  ativo?: boolean;

}