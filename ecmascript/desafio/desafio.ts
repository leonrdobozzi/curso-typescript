const dobro = (valor: number): number => valor * 2
console.log(dobro(10))
    

const dizerOla = (nome:string = 'Pessoa'): void => {
    console.log(`Ola, ${nome}`)
}
dizerOla()
dizerOla("Anna")
    
const nums: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums))

const nums2: number[] = [-3, 33, 38, 5]
let array: number[] = [55, 20]
array = [...array, ...nums2]
//arra.push(...nums2)
console.log(array);

const notas: number[] = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3]: number[] = notas
console.log(nota1, nota2, nota3)

const cientista = {primeiroNome: "Will", experiencia: 12}
// const primeiroNome = cientista.primeiroNome
// const experiencia = cientista.experiencia
const {primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)