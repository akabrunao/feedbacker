import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validators utils', () => {
  it('deve apresentar erro em caso de campo vazio', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('deve apresentar erro em caso de campo com 1 ou 2 caracteres', () => {
    expect(validateEmptyAndLength3('aa')).toBe('*Este campo precisa de no mínimo 3 caracteres')
  })

  it('deve retornar true em caso de campo válido', () => {
    expect(validateEmptyAndLength3('showDeBola')).toBe(true)
  })

  it('deve apresentar erro em caso de campo de email vazio', () => {
    expect(validateEmptyAndEmail('')).toBe('*Este campo é obrigatório')
  })

  it('deve apresentar erro em caso de email invalido', () => {
    expect(validateEmptyAndEmail('email@errado')).toBe('*Este campo precisa ser um email válido')
  })

  it('deve retornar true em caso de email válido', () => {
    expect(validateEmptyAndEmail('email@valido.com')).toBe(true)
  })
})
