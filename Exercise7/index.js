const defindoEscolhaDoComputador = require('./defindoEscolhaDoComputador')
const jogando = require('./jogando')
const numeroGeradoPeloComputador = Math.round(Math.random()*(2)+1)


//Opções = Pedra, Papel e Tesoura.
const escolhaUsuario = 'Pedra'
const escolhaComputador = defindoEscolhaDoComputador(numeroGeradoPeloComputador)
const jogou = jogando(escolhaUsuario,escolhaComputador)


console.log(`Você: ${escolhaUsuario}\nComputador: ${escolhaComputador}\nResultado: ${jogou}`)


