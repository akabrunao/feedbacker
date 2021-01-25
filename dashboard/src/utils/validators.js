export function validateEmptyAndLength3 (value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  if (value.length < 3) {
    return '*Este campo precisa de no mínimo 3 caracteres'
  }

  return true
}

export function validateEmptyAndEmail (value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  const isValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)

  if (!isValid) {
    return '*Este campo precisa ser um email válido'
  }

  return true
}
