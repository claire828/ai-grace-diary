<script setup lang="ts">
interface Props {
  data: Array<{ day: string; diary_count: number; analysis_count: number }>
}

defineProps<Props>()
</script>

<template>
  <div
    class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
  >
    <div class="flex items-center mb-4">
      <div class="bg-purple-100 p-3 rounded-lg mr-4">
        <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800">Writing Activity</h3>
        <p class="text-sm text-gray-500">Your diary engagement patterns</p>
      </div>
    </div>

    <div class="space-y-4">
      <!-- Mini Calendar View -->
      <div class="grid grid-cols-7 gap-1 text-center">
        <div
          v-for="day in ['S', 'M', 'T', 'W', 'T', 'F', 'S']"
          :key="day"
          class="text-xs font-medium text-gray-500 py-1"
        >
          {{ day }}
        </div>
        <div
          v-for="(item, index) in getCalendarData()"
          :key="index"
          :class="`h-8 rounded text-xs flex items-center justify-center ${getActivityColor(item.count)}`"
        >
          {{ item.day }}
        </div>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-3 gap-3 text-center">
        <div class="p-3 bg-indigo-50 rounded-lg">
          <div class="text-xl font-bold text-indigo-600">{{ getTotalEntries() }}</div>
          <div class="text-xs text-gray-600">Total Entries</div>
        </div>
        <div class="p-3 bg-emerald-50 rounded-lg">
          <div class="text-xl font-bold text-emerald-600">{{ getStreak() }}</div>
          <div class="text-xs text-gray-600">Current Streak</div>
        </div>
        <div class="p-3 bg-amber-50 rounded-lg">
          <div class="text-xl font-bold text-amber-600">{{ getAnalysisRate() }}%</div>
          <div class="text-xs text-gray-600">Analysis Rate</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    getCalendarData() {
      // Generate last 28 days for mini calendar
      const days = []
      for (let i = 27; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        const dateStr = date.toISOString().split('T')[0]
        const dayData = this.data.find((d) => d.day === dateStr)
        days.push({
          day: date.getDate(),
          count: dayData?.diary_count || 0,
        })
      }
      return days
    },

    getActivityColor(count: number) {
      if (count === 0) return 'bg-gray-100 text-gray-400'
      if (count === 1) return 'bg-green-200 text-green-800'
      if (count === 2) return 'bg-green-300 text-green-900'
      return 'bg-green-400 text-white'
    },

    getTotalEntries() {
      return this.data.reduce((sum, d) => sum + d.diary_count, 0)
    },

    getStreak() {
      let streak = 0
      const sortedData = [...this.data].reverse()
      for (const day of sortedData) {
        if (day.diary_count > 0) {
          streak++
        } else {
          break
        }
      }
      return streak
    },

    getAnalysisRate() {
      const totalEntries = this.getTotalEntries()
      const totalAnalyses = this.data.reduce((sum, d) => sum + d.analysis_count, 0)
      if (totalEntries === 0) return 0
      return Math.round((totalAnalyses / totalEntries) * 100)
    },
  },
}
</script>
