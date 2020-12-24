const defindoEscolhaDoComputador = require('./defindoEscolhaDoComputador')
const jogando = require('./jogando')
const numeroGeradoPeloComputador = Math.round(Math.random()*(2)+1)


//Opções = Pedra, Papel e Tesoura.
const minhaEscolha = 'Pedra'
const escolhaComputador = defindoEscolhaDoComputador(numeroGeradoPeloComputador)
const jogou = jogando(minhaEscolha,escolhaComputador)


console.log(`Você: ${minhaEscolha}\nComputador: ${escolhaComputador}\nResultado: ${jogou}`)


