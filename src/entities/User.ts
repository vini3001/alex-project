export interface User {
    id?: number
    nome: string
    sexo: 'masculino' | 'feminino'
    idade: number
    cpf: string
    data_nascimento: Date
}