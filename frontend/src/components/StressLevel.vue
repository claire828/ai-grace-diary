<script setup lang="ts">
import type { StressLevel } from '@/models'
import { computed } from 'vue'
import IconTrendingUp from './icons/IconTrendingUp.vue'

const props = defineProps<{
  level: StressLevel
}>()

const stressLabel = computed(() => {
  if (!props.level) return ''
  const score = props.level.score
  if (score <= 2) return 'Low'
  if (score <= 3) return 'Moderate'
  return 'High'
})

const stressColor = computed(() => {
  if (!props.level) return ''
  const score = props.level.score
  if (score <= 2) return 'bg-green-100 text-green-700 border-green-200'
  if (score <= 3) return 'bg-yellow-100 text-yellow-700 border-yellow-200'
  return 'bg-red-100 text-red-700 border-red-200'
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
        <IconTrendingUp /> Stress Level
      </div>
    </div>
    <div data-slot="card-content" class="px-6 space-y-4">
      <div class="flex items-center gap-3" v-if="level">
        <div :class="['px-4 py-2 rounded-full border-2 font-medium', stressColor]">
          {{ stressLabel }}
        </div>
        <div class="flex gap-1">
          <div
            v-for="i in 5"
            :key="i"
            :class="['w-3 h-3 rounded-full', i <= level.score ? 'bg-primary' : 'bg-muted']"
          ></div>
        </div>
      </div>
      <p class="text-sm text-muted-foreground leading-relaxed" v-if="level">
        {{ level.explanation }}
      </p>
      <p class="text-sm text-muted-foreground leading-relaxed" v-else>
        No stress level data available.
      </p>
    </div>
  </div>
</template>
