<template>
  <div>
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
</template>

<script>
export default {
  props: ["task"],
  name: "Task",
  data() {
    return {
      // newTask: "",
    };
  },
  methods: {
    doneTask(id) {
        console.log(id);
      this.$store.commit("doneTask", id);
    },
    deleteTask(id) {
      this.$store.commit("deleteTask", id);
    },
  },
};
</script>

<style>
</style>