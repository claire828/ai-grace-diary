<script setup lang="ts"></script>

<template>
  <section class="bg-white rounded-xl shadow-sm border p-6">
    <!-- title-->
    <div class="flex items-center justify-between mb-4 text-zinc-800">
      <h2 class="text-lg font-semibold leading-5">Today's Entry</h2>
      <span class="text-sm text-gray-500">Sep 15, 2025</span>
    </div>

    <!-- text area-->
    <textarea
      class="text-gray-600 placeholder-neutral-500 w-full h-48 p-4 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Write about your day, feelings, and thoughts..."
    ></textarea>
    <!-- bottom-->
    <div class="flex justify-between items-center mt-4">
      <span class="text-sm text-gray-500">0 words</span>
      <button
        class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Save Entry
      </button>
    </div>
  </section>
</template>
