export interface User {
    id?: string
    nome: string
    sexo: 'masculino' | 'feminino'
    idade: number
    cpf: string
    data_nascimento: Date
}