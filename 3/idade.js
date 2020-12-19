function idade(anoDeNascimento){
    const data = new Date();
    const anoAtual = data.getUTCFullYear();
    
    if(anoDeNascimento>=0 && anoDeNascimento <= anoAtual){
        const idadeAtual = anoAtual-anoDeNascimento
        return idadeAtual;
    }else return -1
}

module.exports = idade