const jogando = require('./jogando')
const {
  opcaoPedra,
  opcaoPapel,
  opcaoTesoura,
  opcaoInvalidaJogando
} = require('./opcoes')
const {
  computadorVence,
  usuarioVence,
  empate,
  opcaoInvalidaResultados
} = require('./resultados')


describe("Comparação de jogadas: ",()=>{
  it('Empate:',()=>{
    const minhaEscolha =  opcaoPedra
    const escolhaComputador = opcaoPedra
    const jogou = jogando(minhaEscolha,escolhaComputador)
    expect(jogou).toBe(empate)
  })
  it('Eu venço:',()=>{
    const minhaEscolha =  opcaoPapel
    const escolhaComputador = opcaoPedra
    const jogou = jogando(minhaEscolha,escolhaComputador)
    expect(jogou).toBe(usuarioVence)
  })
  it('Eu perco:',()=>{
    const minhaEscolha =  opcaoTesoura
    const escolhaComputador = opcaoPedra
    const jogou = jogando(minhaEscolha,escolhaComputador)
    expect(jogou).toBe(computadorVence)
  })
  it('Opção inválida:',()=>{
    const minhaEscolha =  opcaoPedra
    const escolhaComputador = opcaoInvalidaJogando
    const jogou = jogando(minhaEscolha,escolhaComputador)
    expect(jogou).toBe(opcaoInvalidaResultados)
  })
  
})