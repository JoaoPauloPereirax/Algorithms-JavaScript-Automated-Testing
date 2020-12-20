const idade = require('./idade')
const encontrarCategoriaDoAtleta = require('./encontrarCategoriaDoAtleta')
const anoDeNascimento = 2003
const idadeDoAtleta = idade(anoDeNascimento)
const categoriaDoAtleta = encontrarCategoriaDoAtleta(idadeDoAtleta);
console.log(categoriaDoAtleta)
