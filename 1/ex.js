 const avaliacaoDeCredito = (valorDaCasa, salario, anos)=>{
    const prestacao = valorDaCasa/(anos*12);
    if(prestacao>(salario/3)){
        const resposta = 'Crédito não aprovado!'
        return resposta
    }else {
        const resposta = 'Crédito aprovado!'
        return resposta
    }
}

module.exports =  avaliacaoDeCredito