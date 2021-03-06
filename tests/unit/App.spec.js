import { shallow, createLocalVue } from '@vue/test-utils'
import App from '@/App'
import Vuex from 'vuex'
import { store } from '@/store'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('App', () => {
  let app
  let store

  beforeEach(() => {
    app = { }
    store = new Vuex.Store({
      state: {},
      app
    })
  })

  it ('is a Vue instance', () => {
    const wrapper = shallow(App, { store, localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})