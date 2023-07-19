const idade = require('./idade')



describe('Verificação de idade: ',()=>{
    it('Maior de idade: ',()=>{
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        const maiorDeIdade = anoAtual-27;//27 anos
        const idadeAtual = idade(maiorDeIdade)
        expect(idadeAtual).toBe(27)
    })
    it('Menor de idade: ',()=>{
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        const menorDeIdade = anoAtual-12;//12 anos
        const idadeAtual = idade(menorDeIdade)
        expect(idadeAtual).toBe(12)
    })

    it("Idade Inválida: ",()=>{
        const anoDeNascimento = -1
        const invalido = idade(anoDeNascimento)
        expect(invalido).toBe(-1)
      })
    
})