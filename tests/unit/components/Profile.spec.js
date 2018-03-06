import { shallow, createLocalVue } from '@vue/test-utils'
import Profile from '../../../src/components/Profile'
import Vuex from 'vuex'
import { store } from '../../../src/store'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Profile', () => {
  let profile
  let store

  beforeEach(() => {
    profile = { }
    store = new Vuex.Store({
      state: {},
      profile
    })
  })

  it ('is a Vue instance', () => {
    const selectedUser = 'foobar'

    const wrapper = shallow(Profile, {
      store,
      localVue,
      propsData: { selectedUser }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})