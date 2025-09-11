<script setup lang="ts">
import { useDiary } from '@/composables/useDiary'
import {
  DIARY_DESCRIPTION,
  DIARY_PLACEHOLDER,
  DIARY_TITLE,
  SAVE_BUTTON_TEXT,
  WORDS_MAX,
  WORDS_SUFFIX,
} from '@/constants/diary.constants'
import { ref } from 'vue'
import DiaryInsightTip from './DiaryInsightTip.vue'

const { actions } = useDiary()
const diaryRef = ref('')

function write() {
  actions.addDiary(diaryRef.value)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <!--insights-section-->
    <DiaryInsightTip />

    <section class="bg-white rounded-2xl shadow-sm border p-6">
      <!-- title-->
      <div class="flex flex-col items-start justify-start mb-4 text-zinc-800">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">{{ DIARY_TITLE }}</h2>
        <p class="text-gray-600">{{ DIARY_DESCRIPTION }}</p>
      </div>

      <!-- text area-->
      <textarea
        v-model="diaryRef"
        :maxlength="WORDS_MAX"
        :placeholder="DIARY_PLACEHOLDER"
        class="w-full h-96 p-6 border-2 border-purple-100 rounded-2xl focus:border-purple-300 focus:outline-none resize-none text-gray-700 leading-relaxed"
      ></textarea>

      <!-- bottom-->
      <div class="flex justify-between items-center mt-4">
        <span class="text-sm text-gray-500"
          >{{ diaryRef.length }} / {{ WORDS_MAX }} {{ WORDS_SUFFIX }}</span
        >
        <div class="flex items-center space-x-4">
          <button
            @click="write"
            class="px-6 py-3 text-gray-500 hover:text-gray-800 transition-colors"
          >
            {{ SAVE_BUTTON_TEXT }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
