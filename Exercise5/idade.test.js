const idade = require('./idade')



describe('Idade atual: ',()=>{
    it('Maior de idade: ',()=>{
        const anoDeNascimento = 1996
        const idadeAtual = idade(anoDeNascimento)
        expect(idadeAtual).toBe(24)
    })
    it('Menor de idade: ',()=>{
        const anoDeNascimento = 2010
        const idadeAtual = idade(anoDeNascimento)
        expect(idadeAtual).toBe(10)
    })

    it("Idade Inválida: ",()=>{
        const anoDeNascimento = -1
        const invalido = idade(anoDeNascimento)
        expect(invalido).toBe(-1)
      })
    
})