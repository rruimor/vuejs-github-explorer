import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedUser: '',
    searchQuery: ''
  },
  mutations: {
    clearSelectedUser (state) {
      state.selectedUser = ''
    },
    setSelectedUser (state, newSelectedUser) {
      state.selectedUser = newSelectedUser
    },
    setSearchQuery (state, newSearchQuery) {
      state.searchQuery = newSearchQuery
    }
  }
})

