const sucessor = require('./sucessor');
const antecessor = require('./antecessor');
/*Faça um programa que leia um número inteiro 
e mostre o seu antecessor e seu sucessor.*/
const numero = 12;
const suc = sucessor(numero);
const ant = antecessor(numero);

console.log(`Dado o número ${numero} \n Antecessor: ${ant} \n Sucessor: ${suc}`);