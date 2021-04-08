<template>
  <div class="text-center">
    <v-snackbar v-model="$store.state.snackbar.show" :timeout="timeout">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="$store.state.snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Snackbar", 
  data() {
    return {
      snackbar: true,
      text: "My timeout is set to 2000.",
      timeout: 2000,
    };
  },
};
</script>

<style>
</style>