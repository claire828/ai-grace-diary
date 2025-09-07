<script setup lang="ts">
import AnalysisBoard from '@/components/AnalysisBoard.vue'
import DiaryHistory from '@/components/DiaryHistory.vue'
import DiaryInput from '@/components/DiaryInput.vue'
import DiaryTranslation from '@/components/DiaryTranslation.vue'
import GratitudeBoard from '@/components/GratitudeBoard.vue'
import KeySummary from '@/components/KeySummary.vue'
import TTSControl from '@/components/TTSControl.vue'
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
    <div class="lg:col-span-2 space-y-6">
      <DiaryInput />
      <AnalysisBoard />
      <GratitudeBoard />
    </div>
    <div class="lg:col-span-2 space-y-6">
      <TTSControl />
      <DiaryTranslation />
      <KeySummary />
    </div>
  </div>
  <DiaryHistory class="mt-8" />
</template>
