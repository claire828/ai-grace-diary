<script setup lang="ts">
import InsightSummary from '@/components/insights/InsightSummary.vue'
import MoodCalendar from '@/components/insights/MoodCalendar.vue'
import StressTrendChart from '@/components/insights/StressTrendChart.vue'
import WeeklyPattern from '@/components/insights/WeeklyPattern.vue'
import { useDiary } from '@/composables/useDiary'
import type { DiaryInsight } from '@/types'
import { useObservable } from '@vueuse/rxjs'
import { ref } from 'vue'

const { actions, streams } = useDiary()
const selectedPeriod = ref('30d')

const insightsData = useObservable(streams.fetchInsightsStream$(), {
  initialValue: [] as DiaryInsight[],
})

actions.fetchInsights()

function handlePeriodChange(period: string) {
  selectedPeriod.value = period
  // TODO: 根據選擇的時間段刷新數據
  // 目前後端只支援 30 天，未來可以添加時間段參數
  actions.fetchInsights()
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <!-- Header -->
    <header class="mb-8 text-center pt-8">
      <div class="max-w-4xl mx-auto px-4">
        <h1
          class="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
        >
          Your Emotional Journey
        </h1>
        <p class="text-lg text-gray-600 mb-6">
          Discover patterns and insights from your diary entries with gentle understanding
        </p>

        <!-- Period Selector -->
        <div class="flex justify-center space-x-2">
          <button
            v-for="period in [
              { label: '7 Days', value: '7d' },
              { label: '30 Days', value: '30d' },
              { label: '90 Days', value: '90d' },
            ]"
            :key="period.value"
            @click="handlePeriodChange(period.value)"
            :class="`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedPeriod === period.value
                ? 'bg-indigo-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
            }`"
          >
            {{ period.label }}
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 pb-12">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Summary Card (Full Width) -->
        <InsightSummary :data="insightsData" class="lg:col-span-3" />

        <!-- Stress Trend Chart -->
        <StressTrendChart :data="insightsData" class="lg:col-span-2" />

        <!-- Weekly Pattern -->
        <WeeklyPattern :data="insightsData" />

        <!-- Monthly Calendar (MoodCalendar) -->
        <MoodCalendar :data="insightsData" class="lg:col-span-2" />
      </div>

      <!-- Inspirational Quote -->
      <div class="mt-12 text-center">
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <div class="max-w-2xl mx-auto">
            <svg
              class="w-8 h-8 text-indigo-400 mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
              ></path>
            </svg>
            <p class="text-xl font-light text-gray-700 italic mb-4">
              "The curious paradox is that when I accept myself just as I am, then I can change."
            </p>
            <p class="text-sm text-gray-500">— Carl Rogers</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
