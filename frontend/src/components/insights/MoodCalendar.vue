<script setup lang="ts">
import type { DiaryInsight } from '@/types'
import { computed } from 'vue'

interface Props {
  data: DiaryInsight[]
}

const props = defineProps<Props>()

// 獲取當前月份的日期信息
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth()

// 獲取當月第一天和最後一天
const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)

// 獲取當月第一天是星期幾（0=Sunday, 1=Monday...）
const firstDayWeekday = firstDayOfMonth.getDay()

// 生成日曆網格
const calendarDays = computed(() => {
  const days: Array<{
    date: number | null
    hasEntry: boolean
    isToday: boolean
    dateStr?: string
    color?: string
  }> = []
  const daysInMonth = lastDayOfMonth.getDate()

  // 添加上個月的空白日期
  for (let i = 0; i < firstDayWeekday; i++) {
    days.push({ date: null, hasEntry: false, isToday: false })
  }

  // 添加本月的日期
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    let hasEntry = false
    let color = ''
    const insight = props.data.find((insight) => {
      const d = new Date(insight.day)
      const normalized = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
      return normalized === dateStr && insight.diary_count > 0
    })
    if (insight) {
      hasEntry = true
      const s = insight.avg_stress_score
      if (s === null || s === undefined) color = 'bg-gray-300'
      else if (s <= 1.5)
        color = 'bg-green-400' // Low stress
      else if (s <= 3)
        color = 'bg-yellow-300' // Moderate
      else color = 'bg-orange-400' // High stress
    }
    const isToday = day === currentDate.getDate()
    days.push({
      date: day,
      hasEntry,
      isToday,
      dateStr: dateStr,
      color,
    })
  }
  return days
})

// 月份名稱
const monthName = currentDate.toLocaleDateString('en-US', { month: 'long' })

// 獲取當天的日記數量和平均壓力分數（用同樣的日期格式比對）
const getDayInfo = (dateStr: string) => {
  const dayData = props.data.find((insight) => {
    const d = new Date(insight.day)
    const normalized = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    return normalized === dateStr
  })
  return {
    diaryCount: dayData?.diary_count || 0,
    avgStress: dayData?.avg_stress_score,
  }
}
</script>

<template>
  <div
    class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
  >
    <!-- Header -->
    <div class="mb-4">
      <h3 class="text-base font-semibold text-gray-800">Monthly Calendar</h3>
      <p class="text-xs text-gray-500">{{ monthName }} {{ currentYear }}</p>
    </div>

    <!-- Calendar Grid -->
    <div class="grid grid-cols-7 gap-1 mb-4">
      <!-- Week day headers -->
      <div
        v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']"
        :key="day"
        class="text-center text-[11px] font-medium text-gray-400 py-1"
      >
        {{ day }}
      </div>

      <!-- Calendar days -->
      <div
        v-for="(day, index) in calendarDays"
        :key="index"
        :class="[
          'w-7 h-7 flex items-center justify-center text-xs relative group cursor-pointer rounded-md transition-all select-none',
          day.date === null
            ? ''
            : day.hasEntry && day.dateStr
              ? `${day.color} text-white font-bold hover:scale-105`
              : 'bg-white text-gray-300',
          day.isToday ? 'ring-2 ring-indigo-500 ring-offset-1' : '',
        ]"
      >
        <span v-if="day.date">{{ day.date }}</span>
        <!-- Tooltip -->
        <div
          v-if="day.hasEntry && day.dateStr"
          class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none"
        >
          <div>
            {{ getDayInfo(day.dateStr).diaryCount }}
            {{ getDayInfo(day.dateStr).diaryCount === 1 ? 'entry' : 'entries' }}
          </div>
          <div v-if="getDayInfo(day.dateStr).avgStress">
            Stress: {{ getDayInfo(day.dateStr).avgStress?.toFixed(1) }}/5
          </div>
        </div>
      </div>
    </div>

    <!-- Legend -->
    <div class="mt-4 pt-4 border-t border-gray-100">
      <div class="text-xs text-gray-600 mb-2 font-medium">Activity Level</div>
      <div class="flex items-center space-x-4 text-xs">
        <div class="flex items-center">
          <div class="w-3 h-3 bg-gray-100 rounded mr-2"></div>
          <span class="text-gray-500">No entries</span>
        </div>
        <div class="flex items-center">
          <div class="w-3 h-3 bg-green-200 rounded mr-2"></div>
          <span class="text-gray-600">Low stress</span>
        </div>
        <div class="flex items-center">
          <div class="w-3 h-3 bg-yellow-200 rounded mr-2"></div>
          <span class="text-gray-600">Moderate</span>
        </div>
        <div class="flex items-center">
          <div class="w-3 h-3 bg-orange-200 rounded mr-2"></div>
          <span class="text-gray-600">High stress</span>
        </div>
      </div>
    </div>

    <!-- Statistics -->
    <div class="mt-4 pt-4 border-t border-gray-100">
      <div class="grid grid-cols-3 gap-4 text-center">
        <div>
          <div class="text-lg font-bold text-indigo-600">
            {{ data.filter((d) => d.diary_count > 0).length }}
          </div>
          <div class="text-xs text-gray-500">Active Days</div>
        </div>
        <div>
          <div class="text-lg font-bold text-emerald-600">
            {{ data.reduce((sum, d) => sum + d.diary_count, 0) }}
          </div>
          <div class="text-xs text-gray-500">Total Entries</div>
        </div>
        <div>
          <div class="text-lg font-bold text-purple-600">
            {{ Math.max(...data.map((d) => d.diary_count), 0) }}
          </div>
          <div class="text-xs text-gray-500">Best Day</div>
        </div>
      </div>
    </div>
  </div>
</template>
