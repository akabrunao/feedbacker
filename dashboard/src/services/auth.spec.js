import mockAxios from 'axios'
import AuthService from './auth'

jest.mock('axios')

describe('AuthServices', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('deve retornar um token wuando usuário faz login', async () => {
    const token = '123.123.123'
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { token } })
    })

    const response = await AuthService(mockAxios).login({ email: 'teste@teste.com', password: '1234' })
    expect(response.data).toHaveProperty('token')
    expect(response).toMatchSnapshot()
  })

  it('deve retornar um usuario ao criar um cadastro', async () => {
    const user = {
      name: 'Bruno',
      password: '1234',
      email: 'bruno@bruno.com'
    }
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const response = await AuthService(mockAxios).register(user)
    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('password')
    expect(response.data).toHaveProperty('email')
    expect(response).toMatchSnapshot()
  })

  it('deve apresentar erro 404', async () => {
    const errors = { status: 404, statusText: 'Not Found' }
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ request: errors })
    })

    const response = await AuthService(mockAxios).login({ email: 'teste@teste.com', password: '1234' })
    expect(response.errors).toHaveProperty('status')
    expect(response.errors).toHaveProperty('statusText')
  })
})
