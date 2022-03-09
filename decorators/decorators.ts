//Decorators de classe
function logarClasse(constructor: Function) {
    console.log(constructor)
}

function decoratorVazio(_: Function){}

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: {a : string, b: number}) {
    return function (_ : Function): void{
        console.log(obj.a + ' ' + obj.b)

    }
}

// @logarClasse
// @logarClasseSe(true)
// @decorator({a: 'Teste', b: 123})
// @logarObjeto

// class Eletrodomestico {
//     constructor() {
//         console.log('novo...')
//     }
// }

//"Rechamando" o decorator com herança

type Construtor = {new(...args: any[]): {}}

function logarObjeto(construtor: Construtor) {
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any) {
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}


// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()

// @logarClasse
// @logarClasseSe(true)
// @decorator({a: 'Teste', b: 123})
// @logarObjeto

interface Eletrodomestico {
    imprimir?(): void
}

@imprimivel
class Eletrodomestico {
    constructor() {
        console.log('novo...')
    }
}

function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function() {
        console.log(this)
    }
}

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

//Desafio
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo critico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]){
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin){
                throw new Error('Sem permissão!')
            }
        }
    }
}

//Decorator de método

class ContaCorrente {
    @naoNegativo
    private saldo:number
    
    constructor(saldo: number) {
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number) {
        if(valor <= this.saldo) {
            this.saldo -= valor
            return true;
        } else {
            return false;
        }
    }

    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new ContaCorrente(10213.57)
cc.sacar(4000);
console.log(cc.getSaldo())

// cc.getSaldo = function() {
//     return this['saldo'] + 7000
// }

console.log(cc.getSaldo())

function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor){
    console.log(alvo)
    console.log(nomePropriedade)
    descritor.writable = false
}


//decorator de atributo

function naoNegativo(alvo: any, nomePropriedade: string) {
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo['_' + nomePropriedade]
        },
        set: function(valor: any) {
            if(valor < 0) {
                throw new Error('Saldo Inválido')
            }else{
                alvo['_' + nomePropriedade] = valor
            }
        }
    })
}

//Decorator de parametro

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number){
    console.log(`Alvo: ${alvo}`)
    console.log(`Método: ${nomeMetodo}`)
    console.log(`Ìndice: ${indiceParam}`)
}