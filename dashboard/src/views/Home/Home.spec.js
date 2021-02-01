import Home from '.'
import { shallowMount } from '@vue/test-utils'
import { routes } from '../../router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<Home />', () => {
  it('deve rendezirar a home corretamente', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(Home, {
      global: {
        plugin: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
