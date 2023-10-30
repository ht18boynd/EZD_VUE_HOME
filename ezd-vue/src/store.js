// src/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null, // Thông tin người dùng, ban đầu là null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    // Không cần tạo action login ở đây, vì bạn đã có AuthService
  },
  getters: {
    getUser: (state) => state.user,
  },
});
