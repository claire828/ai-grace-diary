<script setup lang="ts">
import IconTrendingUp from './icons/IconTrendingUp.vue'
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
      <div class="flex items-center gap-3">
        <div
          class="px-4 py-2 rounded-full border-2 font-medium bg-yellow-100 text-yellow-700 border-yellow-200"
        >
          Moderate
        </div>
        <div class="flex gap-1">
          <div class="w-3 h-3 rounded-full bg-primary"></div>
          <div class="w-3 h-3 rounded-full bg-primary"></div>
          <div class="w-3 h-3 rounded-full bg-primary"></div>
          <div class="w-3 h-3 rounded-full bg-muted"></div>
          <div class="w-3 h-3 rounded-full bg-muted"></div>
        </div>
      </div>
      <p class="text-sm text-muted-foreground leading-relaxed">
        Moderate stress detected. You're managing well but could benefit from some relaxation
        techniques.
      </p>
    </div>
  </div>
</template>
