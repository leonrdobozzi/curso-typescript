"use strict";
//string
let nome = 'João';
console.log(nome);
//Numbers
let idade = 27;
console.log(idade);
//Boolean
let possuiHobbies = false;
console.log(possuiHobbies);
//Tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// Array
let hobbies = ["Cozinhar", "Praticar Esportes"];
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
let endereco = ['Av principal', 90, ''];
console.log(endereco);
endereco = ['Rua importante', 1260, 'Casa 3'];
console.log(endereco);
//Enums 
/*
    Estrutura de valores pré definidos
*/
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Laranja"] = 102] = "Laranja";
    Cor[Cor["Amarelo"] = 103] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// Any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//Funções 
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(3, 4));
//Tipo função
let calculo;
// calculo = digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 6));
//Objetos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
// usuario = {
//     name: 'maria',
//     age: 31
// }
usuario = {
    nome: 'maria',
    idade: 20
};
console.log(usuario);
let funcionario = {
    supervisores: ['Carlos', 'Luiz', 'Mel'],
    horario(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.horario(9));
let funcionario2 = {
    supervisores: ['Bia', 'Joao'],
    horario(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
//Union Types
//Pode receber apenas number ou string, diferente do any que aceita tudo
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
//Checando tipos
let valor = 30;
if (typeof valor === 'number') {
    console.log('é um valor number');
}
else {
    console.log(typeof valor);
}
//Tipo never
//Quer explicitar que ela nunca vai retornar, ou vai dar um erro ou ficar em loop
//Não tem um "end-point reachable"
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'sabao',
    preco: 98,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
//Valores opcionais do tipo NULL
let altura = 12;
// altura = null;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'fulano',
    telefone1: '123123',
    telefone2: null
};
console.log(contato1.nome);
console.log(contato1.telefone1);
console.log(contato1.telefone2);
//# sourceMappingURL=tipo.js.map