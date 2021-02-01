import useStore from '../hooks/useStore'
import {
  cleanCurrentUser,
  setApiKey,
  setCurrentUser,
  resetUserStore
} from './user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('deve setar o usuario atual', () => {
    const store = useStore()
    setCurrentUser({ name: 'Bruno' })
    expect(store.User.currentUser.name).toBe('Bruno')
  })

  it('deve limpar o usuario atual', () => {
    const store = useStore()
    cleanCurrentUser()
    expect(store.User.currentUser.name).toBe()
  })

  it('deve setar apikey do usuario', () => {
    const store = useStore()
    setApiKey('12345')
    expect(store.User.currentUser).toHaveProperty('apiKey')
    expect(store.User.currentUser.apiKey).toBe('12345')
  })
})
