let canal: string = 'Gaveta';
let inscritos: number = 6120234;


// canal = inscritos;
console.log(canal);

//VARIAVEL NOME JA FOI DECLARADA EM OUTRO ARQUIVO, POREM ESTA NO MSM ESCOPO
// let nome = 'PEDRO';

//Implicty Any
function soma(a: any, b: any) {
    return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';

function saudar(isManha: boolean) {
    let saudacao: string;
    if(isManha) {
        saudacao = 'Bom dia'
    }else {
        saudacao = 'Tenha uma boa vida'
    }

    return saudacao;
}