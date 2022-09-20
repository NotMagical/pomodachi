<template>
  <q-circular-progress
    show-value
    class="text-light-blue q-ma-md"
    :value="timerStarted ? timer : maxRange"
    :min="0"
    :max="maxRange"
    size="250px"
    color="light-blue"
    @click="play()"
  />
</template>
<script setup lang="ts">
defineProps({
  timerStarted: {
    type: Boolean,
    required: true,
  },
  timer: {
    type: Number,
    required: true,
  },
  maxRange: {
    type: Number,
    required: true,
  },
  play: {
    type: Function,
    required: true,
  },
});
</script>
