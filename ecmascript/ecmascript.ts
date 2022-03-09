// LET E CONST

// console.log(seraQuePode);
let seraQuePode = '?';

let estaFrio = true;

if(estaFrio) {
    let acao = 'Está frio!!!'
    console.log(acao)
}

const cpf: string = '123.456.789-00';
// cpf = '987.654.321-00' - Não pode reatribuir CONSTANTE!!!!!!
console.log(cpf)

//O const também tem escopo de bloco!
var segredo = 'externo';
function revelar(){
    var segredo = 'interno';
    console.log(segredo);
}
revelar()
console.log(segredo);

{
    const def = 'def'
    console.log(def);
}

for (let i = 0; i > 10; i++){
    console.log(i);
}
// console.log(i); - Com o let você não consegue acessar fora do bloco

//ARROW FUNCTIONS

const somar = (number:number): number => {return number}

console.log(somar(1));

const subtrair = (n1: number, n2: number): number => {
    return n1 - n2;
}

console.log(subtrair(432, 293));

const saudacao = () => console.log('ola');
saudacao()

const falarCom = (pessoa: string) => console.log('Ola ' + pessoa)
falarCom('João')

/* 
    THIS 

    Numa função normal o THIS pode variar
    Em uma arrow function o this é o elemento window, que era o this antes da definiçao
    da função! O this que vai ser usado na arrow é o this da linha anterior, é o mesmo
    do contexto que a função foi escrita, o this em uma arrow function não varia
*/

// function normalComThis() {
//     console.log(this)
// }
// normalComThis();

// const normalComThisEspecial = normalComThis.bind(2)

// normalComThisEspecial();

// const arrowComThis = () => console.log(this)

//Parametro Padrão

function contagemRegressiva(inicio: number = 3): void {
    console.log(inicio)
    while(inicio > 0){
        inicio--
        console.log(inicio)
    }
    console.log('fim')
}

contagemRegressiva()
contagemRegressiva(6)

//Operador Spread & Rest

//Spread = Espalhar
//Rest = Juntar

//Spread
const numbers = [1,10,99,-5];
console.log(Math.max(...numbers))

const turmaA: string[] = ['Fernanda', 'Miguel', 'Lorena']
const turmaB: string[] = ['João', 'Maria', 'Fernando', ...turmaA]

//Rest
function retornaArray(...args: number[]): number[] {
    return args;
}

const numeros = retornaArray(...numbers)

console.log(numeros);

//Rest & Spread (Tupla)

const tupla:[number, string, boolean] = [1, 'abc', false];

function tuplaParam1(a: number, b: string, c: boolean) {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla);

//Destructuring (array)

const caracteristicas = ['Motor Zetec 1.8', 2020];

// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

const [motor, ano] = caracteristicas;

//Destructuring (objeto)

const item = {
    nome: 'SSD 240GB',
    preco: 200
}

// const nomeItem = item.nome;
// const preco = item.preco;

const {nome: n, preco} = item;

console.log(n)
console.log(preco)

//Template String

const usuarioId: string = 'SuporteCod3r';
const notificacoes: string = '9';
// const boasVindas = 'Boas vindas ' + usuarioId + ' Notificações: ' + notificacoes;
const boasVindas = `Boas vindas ${usuarioId} Notificações: ${notificacoes}`;
console.log(boasVindas)

//Callback

function esperar3s(callback: (dado: string) => void){
    setTimeout(() => {
        callback('3 segundos depois')
    }, 3000)
}

esperar3s(function(resultado:string){
    console.log(resultado);
})


function esperar3sPromise(){
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3 segundos depois promise')
        }, 3000)
    })
}

esperar3sPromise()
    .then(dado => console.log(dado));


fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[2]))
    .then(resFilm => resFilm.json())
    .then(film => console.log(film))
    .catch(err => console.log(err))