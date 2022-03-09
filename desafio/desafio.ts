// Desafio
type Conta = {
    saldo: number,
    depositar: (valor:number) => void
}

let contaBancaria: Conta = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type PessoaCorrentista = {
    nome: string,
    contaBancaria: Conta,
    contatos: string[]
}
 
let correntista: PessoaCorrentista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)