const {
  computadorVence,
  usuarioVence,
  empate,
  opcaoInvalidaResultados
} = require('./resultados')


function jogando(minhaEscolha,escolhaComputador){
  if(minhaEscolha===escolhaComputador){
    return empate
  }if(
    (minhaEscolha == 'Papel' && escolhaComputador == 'Pedra') ||
    (minhaEscolha == 'Tesoura' && escolhaComputador == 'Papel') ||
    (minhaEscolha == 'Pedra' && escolhaComputador == 'Tesoura')
  ){
    return usuarioVence
  }if(
    (minhaEscolha == 'Papel' && escolhaComputador == 'Tesoura') ||
    (minhaEscolha == 'Tesoura' && escolhaComputador == 'Pedra') ||
    (minhaEscolha == 'Pedra' && escolhaComputador == 'Papel')
  ){
    return computadorVence
  }else {return opcaoInvalidaResultados}

}

module.exports = jogando