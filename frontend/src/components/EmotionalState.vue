<script setup lang="ts">
import IconHeartStroke from '@/components/icons/IconHeartStroke.vue'
import type { EmotionalState } from '@/models'
import { computed } from 'vue'

const props = defineProps<{
  state: EmotionalState
}>()
const categoryColor = computed(() => {
  if (!props.state) return ''
  switch (props.state.category.toLowerCase()) {
    case 'positive':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200'
    case 'negative':
      return 'bg-red-50 text-red-700 border-red-200'
    case 'neutral':
      return 'bg-gray-50 text-gray-700 border-gray-200'
    default:
      return 'bg-blue-50 text-blue-700 border-blue-200'
  }
})
</script>

<template>
  <div
    data-slot="card"
    class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm md:col-span-2 lg:col-span-1"
  >
    <div
      data-slot="card-header"
      class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3"
    >
      <div data-slot="card-title" class="font-semibold flex items-center gap-2 text-lg">
        <IconHeartStroke />Emotional State
      </div>
    </div>
    <div data-slot="card-content" class="px-6">
      <div class="space-y-4" v-if="state">
        <div class="flex items-center gap-3">
          <span
            data-slot="badge"
            :class="[
              'inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] px-3 py-1',
              categoryColor,
            ]"
            >{{ state.category }}</span
          >
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sparkles w-4 h-4"
            >
              <path
                d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
              ></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path></svg
            ><span class="capitalize">{{ state.intensity }} intensity</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="mood in state.moodWords"
            :key="mood"
            data-slot="badge"
            class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] text-foreground bg-card"
            >{{ mood }}</span
          >
        </div>
      </div>
      <div v-else class="px-6">
        <p class="text-sm text-muted-foreground">No emotional state data available.</p>
      </div>
    </div>
  </div>
</template>
