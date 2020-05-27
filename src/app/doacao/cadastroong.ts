export class CadastroOng {
    id: number;
    nome: string;
    cnpj: number;
    endereco: string;
    telefone: number;
    email: string;



    constructor (id: number, nome: string, cnpj: number, endereco: string, telefone: number, email: string) {
    this.id = id;
    this.nome = nome;
    this.cnpj = cnpj;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    }
    }