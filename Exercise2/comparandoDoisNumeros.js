function comparandoDoisNumeros(numero1,numero2){
    if(numero1===numero2){
        return 'São iguais!';
    }if(numero1>numero2){
        return `${numero1} é o maior!`
    }else{
        return `${numero2} é o maior!`
    }
}

module.exports = comparandoDoisNumeros