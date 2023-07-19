function idade(anoDeNascimento){
    const data = new Date();
    const anoAtual = data.getFullYear();
    
    if(anoDeNascimento>=0 && anoDeNascimento <= anoAtual){
        const idadeAtual = anoAtual-anoDeNascimento
        return idadeAtual;
    }else return -1
}

module.exports = idade