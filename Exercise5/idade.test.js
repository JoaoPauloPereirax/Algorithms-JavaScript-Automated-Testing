const idade = require('./idade')



describe('Verificação de idade: ',()=>{
    it('Maior de idade: ',()=>{
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        const anoDeNascimento = anoAtual-15;// 15 anos
        const idadeAtual = idade(anoDeNascimento);
        expect(idadeAtual).toBe(15)
    })

    it("Idade Inválida: ",()=>{
        const anoDeNascimento = -1
        const invalido = idade(anoDeNascimento)
        expect(invalido).toBe(-1)
      })
    
})