<template>
  <div class="q-pa-sm rounded-borders">
    <div class="row q-gutter-x-md">
      <q-btn
        icon="skip_previous"
        color="green"
        round
        dark
        @click="$emit('back')"
      />

      <q-btn
        :icon="showPlay || timer === 0 ? 'play_circle' : 'pause_circle'"
        color="green"
        round
        dark
        @click="$emit('play')"
      />

      <q-btn
        icon="skip_next"
        color="green"
        round
        dark
        @click="$emit('forward')"
      />
    </div>

    <!-- <q-btn label="Remove" color="red" @click="removeTimer()" /> -->
  </div>
</template>
<script setup lang="ts">
defineEmits(['forward', 'back', 'play']);
defineProps({
  showPlay: {
    type: Boolean,
    required: true
  },
  timer: {
    type: Number,
    required: true
  }
})
</script>
