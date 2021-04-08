<template>
  <v-list class="pt-0" flat two-line>
    <!-- <v-list-item-group v-model="settings" multiple active-class=""> -->
    <Task 
    v-for="task in $store.state.tasks" 
    :key="task.id" 
    :task="task" />
    <!-- </v-list-item-group> -->
  </v-list>
</template>

<script>
import Task from "@/components/Todo/Task.vue";
export default {
  name: "ListTask",
  components: {
    Task,
  },
};
</script>

<style>
</style>