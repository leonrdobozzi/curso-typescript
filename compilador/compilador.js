"use strict";
let canal = 'Gaveta';
let inscritos = 6120234;
// canal = inscritos;
console.log(canal);
//VARIAVEL NOME JA FOI DECLARADA EM OUTRO ARQUIVO, POREM ESTA NO MSM ESCOPO
// let nome = 'PEDRO';
//Implicty Any
function soma(a, b) {
    return a + b;
}
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    else {
        saudacao = 'Tenha uma boa vida';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map