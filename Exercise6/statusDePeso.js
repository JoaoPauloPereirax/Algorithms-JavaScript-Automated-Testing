function statusDePeso(imc){
  if(imc>0 && imc<18.5){
    return 'Abaixo do peso!'
  }if(imc>=18.5 && imc<25){
    return 'Peso ideal!'
  }if(imc>=25 && imc<30){
    return 'Sobrepeso!'
  }if(imc>=30 && imc<40){
    return 'Obesidade!'  
  }if(imc>=40){
    return 'Obesidade Mórbida!'
  }else return 'IMC inválido!'
}

module.exports = statusDePeso