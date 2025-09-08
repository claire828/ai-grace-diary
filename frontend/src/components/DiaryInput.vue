<script setup lang="ts">
import IconAnalyze from '@/components/icons/IconAnalyze.vue'
import { ref } from 'vue'
import IconEditable from './icons/IconEditable.vue'
import IconLightbulb from './icons/IconLightbulb.vue'
const wordsMax = 2000
const diaryRef = ref('')

// const today = new Date().toLocaleDateString('en-US', {
//   year: 'numeric',
//   month: 'long', // full month name, e.g., September
//   day: 'numeric',
// })

// TODO: 比對日期，是否過了一天，如果不同天就要跳出確認視窗
function write() {
  console.log('write:', diaryRef.value)
}
</script>

<template>
  <!--insights-section-->
  <section class="space-y-3 flex justify-between">
    <div class="p-4 bg-purple-50 rounded-xl border border-purple-100">
      <div class="flex items-start space-x-3">
        <IconLightbulb />
        <p class="text-sm text-gray-700">
          Write your diary entry to unlock AI-powered insights about your emotional patterns and
          daily reflections.
        </p>
      </div>
    </div>
  </section>

  <!-- Write-->
  <section class="bg-white rounded-2xl shadow-sm border p-6">
    <!-- title-->
    <div class="flex items-center justify-between mb-4 text-zinc-800">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">How was your day today?</h2>
        <p class="text-gray-600">
          Take a moment to reflect on your experiences, emotions, and thoughts from today.
        </p>
      </div>

      <section id="status-indicator" class="flex items-center space-x-3 p-4">
        <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span class="text-sm font-medium text-green-700">Editable - Ready for your thoughts</span>
        <IconEditable />
      </section>
      <!-- <span class="text-sm text-gray-500">{{ today }} </span> -->
    </div>

    <!-- text area-->
    <textarea
      v-model="diaryRef"
      maxlength="wordsMax"
      class="w-full h-96 p-6 border-2 border-purple-100 rounded-2xl focus:border-purple-300 focus:outline-none resize-none text-gray-700 leading-relaxed"
      placeholder="Today I felt... I accomplished... I learned... I'm grateful for...

What made me smile today?
What challenged me?
What am I looking forward to tomorrow?"
    ></textarea>
    <!-- bottom-->
    <div class="flex justify-between items-center mt-4">
      <span class="text-sm text-gray-500"> {{ diaryRef.length }} / {{ wordsMax }} words</span>

      <div class="flex items-center space-x-4">
        <button
          @click="write"
          class="px-6 py-3 text-gray-500 hover:text-gray-800 transition-colors"
        >
          Save Draft
        </button>
        <button
          class="flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl hover:from-purple-600 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-lg"
        >
          <IconAnalyze />
          Analyze My Day
        </button>
      </div>
    </div>
  </section>
</template>
