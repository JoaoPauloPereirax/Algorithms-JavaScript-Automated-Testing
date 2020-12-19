const alistarTempo = require ('./alistarTempo')

const oQueMostrar = (idadeAtual)=>{
  if(idadeAtual>18){
    const passouDoAlistamento = alistarTempo(idadeAtual)
    return `Você têm ${idadeAtual} anos, passaram-se ${passouDoAlistamento} anos da idade de alistamento!`
  }if(0<idadeAtual && idadeAtual<18){
    const faltaParaAlistar =alistarTempo(idadeAtual)
    return `Você têm ${idadeAtual} anos, faltam ${faltaParaAlistar} anos para alistar-se!`
  }if(idadeAtual==18){
      return `Você têm ${idadeAtual} anos, está na hora de aliste-se!`
  }else{
    return 'Idade inválida!'
  }
}

module.exports = oQueMostrar