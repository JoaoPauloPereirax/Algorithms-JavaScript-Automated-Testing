const {
  opcaoPedra,
  opcaoPapel,
  opcaoTesoura,
  opcaoInvalidaJogando
} = require('./opcoes')

function defindoEscolhaDoComputador(geradoPeloComputador){
  if(geradoPeloComputador===1){
    return opcaoPedra
  }if(geradoPeloComputador===2){
    return opcaoPapel
  }if(geradoPeloComputador===3){
    return opcaoTesoura
  }else{
    return opcaoInvalidaJogando
  }
}

module.exports = defindoEscolhaDoComputador