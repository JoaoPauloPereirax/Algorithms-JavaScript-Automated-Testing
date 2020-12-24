const jogando = require('./jogando')
const {
  opcao1,
  opcao2,
  opcao3,
  opcaoInvalidaJogando
} = require('./opcoes')
const {
  computadorVence,
  euVenco,
  empate,
  opcaoInvalidaResultados
} = require('./resultados')


describe("Comparação de jogadas: ",()=>{
  it('Empate:',()=>{
    const minhaEscolha =  opcao1
    const escolhaComputador = opcao1
    const jogou = jogando(minhaEscolha,escolhaComputador)
    expect(jogou).toBe(empate)
  })
  it('Eu venço:',()=>{
    const minhaEscolha =  opcao2
    const escolhaComputador = opcao1
    const jogou = jogando(minhaEscolha,escolhaComputador)
    expect(jogou).toBe(euVenco)
  })
  it('Eu perco:',()=>{
    const minhaEscolha =  opcao3
    const escolhaComputador = opcao1
    const jogou = jogando(minhaEscolha,escolhaComputador)
    expect(jogou).toBe(computadorVence)
  })
  it('Opção inválida:',()=>{
    const minhaEscolha =  opcao1
    const escolhaComputador = opcaoInvalidaJogando
    const jogou = jogando(minhaEscolha,escolhaComputador)
    expect(jogou).toBe(opcaoInvalidaResultados)
  })
  
})