const defindoEscolhaDoComputador = require('./defindoEscolhaDoComputador')
const {
  opcaoPedra,
  opcaoPapel,
  opcaoTesoura,
  opcaoInvalidaJogando
} = require('./opcoes')

describe('Definindo a escolha do computador:',()=>{
  it('Pedra:',()=>{
    const numeroGeradoPeloComputador = 1
    const escolhaComputador = defindoEscolhaDoComputador(numeroGeradoPeloComputador)
    expect(escolhaComputador).toBe(opcaoPedra)
  })
  it('Papel:',()=>{
    const numeroGeradoPeloComputador = 2
    const escolhaComputador = defindoEscolhaDoComputador(numeroGeradoPeloComputador)
    expect(escolhaComputador).toBe(opcaoPapel)
  })
  it('Tesoura:',()=>{
    const numeroGeradoPeloComputador = 3
    const escolhaComputador = defindoEscolhaDoComputador(numeroGeradoPeloComputador)
    expect(escolhaComputador).toBe(opcaoTesoura)
  })
  it('Opção inválida!:',()=>{
    const numeroGeradoPeloComputador = 4
    const escolhaComputador = defindoEscolhaDoComputador(numeroGeradoPeloComputador)
    expect(escolhaComputador).toBe(opcaoInvalidaJogando)
  })
})