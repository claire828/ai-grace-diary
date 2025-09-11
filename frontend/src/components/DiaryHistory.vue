<script setup lang="ts">
import type { DiaryRemoteModel } from '@/models'
import { formatEuropean } from '@/utils'
import { catchError, map, switchMap, tap } from 'rxjs'
import { fromAjax } from 'rxjs/internal/ajax/ajax'
import { ref } from 'vue'
import DiaryRow from './DiaryRow.vue'

const diaries = ref<DiaryRemoteModel[]>([])

const fetchDiaries$ = fromAjax<{ data: DiaryRemoteModel[] }>({
  url: 'http://localhost/diaries',
}).pipe(
  map((data) => (data.response?.data as DiaryRemoteModel[]) ?? []),
  tap((data) => (diaries.value = data)),
)

const deleteDiary$ = (id: number) =>
  fromAjax({ url: 'http://localhost/diaries/' + id, method: 'DELETE' }).pipe(
    tap((data) => console.log('delete diary with id:', id, data)),
    switchMap(() => fetchDiaries$),
    catchError((error) => {
      console.error('Delete request failed:', error)
      throw error
    }),
  )

fetchDiaries$.subscribe()

function deleteDiary(id: number) {
  deleteDiary$(id).subscribe()
}

function editDiary(id: number) {
  console.log('edit diary with id:', id)
}

function analyzeDiary(id: number) {
  console.log('analyze diary with id:', id)
}

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
        @delete="deleteDiary(diary.id)"
        @edit="editDiary(diary.id)"
        @analyze="analyzeDiary(diary.id)"
      />
    </div>
  </section>
</template>
