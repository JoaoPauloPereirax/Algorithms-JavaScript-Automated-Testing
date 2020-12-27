const calculoImc = require('./calculoImc')

describe('Cálculo do IMC',()=>{
   it("Peso e altura compatíveis!",()=>{
      const peso = 40
      const altura = 1
      const imc = calculoImc(peso,altura)
      expect(imc).toBe(40)
   })
   it("Peso inválido!",()=>{
      const peso = -5
      const altura = 1
      const imc = calculoImc(peso,altura)
      expect(imc).toBe(-1)
   })
   it("Altura inválida!",()=>{
      const peso = 40
      const altura = -1
      const imc = calculoImc(peso,altura)
      expect(imc).toBe(-1)
   })
   it("Peso e altura inválidos!",()=>{
      const peso = -5
      const altura = -1
      const imc = calculoImc(peso,altura)
      expect(imc).toBe(-1)
   })
})