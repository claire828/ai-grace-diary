<script setup lang="ts">
import DiaryRow from '@/components/diary/DiaryRow.vue'
import { useDiary } from '@/composables/useDiary'
import { formatEuropean } from '@/utils'
import { useRouter } from 'vue-router'

const router = useRouter()
const { diaries, actions } = useDiary()
actions.fetchDiaries()

const handleViewAnalysis = (diaryId: number) => {
  router.push(`/diary-analysis/${diaryId}`)
}
</script>

<template>
  <section id="diary-history" class="bg-white rounded-xl shadow-sm border p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-6">Your Diaries</h2>

    <!-- Empty State -->
    <div v-if="!diaries || diaries.length === 0" class="text-center py-8">
      <div class="text-gray-400 text-lg mb-2">📝</div>
      <h3 class="text-lg font-medium text-gray-900 mb-1">No diaries yet</h3>
      <p class="text-gray-600">Start writing your first diary entry!</p>
    </div>

    <!-- Diary List -->
    <div v-else class="space-y-4">
      <DiaryRow
        v-for="diary in diaries"
        :key="diary.id"
        :date="formatEuropean(diary.created_at)"
        :content="diary.content"
        :status="diary.status"
        :mood="diary.mood"
        @delete="actions.deleteDiary(diary.id)"
        @analyze="actions.analyzeDiary(diary.id)"
        @view-analysis="handleViewAnalysis(diary.id)"
      />
    </div>
  </section>
</template>
