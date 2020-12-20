const situacaoDoAluno = (media) =>{
  if(media >= 7 )
    {return "Aprovado!"}
  else if(media>=5 && media < 7 )
    {return "Recuperação!"}
  else 
    {return "Reprovado!"}
}

module.exports = situacaoDoAluno