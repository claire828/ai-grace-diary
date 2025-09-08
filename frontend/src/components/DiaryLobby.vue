<script setup lang="ts">
import DiaryHistory from './DiaryHistory.vue'
import DiaryInput from './DiaryInput.vue'

// TODO: 這邊要打ＡＰＩ收資料
const diaryStatus = 'published'
const isPublished = ['published', 'analyzed'].includes(diaryStatus)
</script>

<template>
  <section class="flex flex-col gap-4">
    <DiaryHistory v-if="isPublished" :title="'Editable Diaries'" />
    <DiaryInput v-else :diaryStatus="diaryStatus" />
  </section>
</template>
