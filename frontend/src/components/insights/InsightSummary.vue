<script setup lang="ts">
interface Props {
  data: Array<{ day: string; avg_stress_score: number | null; diary_count: number }>
}

defineProps<Props>()
</script>

<template>
  <div
    class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow col-span-full"
  >
    <div class="flex items-center mb-6">
      <div class="bg-gradient-to-br from-pink-100 to-purple-100 p-3 rounded-lg mr-4">
        <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-800">Your Journey Summary</h3>
        <p class="text-sm text-gray-500">Gentle insights from your emotional patterns</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6">
      <div class="prose prose-sm max-w-none text-gray-700 leading-relaxed">
        <p class="mb-4">
          <span class="font-semibold text-indigo-700">{{ getPeriodSummary() }}</span>
          Over the past {{ getActiveDays() }} days, you've been nurturing your emotional well-being
          through journaling.
        </p>

        <div class="grid md:grid-cols-2 gap-6 my-6">
          <div class="space-y-3">
            <h4 class="font-semibold text-purple-700 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
              Patterns We Notice
            </h4>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start">
                <span
                  class="inline-block w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"
                ></span>
                {{ getStressPattern() }}
              </li>
              <li class="flex items-start">
                <span
                  class="inline-block w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"
                ></span>
                {{ getActivityPattern() }}
              </li>
              <li class="flex items-start">
                <span
                  class="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"
                ></span>
                {{ getConsistencyPattern() }}
              </li>
            </ul>
          </div>

          <div class="space-y-3">
            <h4 class="font-semibold text-pink-700 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                ></path>
              </svg>
              Gentle Suggestions
            </h4>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start">
                <span
                  class="inline-block w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"
                ></span>
                {{ getMainSuggestion() }}
              </li>
              <li class="flex items-start">
                <span
                  class="inline-block w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"
                ></span>
                {{ getSecondSuggestion() }}
              </li>
              <li class="flex items-start">
                <span
                  class="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"
                ></span>
                {{ getThirdSuggestion() }}
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-white/60 pt-4 mt-6">
          <p class="text-center text-gray-600 font-medium">
            Remember, every step in your emotional journey matters. You're doing beautifully. 💜
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    getPeriodSummary() {
      const totalDays = this.data.length
      const activeDays = this.data.filter((d) => d.diary_count > 0).length
      if (activeDays / totalDays > 0.8) return 'What a wonderful month of self-reflection!'
      if (activeDays / totalDays > 0.5)
        return "You've been consistently caring for your emotional well-being."
      return "You've taken thoughtful moments to connect with yourself."
    },

    getActiveDays() {
      return this.data.filter((d) => d.diary_count > 0).length
    },

    getStressPattern() {
      const avgStress = this.getAverageStress()
      if (avgStress <= 2.5) return 'Your stress levels have been generally manageable and peaceful.'
      if (avgStress <= 3.5) return "You've navigated moderate stress levels with resilience."
      return "You've been working through some challenging periods with courage."
    },

    getActivityPattern() {
      const activeDays = this.getActiveDays()
      if (activeDays >= 20) return 'Your commitment to daily journaling is truly inspiring.'
      if (activeDays >= 10) return "You've maintained a healthy rhythm of self-reflection."
      return 'Each entry represents a meaningful moment of self-care.'
    },

    getConsistencyPattern() {
      const streak = this.getStreak()
      if (streak >= 7) return `Your current ${streak}-day streak shows beautiful dedication.`
      if (streak >= 3) return "You're building a lovely habit of regular reflection."
      return 'Every journal entry is a gift you give to your future self.'
    },

    getMainSuggestion() {
      const avgStress = this.getAverageStress()
      if (avgStress > 3.5)
        return 'Consider adding gentle breathing exercises or nature walks to your routine.'
      return 'Continue nurturing this beautiful practice of self-awareness.'
    },

    getSecondSuggestion() {
      const activeDays = this.getActiveDays()
      if (activeDays < 10) return 'Try setting a gentle daily reminder to check in with yourself.'
      return "Celebrate your consistency—you're building something truly valuable."
    },

    getThirdSuggestion() {
      return 'Remember to be kind to yourself on both good days and challenging ones.'
    },

    getAverageStress() {
      const validScores = this.data.filter((d) => d.avg_stress_score !== null)
      if (validScores.length === 0) return 0
      return validScores.reduce((sum, d) => sum + (d.avg_stress_score || 0), 0) / validScores.length
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
  },
}
</script>
