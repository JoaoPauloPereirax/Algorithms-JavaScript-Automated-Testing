const tempoParaAlistamento = require('./tempoParaAlistamento')

describe("Tempo que falta e que passou do alistamento: ",()=>{
  it("Maior de idade: ",()=>{
    const idade = 19
    const passaramAnos = tempoParaAlistamento(idade)
    expect(passaramAnos).toBe(1)
  })

  it("Menor de idade: ",()=>{
    const idade = 17
    const faltamAnos = tempoParaAlistamento(idade)
    expect(faltamAnos).toBe(1)
  })

  it("Valores Inválidos: ",()=>{
    const idade = -1
    const invalido = tempoParaAlistamento(idade)
    expect(invalido).toBe(-1) 
  })
  
})