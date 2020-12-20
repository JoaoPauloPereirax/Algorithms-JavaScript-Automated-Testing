const PESO = 88
const ALTURA = 1.80

const statusDePeso = require('./statusDePeso')

const IMC = PESO/(Math.pow(ALTURA,2))
const status = statusDePeso(IMC)
console.log(`IMC = ${IMC} \nSTATUS = ${status}`)