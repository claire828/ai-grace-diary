<script lang="ts" setup>
import IconSparkles from '@/components/icons/IconSparkles.vue'

defineProps<{
  guidance: string
}>()
</script>

<template>
  <div
    data-slot="card"
    class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm md:col-span-2 lg:col-span-3"
  >
    <div
      data-slot="card-header"
      class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3"
    >
      <div data-slot="card-title" class="font-semibold flex items-center gap-2 text-lg">
        <IconSparkles class="w-5 h-5 text-primary" />
        Gentle Guidance
      </div>
    </div>
    <div data-slot="card-content" class="px-6">
      <div class="bg-accent/5 p-4 rounded-lg border border-accent/20" v-if="guidance">
        <p class="text-sm leading-relaxed text-foreground/90">
          {{ guidance }}
        </p>
      </div>
      <div v-else class="bg-accent/5 p-4 rounded-lg border border-accent/20">
        <p class="text-sm leading-relaxed text-muted-foreground">No guidance available.</p>
      </div>
    </div>
  </div>
</template>
