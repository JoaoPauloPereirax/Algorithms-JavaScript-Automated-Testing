
const encontrarCategoriaDoAtleta = (idadeDoAtleta)=>{
  if(idadeDoAtleta<0){
    return "Idade inválida!"
  }if(idadeDoAtleta<=6){
    return 'Sub 6'
  }if(idadeDoAtleta<=8){
    return 'Sub 8'
  }if(idadeDoAtleta<=10){
    return 'Sub 10'
  }if(idadeDoAtleta<=12){
    return 'Sub 12'
  }if(idadeDoAtleta<=14){
    return 'Sub 14'
  }if(idadeDoAtleta<=16){
    return 'Sub 16'
  }if(idadeDoAtleta<=18){
    return 'Sub 18'
  }if(idadeDoAtleta>18){
    return 'Absoluto'
  }
}

module.exports = encontrarCategoriaDoAtleta