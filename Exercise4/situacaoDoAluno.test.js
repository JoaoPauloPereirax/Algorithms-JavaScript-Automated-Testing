const situacaoDoAluno = require('./situacaoDoAluno')

describe('Situação de um aluno: ',()=>{
  it('Aprovado!',()=>{
    const media = 7
    const resultadoFinalDoAluno = situacaoDoAluno(media)
    expect(resultadoFinalDoAluno).toBe("Aprovado!")
  })
  it('Reprovado!',()=>{
    const media = 4
    const resultadoFinalDoAluno = situacaoDoAluno(media)
    expect(resultadoFinalDoAluno).toBe("Reprovado!")
  })
  it('Recuperação!',()=>{
    const media = 5
    const resultadoFinalDoAluno = situacaoDoAluno(media)
    expect(resultadoFinalDoAluno).toBe("Recuperação!")
  })
})