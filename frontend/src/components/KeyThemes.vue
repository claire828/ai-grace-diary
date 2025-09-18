<script setup lang="ts">
import IconStar from '@/components/icons/IconStar.vue'

defineProps<{
  themes: string[]
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
        <IconStar class="w-5 h-5 text-primary" />
        Key Themes
      </div>
    </div>
    <div data-slot="card-content" class="px-6">
      <div class="flex flex-wrap gap-2" v-if="themes && themes.length > 0">
        <span
          v-for="theme in themes"
          :key="theme"
          data-slot="badge"
          class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
          >{{ theme }}</span
        >
      </div>
      <p v-else class="text-sm text-muted-foreground">No themes available.</p>
    </div>
  </div>
</template>
