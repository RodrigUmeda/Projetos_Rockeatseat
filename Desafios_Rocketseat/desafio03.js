// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

// const usuarios = [
//   { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//   { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//   { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ];
// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js

// const usuarios = 
// [
// { nome: "Carlos", 
// tecnologias: ["HTML", "CSS"] 
// },
// { 
// nome: "Jasmine", 
// tecnologias: ["JavaScript", "CSS"] 
// },
// { 
// nome: "Tuane", 
// tecnologias: ["HTML", "Node.js"] 
// }
// ]

// for(i = 0; i < usuarios.length;i++){
//     console.log(`${usuarios[i].nome} conhece das tecnologias ${usuarios[i].tecnologias}`);
// }
    
// Busca por tecnologia
// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

// Por exemplo:

// function checaSeUsuarioUsaCSS(usuario) {
//   // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
//   // SE encontrar, retorne true da função, caso contrário retorne false
// }
// Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:

// for (let i = 0; i < usuarios.length; i++) {
//   const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);

//   if (usuarioTrabalhaComCSS) {
//     console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
//   }
// }

// const usuarios = 
// [
// { nome: "Carlos", 
// tecnologias: ["HTML", "CSS"] 
// },
// { 
// nome: "Jasmine", 
// tecnologias: ["JavaScript", "java"] 
// },
// { 
// nome: "Tuane", 
// tecnologias: ["HTML", "CSS"] 
// }
// ]

// function checaSeUsuarioUsaCSS(usuario){
//     const tecnologias = usuario.tecnologias
//     for(let i=0;i < tecnologias.length; i++){
//         if(tecnologias[i] == "CSS"){
//             return true
//         }
//     }
//     return false
// }

// for (let i = 0; i < usuarios.length; i++) {
//     const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
    
//     if (usuarioTrabalhaComCSS) {
//     console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
//     }
// }
// _______________________________________________________________________________________________________________________________

// Soma de despesas e receitas
// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

// Utilize o array de usuários abaixo:

// const usuarios = [
//   {
//     nome: "Salvio",
//     receitas: [115.3, 48.7, 98.3, 14.5],
//     despesas: [85.3, 13.5, 19.9]
//   },
//   {
//     nome: "Marcio",
//     receitas: [24.6, 214.3, 45.3],
//     despesas: [185.3, 12.1, 120.0]
//   },
//   {
//     nome: "Lucia",
//     receitas: [9.8, 120.3, 340.2, 45.3],
//     despesas: [450.2, 29.9]
//   }
// ];
// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

// function calculaSaldo(receitas, despesas) {}
// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

// function somaNumeros(numeros) {
//   // Soma todos números dentro do array "numeros"
// }
// No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

// Fulano possui saldo POSITIVO de 43.3
// Sicrano possui saldo NEGATIVO de -90.3

const usuarios = [
{
nome: "Salvio",
receitas: [115.3, 48.7, 98.3, 14.5],
despesas: [85.3, 13.5, 19.9]
},
{
nome: "Marcio",
receitas: [24.6, 214.3, 45.3],
despesas: [185.3, 12.1, 120.0]
},
{
nome: "Lucia",
receitas: [9.8, 120.3, 340.2, 45.3],
despesas: [450.2, 29.9]
}
];

for(let i=0; i<usuarios.length;i++){
    const usuario = usuarios[i]
    let saldo = calculaSaldo(usuario.receitas, usuario.despesas)
    if(saldo>0){
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo}`);
    }else{
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo}`);
    }

}
function calculaSaldo(receitas, despesas){
    let somaReceitas = somaNumeros(receitas);
    let somaDespesas = somaNumeros(despesas);
    let saldo = somaReceitas - somaDespesas;
    return saldo
}

function somaNumeros(numeros) {
    let soma = 0;
    for(let i=0;i<numeros.length;i++){
        soma = soma + numeros[i];
    }
    return soma
}
