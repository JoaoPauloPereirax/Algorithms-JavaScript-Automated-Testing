const encontrarCategoriaDoAtleta = require('./encontrarCategoriaDoAtleta')
describe("Retornar a categoria de cada atleta:",()=>{
  it('Categoria sub 6:',()=>{
    const idade = 6
    const categoria = encontrarCategoriaDoAtleta(idade)
    expect(categoria).toBe('Sub 6')
  })
  it('Categoria sub 8:',()=>{
    const idade = 8
    const categoria = encontrarCategoriaDoAtleta(idade)
    expect(categoria).toBe('Sub 8')
  })
  it('Categoria sub 10:',()=>{
    const idade = 10
    const categoria = encontrarCategoriaDoAtleta(idade)
    expect(categoria).toBe('Sub 10')
  })
  it('Categoria sub 12:',()=>{
    const idade = 12
    const categoria = encontrarCategoriaDoAtleta(idade)
    expect(categoria).toBe('Sub 12')
  })
  it('Categoria sub 14:',()=>{
    const idade = 14
    const categoria = encontrarCategoriaDoAtleta(idade)
    expect(categoria).toBe('Sub 14')
  })
  it('Categoria sub 16:',()=>{
    const idade = 16
    const categoria = encontrarCategoriaDoAtleta(idade)
    expect(categoria).toBe('Sub 16')
  })
  it('Categoria sub 18:',()=>{
    const idade = 18
    const categoria = encontrarCategoriaDoAtleta(idade)
    expect(categoria).toBe('Sub 18')
  })
  it('Categoria Absoluto:',()=>{
    const idade = 19
    const categoria = encontrarCategoriaDoAtleta(idade)
    expect(categoria).toBe('Absoluto')
  })
  it('Idade inválida:',()=>{
    const idade = -1
    const categoria = encontrarCategoriaDoAtleta(idade)
    expect(categoria).toBe("Idade inválida!")
  })

})