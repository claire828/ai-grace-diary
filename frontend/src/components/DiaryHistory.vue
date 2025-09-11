<script setup lang="ts">
import type { DiaryRemoteModel } from '@/models'
import { formatEuropean } from '@/utils'
import { useObservable } from '@vueuse/rxjs'
import { map } from 'rxjs'
import { fromAjax } from 'rxjs/internal/ajax/ajax'
import DiaryRow from './DiaryRow.vue'

const diaries = useObservable(
  fromAjax<{ data: DiaryRemoteModel[] }>({ url: 'http://localhost/diaries' }).pipe(
    map((data) => (data.response?.data as DiaryRemoteModel[]) ?? []),
  ),
)
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
        :text="diary.content"
        :diaryStatus="diary.status"
        :mood-status="'Positive'"
      />
    </div>
  </section>
</template>
