<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div class="bg-white p-6 rounded-2xl shadow-lg">
      <h2 class="text-lg font-semibold mb-4">{{ title }}</h2>
      <p class="mb-4">{{ message }}</p>
      <div class="flex justify-center space-x-4">
        <button
          @click="$emit('close', false)"
          class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          @click="$emit('close', true)"
          class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  message: string
}>()

defineEmits<{
  close: [payload: boolean]
}>()
</script>
