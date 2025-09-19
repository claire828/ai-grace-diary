<script setup lang="ts">
import IconSparkles from '@/components/icons/IconSparkles.vue'

defineProps<{
  balance: string
}>()
</script>

<template>
  <div
    data-slot="card"
    class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm md:col-span-1 lg:col-span-1"
  >
    <div
      data-slot="card-header"
      class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3"
    >
      <div data-slot="card-title" class="font-semibold flex items-center gap-2 text-lg">
        <IconSparkles class="w-5 h-5 text-primary" />
        Emotional Balance
      </div>
    </div>
    <div data-slot="card-content" class="px-6 space-y-4" v-if="balance">
      <div class="space-y-2">
        <div class="flex justify-between text-sm">
          <span class="text-emerald-600 font-medium">Positive</span>
          <span class="text-emerald-600 font-medium">{{ balance.split('/')[0] }}%</span>
        </div>
        <div
          aria-valuemax="100"
          aria-valuemin="0"
          role="progressbar"
          data-state="indeterminate"
          data-max="100"
          data-slot="progress"
          class="relative w-full overflow-hidden rounded-full h-3 bg-muted"
        >
          <div
            data-state="indeterminate"
            data-max="100"
            data-slot="progress-indicator"
            class="bg-emerald-500 h-full w-full flex-1 transition-all"
            :style="`transform: translateX(-${100 - parseInt(balance.split('/')[0])}%)`"
          ></div>
        </div>
      </div>
      <div class="space-y-2">
        <div class="flex justify-between text-sm">
          <span class="text-rose-600 font-medium">Negative</span>
          <span class="text-rose-600 font-medium">{{ balance.split('/')[1] }}%</span>
        </div>
        <div
          aria-valuemax="100"
          aria-valuemin="0"
          role="progressbar"
          data-state="indeterminate"
          data-max="100"
          data-slot="progress"
          class="relative w-full overflow-hidden rounded-full h-3 bg-muted"
        >
          <div
            data-state="indeterminate"
            data-max="100"
            data-slot="progress-indicator"
            class="bg-rose-500 h-full w-full flex-1 transition-all"
            :style="`transform: translateX(-${100 - parseInt(balance.split('/')[1])}%)`"
          ></div>
        </div>
      </div>
    </div>
    <div v-else class="px-6">
      <p class="text-sm text-muted-foreground">No emotional balance data available.</p>
    </div>
  </div>
</template>
