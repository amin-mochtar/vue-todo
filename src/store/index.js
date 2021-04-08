import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [{
        id: 1,
        title: "bangun tidur",
        done: false,
      },
      {
        id: 2,
        title: "olahraga",
        done: false,
      },
      {
        id: 3,
        title: "sarapan",
        done: false,
      },
    ],
    snackbar: {
      show: true
    },
  },
  mutations: {
    addTask(state, newTask) {
      let addNewTask = {
        id: Date.now(),
        title: newTask,
        done: false
      };
      state.tasks.push(addNewTask);
      // this.newTask = "";
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
  actions: {},
  modules: {}
})