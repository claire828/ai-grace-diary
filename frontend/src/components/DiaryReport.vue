<script setup lang="ts">
import DayReflection from './DayReflection.vue'
import EmotionalBalance from './EmotionalBalance.vue'
import EmotionalState from './EmotionalState.vue'
import GentleGuidance from './GentleGuidance.vue'
import GratitudeReflections from './GratitudeReflections.vue'
import KeyThemes from './KeyThemes.vue'
import StressLevel from './StressLevel.vue'
</script>

<template>
  <header class="mb-8 text-center">
    <h1 class="text-3xl font-bold text-foreground mb-2">Your Diary Analysis</h1>
    <p class="text-muted-foreground text-lg">
      Understanding your emotional journey with gentle insights
    </p>
  </header>

  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-2">
    <StressLevel></StressLevel>
    <EmotionalState></EmotionalState>
    <EmotionalBalance></EmotionalBalance>
    <KeyThemes></KeyThemes>
    <GratitudeReflections></GratitudeReflections>
    <DayReflection></DayReflection>
    <GentleGuidance></GentleGuidance>
  </div>
</template>
