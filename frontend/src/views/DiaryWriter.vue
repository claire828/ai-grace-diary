<script setup lang="ts">
import ConfirmDialog from '@/components/dialog/ConfirmDialog.vue'
import DiaryInsightTip from '@/components/diary/DiaryInsightTip.vue'
import { useDiary } from '@/composables/useDiary'
import {
  DIARY_DESCRIPTION,
  DIARY_PLACEHOLDER,
  DIARY_TITLE,
  WORDS_MAX,
  WORDS_SUFFIX,
} from '@/constants/diary.constants'
import { dialogService } from '@/services/DialogService'
import { useObservable } from '@vueuse/rxjs'
import { catchError, EMPTY, filter, tap } from 'rxjs'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { streams } = useDiary()
const diaryRef = ref('')
const router = useRouter()

function createDiary() {
  useObservable(
    streams.addDiaryStream$(diaryRef.value).pipe(
      tap(() => router.push('/history')),
      catchError((err) => {
        console.error('Failed to submit diary:', err)
        return EMPTY
      }),
    ),
  )
}

function openConfirm() {
  useObservable(
    dialogService
      .openDialog$(ConfirmDialog, {
        title: 'Create Diary',
        message: 'Are you sure you want to submit this diary entry?',
      })
      .pipe(
        filter((result) => result === true),
        tap(() => createDiary()),
        catchError((err) => {
          console.error('Dialog error:', err)
          return EMPTY
        }),
      ),
  )
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <!--insights-section-->
    <DiaryInsightTip />

    <section class="bg-white rounded-2xl shadow-sm border p-6">
      <!-- title-->
      <div class="flex flex-col items-start justify-start mb-4 text-zinc-800">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">{{ DIARY_TITLE }}</h2>
        <p class="text-gray-600">{{ DIARY_DESCRIPTION }}</p>
      </div>

      <!-- text area-->
      <textarea
        v-model="diaryRef"
        :maxlength="WORDS_MAX"
        :placeholder="DIARY_PLACEHOLDER"
        class="w-full h-96 p-6 border-2 border-purple-100 rounded-2xl focus:border-purple-300 focus:outline-none resize-none text-gray-700 leading-relaxed disabled:opacity-50 disabled:cursor-not-allowed"
      ></textarea>

      <!-- bottom-->
      <div class="flex justify-between items-center mt-4">
        <span class="text-sm text-gray-500"
          >{{ diaryRef.length }} / {{ WORDS_MAX }} {{ WORDS_SUFFIX }}</span
        >
        <div class="flex items-center space-x-4">
          <button
            @click="openConfirm()"
            :disabled="!diaryRef.length"
            class="px-6 py-3 text-gray-500 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
          >
            Save
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
