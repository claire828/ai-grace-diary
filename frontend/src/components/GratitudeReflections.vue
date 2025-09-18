<script setup lang="ts">
import IconHeart from '@/components/icons/IconHeart.vue'
import IconHeartStroke from './icons/IconHeartStroke.vue'

defineProps<{
  reflections: string[]
}>()
</script>

<template>
  <div
    data-slot="card"
    class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm md:col-span-2 lg:col-span-2"
  >
    <div
      data-slot="card-header"
      class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3"
    >
      <div data-slot="card-title" class="font-semibold flex items-center gap-2 text-lg">
        <IconHeartStroke class="w-5 h-5 text-primary" />
        Gratitude Reflections
      </div>
    </div>
    <div data-slot="card-content" class="px-6">
      <div class="grid gap-3 sm:grid-cols-2" v-if="reflections && reflections.length > 0">
        <div
          v-for="reflection in reflections"
          :key="reflection"
          class="flex items-start gap-3 p-3 rounded-lg bg-card border border-border"
        >
          <IconHeart class="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <p class="text-sm leading-relaxed">{{ reflection }}</p>
        </div>
      </div>
      <p v-else class="text-sm text-muted-foreground">No gratitude reflections available.</p>
    </div>
  </div>
</template>
