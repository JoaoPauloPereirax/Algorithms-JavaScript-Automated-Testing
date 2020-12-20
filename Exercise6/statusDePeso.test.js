const statusDePeso = require('./statusDePeso')
describe('Classificação do índice de massa corporal (IMC):',()=>{
  it('Abaixo do peso!',()=>{
    const imc = 15
    const status = statusDePeso(imc)
    expect(status).toBe('Abaixo do peso!')
  })
  
  it('Peso ideal!',()=>{
    const imc = 19
    const status = statusDePeso(imc)
    expect(status).toBe('Peso ideal!')
  })
  
  it('Sobrepeso!',()=>{
    const imc = 27
    const status = statusDePeso(imc)
    expect(status).toBe('Sobrepeso!')
  })
  
  it('Obesidade!',()=>{
    const imc = 35
    const status = statusDePeso(imc)
    expect(status).toBe('Obesidade!')
  })
  
  it('Obesidade Mórbida!',()=>{
    const imc = 45
    const status = statusDePeso(imc)
    expect(status).toBe('Obesidade Mórbida!')
  })
  
  it('IMC inválido!',()=>{
    const imc = -1
    const status = statusDePeso(imc)
    expect(status).toBe('IMC inválido!')
  })
})