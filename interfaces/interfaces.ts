//Interfaces

interface Humano {
    nome: string;
    idade?: number;
    [prop: string]: any; //Nome dinamico de tipagem
    saudar(sobrenome: string): void;
  }
  
  function saudarComOla(pessoa: Humano) {
    console.log("Olá " + pessoa.nome);
  }
  
  function mudarNome(pessoa: Humano) {
    pessoa.nome = "Joana";
  }
  
  const pessoa: Humano = {
    nome: "João",
    idade: 27,
    saudar(sobrenome: string) {
      console.log("Olá o meu nome é " + this.nome + " " + sobrenome);
    }
  };
  
  saudarComOla(pessoa);
  mudarNome(pessoa);
  saudarComOla(pessoa);
  pessoa.saudar("Skywalker");
  // saudarComOla({nome: 'Jonas', idade: 27, xyz: true})
  
  //Usando classes...
  
  class Cliente implements Humano {
    nome: string = "";
    ultimaCompra: Date = new Date();
    saudar(sobrenome: string) {
      console.log("Olá o meu nome é " + this.nome + " " + sobrenome);
    }
  }
  
  const meuCliente = new Cliente();
  meuCliente.nome = "Han";
  saudarComOla(meuCliente);
  meuCliente.saudar("Solo");
  console.log(meuCliente.ultimaCompra);
  
  //Usando funções...
  
  interface FuncaoCalculo {
    (a: number, b: number): number;
  }
  
  let potencia: FuncaoCalculo;
  
  potencia = (base: number, exp: number): number => {
    //Math.pow()
    //2**2
    return Array(exp)
      .fill(base)
      .reduce((t, a) => t * a);
  };
  
  console.log(potencia(3, 10));
  
  //Herança com Interfaces
  
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B{
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}


abstract class AbstrataABD implements A, B{
    a(): void {}
    b(): void {}
    abstract d(): void
}
interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

console.log(x)
console.log(y)
console.log(z)

x.log()
y.log()
z.log()