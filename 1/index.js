// 1. Escreva um programa para aprovar um empréstimo bancário para a compra de uma casa. o programa vai perguntar o **valor da casa,** o **salário** do comprador e em **quantos anos** ele vai pagar. Calcule o valor da prestação mensal, sabendo que ela não pode exceder 30% do salário ou então o empréstimo será negado.
const avaliacaoDeCredito = require('./ex')

const valorDaCasa = 20000
const salario = 1000
const anos = 5

const final = avaliacaoDeCredito(valorDaCasa,salario,anos)

console.log(final);

