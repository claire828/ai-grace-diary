<script setup lang="ts">
import IconMessageCircle from '@/components/icons/IconMessageCircle.vue'

defineProps<{
  summary: string
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
        <IconMessageCircle class="w-5 h-5 text-primary" />
        Your Day in Reflection (summary)
      </div>
    </div>
    <div data-slot="card-content" class="px-6">
      <div class="bg-card/50 p-4 rounded-lg border border-border" v-if="summary">
        <p class="text-sm leading-relaxed italic text-foreground/90">"{{ summary }}"</p>
      </div>
      <div v-else class="bg-card/50 p-4 rounded-lg border border-border">
        <p class="text-sm leading-relaxed italic text-muted-foreground">
          No reflection summary available.
        </p>
      </div>
    </div>
  </div>
</template>
