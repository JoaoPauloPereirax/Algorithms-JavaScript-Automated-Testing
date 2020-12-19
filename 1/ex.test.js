const avaliacaoDeCredito = require('./ex')

    describe('Avaliação de crédito:',()=>{

        describe('Avaliação de crédito(Aprovado):',()=>{
            it('Aprovado!',()=>{
                const valorDaCasa = 120;
                const salario = 30;
                const anos = 1;
                const resultado = avaliacaoDeCredito(valorDaCasa,salario,anos);
                expect(resultado).toBe('Crédito aprovado!');
            })
        })

        describe('Avaliação de crédito(Reprovado):',()=>{
            it('Reprovado!',()=>{
                const valorDaCasa = 121;
                const salario = 30;
                const anos = 1;
                const resultado = avaliacaoDeCredito(valorDaCasa,salario,anos);
                expect(resultado).toBe('Crédito não aprovado!');
            })
        })

        
    })