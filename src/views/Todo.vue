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
    <v-list class="pt-0" flat two-line>
      <!-- <v-list-item-group v-model="settings" multiple active-class=""> -->
      <div v-for="task in tasks" :key="task.id">
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
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Todo",
  data() {
    return {
      newTask: '',
      tasks: [
        {
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
    };
  },
  methods: {
    addTask () {
      let newTask = {
        id: Date.now(),
        title: this.newTask
      }
      this.tasks.push(newTask)
      this.newTask = ''
    },
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>
