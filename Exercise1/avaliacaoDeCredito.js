 const {
     MENSAGEM_DE_APROVACAO,
     MENSAGEM_DE_REPROVACAO
 } = require('./mensagens')
 const avaliacaoDeCredito = (valorDaCasa, salario, anos)=>{
    const prestacao = valorDaCasa/(anos*12);
    if(prestacao>(salario/3)){
        return MENSAGEM_DE_REPROVACAO
    }else {
        return MENSAGEM_DE_APROVACAO
    }
}

module.exports =  avaliacaoDeCredito