<template>
  <div class="stl-dialog text-white q-pa-md">
    <div class="row full-width bg-blue-grey rounded-borders">
      <div class="col row justify-start q-gutter-x-sm">
        <q-btn
          icon="delete"
          color="red"
          round
          flat
          dark
          size="md"
          @click="$emit('delete')"
        />
        <q-btn
          icon="edit"
          color="green-12"
          round
          flat
          dark
          size="sm"
          @click="$emit('edit')"
        />
      </div>
      <div class="col row justify-center items-center text-caption text-bold">
        {{ name }}
      </div>
      <div class="col row items-center justify-end">
        <q-btn
          icon="add"
          color="amber"
          round
          flat
          dark
          size="md"
          @click="$emit('add')"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineEmits(['add', 'delete', 'edit']);
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
