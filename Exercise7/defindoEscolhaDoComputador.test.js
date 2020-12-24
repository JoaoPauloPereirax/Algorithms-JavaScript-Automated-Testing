const defindoEscolhaDoComputador = require('./defindoEscolhaDoComputador')
const {
  opcao1,
  opcao2,
  opcao3,
  opcaoInvalidaJogando
} = require('./opcoes')

describe('Definindo a escolha do computador:',()=>{
  it('Pedra:',()=>{
    const numeroGeradoPeloComputador = 1
    const escolhaComputador = defindoEscolhaDoComputador(numeroGeradoPeloComputador)
    expect(escolhaComputador).toBe(opcao1)
  })
  it('Papel:',()=>{
    const numeroGeradoPeloComputador = 2
    const escolhaComputador = defindoEscolhaDoComputador(numeroGeradoPeloComputador)
    expect(escolhaComputador).toBe(opcao2)
  })
  it('Tesoura:',()=>{
    const numeroGeradoPeloComputador = 3
    const escolhaComputador = defindoEscolhaDoComputador(numeroGeradoPeloComputador)
    expect(escolhaComputador).toBe(opcao3)
  })
  it('Opção inválida!:',()=>{
    const numeroGeradoPeloComputador = 4
    const escolhaComputador = defindoEscolhaDoComputador(numeroGeradoPeloComputador)
    expect(escolhaComputador).toBe(opcaoInvalidaJogando)
  })
})