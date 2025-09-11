<script setup lang="ts">
import { useDiary } from '@/composables/useDiary'
import { formatEuropean } from '@/utils'
import DiaryRow from './DiaryRow.vue'
const { diaries, fetchDiaries$, actions } = useDiary()
fetchDiaries$.subscribe()
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <section id="diary-history" class="bg-white rounded-xl shadow-sm border p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-6">{{ props.title }}</h2>
    <div class="space-y-4" v-if="diaries">
      <DiaryRow
        v-for="diary in diaries"
        :key="diary.id"
        :date="formatEuropean(diary.created_at)"
        :content="diary.content"
        :status="diary.status"
        :mood="diary.mood"
        @delete="actions.deleteDiary(diary.id)"
        @edit="actions.editDiary(diary.id)"
        @analyze="actions.analyzeDiary(diary.id)"
      />
    </div>
  </section>
</template>
