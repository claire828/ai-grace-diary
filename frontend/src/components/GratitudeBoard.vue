<script setup lang="ts">
import IconHeart from './icons/IconHeart.vue'
</script>

<template>
  <section id="gratitude-section" class="bg-white rounded-xl shadow-sm border p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Gratitude Points</h2>
    <div class="space-y-3">
      <div class="flex items-center p-3 bg-green-50 rounded-lg gap-1">
        <IconHeart></IconHeart>
        <span class="text-gray-700">Spending quality time with family</span>
      </div>
      <div class="flex items-center p-3 bg-green-50 rounded-lg gap-1">
        <IconHeart></IconHeart>
        <span class="text-gray-700">Beautiful sunny weather today</span>
      </div>
      <div class="flex items-center p-3 bg-green-50 rounded-lg gap-1">
        <IconHeart></IconHeart>
        <span class="text-gray-700">Successful completion of project</span>
      </div>
      <div class="flex items-center p-3 bg-green-50 rounded-lg gap-1">
        <IconHeart></IconHeart>
        <span class="text-gray-700">Good health and energy</span>
      </div>
      <div class="flex items-center p-3 bg-green-50 rounded-lg gap-1">
        <IconHeart></IconHeart>
        <span class="text-gray-700">Learning something new</span>
      </div>
    </div>
  </section>
</template>
