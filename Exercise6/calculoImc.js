function calculoImc(peso,altura){
   if(peso>0 && altura>0) {
      const imc = peso/(Math.pow(altura,2))
      return imc
   }else return -1
}

module.exports = calculoImc