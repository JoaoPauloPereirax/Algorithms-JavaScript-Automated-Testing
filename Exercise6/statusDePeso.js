function statusDePeso(imc){
  if(imc<0){
    return 'IMC inválido!'
  }if(imc<18.5){
    return 'Abaixo do peso!'
  }if(imc<25){
    return 'Peso ideal!'
  }if(imc<30){
    return 'Sobrepeso!'
  }if(imc<40){
    return 'Obesidade!'  
  }if(imc>=40){
    return 'Obesidade Mórbida!'
  }
}

module.exports = statusDePeso