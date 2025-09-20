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
      <div class="bg-emerald-100 p-3 rounded-lg mr-4">
        <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          ></path>
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800">Weekly Rhythm</h3>
        <p class="text-sm text-gray-500">Your writing patterns throughout the week</p>
      </div>
    </div>

    <div class="space-y-4">
      <!-- Week Pattern -->
      <div class="space-y-2">
        <div
          v-for="(day, index) in getWeeklyPattern()"
          :key="index"
          class="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div class="flex items-center">
            <span class="text-sm font-medium text-gray-700 w-10">{{ day.name }}</span>
            <div class="flex-1 mx-3 bg-gray-200 rounded-full h-2">
              <div
                :class="`h-2 rounded-full ${getIntensityColor(day.intensity)}`"
                :style="{ width: `${day.intensity * 100}%` }"
              ></div>
            </div>
          </div>
          <span class="text-xs text-gray-500">{{ day.count }} entries</span>
        </div>
      </div>

      <!-- Best Day -->
      <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="font-semibold text-emerald-700">Most Reflective Day</h4>
            <p class="text-sm text-emerald-600">{{ getMostActiveDay() }}</p>
          </div>
          <div class="bg-emerald-100 p-2 rounded-full">
            <svg
              class="w-5 h-5 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    getWeeklyPattern() {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const pattern = days.map((day) => ({ name: day, count: 0, intensity: 0 }))

      this.data.forEach((item) => {
        const date = new Date(item.day)
        const dayIndex = date.getDay()
        pattern[dayIndex].count += item.diary_count
      })

      const maxCount = Math.max(...pattern.map((p) => p.count))
      pattern.forEach((p) => {
        p.intensity = maxCount > 0 ? p.count / maxCount : 0
      })

      return pattern
    },

    getIntensityColor(intensity: number) {
      if (intensity >= 0.8) return 'bg-emerald-500'
      if (intensity >= 0.6) return 'bg-emerald-400'
      if (intensity >= 0.4) return 'bg-emerald-300'
      if (intensity >= 0.2) return 'bg-emerald-200'
      return 'bg-gray-300'
    },

    getMostActiveDay() {
      const pattern = this.getWeeklyPattern()
      const mostActive = pattern.reduce((max, day) => (day.count > max.count ? day : max))
      return `${mostActive.name} with ${mostActive.count} entries`
    },
  },
}
</script>
