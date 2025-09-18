<script setup lang="ts">
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
          class="lucide lucide-star w-5 h-5 text-primary"
        >
          <path
            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
          ></path></svg
        >Key Themes
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
