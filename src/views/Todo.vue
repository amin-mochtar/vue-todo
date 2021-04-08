<template>
  <div class="home">
    <v-text-field
      v-model="newTask"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="add task"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>
    <v-list v-if="$store.state.tasks .length" class="pt-0" flat two-line>
      <!-- <v-list-item-group v-model="settings" multiple active-class=""> -->
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="primary">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
      <!-- </v-list-item-group> -->
    </v-list>
    <div class="noTask" v-else>
      <v-icon color="primary" size="100">mdi-check</v-icon>
      <div class="text-h5 primary--text">No Task</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Todo",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask () {
      this.$store.commit('addTask', this.newTask)
      this.newTask = ''
    },
    doneTask(id) {
      this.$store.commit('doneTask', id)
    },
    deleteTask(id) {
      this.$store.commit('deleteTask', id)
    },
  },
};
</script>

<style>
  .noTask {
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
  }
  /* .noTask
    position: absolute */
    /* left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5 */
</style>
