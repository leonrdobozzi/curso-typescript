//string

let nome: string = 'João';
console.log(nome);

//Numbers

let idade: number = 27;
console.log(idade);

//Boolean

let possuiHobbies: boolean = false;
console.log(possuiHobbies);

//Tipos explicitos

let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade)

// Array

let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

//Podemos atribuir qualquer tipo de valor dentro do array, 
//contanto que o tipo da variavel seja sempre um array

hobbies = [100, 200, 300];
console.log(hobbies);

//Tupla: é um array de quantidades pré definidas de tipos
/*
    Tuplas também são sequências, mas são imutáveis. 
    Logo, uma vez criada e declarada, 
    você não pode fazer mais nenhum alteração nela.
*/

let endereco: [string, number, string] = ['Av principal', 90, ''];
console.log(endereco);

endereco = ['Rua importante', 1260, 'Casa 3'];
console.log(endereco);

//Enums 

/*
    Estrutura de valores pré definidos
*/

enum Cor {
    Cinza, //0
    Verde = 100, //100
    Azul,   //De 2 passa a ser o 101
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor)

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// Any

let carro: any = 'BMW';
console.log(carro);

carro = {marca: 'BMW', ano: 2019}
console.log(carro);

//Funções 
function retornaMeuNome(): string{
    return nome;
}

console.log(retornaMeuNome());

function digaOi(): void { //Não retorna nada
    console.log('oi');
}

digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

console.log(multiplicar(3, 4))

//Tipo função

let calculo: (numeroA: number, numeroB: number) => number;
// calculo = digaOi;
// calculo();

calculo = multiplicar;
console.log(calculo(5,6))

//Objetos

let usuario: {nome: string, idade: number} = {
    nome: 'João',
    idade: 27
}
console.log(usuario)
// usuario = {
//     name: 'maria',
//     age: 31
// }

usuario = {
    nome: 'maria',
    idade: 20
}
console.log(usuario)

let funcionario: {
        supervisores: string[], 
        horario: (horario:number) => string
    } = {
    supervisores: ['Carlos', 'Luiz', 'Mel'],
    horario(horario:number): string {
        if(horario <= 8){
            return 'Ponto normal'
        }else{
            return 'Fora do horário'
        }
    }  
}

console.log(funcionario.horario(9))

//Tipos personalizados
//Alias
type Funcionario = {
    supervisores: string[], 
    horario: (horario:number) => string
}

let funcionario2: Funcionario = {
supervisores: ['Bia', 'Joao'],
horario(horario:number): string {
    if(horario <= 8){
        return 'Ponto normal'
    }else{
        return 'Fora do horário'
    }
}  
}

//Union Types

//Pode receber apenas number ou string, diferente do any que aceita tudo
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);

nota = '10'
console.log(`Minha nota é ${nota}!`);

//Checando tipos

let valor = 30
if (typeof valor === 'number'){
    console.log('é um valor number');
}else{
    console.log(typeof valor);
}

//Tipo never
//Quer explicitar que ela nunca vai retornar, ou vai dar um erro ou ficar em loop
//Não tem um "end-point reachable"

function falha(msg: string): never{
    throw new Error(msg);
}

const produto = {
    nome: 'sabao',
    preco: 98,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('precisa ter um nome')
        }

        if(this.preco <= 0){
            falha('Preço inválido')
        }
    }
}

produto.validarProduto();

//Valores opcionais do tipo NULL

let altura = 12;
// altura = null;

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    telefone1: string,
    telefone2: null | string
}

const contato1: Contato = {
    nome: 'fulano',
    telefone1: '123123',
    telefone2: null
}

console.log(contato1.nome)
console.log(contato1.telefone1)
console.log(contato1.telefone2)

