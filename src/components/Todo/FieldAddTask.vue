<template>
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
</template>

<script>
export default {
  name: 'AddField',
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      this.$store.commit("addTask", this.newTask);
      this.newTask = "";
    },
  },
};
</script>

<style>
</style>