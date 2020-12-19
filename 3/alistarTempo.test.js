const alistarTempo = require('./alistarTempo')

describe("Tempo que falta e que passou do alistamento: ",()=>{
  it("Maior de idade: ",()=>{
    const idade = 19
    const passaramAnos = alistarTempo(idade)
    expect(passaramAnos).toBe(1)
  })
  it("Menor de idade: ",()=>{
    const idade = 17
    const faltamAnos = alistarTempo(idade)
    expect(faltamAnos).toBe(1)
  })
  it("Valores Inválidos: ",()=>{
    const idade = -1
    const invalido = alistarTempo(idade)
    expect(invalido).toBe(-1) 
  })
})