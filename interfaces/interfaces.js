"use strict";
//Interfaces
function saudarComOla(pessoa) {
    console.log("Olá " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 27,
    saudar(sobrenome) {
        console.log("Olá o meu nome é " + this.nome + " " + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar("Skywalker");
// saudarComOla({nome: 'Jonas', idade: 27, xyz: true})
//Usando classes...
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log("Olá o meu nome é " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = (base, exp) => {
    //Math.pow()
    //2**2
    return Array(exp)
        .fill(base)
        .reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
console.log(x);
console.log(y);
console.log(z);
x.log();
y.log();
z.log();
//# sourceMappingURL=interfaces.js.map