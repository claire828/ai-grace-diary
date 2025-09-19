<script setup lang="ts">
import IconAnalyze from '@/components/icons/IconAnalyze.vue'
import IconTrash from '@/components/icons/IconTrash.vue'
import IconViewDetail from '@/components/icons/IconViewDetail.vue'
import type { DiaryActionType, DiaryStatus, MoodStatus } from '@/types/diary.type'
import { computed } from 'vue'

const props = defineProps<{
  date: string
  content: string
  mood: MoodStatus
  status: DiaryStatus
}>()

const emit = defineEmits<{
  (e: DiaryActionType): void
}>()

// Computed properties
const showAnalyzeButton = computed(() => ['draft', 'analyzing'].includes(props.status))
const isAnalyzing = computed(() => props.status === 'analyzing')
const isAnalyzed = computed(() => props.status === 'analyzed')

const buttonClasses = computed(() =>
  isAnalyzing.value
    ? 'bg-amber-600 cursor-not-allowed'
    : 'cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 hover:scale-105',
)

function handleAction(event: Event, type: DiaryActionType) {
  event.stopPropagation()
  emit(type)
}
</script>

<template>
  <div
    class="flex flex-col gap-2 md:flex-row items-start md:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
  >
    <!-- Content Section -->
    <section class="flex-1 min-w-0">
      <h3 class="font-medium text-gray-900 mb-1">{{ date }}</h3>
      <p class="text-sm text-gray-600 truncate max-w-xs md:max-w-lg lg:max-w-3xl">
        {{ content }}
      </p>
    </section>

    <!-- Actions Section -->
    <section class="flex items-center space-x-2 flex-shrink-0">
      <!-- Delete Button -->
      <button
        :disabled="isAnalyzing"
        @click="handleAction($event, 'delete')"
        class="p-1 hover:scale-110 transition-transform text-gray-500 hover:text-red-500 cursor-pointer"
        aria-label="Delete diary"
      >
        <IconTrash />
      </button>

      <!-- View Analysis Button -->
      <button
        v-if="isAnalyzed"
        @click="handleAction($event, 'viewAnalysis')"
        class="p-1 hover:scale-110 transition-transform text-gray-500 hover:text-blue-500 cursor-pointer"
        aria-label="View analysis detail"
      >
        <IconViewDetail />
      </button>

      <!-- Analyze Button -->
      <button
        v-if="showAnalyzeButton"
        @click="handleAction($event, 'analyze')"
        :disabled="isAnalyzing"
        :class="buttonClasses"
        class="flex items-center px-3 py-1 text-white text-sm rounded-2xl shadow-lg transition-all transform"
      >
        <IconAnalyze v-if="!isAnalyzing" class="w-4 h-4 mr-1" />
        {{ isAnalyzing ? 'Analyzing...' : 'Analyze' }}
      </button>
    </section>
  </div>
</template>
