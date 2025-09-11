<script setup lang="ts">
import { useDiary } from '@/composables/useDiary'
import { ref } from 'vue'
import DiaryInsightTip from './DiaryInsightTip.vue'
const { addDiary$ } = useDiary()

const wordsMax = 4000
const diaryRef = ref('')
const defaultDiaryPlaceHolder = `Today I felt... I accomplished... I learned... I'm grateful for...

What made me smile today?
What challenged me?
What am I looking forward to tomorrow?`

function write() {
  addDiary$(diaryRef.value).subscribe()
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <!--insights-section-->
    <DiaryInsightTip />

    <section class="bg-white rounded-2xl shadow-sm border p-6">
      <!-- title-->
      <div class="flex flex-col items-start justify-start mb-4 text-zinc-800">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">How was your day today?</h2>
        <p class="text-gray-600">
          Take a moment to reflect on your experiences, emotions, and thoughts from today.
        </p>
      </div>

      <!-- text area-->
      <textarea
        v-model="diaryRef"
        :maxlength="wordsMax"
        :placeholder="defaultDiaryPlaceHolder"
        class="w-full h-96 p-6 border-2 border-purple-100 rounded-2xl focus:border-purple-300 focus:outline-none resize-none text-gray-700 leading-relaxed"
      ></textarea>

      <!-- bottom-->
      <div class="flex justify-between items-center mt-4">
        <span class="text-sm text-gray-500"> {{ diaryRef.length }} / {{ wordsMax }} words</span>
        <div class="flex items-center space-x-4">
          <button
            @click="write"
            class="px-6 py-3 text-gray-500 hover:text-gray-800 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
