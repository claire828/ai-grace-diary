<script setup lang="ts">
import type { DiaryStatus, MoodStatus } from '@/types/diary.type'
import { defineProps } from 'vue'
import IconChevronRight from './icons/IconChevronRight.vue'
import IconEditable from './icons/IconEditable.vue'
import IconTrash from './icons/IconTrash.vue'

const props = defineProps<{
  date: string
  content: string
  mood: MoodStatus
  status: DiaryStatus
}>()

const canAnalyzed = props.status === 'draft'

function analyze() {
  console.log('analyze diary entry for date:', props.date)
}
</script>

<template>
  <div
    class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
  >
    <section>
      <h3 class="font-medium text-gray-900">{{ props.date }}</h3>
      <p class="text-sm text-gray-600">
        {{ props.content }}
      </p>
    </section>

    <!-- Buttons Area-->
    <section class="flex items-center space-x-2">
      <IconTrash class="hover:scale-110 transition-transform" />
      <IconEditable class="hover:scale-110 transition-transform" />
      <div v-if="canAnalyzed" class="flex space-x-2">
        <button
          @click="analyze"
          class="flex cursor-pointer items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl hover:from-purple-600 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-lg"
        >
          <IconAnalyze />
          Analyze My Day
        </button>
      </div>

      <template v-if="props.mood !== 'Waiting for Analysis'">
        <span
          class="px-2 py-1 text-xs rounded-full"
          :class="{
            'bg-green-100 text-green-800': props.mood === 'Positive',
            'bg-yellow-100 text-yellow-800': props.mood === 'Neutral',
            'bg-red-100 text-red-800': props.mood === 'Negative',
          }"
        >
          {{ props.mood }}
        </span>
        <IconChevronRight />
      </template>
    </section>
  </div>
</template>
