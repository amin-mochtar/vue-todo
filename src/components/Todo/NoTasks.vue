<template>
   <div class="noTask">
      <v-icon color="primary" size="100">mdi-book-edit-outline</v-icon>
      <div class="text-h5 primary--text">Add Your Tasks</div>
    </div>
</template>

<script>
export default {
    name: 'NoTasks'
}
</script>

<style scoped>
  .noTask {
    height: 60vh;
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
