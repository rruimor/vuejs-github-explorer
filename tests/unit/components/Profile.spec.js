import { shallow, createLocalVue } from '@vue/test-utils'
import Profile from '@/components/Profile'
import Vuex from 'vuex'
import VueClazyLoad from 'vue-clazy-load'
import { store } from '@/store'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueClazyLoad)

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