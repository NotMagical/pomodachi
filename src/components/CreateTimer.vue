<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-form @submit="onDialogOK(timer)" autofocus>
        <q-card-section class="q-gutter-y-xs">
          <q-input v-model="timer.name" label="Name" />
          <q-input
            v-model="timer.maxRange"
            label="Max range"
            placeholder="60"
          />
          <q-input v-model="timer.minRange" label="Min range" />
          <q-input v-model="timer.skipRange" label="Skip range" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            label="cancel"
            flat
            class="text-blue-grey-6"
            @click="onDialogHide"
          />
          <q-btn label="create" type="submit" class="bg-green-13 text-white" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useDialogPluginComponent } from 'quasar';
const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent();
defineEmits([...useDialogPluginComponent.emits]);

const timer = ref({
  name: null,
  maxRange: 60,
  minRange: 0,
  skipRange: 5,
});
</script>
