/* Crie um algoritmo que leia um número real e mostre 
na tela o seu dobro e a sua terça parte. */

const dobroNum = require('./dobroNum');
const tercaParte = require('./tercaParte');

const numero = 9;
const dobro = dobroNum(numero);
const umTerco = tercaParte(numero);

console.log(`Dado o número ${numero}: \n Seu dobro é; ${dobro} \n A terça parte é: ${umTerco}`);