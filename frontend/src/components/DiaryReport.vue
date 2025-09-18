<!-- @ts-nocheck -->
<script setup lang="ts">
import { useDiary } from '@/composables/useDiary'
import { useObservable } from '@vueuse/rxjs'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DayReflection from './DayReflection.vue'
import EmotionalBalance from './EmotionalBalance.vue'
import EmotionalState from './EmotionalState.vue'
import GentleGuidance from './GentleGuidance.vue'
import GratitudeReflections from './GratitudeReflections.vue'
import KeyThemes from './KeyThemes.vue'
import StressLevel from './StressLevel.vue'

const route = useRoute()
const diaryId = computed(() => route.params.id as string)
const { streams } = useDiary()

const analysis = useObservable(streams.fetchDiaryAnalysis$(diaryId.value), {
  initialValue: undefined,
})
</script>

<template>
  <header class="mb-8 text-center">
    <h1 class="text-3xl font-bold text-foreground mb-2">Your Diary Analysis</h1>
    <p class="text-muted-foreground text-lg">
      Understanding your emotional journey with gentle insights
    </p>
    <p class="text-sm text-muted-foreground mt-2" v-if="diaryId">
      Analysis for Diary #{{ diaryId }}
    </p>
  </header>

  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-2" v-if="analysis">
    <StressLevel :level="analysis?.stressLevel" />
    <EmotionalState :state="analysis?.emotionalState" />
    <EmotionalBalance :balance="analysis?.emotionalState" />
    <KeyThemes :themes="analysis.themes" />
    <GratitudeReflections />
    <DayReflection :reflection="analysis?.summary" />
    <GentleGuidance :guidance="analysis?.feedback" />
  </div>
</template>
