const PESO = -1
const ALTURA = 1.80

const statusDePeso = require('./statusDePeso')
const calculoImc = require('./calculoImc')

const imc = calculoImc(PESO,ALTURA)
const status = statusDePeso(imc)
console.log(`IMC = ${imc} \nSTATUS = ${status}`)