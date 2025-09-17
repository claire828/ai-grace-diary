<script setup lang="ts">
import { useDiary } from '@/composables/useDiary'
import { formatEuropean } from '@/utils'
import DiaryRow from './DiaryRow.vue'

const { diaries, actions } = useDiary()
actions.fetchDiaries()
</script>

<template>
  <section id="diary-history" class="bg-white rounded-xl shadow-sm border p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-6">Your Diaries</h2>
    <div class="space-y-4" v-if="diaries">
      <DiaryRow
        v-for="diary in diaries"
        :key="diary.id"
        :date="formatEuropean(diary.created_at)"
        :content="diary.content"
        :status="diary.status"
        :mood="diary.mood"
        @delete="actions.deleteDiary(diary.id)"
        @analyze="actions.analyzeDiary(diary.id)"
      />
    </div>
  </section>
</template>

//import { useRouter } from 'vue-router' // const router = useRouter() //
router.push(`/diary-analysis/${id}`)
