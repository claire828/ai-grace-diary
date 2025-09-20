<script setup lang="ts">
interface Props {
  data: Array<{ day: string; avg_stress_score: number | null }>
}

defineProps<Props>()
</script>

<template>
  <div
    class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
  >
    <div class="flex items-center mb-4">
      <div class="bg-red-100 p-3 rounded-lg mr-4">
        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ></path>
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800">Stress Level Trends</h3>
        <p class="text-sm text-gray-500">Your stress patterns over time</p>
      </div>
    </div>

    <div class="space-y-3">
      <div
        class="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg"
      >
        <span class="text-sm font-medium text-gray-700">Past 7 Days</span>
        <div class="flex space-x-1">
          <div
            v-for="(item, index) in data.slice(-7)"
            :key="index"
            class="flex flex-col items-center"
          >
            <div
              :class="`h-8 w-3 rounded-full ${getStressColor(item.avg_stress_score)}`"
              :style="{ height: `${(item.avg_stress_score || 0) * 6 + 8}px` }"
            ></div>
            <span class="text-xs text-gray-500 mt-1">{{ getDayName(item.day) }}</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 text-center">
        <div class="p-3 bg-green-50 rounded-lg">
          <div class="text-2xl font-bold text-green-600">{{ getAverageStress() }}</div>
          <div class="text-sm text-gray-600">Average This Week</div>
        </div>
        <div class="p-3 bg-blue-50 rounded-lg">
          <div class="text-2xl font-bold text-blue-600">{{ getLowestDay() }}</div>
          <div class="text-sm text-gray-600">Most Peaceful Day</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    getStressColor(score: number | null) {
      if (!score) return 'bg-gray-300'
      if (score <= 2) return 'bg-green-400'
      if (score <= 3) return 'bg-yellow-400'
      if (score <= 4) return 'bg-orange-400'
      return 'bg-red-400'
    },

    getDayName(dateStr: string) {
      const date = new Date(dateStr)
      return date.toLocaleDateString('en', { weekday: 'short' })
    },

    getAverageStress() {
      const validScores = this.data.filter((d) => d.avg_stress_score !== null)
      if (validScores.length === 0) return 'N/A'
      const avg =
        validScores.reduce((sum, d) => sum + (d.avg_stress_score || 0), 0) / validScores.length
      return avg.toFixed(1)
    },

    getLowestDay() {
      const validScores = this.data.filter((d) => d.avg_stress_score !== null)
      if (validScores.length === 0) return 'N/A'
      const lowest = validScores.reduce((min, d) =>
        (d.avg_stress_score || 0) < (min.avg_stress_score || 0) ? d : min,
      )
      return this.getDayName(lowest.day)
    },
  },
}
</script>
