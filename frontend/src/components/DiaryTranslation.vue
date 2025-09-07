<script setup lang="ts"></script>

<template>
  <section id="translation-section" class="bg-white rounded-xl shadow-sm border p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Translation</h2>
    <div class="space-y-4">
      <select class="w-full border border-gray-200 rounded-lg px-3 py-2">
        <option>Select Language</option>
        <option>Spanish</option>
        <option>French</option>
        <option>German</option>
        <option>Italian</option>
        <option>Portuguese</option>
      </select>
      <button
        class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Translate Entry
      </button>
      <div class="bg-gray-50 rounded-lg p-4 min-h-[100px]">
        <p class="text-gray-500 text-sm">Translation will appear here...</p>
      </div>
    </div>
  </section>
</template>
