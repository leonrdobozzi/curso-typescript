"use strict";
// Desafio classe Produto
// Atribuir nome, preco e desconto
// Criar o construtor
// OBS 1: Desconto é opcional
// OBS 2: Criar dois produtos: passando dois e tres params
// class Produto{
//     constructor(public nome: string, public preco: number, public desconto: number = 0){
//     }
//     //Metodos
//     public precoComDesconto(): number {
//         return this.preco * (1 - this.desconto);
//     }
//     public resumo(): string {
//         return `${this.nome} custa R$: ${this.precoComDesconto()} (${this.desconto * 100}% off)`
//     }
// }
// const tenis = new Produto('Yeezy', 1999)
// console.log(tenis.resumo())
// const camiseta = new Produto('Lacoste Africa', 399, 0.3)
// console.log(camiseta.resumo())
// Exercício 1 - Classe
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
//Exercício 2 - Herança
var objeto2D = {
    base: 0,
    altura: 0
};
class Objeto {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto {
    area() {
        return this.base * this.altura;
    }
}
const areaTotal = new Retangulo(12, 22);
console.log(areaTotal.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map