<template>
  <div class="home">
    <FieldAddTask />
    <ListTask v-if="$store.state.tasks.length" />
    <NoTasks v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import ListTask from '@/components/Todo/ListTask.vue';
import FieldAddTask from '@/components/Todo/FieldAddTask.vue';
import NoTasks from '@/components/Todo/NoTasks.vue';
export default {
  name: "Todo",
  components: {
    FieldAddTask, ListTask, NoTasks
  },
};
</script>
