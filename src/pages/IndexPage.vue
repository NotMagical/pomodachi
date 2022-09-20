<template>
  <q-page class="row items-center justify-evenly bg-dark">
    <div class="column items-center justify-center">
      <header-title name="TIMER" @add="addTimer()" />

      <progress-indicator
        :play="play"
        :timer-started="timerStarted"
        :timer="timer"
        :max-range="maxRange"
      />

      <timer-controls
        :timer="timer"
        :show-play="showPlay"
        @play="play()"
        @forward="forwardTimer()"
        @back="rewindTimer()"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Dialog } from 'quasar';
import ProgressIndicator from 'src/components/ProgressIndicator.vue';
import TimerControls from 'src/components/TimerControls.vue';
import HeaderTitle from 'src/components/HeaderTitle.vue';
import CreateTimer from 'src/components/CreateTimer.vue';

const timer = ref(0);
const maxRange = ref(1 * 60);
const instance = ref<NodeJS.Timeout | number>(0);

const showPlay = ref(false);

const stopTimer = computed(() => timerStarted.value && showPlay.value === true);

const timerStarted = computed(() => timer.value > 0);
const addToTimer = () => {
  if (timer.value === maxRange.value) return removeTimer();
  if (!stopTimer.value) return timer.value++;
};
const startTimer = () => {
  addToTimer();
  instance.value = setInterval(addToTimer, 1000);
};
const togglePause = () => (showPlay.value = !showPlay.value);
const play = () => {
  if (!timerStarted.value) return startTimer();
  togglePause();
};

const skipRange = 5;
const rewindTimer = () => {
  if (timerStarted.value) timer.value = timer.value - skipRange;
};
const forwardTimer = () => {
  if (timerStarted.value) timer.value = timer.value + skipRange;
};

const removeTimer = () => {
  clearInterval(instance.value);
  togglePause();
  timer.value = 0;
  instance.value = 0;
};

const addTimer = () => {
  Dialog.create({
    component: CreateTimer,
  }).onOk((timer) => {
    console.log(timer);
  });
};
</script>
