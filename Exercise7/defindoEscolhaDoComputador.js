const {
  opcao1,
  opcao2,
  opcao3,
  opcaoInvalidaJogando
} = require('./opcoes')

function defindoEscolhaDoComputador(geradoPeloComputador){
  if(geradoPeloComputador===1){
    return opcao1
  }if(geradoPeloComputador===2){
    return opcao2
  }if(geradoPeloComputador===3){
    return opcao3
  }else{
    return opcaoInvalidaJogando
  }
}

module.exports = defindoEscolhaDoComputador