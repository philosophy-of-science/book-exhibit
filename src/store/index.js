import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    faves: [],
  },

  getters: {
    isAFave: (state) => (title) => {
      return state.faves.find((book) => book.title === title);
    },
  },

  mutations: {
    addFave(state, payload) {
      state.faves.push(payload);
      localStorage.setItem("faves", JSON.stringify(state.faves));
    },
    removeFave(state, payload) {
      const filtered = state.faves.filter(
        (item) => item.title !== payload.title
      );

      state.faves = [...filtered];
      localStorage.setItem("faves", JSON.stringify(state.faves));
    },
  },
});

export default store;
