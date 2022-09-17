<template>
  <q-page class="row items-center justify-evenly">
    <div class="column items-center justify-center">
      <q-circular-progress
        reverse
        :value="timer"
        :min="0"
        :max="maxRange"
        size="200px"
        :thickness="1"
        color="grey-9"
        track-color="light-blue"
        class="q-ma-md cursor-pointer"
        @click="startTimer"
      />
      <div class="row items-center q-gutter-xs">
        <q-btn
          label="Start"
          color="green"
          @click="startTimer()"
          v-if="timer === 0"
        />
        <q-btn label="Remove" color="red" @click="removeTimer()" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const timer = ref(0);
const maxRange = ref(1 * 60);
const instance = ref<NodeJS.Timeout | number>(0);
const addToTimer = () => timer.value++;
const startTimer = () => {
  instance.value = setInterval(addToTimer, 1000);
};
const removeTimer = () => {
  clearInterval(instance.value);
  timer.value = 0;
  instance.value = 0;
};
</script>
