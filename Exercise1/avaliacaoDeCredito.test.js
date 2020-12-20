const avaliacaoDeCredito = require('./avaliacaoDeCredito')
const {MENSAGEM_DE_APROVACAO,MENSAGEM_DE_REPROVACAO} = require('./mensagens')
    describe('Avaliação de crédito:',()=>{

        describe('Avaliação de crédito(Aprovado):',()=>{
            it('Aprovado!',()=>{
                const valorDaCasa = 120;
                const salario = 30;
                const anos = 1;
                const resultado = avaliacaoDeCredito(valorDaCasa,salario,anos);
                expect(resultado).toBe(MENSAGEM_DE_APROVACAO);
            })
        })

        describe('Avaliação de crédito(Reprovado):',()=>{
            it('Reprovado!',()=>{
                const valorDaCasa = 121;
                const salario = 30;
                const anos = 1;
                const resultado = avaliacaoDeCredito(valorDaCasa,salario,anos);
                expect(resultado).toBe(MENSAGEM_DE_REPROVACAO);
            })
        })

        
    })