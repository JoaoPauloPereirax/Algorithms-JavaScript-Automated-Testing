
function alistarTempo(idade){
    if(idade>18){
        return idade-18
    }
    if(0 < idade && idade < 18){
        return 18-idade
    }
    else{
        return -1
    }
    
}

module.exports = alistarTempo