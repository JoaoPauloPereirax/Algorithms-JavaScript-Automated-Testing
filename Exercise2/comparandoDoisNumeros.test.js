const comparandoDoisNumeros = require('./comparandoDoisNumeros')

describe('Comparação entre dois números: ',()=>{
    describe('Primeiro é o maior: ',()=>{
        it('Maior entre 11 e 7',()=>{
            const numero1 = 11
            const numero2 = 7
            const comparacao = comparandoDoisNumeros(numero1,numero2)
            expect(comparacao).toBe(`${numero1} é o maior!`)
        })
    })

    describe('Segundo é o maior: ',()=>{
        it('Maior entre 7 e 11',()=>{
            const numero1 = 7
            const numero2 = 11
            const comparacao = comparandoDoisNumeros(numero1,numero2)
            expect(comparacao).toBe(`${numero2} é o maior!`)
        })
    })

    describe('São iguais: ',()=>{
        it('Maior entre 11 e 11',()=>{
            const numero1 = 11
            const numero2 = 11
            const comparacao = comparandoDoisNumeros(numero1,numero2)
            expect(comparacao).toBe('São iguais!')
        })
    })

})